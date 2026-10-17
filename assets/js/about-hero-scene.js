import {createHeroMeteors} from "./lp-meteor-system.js?v=performance-20261011-09b";
import {
  THREE,
  geologyGLSL,
  createHeroRenderer,
  loadGeology,
} from "./hero-3d-core.js?v=performance-20261011-09b";
export const aboutHeroConfig = {
  planetRotationDuration: 240,
  planetCenter: { x: 0.7346, y: 0.5107, radius: 0.6565 },
  mobilePlanetCenter: { x: 0.55, y: 0.70, radius: 0.265 },
  orbitGap: 24,
  mobileOrbitGap: 18,
  orbitAngles: [-72, -49, -26, -3, 20],
  mobileOrbitAngles: [-65, -40, -15, 10, 35],
  cloudSpeed: 1.085,
  hazeSpeed: 0.947,
  atmosphereIntensity: 0.95,
  atmosphereThickness: 1.006,
  sunIntensity: 4.1,
  rimIntensity: 0.90,
  cloudOpacity: 0.22,
  highHazeOpacity: 0.065,
  mountainParallax: 12,
  planetParallax: 16,
  fogOpacity: [0.06, 0.11, 0.07],
  fogSpeed: [0.003, -0.0054, 0.0072],
  orbitAnimationDuration: 24,
  timelinePulseSpeed: 6,
  meteorEnabled: true,
  maxDPR: 1.35,
  relief: 1.8,
  displacement: 0.003,
};
function aboutPlacement(width,height){
  const aspect=width/height,small=width<=900;
  const placement=small?aboutHeroConfig.mobilePlanetCenter:{...aboutHeroConfig.planetCenter,x:width<1500?aboutHeroConfig.planetCenter.x-.02:aboutHeroConfig.planetCenter.x,radius:aboutHeroConfig.planetCenter.radius*(width<1500?.94:1)};
  return {small,placement,r:placement.radius*(small?1:Math.min(1,aspect/1.776))};
}
function layoutOrbit(width,height,placement,r){
  const small=width<=900;
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
}
let fallbackObserver;
function showFallback(){
  root.dataset.scene='unavailable';
  function layout(){
    const width=root.clientWidth,height=root.clientHeight,{placement,r}=aboutPlacement(width,height);
    layoutOrbit(width,height,placement,r);
    root.style.setProperty('--fallback-x',`${placement.x*width-r*height/2}px`);
    root.style.setProperty('--fallback-y',`${placement.y*height-r*height/2}px`);
    root.style.setProperty('--fallback-size',`${r*height}px`);
    root.querySelector('.about-orbit svg').pauseAnimations();
  }
  fallbackObserver?.disconnect();fallbackObserver=new ResizeObserver(layout);fallbackObserver.observe(root);layout();
  window.addEventListener('pagehide',event=>{if(!event.persisted)fallbackObserver?.disconnect();},{once:true});
}
// One bounded scene clock. Reduced motion draws only on invalidation.
function aboutLifecycle(root, resize, render) {
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let raf=0,last=0,time=0,visible=true,disposed=false,suspended=false;
  function frame(now){
    raf=0;if(disposed||suspended||!visible||document.hidden)return;
    if(!reduced.matches&&last&&now-last<1000/30-.5){raf=requestAnimationFrame(frame);return;}
    const dt=reduced.matches?0:last?Math.min((now-last)/1000,.1):0;last=now;time+=dt;
    render(time,dt,reduced.matches);
    if(!reduced.matches)raf=requestAnimationFrame(frame);
  }
  function redraw(){if(!disposed&&!suspended&&visible&&!document.hidden&&!raf)raf=requestAnimationFrame(frame);}
  function invalidate(){last=0;cancelAnimationFrame(raf);raf=0;redraw();}
  const ro=new ResizeObserver(()=>{resize();invalidate();});ro.observe(root);
  const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;invalidate();});io.observe(root);
  function visibility(){invalidate();}
  function hide(){suspended=true;invalidate();}
  function show(){suspended=false;invalidate();}
  reduced.addEventListener('change',invalidate);document.addEventListener('visibilitychange',visibility);
  window.addEventListener('pagehide',hide);window.addEventListener('pageshow',show);
  resize();redraw();
  return {reduced,redraw,dispose(){disposed=true;cancelAnimationFrame(raf);ro.disconnect();io.disconnect();reduced.removeEventListener('change',invalidate);document.removeEventListener('visibilitychange',visibility);window.removeEventListener('pagehide',hide);window.removeEventListener('pageshow',show);}};
}
let disposeScene = () => {};
const root = document.querySelector(".about-journey-hero");
if (root) {
  const width=root.clientWidth,height=root.clientHeight,{placement,r}=aboutPlacement(width,height);
  root.style.setProperty('--fallback-x',`${placement.x*width-r*height/2}px`);
  root.style.setProperty('--fallback-y',`${placement.y*height-r*height/2}px`);
  root.style.setProperty('--fallback-size',`${r*height}px`);
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
    disposeScene();
    showFallback();
    console.warn("About hero fallback:", error);
  });
async function init() {
  const mobile = matchMedia("(max-width:900px)").matches,
    canvas = root.querySelector(".about-planet-stage");
  // Probe before Three.js so unavailable WebGL is an expected still fallback.
  if(!canvas.getContext('webgl2',{alpha:true,antialias:true,premultipliedAlpha:true})){
    showFallback();return;
  }
  const renderer = createHeroRenderer(
      canvas,
      mobile ? 1.25 : aboutHeroConfig.maxDPR,
    ),
    scene = new THREE.Scene(),
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
  let disposed=false, atlas, lifecycle, meteors;
  const pointer=new THREE.Vector2(),drift=new THREE.Vector2();
  function lost(event) { event.preventDefault(); disposeScene(); showFallback(); }
  function hide(event) { if(!event.persisted) disposeScene(); }
  disposeScene=()=>{
    if(disposed)return; disposed=true;
    lifecycle?.dispose(); meteors?.dispose();
    window.removeEventListener('scroll',parallax);
    lifecycle?.reduced.removeEventListener('change',parallax);
    window.removeEventListener('pagehide',hide);
    canvas.removeEventListener('webglcontextlost',lost);
    root.removeEventListener('pointermove',pointerMove);root.removeEventListener('pointerleave',pointerLeave);
    const geometries=new Set(),materials=new Set();
    for(const world of [scene])world?.traverse(object=>{
      if(object.geometry)geometries.add(object.geometry);
      if(object.material)materials.add(object.material);
    });
    geometries.forEach(value=>value.dispose());materials.forEach(value=>value.dispose());
    atlas?.dispose(); renderer.dispose();
  };
  canvas.addEventListener('webglcontextlost',lost);
  window.addEventListener('pagehide',hide);
  camera.position.z = 8;
  // Shared atlas remains a data texture: albedo uses explicit linearization; height must not be sRGB-decoded.
  atlas = await loadGeology(renderer, mobile);
  if(disposed){atlas.dispose();return;}
  const light = new THREE.Vector3(0.62, 0.74, -0.16).normalize();
  const uniforms = {
    atlas: { value: atlas },
    texel: {
      value: new THREE.Vector2(1 / atlas.image.width, 1 / atlas.image.height),
    },
    relief: { value: aboutHeroConfig.relief },
    turn: { value: 0 },
    cloudPhase: { value: new THREE.Vector2() },
    cloudClock: { value: 0 },
    impactPoints: { value: [new THREE.Vector3(),new THREE.Vector3()] },
    impactStrength: { value: new Float32Array(2) },
    sunDirection: { value: light },
    sunIntensity: { value: aboutHeroConfig.sunIntensity },
    displacement: { value: aboutHeroConfig.displacement },
  };
  // Shared within this scene only: cloud lookup and its surface shadow use
  // identical latitude shear, avoiding a rigid, detached rotating shell.
  const circulationGLSL = `
vec2 circulation(vec3 n,float phase,float layer){
 vec2 m=geologyUV(n,phase);
 m.x=fract(m.x+layer*.173+.012*sin(m.y*PI*3.+cloudClock*.008));
 m.y=clamp(m.y+.006*sin(m.x*PI*2.+cloudClock*.006)*sin(m.y*PI),.002,.998);
 return m;
}
float cloudDensity(vec3 n,float phase,float layer){
 vec2 m=circulation(n,phase,layer);
 float broad=rock(m+vec2(.12,.01)),fine=rock(m+vec2(.037,-.006));
 float broken=1.-smoothstep(.35,.64,rock(m+vec2(.19,.023)));
 return smoothstep(.36,.62,broad*.72+fine*.28)*broken;
}`;
  const vertex = `varying vec3 vNormal;varying vec3 vPosition;varying vec2 vUv;uniform sampler2D atlas;uniform vec2 texel;uniform float displacement,turn,relief;const float PI=3.14159265359;${geologyGLSL}void main(){vUv=uv;vNormal=normal;float h=heightAt(geologyUV(normal,turn));vec3 p=position*(1.+(h-.35)*displacement);vPosition=p;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`;
  const surface = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: vertex,
    fragmentShader: `precision highp float;
varying vec3 vNormal;varying vec3 vPosition;varying vec2 vUv;
uniform sampler2D atlas;uniform vec2 texel,cloudPhase;
uniform vec3 impactPoints[2];uniform float impactStrength[2];
uniform float relief,turn,sunIntensity,cloudClock;uniform vec3 sunDirection;
const float PI=3.14159265359;
${geologyGLSL}
${circulationGLSL}
void main(){
 vec3 n=normalize(vNormal);vec2 m=geologyUV(n,turn);
 float ld=dot(n,sunDirection),slope;
 float grazing=exp(-pow((ld-.08)/.26,2.));
 vec3 detail=terrainNormal(n,m,grazing,slope);
 detail=normalize(mix(n,detail,.48*smoothstep(.035,.25,n.z)));
 float elevation=heightAt(m),day=smoothstep(-.06,.10,ld);
 float lit=max(dot(detail,sunDirection),0.)*day;
 float cavity=clamp(.65+elevation*.65,.65,1.);
 vec3 geological=stonePalette(m,elevation,slope);
 float mineral=smoothstep(.38,.62,rock(m*vec2(1.,.83)+vec2(.13,.19)));
 vec3 basalt=vec3(.065,.084,.103),mineralStone=vec3(.19,.205,.213)*(.8+elevation*.6);
 vec3 albedo=mix(basalt,mineralStone,mineral*.62);
 albedo=mix(albedo,geological*.82,.32);
 vec3 shadowN=normalize(n+vec3(sunDirection.xy*.009,0.));
 float shadow=1.-cloudDensity(shadowN,cloudPhase.x,0.)*.17*day;
 vec3 energy=pow(albedo,vec3(2.2))*(vec3(.07,.10,.15)+vec3(1.10,.91,.72)*lit*sunIntensity)*cavity*shadow;
 energy+=pow(albedo,vec3(2.2))*vec3(.08,.10,.14)*exp(-pow(ld/.19,2.))*.13;
 // Small warm catches preserve geological relief without metallic ridge streaks.
 energy+=vec3(.19,.10,.04)*max(lit-max(ld,0.),0.)*grazing*day;
 float roughness=mix(.94,.81,smoothstep(.28,.65,elevation));
 energy+=vec3(1.,.72,.42)*specularBRDF(detail,sunDirection,roughness)*max(ld,0.)*day;
 float path=pow(1.-max(n.z,0.),3.8);
 energy+=vec3(.12,.065,.027)*path*smoothstep(-.06,.35,ld)*.12;
 for(int i=0;i<2;i++){
  float contact=exp(-(1.-dot(n,impactPoints[i]))*2200.);
  energy+=vec3(.85,.30,.075)*contact*impactStrength[i]*(.3+elevation*.7);
 }
 gl_FragColor=vec4(pow(aces(max(energy,vec3(0.))),vec3(1./2.2)),1.);
}`,

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
      fragmentShader: `precision highp float;varying vec3 n;
uniform sampler2D atlas;uniform vec2 texel;uniform float relief,cloudTurn,opacity,cloudClock;
uniform vec3 sunDirection;const float PI=3.14159265359;
${geologyGLSL}
${circulationGLSL}
void main(){
 vec3 norm=normalize(n);float layer=step(.1,opacity);
 float density=cloudDensity(norm,cloudTurn,1.-layer);
 float ld=dot(norm,sunDirection),day=smoothstep(-.08,.28,ld);
 float rim=pow(1.-max(norm.z,0.),3.);
 vec3 light=mix(vec3(.065,.085,.11),vec3(.35,.29,.21),day);
 light+=vec3(.16,.09,.035)*rim*max(ld,0.);
 float coverage=density*opacity*(.16+day*.84)*smoothstep(.01,.15,norm.z);
 gl_FragColor=vec4(light,coverage);
}`,

      transparent: true,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.setScalar(scale);
    group.add(mesh);
    return { u, speed };
  }
  const clouds = cloudShell(
      1.0045,
      aboutHeroConfig.cloudSpeed,
      aboutHeroConfig.cloudOpacity,
    ),
    haze = cloudShell(
      1.009,
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
      fragmentShader: `varying vec3 n;uniform vec3 sunDirection;uniform float intensity,time;
void main(){
 vec3 v=normalize(n);float path=pow(1.-abs(v.z),4.6);
 float ld=dot(v,sunDirection),day=smoothstep(-.12,.45,ld);
 float forward=pow(max(ld,0.),7.);
 vec3 tint=mix(vec3(.10,.16,.22),vec3(.90,.52,.22),day);
 float opticalDepth=path*(day*.45+forward*.25);
 gl_FragColor=vec4(tint,min(.32,intensity*opticalDepth));
}`,

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
  outerAir.material.uniforms.intensity.value = 0.12;
  outerAir.scale.setScalar(1.018);
  group.add(outerAir);
  // Low-overdraw optical bloom, glare and restrained shafts, behind the globe.
  const sun = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.ShaderMaterial({
      vertexShader:
        "varying vec2 p;void main(){p=uv-.5;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
      uniforms: { time: { value: 0 } },
      fragmentShader: `varying vec2 p;uniform float time;
void main(){
 float r=length(p),core=exp(-r*r*10000.);
 float bloom=exp(-r*r*340.)*.42+exp(-r*21.)*.13;
 float angle=atan(p.y,p.x),rays=0.;
 for(int i=0;i<4;i++){
  float j=float(i),direction=-.70+j*.46+sin(j*2.7)*.09;
  float a=atan(sin(angle-direction),cos(angle-direction));
  rays+=exp(-pow(a/(.055+j*.012),2.))*exp(-r*(16.+j*3.))*.018;
 }
 float energy=core*.82+bloom+rays*smoothstep(.008,.04,r);
 gl_FragColor=vec4(mix(vec3(1.,.58,.24),vec3(1.,.89,.66),core),energy);
}`,

      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  sun.position.z = -1.4;
  scene.add(sun);
  const points=[],sizes=[],brightness=[];
  for(let i=0;i<(mobile?38:88);i++){
    points.push(Math.random()*3.8-1.9,Math.random()*2.4-1.2,-2-i%3);
    sizes.push(.65+Math.random()*.85);brightness.push(.12+Math.pow(Math.random(),3)*.48);
  }
  const starUniforms={dpr:{value:renderer.getPixelRatio()},drift:{value:new THREE.Vector2()}};
  const stars=new THREE.Points(new THREE.BufferGeometry()
    .setAttribute('position',new THREE.Float32BufferAttribute(points,3))
    .setAttribute('pointSize',new THREE.Float32BufferAttribute(sizes,1))
    .setAttribute('brightness',new THREE.Float32BufferAttribute(brightness,1)),
    new THREE.ShaderMaterial({uniforms:starUniforms,transparent:true,depthWrite:false,
      vertexShader:`attribute float pointSize,brightness;uniform float dpr;uniform vec2 drift;varying float glow;void main(){glow=brightness;vec3 p=position;p.xy+=drift*(.3+abs(p.z)*.2);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);gl_PointSize=pointSize*dpr;}`,
      fragmentShader:`varying float glow;void main(){float r=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(.68,.74,.81,glow*exp(-r*r*3.)*(1.-smoothstep(.4,1.,r)));}`,
    }));
  scene.add(stars);
  const dustPositions=[],dustSizes=[],dustAlpha=[];
  for(let i=0;i<(mobile?9:20);i++){
    dustPositions.push(.12+Math.random()*1.9,Math.random()*1.8-.9,1.5+i%2);
    dustSizes.push(.8+Math.random()*1.6);dustAlpha.push(.018+Math.random()*.035);
  }
  const dustUniforms={time:{value:0},dpr:{value:renderer.getPixelRatio()},drift:{value:new THREE.Vector2()},small:{value:mobile?1:0}};
  const dust=new THREE.Points(new THREE.BufferGeometry()
    .setAttribute('position',new THREE.Float32BufferAttribute(dustPositions,3))
    .setAttribute('pointSize',new THREE.Float32BufferAttribute(dustSizes,1))
    .setAttribute('brightness',new THREE.Float32BufferAttribute(dustAlpha,1)),
    new THREE.ShaderMaterial({uniforms:dustUniforms,transparent:true,depthWrite:false,
      vertexShader:`attribute float pointSize,brightness;uniform float time,dpr;uniform vec2 drift;varying float glow;varying vec2 screen;void main(){vec3 p=position;p.x+=sin(time*.023+p.y*4.)*.009;p.y+=cos(time*.019+p.x*3.)*.006;p.xy+=drift*2.;vec4 clip=projectionMatrix*modelViewMatrix*vec4(p,1.);screen=clip.xy*.5+.5;gl_Position=clip;gl_PointSize=pointSize*dpr;glow=brightness;}`,
      fragmentShader:`uniform float small;varying float glow;varying vec2 screen;void main(){if(screen.x<.52||screen.y>.84||(small>.5&&screen.y>.44))discard;float r=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(.85,.67,.43,glow*exp(-r*r*3.)*(1.-smoothstep(.4,1.,r)));}`,
    }));
  scene.add(dust);
  const distantBody=new THREE.Mesh(new THREE.SphereGeometry(.011,16,12),new THREE.ShaderMaterial({
    uniforms:{sunDirection:{value:light}},vertexShader:shellVertex,
    fragmentShader:`varying vec3 n;uniform vec3 sunDirection;void main(){float day=max(dot(normalize(n),sunDirection),0.);gl_FragColor=vec4(vec3(.11,.105,.095)*(.06+day*.65),1.);}`,
  }));
  distantBody.position.set(-.1,.71,-3.);scene.add(distantBody);

  const fogUniforms = {
    time: { value: 0 },
    speeds: { value: new THREE.Vector3(...aboutHeroConfig.fogSpeed) },
    opacities: { value: new THREE.Vector3(...aboutHeroConfig.fogOpacity) },
  };
  const fogMesh =
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
    );
  fogMesh.material.depthTest=false;fogMesh.renderOrder=20;fogMesh.frustumCulled=false;scene.add(fogMesh);
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
    renderer.setPixelRatio(Math.min(renderer.getPixelRatio(),width<=900?1.25:aboutHeroConfig.maxDPR));
    renderer.setSize(width, height, false);
    const {small,placement,r}=aboutPlacement(width,height);
    group.scale.setScalar(r);
    group.position.set(
      placement.x * 2 * aspect - aspect,
      1 - placement.y * 2,
      0,
    );
    // Orthographic projection: a world-space sphere radius maps to r * height / 2.
    // Arc, nodes and traveler all use this same projected geometry on every resize.
    layoutOrbit(width,height,placement,r);

    // Keep the sunrise on the visible limb when the mobile camera crops the globe.
    if (small) {
      const visibleRimX = Math.min(
        0.92,
        placement.x + (r / (2 * aspect)) * 0.9,
      );
      const limbX = Math.min(
        0.72,
        ((visibleRimX - placement.x) * 2 * aspect) / r,
      );
      light.set(limbX, Math.sqrt(1 - limbX * limbX), -0.22).normalize();
    } else light.set(0.62, 0.74, -0.16).normalize();
    // The same responsive source drives surface, clouds, atmosphere and optical glow.
    const rimDirection = new THREE.Vector2(light.x, light.y).normalize();
    sun.position.set(
      group.position.x + rimDirection.x * r * 1.010,
      group.position.y + rimDirection.y * r * 1.010,
      -1.4,
    );
    sun.scale.setScalar(r * 1.12);
    starUniforms.dpr.value=dustUniforms.dpr.value=renderer.getPixelRatio();
    dustUniforms.small.value=small?1:0;
  }
  meteors=createHeroMeteors({system:group,globe:planet,camera,renderer,root,uniforms,page:"About",
    firstDelay:3.8,cadenceScale:4.2,failedEventFallback:true,
    eventKind:()=>{const n=Math.random();return n<.05?'impact':n<.22?'skim':'flyby';},
    protectedSelector:'.lp-hero-copy,.timeline-label,.about-story-marker',
    config:{poolSize:3,intensity:.46},
  });
  let planetTime=0,cloudTime=0,ambientTime=0;
  lifecycle = aboutLifecycle(root, resize, (_time, dt, reduced) => {
    const start = performance.now();
    const motion=reduced?0:dt;
    planetTime+=motion;cloudTime+=motion;ambientTime+=motion;
    uniforms.turn.value = planetTime / aboutHeroConfig.planetRotationDuration;
    clouds.u.cloudTurn.value = cloudTime / aboutHeroConfig.planetRotationDuration * clouds.speed;
    haze.u.cloudTurn.value = cloudTime / aboutHeroConfig.planetRotationDuration * haze.speed;
    uniforms.cloudPhase.value.set(clouds.u.cloudTurn.value,haze.u.cloudTurn.value);
    uniforms.cloudClock.value=ambientTime;
    const blend=1.-Math.exp(-motion*2.4);drift.lerp(pointer,blend);
    if(reduced)drift.set(0,0);
    starUniforms.drift.value.set(drift.x*.004+Math.sin(ambientTime*.035)*.0012,drift.y*.003+Math.cos(ambientTime*.028)*.0008);
    dustUniforms.drift.value.copy(drift).multiplyScalar(.003);
    dustUniforms.time.value=ambientTime;
    fogUniforms.time.value = sun.material.uniforms.time.value =
      air.material.uniforms.time.value = outerAir.material.uniforms.time.value = ambientTime;
    scene.updateMatrixWorld(true);
    meteors.update(dt,reduced,aboutHeroConfig.meteorEnabled);
    renderer.render(scene, camera);

    cost = cost * 0.96 + (performance.now() - start) * 0.04;
    if (++frames % 240 === 0 && cost > 19 && renderer.getPixelRatio() > 1) {
      renderer.setPixelRatio(Math.max(1, renderer.getPixelRatio() * 0.8));
      resize();
    }
    // The existing timeline observes readiness; do not relayout it every frame.
    if(root.dataset.scene!=="ready")root.dataset.scene="ready";
    root.dataset.rotation = String(uniforms.turn.value);
    root.dataset.cloudRotation = String(clouds.u.cloudTurn.value);
    root.dataset.reducedMotion = String(reduced);
    root.dataset.fogTime = String(ambientTime);
    root.dataset.hazeRotation=String(haze.u.cloudTurn.value);
    root.dataset.rendererCount='1';
  });
  function pointerMove(event){
    if(lifecycle.reduced.matches||!matchMedia('(pointer:fine)').matches)return;
    const bounds=root.getBoundingClientRect();pointer.set((event.clientX-bounds.left)/width*2-1,(event.clientY-bounds.top)/height*2-1);
  }
  function pointerLeave(){pointer.set(0,0);}
  root.addEventListener('pointermove',pointerMove,{passive:true});root.addEventListener('pointerleave',pointerLeave);
  function parallax() {
    const svg = root.querySelector(".about-orbit svg");
    if (lifecycle.reduced.matches) svg.pauseAnimations();
    else svg.unpauseAnimations();
    const amount = lifecycle.reduced.matches
      ? 0
      : Math.min(1, Math.max(0, -root.getBoundingClientRect().top / height));
    root.style.setProperty("--orbital-opacity",String(1-amount*amount*.68));
    root.style.setProperty("--star-y",`${-amount*4}px`);
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
