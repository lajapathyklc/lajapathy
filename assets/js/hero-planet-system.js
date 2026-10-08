// Shared geological material, shells and optical sun from About's approved scene.
// Uses hero-3d-core's atlas, grazing relief, roughness and shader color pipeline.
import {THREE,geologyGLSL} from './hero-3d-core.js?v=reduced-planet-motion-20261007';
export function createHeroPlanet({scene,atlas,light,mobile,config}) {
  const uniforms = {
    atlas: { value: atlas },
    texel: {
      value: new THREE.Vector2(1 / atlas.image.width, 1 / atlas.image.height),
    },
    relief: { value: config.relief },
    turn: { value: 0 },
    impactPoints: { value: [new THREE.Vector3(),new THREE.Vector3()] },
    impactStrength: { value: new Float32Array(2) },
    sunDirection: { value: light },
    sunIntensity: { value: config.sunIntensity },
    surfaceExposure: { value: config.surfaceExposure ?? 1 },
    displacement: { value: config.displacement },
  };
  const vertex = `varying vec3 vNormal;varying vec3 vPosition;varying vec2 vUv;uniform sampler2D atlas;uniform vec2 texel;uniform float displacement,turn,relief;const float PI=3.14159265359;${geologyGLSL}void main(){vUv=uv;vNormal=normal;float h=heightAt(geologyUV(normal,turn));vec3 p=position*(1.+(h-.35)*displacement);vPosition=p;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`;
  const surface = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: vertex,
    fragmentShader: `precision highp float;varying vec3 vNormal;varying vec3 vPosition;varying vec2 vUv;uniform sampler2D atlas;uniform vec2 texel;uniform vec3 impactPoints[2];uniform float impactStrength[2];uniform float relief,turn,sunIntensity,surfaceExposure;uniform vec3 sunDirection;const float PI=3.14159265359;${geologyGLSL}
 void main(){vec3 n=normalize(vNormal);vec2 m=geologyUV(n,turn);float ld=dot(n,sunDirection),slope;float grazing=exp(-pow((ld-.09)/.25,2.));vec3 detail=terrainNormal(n,m,grazing,slope);detail=normalize(mix(n,detail,.55));float elevation=heightAt(m);float lit=max(dot(detail,sunDirection),0.);float cavity=clamp(.56+elevation*.85,.56,1.);vec3 geological=stonePalette(m,elevation,slope);float luminance=dot(geological,vec3(.299,.587,.114));float mineral=smoothstep(.40,.59,rock(m*vec2(1.,.83)+vec2(.13,.19)));vec3 darkStone=vec3(.055,.073,.091);vec3 paleStone=vec3(.145,.165,.18)*(.75+elevation);vec3 albedo=mix(darkStone,paleStone,mineral*.55);albedo=mix(albedo,geological*.72,.25);float dust=smoothstep(.38,.59,rock(geologyUV(n,turn*1.012)+vec2(.12,.01)));float shadow=1.-dust*.10;vec3 energy=pow(albedo,vec3(2.2))*mix(vec3(.82,.91,1.),vec3(1.,.87,.72),smoothstep(.15,.85,ld))*(.045+smoothstep(-.23,.36,ld)*.209+lit*sunIntensity)*cavity*shadow;energy+=pow(albedo,vec3(2.2))*vec3(.22,.27,.34)*exp(-pow(ld/.23,2.))*.132;energy+=vec3(.42,.16,.025)*max(lit-max(ld,0.),0.)*grazing;energy+=vec3(1.,.67,.31)*specularBRDF(detail,sunDirection,mix(.90,.78,smoothstep(.28,.65,elevation)))*max(ld,0.);energy+=vec3(.65,.24,.05)*pow(1.-n.z,5.)*max(ld,0.)*.35;energy*=surfaceExposure;for(int i=0;i<2;i++){float contact=exp(-(1.-dot(n,impactPoints[i]))*2200.);energy+=vec3(1.,.26,.045)*contact*impactStrength[i]*(.3+elevation*.7);}gl_FragColor=vec4(pow(aces(energy),vec3(1./2.2)),1.);}`,
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
      config.cloudSpeed,
      config.cloudOpacity,
    ),
    haze = cloudShell(
      1.02,
      config.hazeSpeed,
      config.highHazeOpacity,
    );
  const air = new THREE.Mesh(
    geometry,
    new THREE.ShaderMaterial({
      uniforms: {
        sunDirection: { value: light },
        time: { value: 0 },
        intensity: {
          value:
            config.atmosphereIntensity * config.rimIntensity,
        },
      },
      vertexShader: shellVertex,
      fragmentShader: `varying vec3 n;uniform vec3 sunDirection;uniform float intensity,time;void main(){vec3 v=normalize(n);float fresnel=pow(1.-abs(v.z),5.);float day=pow(max(dot(v,sunDirection),0.),2.);float rayleigh=fresnel*(day+.33*max(v.y,0.));float mie=pow(max(dot(v,sunDirection),0.),12.)*fresnel;gl_FragColor=vec4(mix(vec3(.35,.48,.58),vec3(1.,.78,.45),smoothstep(.05,.8,day)),intensity*(rayleigh+mie*.65)*(1.+.05*sin(time*.628)*day));}`,
      transparent: true,
      depthWrite: false,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
    }),
  );
  air.scale.setScalar(config.atmosphereThickness);
  group.add(air);
  const outerAir = air.clone();
  outerAir.material = air.material.clone();
  outerAir.material.uniforms.sunDirection.value = light;
  outerAir.material.uniforms.intensity.value = config.outerAtmosphereIntensity ?? 0.16;
  outerAir.scale.setScalar(config.outerAtmosphereScale ?? 1.035);
  group.add(outerAir);
  // Low-overdraw optical bloom, glare and restrained shafts, behind the globe.
  const sun = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.ShaderMaterial({
      vertexShader:
        "varying vec2 p;void main(){p=uv-.5;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
      uniforms: { time: { value: 0 }, opacity: { value: config.sunGlow ?? 1 } },
      fragmentShader: `varying vec2 p;uniform float time,opacity;void main(){float r=length(p);float core=exp(-r*r*7000.)*1.18;float bloom=exp(-r*r*210.)*.95+exp(-r*17.)*.32;float glare=exp(-p.y*p.y*18000.)*exp(-abs(p.x)*8.)*.09;float angle=atan(p.y,p.x);float drift=sin(time*.075)*.008;float rays=0.;for(int i=0;i<6;i++){float j=float(i);float direction=-.85+j*.31+sin(j*2.7)*.08+drift;float beam=exp(-pow((angle-direction)/(.024+j*.005),2.));rays+=beam*exp(-r*(12.+j*2.3)*(1.+.05*sin(time*.48+j)))*(.041+mod(j,3.)*.014);}rays+=pow(max(0.,cos(angle*13.+.5)),32.)*exp(-r*22.)*.005;rays*=smoothstep(.008,.03,r)*(1.+.065*sin(time*.48));vec3 glowColor=mix(vec3(1.,.48,.12),vec3(1.,.94,.78),smoothstep(.3,.9,core));gl_FragColor=vec4(glowColor,opacity*(core+bloom*1.53+glare*4.+rays)*(1.+.055*sin(time*.628)));}`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  sun.position.z = -1.4;
  scene.add(sun);
  return {group,planet,uniforms,clouds,haze,air,outerAir,sun};
}

export function createHeroValleyHaze({scene,speeds,opacities}) {
  const uniforms={time:{value:0},speeds:{value:new THREE.Vector3(...speeds)},opacities:{value:new THREE.Vector3(...opacities)}};
  const material=new THREE.ShaderMaterial({uniforms,transparent:true,depthWrite:false,vertexShader:"varying vec2 p;void main(){p=uv;gl_Position=vec4(position,1.);}",fragmentShader:`precision mediump float;varying vec2 p;uniform float time;uniform vec3 speeds,opacities;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}float fog(vec2 p){return noise(p)*.6+noise(p*2.1)*.3+noise(p*4.3)*.1;}void main(){float a=0.;for(int i=0;i<3;i++){float j=float(i);float n=fog(vec2(p.x*(5.+j*2.)-time*speeds[i],p.y*5.+j*7.));float center=.27-j*.065+.018*sin(p.x*7.+j*2.)+.014*(n-.5);float band=exp(-pow((p.y-center)*(10.+j*4.),2.));a+=smoothstep(.35,.77,n)*band*opacities[i];}vec3 tint=mix(vec3(.16,.13,.11),vec3(.56,.34,.17),smoothstep(.15,.95,p.x)*.7+smoothstep(.3,.8,p.y)*.3);float edge=smoothstep(.025,.10,p.y)*(1.-smoothstep(.40,.62,p.y));gl_FragColor=vec4(tint,a*edge);}`});
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),material));
  return uniforms;
}
