import {createHeroMeteors} from "./lp-meteor-system.js?v=home-cadence-20261004";
import {
  THREE,
  geologyGLSL,
  createHeroRenderer,
  loadGeology,
  heroLifecycle,
} from "./hero-3d-core.js?v=reduced-planet-motion-20261007";
export const aboutHeroConfig = {
  planetRotationDuration: 240,
  planetCenter: { x: 0.7346, y: 0.5107, radius: 0.6565 },
  mobilePlanetCenter: { x: 0.55, y: 0.70, radius: 0.265 },
  orbitGap: 24,
  mobileOrbitGap: 18,
  orbitAngles: [-72, -49, -26, -3, 20],
  mobileOrbitAngles: [-65, -40, -15, 10, 35],
  cloudSpeed: 1.014,
  hazeSpeed: 1.022,
  atmosphereIntensity: 1.02,
  atmosphereThickness: 1.008,
  sunIntensity: 3.2,
  rimIntensity: 1.2,
  cloudOpacity: 0.13,
  highHazeOpacity: 0.05,
  mountainParallax: 12,
  planetParallax: 16,
  fogOpacity: [0.06, 0.11, 0.07],
  fogSpeed: [0.003, -0.0054, 0.0072],
  orbitAnimationDuration: 24,
  timelinePulseSpeed: 6,
  meteorEnabled: true,
  maxDPR: 1.75,
  relief: 1.8,
  displacement: 0.003,
};
const root = document.querySelector(".about-journey-hero");
if (root) {
  root.style.setProperty(
    "--timeline-pulse",
    `${aboutHeroConfig.timelinePulseSpeed}s`,
  );
  root
    .querySelector("animateMotion")
    .setAttribute("dur", `${aboutHeroConfig.orbitAnimationDuration}s`);

}
if (root)
  init().catch((error) => {
    root.dataset.scene = "unavailable";
    console.error("About hero:", error);
  });
async function init() {
  const mobile = matchMedia("(max-width:900px)").matches,
    canvas = root.querySelector(".about-planet-stage");
  const renderer = createHeroRenderer(
      canvas,
      mobile ? 1.25 : aboutHeroConfig.maxDPR,
    ),
    scene = new THREE.Scene(),
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
  camera.position.z = 8;
  // Shared atlas remains a data texture: albedo uses explicit linearization; height must not be sRGB-decoded.
  const atlas = await loadGeology(renderer, mobile),
    light = new THREE.Vector3(0.98, 0.25, 0.25).normalize();
  const uniforms = {
    atlas: { value: atlas },
    texel: {
      value: new THREE.Vector2(1 / atlas.image.width, 1 / atlas.image.height),
    },
    relief: { value: aboutHeroConfig.relief },
    turn: { value: 0 },
    impactPoints: { value: [new THREE.Vector3(),new THREE.Vector3()] },
    impactStrength: { value: new Float32Array(2) },
    sunDirection: { value: light },
    sunIntensity: { value: aboutHeroConfig.sunIntensity },
    displacement: { value: aboutHeroConfig.displacement },
  };
  const vertex = `varying vec3 vNormal;varying vec3 vPosition;varying vec2 vUv;uniform sampler2D atlas;uniform vec2 texel;uniform float displacement,turn,relief;const float PI=3.14159265359;${geologyGLSL}void main(){vUv=uv;vNormal=normal;float h=heightAt(geologyUV(normal,turn));vec3 p=position*(1.+(h-.35)*displacement);vPosition=p;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`;
  const surface = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: vertex,
    fragmentShader: `precision highp float;varying vec3 vNormal;varying vec3 vPosition;varying vec2 vUv;uniform sampler2D atlas;uniform vec2 texel;uniform vec3 impactPoints[2];uniform float impactStrength[2];uniform float relief,turn,sunIntensity;uniform vec3 sunDirection;const float PI=3.14159265359;${geologyGLSL}
 void main(){vec3 n=normalize(vNormal);vec2 m=geologyUV(n,turn);float ld=dot(n,sunDirection),slope;float grazing=exp(-pow((ld-.09)/.25,2.));vec3 detail=terrainNormal(n,m,grazing,slope);detail=normalize(mix(n,detail,.55));float elevation=heightAt(m);float lit=max(dot(detail,sunDirection),0.);float cavity=clamp(.56+elevation*.85,.56,1.);vec3 geological=stonePalette(m,elevation,slope);float luminance=dot(geological,vec3(.299,.587,.114));float mineral=smoothstep(.40,.59,rock(m*vec2(1.,.83)+vec2(.13,.19)));vec3 darkStone=vec3(.055,.073,.091);vec3 paleStone=vec3(.145,.165,.18)*(.75+elevation);vec3 albedo=mix(darkStone,paleStone,mineral*.55);albedo=mix(albedo,geological*.72,.25);float dust=smoothstep(.38,.59,rock(geologyUV(n,turn*1.012)+vec2(.12,.01)));float shadow=1.-dust*.10;vec3 energy=pow(albedo,vec3(2.2))*mix(vec3(.82,.91,1.),vec3(1.,.87,.72),smoothstep(.15,.85,ld))*(.045+smoothstep(-.23,.36,ld)*.209+lit*sunIntensity)*cavity*shadow;energy+=pow(albedo,vec3(2.2))*vec3(.22,.27,.34)*exp(-pow(ld/.23,2.))*.132;energy+=vec3(.42,.16,.025)*max(lit-max(ld,0.),0.)*grazing;energy+=vec3(1.,.67,.31)*specularBRDF(detail,sunDirection,mix(.90,.78,smoothstep(.28,.65,elevation)))*max(ld,0.);energy+=vec3(.65,.24,.05)*pow(1.-n.z,5.)*max(ld,0.)*.35;for(int i=0;i<2;i++){float contact=exp(-(1.-dot(n,impactPoints[i]))*2200.);energy+=vec3(1.,.26,.045)*contact*impactStrength[i]*(.3+elevation*.7);}gl_FragColor=vec4(pow(aces(energy),vec3(1./2.2)),1.);}`,
  });
  const geometry = new THREE.SphereGeometry(
      1,
      mobile ? 96 : 160,
      mobile ? 64 : 112,
    ),
    planet = new THREE.Mesh(geometry, surface),
    group = new THREE.Group();
  group.add(planet);
  scene.add(group);
  const shellVertex = `varying vec3 n;void main(){n=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
  function cloudShell(scale, speed, opacity) {
    const u = {
      ...uniforms,
      cloudTurn: { value: 0 },
      opacity: { value: opacity },
    };
    const material = new THREE.ShaderMaterial({
      uniforms: u,
      vertexShader: shellVertex,
      fragmentShader: `precision highp float;varying vec3 n;uniform sampler2D atlas;uniform vec2 texel;uniform float relief,cloudTurn,opacity;uniform vec3 sunDirection;const float PI=3.14159265359;${geologyGLSL}void main(){vec3 norm=normalize(n);vec2 m=geologyUV(norm,cloudTurn);float smoke=(rock(m+vec2(.12,.01))+rock(m+vec2(.126,.014))+rock(m+vec2(.114,.006)))/3.;float a=smoothstep(.39,.62,smoke)*(1.-smoothstep(.38,.64,rock(m*vec2(1.,1.7))));float day=max(dot(norm,sunDirection),0.);gl_FragColor=vec4(mix(vec3(.10,.13,.16),vec3(.39,.33,.25),day),a*opacity*(.2+day*.8));}`,
      transparent: true,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.setScalar(scale);
    group.add(mesh);
    return { u, speed };
  }
  const clouds = cloudShell(
      1.012,
      aboutHeroConfig.cloudSpeed,
      aboutHeroConfig.cloudOpacity,
    ),
    haze = cloudShell(
      1.02,
      aboutHeroConfig.hazeSpeed,
      aboutHeroConfig.highHazeOpacity,
    );
  const air = new THREE.Mesh(
    geometry,
    new THREE.ShaderMaterial({
      uniforms: {
        sunDirection: { value: light },
        time: { value: 0 },
        intensity: {
          value:
            aboutHeroConfig.atmosphereIntensity * aboutHeroConfig.rimIntensity,
        },
      },
      vertexShader: shellVertex,
      fragmentShader: `varying vec3 n;uniform vec3 sunDirection;uniform float intensity,time;void main(){vec3 v=normalize(n);float fresnel=pow(1.-abs(v.z),5.);float day=pow(max(dot(v,sunDirection),0.),2.);float rayleigh=fresnel*(day+.33*max(v.y,0.));float mie=pow(max(dot(v,sunDirection),0.),12.)*fresnel;gl_FragColor=vec4(mix(vec3(.35,.48,.58),vec3(1.,.78,.45),smoothstep(.05,.8,day)*max(v.x,0.)),intensity*(rayleigh+mie*.65)*(1.+.05*sin(time*.628)*day));}`,
      transparent: true,
      depthWrite: false,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
    }),
  );
  air.scale.setScalar(aboutHeroConfig.atmosphereThickness);
  group.add(air);
  const outerAir = air.clone();
  outerAir.material = air.material.clone();
  outerAir.material.uniforms.sunDirection.value = light;
  outerAir.material.uniforms.intensity.value = 0.16;
  outerAir.scale.setScalar(1.035);
  group.add(outerAir);
  // Low-overdraw optical bloom, glare and restrained shafts, behind the globe.
  const sun = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.ShaderMaterial({
      vertexShader:
        "varying vec2 p;void main(){p=uv-.5;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
      uniforms: { time: { value: 0 } },
      fragmentShader: `varying vec2 p;uniform float time;void main(){float r=length(p);float core=exp(-r*r*7000.)*1.18;float bloom=exp(-r*r*210.)*.95+exp(-r*17.)*.32;float glare=exp(-p.y*p.y*18000.)*exp(-abs(p.x)*8.)*.09;float angle=atan(p.y,p.x);float drift=sin(time*.075)*.008;float rays=0.;for(int i=0;i<6;i++){float j=float(i);float direction=-.85+j*.31+sin(j*2.7)*.08+drift;float beam=exp(-pow((angle-direction)/(.024+j*.005),2.));rays+=beam*exp(-r*(12.+j*2.3)*(1.+.05*sin(time*.48+j)))*(.041+mod(j,3.)*.014);}rays+=pow(max(0.,cos(angle*13.+.5)),32.)*exp(-r*22.)*.005;rays*=smoothstep(.008,.03,r)*(1.+.065*sin(time*.48));vec3 glowColor=mix(vec3(1.,.48,.12),vec3(1.,.94,.78),smoothstep(.3,.9,core));gl_FragColor=vec4(glowColor,(core+bloom*1.53+glare*4.+rays)*(1.+.055*sin(time*.628)));}`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  sun.position.z = -1.4;
  scene.add(sun);
  const points = [];
  for (let i = 0; i < (mobile ? 45 : 120); i++) {
    points.push(Math.random() * 3.8 - 1.9, Math.random() * 2.4 - 1.2, -2);
  }
  const stars = new THREE.Points(
    new THREE.BufferGeometry().setAttribute(
      "position",
      new THREE.Float32BufferAttribute(points, 3),
    ),
    new THREE.PointsMaterial({
      color: 0x9c8774,
      size: 0.0025,
      transparent: true,
      opacity: 0.38,
    }),
  );
  scene.add(stars);

  const fogCanvas = root.querySelector(".about-valley-fog"),
    fogRenderer = createHeroRenderer(fogCanvas, mobile ? 1 : 1.25),
    fogScene = new THREE.Scene(),
    fogCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
  const fogUniforms = {
    time: { value: 0 },
    speeds: { value: new THREE.Vector3(...aboutHeroConfig.fogSpeed) },
    opacities: { value: new THREE.Vector3(...aboutHeroConfig.fogOpacity) },
  };
  fogScene.add(
    new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        uniforms: fogUniforms,
        transparent: true,
        depthWrite: false,
        vertexShader:
          "varying vec2 p;void main(){p=uv;gl_Position=vec4(position,1.);}",
        fragmentShader: `precision mediump float;varying vec2 p;uniform float time;uniform vec3 speeds,opacities;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}float fog(vec2 p){return noise(p)*.6+noise(p*2.1)*.3+noise(p*4.3)*.1;}void main(){float a=0.;for(int i=0;i<3;i++){float j=float(i);float n=fog(vec2(p.x*(5.+j*2.)-time*speeds[i],p.y*5.+j*7.));float center=.27-j*.065+.018*sin(p.x*7.+j*2.)+.014*(n-.5);float band=exp(-pow((p.y-center)*(10.+j*4.),2.));a+=smoothstep(.35,.77,n)*band*opacities[i];}vec3 tint=mix(vec3(.16,.13,.11),vec3(.56,.34,.17),smoothstep(.15,.95,p.x)*.7+smoothstep(.3,.8,p.y)*.3);float edge=smoothstep(.025,.10,p.y)*(1.-smoothstep(.40,.62,p.y));gl_FragColor=vec4(tint,a*edge);}`,
      }),
    ),
  );
  let width = 1,
    height = 1,
    cost = 16.7,
    frames = 0;
  function resize() {
    width = root.clientWidth;
    height = root.clientHeight;
    const aspect = width / height;
    camera.left = -aspect;
    camera.right = aspect;
    camera.top = 1;
    camera.bottom = -1;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    const small = width <= 900,
      placement = small
        ? aboutHeroConfig.mobilePlanetCenter
        : {...aboutHeroConfig.planetCenter, x:width<1500 ? aboutHeroConfig.planetCenter.x-.02 : aboutHeroConfig.planetCenter.x, radius:aboutHeroConfig.planetCenter.radius*(width<1500?.94:1)},
      r = placement.radius * (small ? 1 : Math.min(1, aspect / 1.776));
    group.scale.setScalar(r);
    group.position.set(
      placement.x * 2 * aspect - aspect,
      1 - placement.y * 2,
      0,
    );
    // Orthographic projection: a world-space sphere radius maps to r * height / 2.
    // Arc, nodes and traveler all use this same projected geometry on every resize.
    const orbit = root.querySelector(".about-orbit");
    const svg = orbit.querySelector("svg");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    const centerX = placement.x * width, centerY = placement.y * height;
    const planetRadius = r * height / 2;
    const orbitRadius = planetRadius + (small ? aboutHeroConfig.mobileOrbitGap : aboutHeroConfig.orbitGap);
    const angles = small ? aboutHeroConfig.mobileOrbitAngles : aboutHeroConfig.orbitAngles;
    const points = angles.map(degrees => {
      const angle = degrees * Math.PI / 180;
      return {x:centerX + Math.cos(angle)*orbitRadius,y:centerY + Math.sin(angle)*orbitRadius};
    });
    const first = points[0], last = points.at(-1);
    const orbitPath = `M ${first.x} ${first.y} A ${orbitRadius} ${orbitRadius} 0 0 1 ${last.x} ${last.y}`;
    orbit.querySelector(".orbit-arc").setAttribute("d", orbitPath);
    orbit.querySelector("animateMotion").setAttribute("path", orbitPath);
    orbit.querySelector(".orbit-back-arc").setAttribute("d", "");
    let connectors = svg.querySelector(".timeline-connectors");
    if (!connectors) {
      connectors = document.createElementNS("http://www.w3.org/2000/svg", "g");
      connectors.setAttribute("class", "timeline-connectors");
      svg.append(connectors);
    }
    connectors.replaceChildren();
    const labels = [];
    orbit.querySelectorAll("li").forEach((node, i) => {
      node.style.setProperty("--x", `${points[i].x / width * 100}%`);
      node.style.setProperty("--y", `${points[i].y / height * 100}%`);
      const label = node.querySelector(".timeline-label");
      const angle = angles[i]*Math.PI/180;
      const normal = {x:Math.cos(angle),y:Math.sin(angle)};
      const gap = small ? 22 : 28;
      const available = width-points[i].x-gap-24;
      const labelWidth = small ? 130 : Math.max(48,Math.min(i===0?170:150,available-12));
      label.style.width = `${labelWidth}px`;
      let x = small ? points[i].x-labelWidth-gap : points[i].x+normal.x*gap+12;
      x = Math.max(16,Math.min(width-labelWidth-24,x));
      let y = points[i].y+normal.y*gap-label.offsetHeight;
      if (!small) {
        const adjustments=[{x:6,y:-6},{x:4,y:8},{x:4,y:0},{x:0,y:0},{x:4,y:-10}];
        x+=adjustments[i].x; y+=adjustments[i].y;
      }
      y = Math.max(height*(i===0 && !small?.14:.145),y);
      // Measured rectangles are separated before checking the actual arc segment.
      const previous = labels.at(-1);
      if (previous && x < previous.x+previous.width+14 && x+labelWidth > previous.x-14)
        y = Math.max(y,previous.y+previous.height+(!small && i===1?24:16));
      for (let pass=0;pass<2;pass++) {
        if(previous && x<previous.x+previous.width+14 && x+label.offsetWidth>previous.x-14)
          y=Math.max(y,previous.y+previous.height+(!small && i===1?24:16));
        const arcXs=[];
        for(let sample=0;sample<=160;sample++) {
          const theta=(angles[0]+(angles.at(-1)-angles[0])*sample/160)*Math.PI/180;
          const py=centerY+Math.sin(theta)*orbitRadius;
          if(py>=y-12 && py<=y+label.offsetHeight+12) arcXs.push(centerX+Math.cos(theta)*orbitRadius);
        }
        if(arcXs.length) {
          if(small) x=Math.max(16,Math.min(x,Math.min(...arcXs)-label.offsetWidth-14));
          else {
            x=Math.max(x,Math.max(...arcXs)+14);
            label.style.width=`${Math.max(45,Math.min(label.offsetWidth,width-x-24))}px`;
          }
        }
      }
      if(!small && i===0) x=Math.min(width-label.offsetWidth-24,x+6);
      label.style.left = `${x-points[i].x}px`;
      label.style.top = `${y-points[i].y}px`;
      labels.push({x,y,width:label.offsetWidth,height:label.offsetHeight});
      const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const endX = small ? x+label.offsetWidth+6 : x-6;
      const endY = y+Math.min(12,label.offsetHeight/2);
      const dx=endX-points[i].x, dy=endY-points[i].y;
      const length=Math.hypot(dx,dy), connectorLength=Math.min(16,length);
      line.setAttribute("d",`M ${points[i].x} ${points[i].y} L ${points[i].x+dx/length*connectorLength} ${points[i].y+dy/length*connectorLength}`);
      line.style.setProperty("--i",i);
      connectors.append(line);
    });
    root.dataset.orbitGeometry = JSON.stringify({centerX,centerY,planetRadius,orbitRadius,points});

    // Keep the sunrise on the visible limb when the mobile camera crops the globe.
    if (small) {
      const visibleRimX = Math.min(
        0.92,
        placement.x + (r / (2 * aspect)) * 0.9,
      );
      const limbX = Math.min(
        0.9,
        ((visibleRimX - placement.x) * 2 * aspect) / r,
      );
      light.set(limbX, Math.sqrt(1 - limbX * limbX), -0.22).normalize();
    } else light.set(0.98, 0.25, 0.25).normalize();
    // The same responsive source drives surface, clouds, atmosphere and optical glow.
    const rimDirection = new THREE.Vector2(light.x, light.y).normalize();
    sun.position.set(
      group.position.x + rimDirection.x * r * 1.005,
      group.position.y + rimDirection.y * r * 1.005,
      -1.4,
    );
    sun.scale.setScalar(r * 1.12);
    fogRenderer.setSize(width, fogCanvas.clientHeight, false);
  }
  const meteors=createHeroMeteors({system:group,globe:planet,camera,renderer,root,uniforms,page:"About"});
  let planetTime=0,cloudTime=0,ambientTime=0;
  const lifecycle = heroLifecycle(root, resize, (_time, dt, reduced) => {
    const start = performance.now();
    const slowMotion = reduced ? 0.3 : 1;
    planetTime += dt * (reduced ? 1 / 1.6 : 1);
    cloudTime += dt * slowMotion;
    ambientTime += dt * slowMotion;
    uniforms.turn.value = planetTime / aboutHeroConfig.planetRotationDuration;
    clouds.u.cloudTurn.value = cloudTime / aboutHeroConfig.planetRotationDuration * clouds.speed;
    haze.u.cloudTurn.value = cloudTime / aboutHeroConfig.planetRotationDuration * haze.speed;
    fogUniforms.time.value = sun.material.uniforms.time.value =
      air.material.uniforms.time.value = outerAir.material.uniforms.time.value = ambientTime;
    scene.updateMatrixWorld(true);
    meteors.update(dt,reduced,aboutHeroConfig.meteorEnabled);
    renderer.render(scene, camera);
    fogRenderer.render(fogScene, fogCamera);
    cost = cost * 0.96 + (performance.now() - start) * 0.04;
    if (++frames % 240 === 0 && cost > 19 && renderer.getPixelRatio() > 1) {
      renderer.setPixelRatio(Math.max(1, renderer.getPixelRatio() * 0.8));
      resize();
    }
    root.dataset.scene = "ready";
    root.dataset.rotation = String(uniforms.turn.value);
    root.dataset.cloudRotation = String(clouds.u.cloudTurn.value);
    root.dataset.reducedMotion = String(reduced);
    root.dataset.fogTime = String(ambientTime);
  });
  function parallax() {
    const svg = root.querySelector(".about-orbit svg");
    if (lifecycle.reduced.matches) svg.pauseAnimations();
    else svg.unpauseAnimations();
    const amount = lifecycle.reduced.matches
      ? 0
      : Math.min(1, Math.max(0, -root.getBoundingClientRect().top / height));
    root.style.setProperty(
      "--planet-y",
      `${-amount * aboutHeroConfig.planetParallax}px`,
    );
    root.style.setProperty(
      "--mountain-y",
      `${-amount * aboutHeroConfig.mountainParallax}px`,
    );
  }
  window.addEventListener("scroll", parallax, { passive: true });
  lifecycle.reduced.addEventListener("change", parallax);
  parallax();
}
