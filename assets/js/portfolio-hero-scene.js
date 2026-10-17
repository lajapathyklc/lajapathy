import {THREE, geologyGLSL, createHeroRenderer, loadGeology} from './hero-3d-core.js?v=performance-20261011-09b';
import {createSafeOrbits} from './portfolio-orbit-safety.js?v=performance-20261011-09b';
import {createHeroMeteors} from './lp-meteor-system.js?v=performance-20261011-09b';

function portfolioLifecycle(root, resize, render) {
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

export const portfolioHeroConfig = {
  rotationDuration:250, maxDPR:1.35, center:{x:.78,y:.48}, planetRadius:.60, moonRadius:.080,
  scrollDistance:.35, planetScrollLift:.10, orbitScrollSlowdown:.65,
  fogSpeeds:[.003,-.005,.006], fogOpacity:[.055,.09,.055],
  previewWidth:220, mobilePreviewWidth:155, hoverSlowdown:.28, hoverGrace:320, previewGap:16,
};
export const lightingConfig = {
  // Finite hidden source along the approved main-planet light vector.
  // The existing limb sprite represents scattering, rather than a second light.
  sunDistance:24.0, shadowFloor:.08, penumbraAngle:.045,
  eclipseResponse:.28, planetshineStrength:.12,
};
export function eclipseAt(moon, sun, planet, planetRadius, moonRadius) {
  const toSun=sun.clone().sub(moon),toPlanet=planet.clone().sub(moon);
  const sunDistance=toSun.length(),planetDistance=toPlanet.length();
  const along=toPlanet.dot(toSun)/sunDistance;
  if(along<=0||along>=sunDistance)return 1;
  const separation=Math.acos(THREE.MathUtils.clamp(toSun.dot(toPlanet)/(sunDistance*planetDistance),-1,1));
  const angularRadius=Math.asin(Math.min(1,planetRadius/planetDistance));
  const penumbra=lightingConfig.penumbraAngle+Math.asin(Math.min(1,moonRadius/planetDistance));
  return THREE.MathUtils.lerp(lightingConfig.shadowFloor,1,THREE.MathUtils.smoothstep(separation,angularRadius-penumbra,angularRadius+penumbra));
}
export const orbitConfig = {
  inner:{radiusX:.78,radiusZ:.68,tilt:.42,roll:-.20,verticalOffset:.025,opacity:.122},
  middle:{radiusX:.97,radiusZ:.88,tilt:-.55,roll:.22,verticalOffset:-.035,opacity:.083},
  outer:{radiusX:1.16,radiusZ:1.02,tilt:.48,roll:-.10,verticalOffset:.055,opacity:.048},
};
export const caseStudyWorlds = [
  {id:'ewallet',title:'E-Wallet',domain:'Fintech',url:'ewallet.html',preview:'E-wallet1.webp',orbit:'inner',phase:1.18,scale:1,orbitDuration:72,axialDuration:46,direction:1,axialTilt:-8,atmosphere:0.35,roughness:0.76,normalStrength:0.13,terrainScale:1.09,color:0x386c9b},
  {id:'zappay',title:'ZapPay',domain:'Fintech',url:'zappay.html',preview:'zappay1.webp',orbit:'middle',phase:2.35,scale:0.62,orbitDuration:88,axialDuration:65,direction:1,axialTilt:12,atmosphere:0.42,roughness:0.81,normalStrength:0.18,terrainScale:1.18,color:0x358c98},
  {id:'unipay',orbitLift:.16,title:'UniPay',domain:'Fintech',url:'unipay.html',preview:'Unipay1.webp',orbit:'outer',phase:5.1,scale:0.52,orbitDuration:149,axialDuration:70,direction:-1,axialTilt:19,atmosphere:0.3,roughness:0.88,normalStrength:0.25,terrainScale:1.27,color:0x715b97},
  {id:'smartfin',title:'SmartFin',domain:'Fintech',url:'smartfin.html',preview:'Smartfin1.webp',orbit:'inner',phase:4.65,scale:0.72,orbitDuration:67,axialDuration:32,direction:1,axialTilt:-15,atmosphere:0.28,roughness:0.91,normalStrength:0.28,terrainScale:1.36,color:0x5f5480},
  {id:'coverride',title:'CoverRide',domain:'Insurance & mobility',url:'coverride.html',preview:'Coverride1.webp',orbit:'middle',phase:3.70,scale:0.36,orbitDuration:136,axialDuration:78,direction:1,axialTilt:6,atmosphere:0.14,roughness:0.95,normalStrength:0.4,terrainScale:1.45,color:0x66794b},
  {id:'norton',title:'Norton',domain:'Enterprise',url:'norton.html',preview:'norton1.webp',orbit:'outer',phase:4.15,scale:0.84,orbitDuration:133,axialDuration:39,direction:1,axialTilt:14,atmosphere:0.25,roughness:0.85,normalStrength:0.38,terrainScale:1.54,color:0x4e7891},
  {id:'taskee',title:'Taskee',domain:'SaaS',url:'taskee.html',preview:'Taskee1.webp',orbit:'middle',phase:4.9,scale:0.44,orbitDuration:121,axialDuration:54,direction:1,axialTilt:-11,atmosphere:0.39,roughness:0.78,normalStrength:0.12,terrainScale:1.63,color:0x3d7965},
];
const root=document.querySelector('.portfolio-universe');
let releaseScene=()=>{};
function showFallback(){root.dataset.scene='fallback';root.querySelector('.universe-canvas').classList.remove('is-ready');const p=root.querySelector('.universe-preview');p.setAttribute('aria-hidden','true');p.tabIndex=-1;}

if(root) {
  const nav=root.querySelector('.universe-project-links');
  for(const p of caseStudyWorlds){const a=document.createElement('a');a.href=p.url;a.textContent=`${p.title} — ${p.domain}`;a.dataset.project=p.id;a.setAttribute('aria-label',`Open ${p.title} case study — ${p.domain}`);nav.append(a);}
  nav.id='universe-project-navigation';
  const toggle=document.createElement('button');toggle.type='button';toggle.className='universe-project-toggle';toggle.textContent='Explore project moons';toggle.setAttribute('aria-controls',nav.id);toggle.setAttribute('aria-expanded','false');root.insertBefore(toggle,nav);
  toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});
  init().catch(error=>{releaseScene();showFallback();console.warn('Product universe fallback:',error);});
}
async function init(){
  let firstFrameRendered=false,readyFrame=0;
  const canvas=root.querySelector('.universe-canvas');if(!canvas.getContext('webgl2',{alpha:true,antialias:true,premultipliedAlpha:true})){showFallback();return;}
  const renderer=createHeroRenderer(canvas,portfolioHeroConfig.maxDPR);
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(THREE.MathUtils.radToDeg(2*Math.atan(1/8)),1,.1,50);camera.position.z=8;
  let atlas,lifecycle,meteors,disposed=false,cleanupUI=()=>{};
  const lost=event=>{event.preventDefault();releaseScene();showFallback();};
  const pagehide=event=>{if(!event.persisted)releaseScene();};
  releaseScene=()=>{if(disposed)return;disposed=true;lifecycle?.dispose();cancelAnimationFrame(readyFrame);cleanupUI();meteors?.dispose();canvas.removeEventListener('webglcontextlost',lost);window.removeEventListener('pagehide',pagehide);delete window.portfolioSceneQA;delete window.setPortfolioOrbitDebug;const geometries=new Set(),materials=new Set();scene.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material);});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());atlas?.dispose();renderer.dispose();};
  canvas.addEventListener('webglcontextlost',lost);window.addEventListener('pagehide',pagehide);
  atlas=await loadGeology(renderer,innerWidth<900);if(disposed){atlas.dispose();return;}
  const light=new THREE.Vector3(.62,.74,-.16).normalize();
  const sunPosition=new THREE.Vector3(),planetPosition=new THREE.Vector3();
  const uniforms={cloudClock:{value:0},cloudPhase:{value:new THREE.Vector2()},atlas:{value:atlas},texel:{value:new THREE.Vector2(1/atlas.image.width,1/atlas.image.height)},turn:{value:0},relief:{value:1.8},sunDirection:{value:light},impactPoints:{value:[new THREE.Vector3(),new THREE.Vector3()]},impactStrength:{value:new Float32Array(2)}};
  const vertex=`varying vec3 n;varying vec3 viewDir;void main(){n=normal;viewDir=normalize(cameraPosition-(modelMatrix*vec4(position,1.)).xyz);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
  const circulationGLSL=`
vec2 cloudUV(vec3 n,float phase,float layer){vec2 m=geologyUV(n,phase);m.x=fract(m.x+layer*.173+.012*sin(m.y*PI*3.+cloudClock*.008));m.y=clamp(m.y+.006*sin(m.x*PI*2.+cloudClock*.006)*sin(m.y*PI),.002,.998);return m;}
float cloudDensity(vec3 n,float phase,float layer){vec2 m=cloudUV(n,phase,layer);return smoothstep(.36,.62,rock(m+vec2(.12,.01))*.72+rock(m+vec2(.037,-.006))*.28)*(1.-smoothstep(.35,.64,rock(m+vec2(.19,.023))));}`;
  const surfaceVertex=`varying vec3 n;varying vec3 viewDir;uniform sampler2D atlas;uniform vec2 texel;uniform float turn,relief;const float PI=3.14159265359;${geologyGLSL}void main(){n=normal;vec3 p=position*(1.+(heightAt(geologyUV(normal,turn))-.35)*.0025*smoothstep(.03,.22,normal.z));viewDir=normalize(cameraPosition-(modelMatrix*vec4(p,1.)).xyz);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`;
  const surface=new THREE.ShaderMaterial({uniforms,vertexShader:surfaceVertex,fragmentShader:`precision highp float;
varying vec3 n;uniform sampler2D atlas;uniform vec2 texel,cloudPhase;
uniform float turn,relief,cloudClock;uniform vec3 sunDirection,impactPoints[2];uniform float impactStrength[2];
const float PI=3.14159265359;${geologyGLSL}${circulationGLSL}
void main(){
 vec3 norm=normalize(n);vec2 uv=geologyUV(norm,turn);float ld=dot(norm,sunDirection),slope;
 float grazing=exp(-pow((ld-.08)/.26,2.)),day=smoothstep(-.06,.10,ld);
 vec3 detail=normalize(mix(norm,terrainNormal(norm,uv,grazing,slope),.50*smoothstep(.035,.25,norm.z)));
 float h=heightAt(uv),lit=max(dot(detail,sunDirection),0.)*day;
 vec3 albedo=stonePalette(uv,h,slope)*.76;
 float cavity=clamp(.64+h*.7,.64,1.);
 float shadow=1.-cloudDensity(normalize(norm+vec3(sunDirection.xy*.009,0.)),cloudPhase.x,0.)*.17*day;
 vec3 energy=pow(albedo,vec3(2.2))*(vec3(.07,.10,.15)+vec3(1.10,.91,.72)*lit*3.6)*cavity*shadow;
 energy+=vec3(.18,.095,.036)*max(lit-max(ld,0.),0.)*grazing*day;
 energy+=vec3(1.,.72,.42)*specularBRDF(detail,sunDirection,mix(.94,.82,h))*max(ld,0.)*day;
 energy+=vec3(.12,.065,.027)*pow(1.-max(norm.z,0.),3.8)*smoothstep(-.06,.35,ld)*.10;
 for(int i=0;i<2;i++){float contact=exp(-(1.-dot(norm,impactPoints[i]))*2200.);energy+=vec3(.85,.30,.075)*contact*impactStrength[i]*(.3+h*.7);}
 gl_FragColor=vec4(pow(aces(max(energy,vec3(0.))),vec3(1./2.2)),1.);
}`});
  const globe=new THREE.Mesh(new THREE.SphereGeometry(1,128,96),surface),system=new THREE.Group();system.add(globe);scene.add(system);
  function atmosphere(mesh,tint,strength,scale,sunDirection=light,eclipse={value:1}){
    const mat=new THREE.ShaderMaterial({uniforms:{sunDirection:{value:sunDirection},eclipse,tint:{value:new THREE.Color(tint)},strength:{value:strength}},vertexShader:vertex,fragmentShader:`varying vec3 n;varying vec3 viewDir;uniform vec3 sunDirection,tint;uniform float strength,eclipse;void main(){vec3 v=normalize(n);float rim=pow(1.-abs(dot(v,normalize(viewDir))),5.);float day=smoothstep(-.12,.45,dot(v,sunDirection));float mie=pow(max(dot(v,sunDirection),0.),7.)*rim;gl_FragColor=vec4(mix(tint,vec3(1.,.76,.38),smoothstep(.04,.72,day)),(rim*(.018+day*.40)+mie*.20)*strength*(.035+.965*eclipse));}`,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending});
    const air=new THREE.Mesh(mesh.geometry,mat);air.scale.setScalar(scale);mesh.add(air);return mat;
  }
  atmosphere(globe,0x596577,.65,1.006);
  // Adapted from the About shell; geology remains visible through mineral dust.
  const dustShells=[{scale:1.0045,speed:1.085,opacity:.22,layer:0},{scale:1.009,speed:.947,opacity:.065,layer:1}].map(config=>{
    const u={...uniforms,turn:{value:0},opacity:{value:config.opacity},layer:{value:config.layer}};
    const mat=new THREE.ShaderMaterial({uniforms:u,vertexShader:vertex,fragmentShader:`precision highp float;varying vec3 n;uniform sampler2D atlas;uniform vec2 texel;uniform float turn,relief,opacity,layer,cloudClock;uniform vec3 sunDirection;const float PI=3.14159265359;${geologyGLSL}${circulationGLSL}void main(){vec3 norm=normalize(n);float density=cloudDensity(norm,turn,layer),ld=dot(norm,sunDirection),day=smoothstep(-.08,.28,ld);vec3 color=mix(vec3(.065,.085,.11),vec3(.35,.29,.21),day);gl_FragColor=vec4(color,density*opacity*(.16+day*.84)*smoothstep(.01,.15,norm.z));}`,transparent:true,depthWrite:false});
    const shell=new THREE.Mesh(globe.geometry,mat);shell.scale.setScalar(config.scale);globe.add(shell);return {u,...config};
  });
  const sun=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.ShaderMaterial({uniforms:{time:{value:0}},vertexShader:'varying vec2 p;void main(){p=uv-.5;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`varying vec2 p;uniform float time;void main(){float r=length(p),core=exp(-r*r*10000.);float bloom=exp(-r*r*340.)*.42+exp(-r*21.)*.13;float angle=atan(p.y,p.x),rays=0.;for(int i=0;i<4;i++){float j=float(i),a=angle-(-.7+j*.46+sin(j*2.7)*.09);a=atan(sin(a),cos(a));rays+=exp(-pow(a/(.055+j*.012),2.))*exp(-r*(16.+j*3.))*.018;}gl_FragColor=vec4(mix(vec3(1.,.58,.24),vec3(1.,.89,.66),core),core*.82+bloom+rays*smoothstep(.008,.04,r));}`,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));sun.position.z=-.6;system.add(sun);
  const moonGeometry=new THREE.SphereGeometry(1,36,24),worlds=[],orbitLines={};
  const safeOrbits=createSafeOrbits(caseStudyWorlds,orbitConfig,portfolioHeroConfig.planetRadius,portfolioHeroConfig.moonRadius);
  root.dataset.orbitSafety=JSON.stringify(safeOrbits.validation);
  for(const p of caseStudyWorlds){
    const o=orbitConfig[p.orbit],samples=[];for(let i=0;i<=160;i++)samples.push(safeOrbits.position(p,i/160*Math.PI*2));
    const geometry=new THREE.BufferGeometry().setFromPoints(samples);
    geometry.setAttribute('orbitAngle',new THREE.Float32BufferAttribute(samples.map((_,i)=>i/160*Math.PI*2),1));
    const material=new THREE.ShaderMaterial({uniforms:{color:{value:new THREE.Color(0xdc914d)},baseOpacity:{value:o.opacity*.65},activeAngle:{value:p.phase},emphasis:{value:0}},vertexShader:'attribute float orbitAngle;varying float angle;void main(){angle=orbitAngle;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`uniform vec3 color;uniform float baseOpacity,activeAngle,emphasis;varying float angle;void main(){float d=atan(sin(angle-activeAngle),cos(angle-activeAngle));float local=exp(-pow(d/.38,2.));gl_FragColor=vec4(color,mix(baseOpacity,.37,local*emphasis));
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    }`,transparent:true,depthWrite:false});
    const line=new THREE.Line(geometry,material);system.add(line);orbitLines[p.id]=line;
  }
  for(const p of caseStudyWorlds){
    const u={...uniforms,sunDirection:{value:new THREE.Vector3()},planetDirection:{value:new THREE.Vector3()},eclipse:{value:1},planetshine:{value:0},turn:{value:p.phase*.1},base:{value:new THREE.Color(p.color).lerp(new THREE.Color(0x899198),.55)},dim:{value:1},emphasis:{value:0},axialTilt:{value:THREE.MathUtils.degToRad(p.axialTilt)},roughness:{value:p.roughness},normalStrength:{value:p.normalStrength},terrainScale:{value:p.terrainScale}};
    const mat=new THREE.ShaderMaterial({uniforms:u,vertexShader:vertex,fragmentShader:`precision highp float;varying vec3 n;varying vec3 viewDir;uniform sampler2D atlas;uniform vec2 texel;uniform float turn,relief,dim,axialTilt,roughness,normalStrength,terrainScale,eclipse,planetshine,emphasis;uniform vec3 base,sunDirection,planetDirection;const float PI=3.14159265359;${geologyGLSL}
    void main(){
      vec3 norm=normalize(n),view=normalize(viewDir);
      vec3 axis=vec3(norm.x*cos(axialTilt)-norm.y*sin(axialTilt),norm.x*sin(axialTilt)+norm.y*cos(axialTilt),norm.z);
      vec2 uv=geologyUV(axis,turn);uv.x=fract(uv.x+(terrainScale-1.)*.37);uv.y=clamp(uv.y+.025*sin(uv.x*PI*2.)*sin(uv.y*PI)*(terrainScale-.9),.002,.998);
      float h=heightAt(uv),slope;vec3 reliefNormal=normalize(mix(norm,terrainNormal(norm,uv,0.,slope),(.15+normalStrength*.8)*smoothstep(.02,.18,max(dot(norm,view),0.))));
      float day=max(dot(reliefNormal,sunDirection),0.);
      vec3 identity=mix(vec3(1.),normalize(base+vec3(.01)),.38);
      vec3 stone=mix(vec3(.020,.025,.030),vec3(.095,.105,.115),smoothstep(.18,.65,h))*identity;
      // THREE.Color uniforms already contain linear RGB.
      vec3 albedo=stone;
      vec3 energy=albedo*(.016+day*1.75*eclipse);
      energy+=albedo*vec3(1.,.52,.25)*planetshine*max(dot(reliefNormal,planetDirection),0.);
      float materialRoughness=clamp(roughness+(h-.5)*.16,.60,1.);
      energy+=vec3(.30,.23,.15)*specularBRDF(reliefNormal,sunDirection,materialRoughness)*day*eclipse;
      float rim=pow(1.-max(dot(norm,view),0.),5.);
      float grazing=exp(-pow(dot(norm,sunDirection)/.22,2.));
      energy+=albedo*grazing*.032*eclipse;
      energy+=vec3(.055,.035,.019)*(1.+emphasis*.15)*rim*(.10+.90*max(dot(norm,sunDirection),0.))*sqrt(eclipse);
      energy+=vec3(.16,.063,.012)*(1.+emphasis*.15)*rim*pow(max(dot(norm,sunDirection),0.),2.)*eclipse;
      gl_FragColor=vec4(pow(aces(energy),vec3(1./2.2))*dim,1.);
    }`});
    const mesh=new THREE.Mesh(moonGeometry,mat);mesh.scale.setScalar(portfolioHeroConfig.moonRadius*p.scale);mesh.userData.project=p;system.add(mesh);
    const air=atmosphere(mesh,p.color,p.atmosphere*.45,1.018,u.sunDirection.value,u.eclipse);
    worlds.push({p,mesh,u,air,angle:p.phase,position:new THREE.Vector3(),spin:p.phase*.1,speedFactor:1,avoidance:1,avoidanceTarget:1,focusDim:1,emphasis:0,eclipse:null,eligible:false});
  }
  // One inexpensive full-hero haze layer with three independently drifting depth bands.
  const fog=new THREE.Mesh(new THREE.PlaneGeometry(2,2),new THREE.ShaderMaterial({uniforms:{time:{value:0},speeds:{value:new THREE.Vector3(...portfolioHeroConfig.fogSpeeds)},opacity:{value:new THREE.Vector3(...portfolioHeroConfig.fogOpacity)}},vertexShader:'varying vec2 uvv;void main(){uvv=uv;gl_Position=vec4(position.xy,.99,1.);}',fragmentShader:`varying vec2 uvv;uniform float time;uniform vec3 speeds,opacity;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}void main(){float a=0.;for(int i=0;i<3;i++){float j=float(i);float n=noise(vec2(uvv.x*(7.+j*2.)-time*speeds[i],uvv.y*15.+j*8.));float center=.25-j*.06+.02*sin(uvv.x*8.+j);a+=smoothstep(.3,.8,n)*exp(-pow((uvv.y-center)*(12.+j*4.),2.))*opacity[i];}gl_FragColor=vec4(.47,.29,.15,a);}`,transparent:true,depthTest:false,depthWrite:false}));fog.renderOrder=20;scene.add(fog);
  const positions=[],sizes=[],glows=[];
  for(let i=0;i<(innerWidth<700?34:84);i++){positions.push(Math.random()*4.6-2.3,Math.random()*2.8-1.4,-3-i%3);sizes.push(.6+Math.random()*.9);glows.push(.10+Math.pow(Math.random(),3)*.4);}
  const stars=new THREE.Points(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(positions,3)).setAttribute('pointSize',new THREE.Float32BufferAttribute(sizes,1)).setAttribute('glow',new THREE.Float32BufferAttribute(glows,1)),new THREE.ShaderMaterial({uniforms:{time:{value:0},dpr:{value:renderer.getPixelRatio()}},transparent:true,depthWrite:false,vertexShader:`attribute float pointSize,glow;uniform float time,dpr;varying float brightness;void main(){vec3 p=position;p.x+=sin(time*.027)*.002*(1.+abs(p.z)*.2);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);gl_PointSize=pointSize*dpr;brightness=glow;}`,fragmentShader:`varying float brightness;void main(){float r=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(.68,.74,.81,brightness*exp(-r*r*3.)*(1.-smoothstep(.4,1.,r)));}`}));scene.add(stars);
  const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),preview=root.querySelector('.universe-preview'),previewImage=preview.querySelector('img'),previewTitle=preview.querySelector('strong'),previewDomain=preview.querySelector('small');
  const connector=document.createElement('span');connector.className='universe-connector';connector.setAttribute('aria-hidden','true');root.append(connector);
  let hovered=null,focused=null,active=null,tapped=null,closeTimer=0,previewHovered=false,placementLock=null,swapUntil=0,width=1,height=1,small=false,previousSmall=null,count=7,scale=1,scroll=0,cost=0,frames=0;
  const previewPosition=new THREE.Vector2(),center=new THREE.Vector3(),targetParallax=new THREE.Vector2(),parallax=new THREE.Vector2(),resources=new Map();
  const abort=new AbortController(),signal=abort.signal;cleanupUI=()=>{clearTimeout(closeTimer);abort.abort();};
  function resize(){
    placementLock=null;width=root.clientWidth;height=root.clientHeight;small=width<700;count=small?3:width<1100?5:7;
    const aspect=width/height;camera.aspect=aspect;camera.updateProjectionMatrix();renderer.setSize(width,height,false);
    if(previousSmall!==small){hovered=null;tapped=null;if(previousSmall===null)worlds.forEach((w,i)=>w.angle=small?[2.3,1.45,4.8][i]??w.p.phase:w.p.phase);previousSmall=small;}
    scale=small?.57:width<1100?.72:Math.min(1,aspect/1.776);
    center.set((small?.64:width<1100?.67:portfolioHeroConfig.center.x)*2*aspect-aspect,1-(small?.72:width<1100?.70:portfolioHeroConfig.center.y)*2,0);
    globe.scale.setScalar(portfolioHeroConfig.planetRadius);sun.scale.setScalar(.60);sun.position.set(light.x/Math.hypot(light.x,light.y)*portfolioHeroConfig.planetRadius*1.05,light.y/Math.hypot(light.x,light.y)*portfolioHeroConfig.planetRadius*1.05,-.20);
    worlds.forEach((w,i)=>{w.mesh.visible=i<count;});
    Object.entries(orbitLines).forEach(([id,line])=>line.visible=caseStudyWorlds.findIndex(p=>p.id===id)<count);
    renderer.setPixelRatio(Math.min(renderer.getPixelRatio(),devicePixelRatio,small?1.25:portfolioHeroConfig.maxDPR));
  }
  function loadPreview(p){if(!resources.has(p.id)){const image=new Image();image.decoding='async';image.src=`assets/images/latest-portfolio/${p.preview}`;resources.set(p.id,image);}return resources.get(p.id).src;}
  function choose(w){
    if(!w)return;clearTimeout(closeTimer);if(active===w)return;
    const previous=active;active=w;placementLock=null;
    const source=loadPreview(w.p);
    const reveal=()=>{if(active!==w)return;preview.href=w.p.url;preview.setAttribute('aria-label',`Open ${w.p.title} case study — ${w.p.domain}`);previewImage.src=source;previewImage.alt=`${w.p.title} product interface preview`;previewTitle.textContent=w.p.title;previewDomain.textContent=w.p.domain;previewImage.style.opacity='1';};
    if(previous&&!matchMedia('(prefers-reduced-motion: reduce)').matches){swapUntil=performance.now()+210;setTimeout(reveal,210);}else reveal();
    root.dataset.active=w.p.id;
  }
  function hit(event){const box=canvas.getBoundingClientRect();pointer.set((event.clientX-box.left)/box.width*2-1,-(event.clientY-box.top)/box.height*2+1);raycaster.setFromCamera(pointer,camera);const hits=raycaster.intersectObjects([globe,...worlds.filter(w=>w.mesh.visible).map(w=>w.mesh)],false);const world=hits[0]?.object.userData.project?worlds.find(w=>w.mesh===hits[0].object):null;return world?.eligible?world:null;}
  function redraw(){lifecycle?.redraw();}
  function dismiss(){if(document.activeElement?.closest('.universe-project-links,.universe-preview'))root.querySelector('.universe-project-toggle').focus({preventScroll:true});clearTimeout(closeTimer);hovered=null;tapped=null;focused=null;previewHovered=false;root.querySelector('.universe-project-links').classList.remove('is-open');root.querySelector('.universe-project-toggle').setAttribute('aria-expanded','false');redraw();}
  function leave(){clearTimeout(closeTimer);closeTimer=setTimeout(()=>{if(!previewHovered){hovered=null;redraw();}},portfolioHeroConfig.hoverGrace);}
  canvas.addEventListener('pointermove',event=>{
    if(event.pointerType==='touch')return;
    const w=hit(event);canvas.style.cursor=w?'pointer':'default';
    if(w){clearTimeout(closeTimer);hovered=w;choose(w);redraw();}else leave();
    if(!lifecycle.reduced.matches)targetParallax.set((event.clientX/width-.5)*.012,(event.clientY/height-.5)*.012);
  },{signal});
  canvas.addEventListener('pointerleave',()=>{leave();targetParallax.set(0,0);},{signal});
  canvas.addEventListener('click',event=>{const w=hit(event);if(!w){dismiss();return;}if(event.pointerType==='touch'||matchMedia('(hover: none)').matches){if(tapped===w){location.assign(w.p.url);return;}choose(w);tapped=w;hovered=null;redraw();}else location.assign(w.p.url);},{signal});
  document.addEventListener('pointerdown',event=>{if(!root.contains(event.target)||(!canvas.contains(event.target)&&!preview.contains(event.target)&&!event.target.closest('.universe-project-links')))dismiss();},{signal});
  root.addEventListener('focusin',event=>{
    const link=event.target.closest('.universe-project-links a');
    if(!link)return;
    focused=worlds.find(w=>w.p.id===link.dataset.project);choose(focused);redraw();
  },{signal});
  root.addEventListener('focusout',event=>{
    if(!event.target.closest('.universe-project-links a'))return;
    focused=null;leave();redraw();
  },{signal});
  root.querySelector('.universe-project-links').addEventListener('click',event=>{
    const link=event.target.closest('a');if(!link||(!matchMedia('(hover:none)').matches&&event.pointerType!=='touch'))return;
    const w=worlds.find(w=>w.p.id===link.dataset.project);if(tapped===w)return;
    event.preventDefault();focused=w;tapped=w;hovered=null;choose(w);
    root.querySelector('.universe-project-links').classList.remove('is-open');root.querySelector('.universe-project-toggle').setAttribute('aria-expanded','false');redraw();
    setTimeout(()=>preview.focus({preventScroll:true}),80);
  },{signal});
  root.addEventListener('keydown',event=>{if(event.key==='Escape')dismiss();if(event.key===' '&&event.target.matches('.universe-project-links a, .universe-preview')){event.preventDefault();event.target.click();}},{signal});
  preview.addEventListener('click',event=>{if(performance.now()<swapUntil)event.preventDefault();},{signal});
  preview.addEventListener('pointerenter',()=>{clearTimeout(closeTimer);previewHovered=true;hovered=active;redraw();},{signal});
  preview.addEventListener('pointerleave',()=>{previewHovered=false;leave();},{signal});
  preview.addEventListener('focus',()=>{clearTimeout(closeTimer);focused=active;redraw();},{signal});
  preview.addEventListener('blur',()=>{focused=null;leave();redraw();},{signal});
  meteors=createHeroMeteors({system,globe,camera,renderer,root,uniforms,worlds,predictMoon:(w,t,out)=>safeOrbits.position(w.p,w.angle+t*Math.PI*2/w.p.orbitDuration*w.p.direction*w.speedFactor*w.avoidance*(1-scroll*portfolioHeroConfig.orbitScrollSlowdown),out).multiplyScalar(1+scroll*.035),page:'Portfolio',firstDelay:3.8,cadenceScale:4.2,failedEventFallback:true,eventKind:()=>{const n=Math.random();return n<.05?'impact':n<.22?'skim':'flyby';},protectedSelector:'.breadcrumb-inner,.universe-project-toggle,.universe-project-links.is-open',config:{poolSize:3,intensity:.46}});
  const development=['localhost','127.0.0.1'].includes(location.hostname);
  let debugOrbits=null,debugMoons=[];
  if(development){
    window.setPortfolioOrbitDebug=enabled=>{
      if(!debugOrbits){
        debugOrbits=new THREE.Group();system.add(debugOrbits);const geometry=new THREE.SphereGeometry(1,24,16);
        const sphere=(radius,color)=>{const mesh=new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({color,wireframe:true,transparent:true,opacity:.25,depthWrite:false}));mesh.scale.setScalar(radius);mesh.raycast=()=>{};debugOrbits.add(mesh);return mesh;};
        sphere(portfolioHeroConfig.planetRadius,0x72cdda);sphere(portfolioHeroConfig.planetRadius+.056,0xeea254);
        debugMoons=worlds.map(w=>sphere(w.mesh.scale.x+.0175,0x72cdda));
      }
      debugOrbits.visible=Boolean(enabled);redraw();console.info('Portfolio orbit validation',safeOrbits.validation);
    };
  }
  function hidePreview(){connector.style.opacity='0';preview.style.opacity='0';preview.style.transform='translateY(4px)';preview.setAttribute('aria-hidden','true');preview.tabIndex=-1;}
  function anchoredPreview(){
    const box=root.getBoundingClientRect(),copy=root.querySelector('.breadcrumb-inner').getBoundingClientRect();
    const pw=preview.offsetWidth,ph=preview.offsetHeight;
    const x=small?24:width-pw-28;
    const minY=small?copy.bottom-box.top+22:Math.max(130,-box.top+120);
    const ideal=small?height*.48:height*.34;
    const y=Math.max(minY,Math.min(ideal,innerHeight-box.top-ph-24,height-ph-24));
    preview.style.left=`${x}px`;preview.style.top=`${y}px`;preview.style.opacity=performance.now()<swapUntil?'0':'1';preview.style.transform='translateY(0)';preview.setAttribute('aria-hidden','false');preview.tabIndex=0;connector.style.opacity='0';
  }
  function wScreenRadius(w){return w.mesh.scale.x*scale/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*camera.position.distanceTo(w.position));}
  let safetyClock=0;
  const predicted=worlds.map(()=>new THREE.Vector3());
  let planetTime=0,cloudTime=0,ambientTime=0,qaTime=null;
  function predictiveSafety(dt){
    safetyClock+=dt;if(safetyClock<.5)return;safetyClock=0;
    worlds.forEach(w=>w.avoidanceTarget=1);let minimumGap=Infinity;
    for(const ahead of [.5,1,1.5,2,2.5]){
      worlds.forEach((w,i)=>safeOrbits.position(w.p,w.angle+ahead*Math.PI*2/w.p.orbitDuration*w.p.direction*w.speedFactor*w.avoidance*(1-scroll*portfolioHeroConfig.orbitScrollSlowdown),predicted[i]));
      for(let i=0;i<count;i++)for(let j=i+1;j<count;j++){
        const gap=predicted[i].distanceTo(predicted[j])-worlds[i].mesh.scale.x-worlds[j].mesh.scale.x;
        minimumGap=Math.min(minimumGap,gap);
        const a=system.localToWorld(predicted[i].clone()).project(camera),b=system.localToWorld(predicted[j].clone()).project(camera);
        const screenGap=Math.hypot((a.x-b.x)*width/2,(a.y-b.y)*height/2)-height*(wScreenRadius(worlds[i])+wScreenRadius(worlds[j]));
        if(screenGap<18&&worlds[i].eligible&&worlds[j].eligible){
          const w=worlds[j],rate=Math.PI*2/w.p.orbitDuration*w.p.direction*w.speedFactor*(1-scroll*portfolioHeroConfig.orbitScrollSlowdown);
          const separation=factor=>{const point=safeOrbits.position(w.p,w.angle+ahead*rate*factor).multiplyScalar(1+scroll*.035);system.localToWorld(point).project(camera);return Math.hypot((a.x-point.x)*width/2,(a.y-point.y)*height/2);};
          w.avoidanceTarget=separation(.92)>separation(1.08)?.92:1.08;
        }
        if(gap<.03){const smaller=worlds[i].p.scale<worlds[j].p.scale?worlds[i]:worlds[j];smaller.avoidanceTarget=.9;}
      }
    }
    root.dataset.predictedMoonGap=minimumGap.toFixed(6);
  }
  lifecycle=portfolioLifecycle(root,resize,(time,dt,reduced)=>{
    const begin=performance.now();scroll=reduced?0:THREE.MathUtils.clamp(-root.getBoundingClientRect().top/(height*portfolioHeroConfig.scrollDistance),0,1);
    if(reduced)parallax.set(0,0);else parallax.lerp(targetParallax,.04);
    system.position.copy(center).add(new THREE.Vector3(scroll*.06+parallax.x,scroll*portfolioHeroConfig.planetScrollLift+parallax.y,0));system.scale.setScalar(scale);
    const motion=reduced?0:dt;if(qaTime===null){planetTime+=motion;cloudTime+=motion;ambientTime+=motion;}else planetTime=cloudTime=ambientTime=qaTime;
    uniforms.turn.value=planetTime/portfolioHeroConfig.rotationDuration;
    dustShells.forEach(shell=>shell.u.turn.value=cloudTime/portfolioHeroConfig.rotationDuration*shell.speed);
    uniforms.cloudPhase.value.set(dustShells[0].u.turn.value,dustShells[1].u.turn.value);uniforms.cloudClock.value=ambientTime;
    sun.material.uniforms.time.value=fog.material.uniforms.time.value=ambientTime;
    stars.material.uniforms.time.value=ambientTime;
    root.style.setProperty('--scene-fade',String(1-Math.pow(THREE.MathUtils.clamp(-root.getBoundingClientRect().top/height,0,1),2)*.70));root.style.setProperty('--universe-scroll',scroll);root.style.setProperty('--terrain-rise',`${-scroll*12}px`);
    for(const [id,line] of Object.entries(orbitLines)){const w=worlds.find(w=>w.p.id===id);line.material.uniforms.activeAngle.value=w.angle;line.material.uniforms.emphasis.value=w.emphasis;line.scale.setScalar(1+scroll*.035);}
    if(!reduced)predictiveSafety(dt);
    worlds.forEach((w,i)=>{
      if(i>=count)return;
      const selected=active===w&&(hovered===w||focused===w||tapped===w);const damping=reduced?1:1-Math.exp(-dt*4);w.speedFactor=THREE.MathUtils.lerp(w.speedFactor,selected?portfolioHeroConfig.hoverSlowdown:active&&(hovered||focused||tapped)?.72:1,damping);w.emphasis=reduced?0:THREE.MathUtils.lerp(w.emphasis,selected?1:0,damping);w.avoidance=THREE.MathUtils.lerp(w.avoidance,w.avoidanceTarget,damping);
      if(qaTime!==null)w.angle=w.p.phase+qaTime*Math.PI*2/w.p.orbitDuration*w.p.direction;
      else if(!reduced)w.angle+=dt*Math.PI*2/w.p.orbitDuration*w.p.direction*(1-scroll*portfolioHeroConfig.orbitScrollSlowdown)*w.speedFactor*w.avoidance;
      w.mesh.position.copy(safeOrbits.position(w.p,w.angle)).multiplyScalar(1+scroll*.035);if(qaTime!==null)w.spin=w.p.phase*.1+qaTime/w.p.axialDuration;else if(!reduced)w.spin+=dt/w.p.axialDuration;w.u.turn.value=w.spin;const depth=THREE.MathUtils.clamp(w.mesh.position.z/.9,-1,1);w.focusDim=THREE.MathUtils.lerp(w.focusDim,active&&active!==w&&(hovered||focused||tapped)?.93:1,damping);w.u.emphasis.value=w.emphasis;w.mesh.scale.setScalar(portfolioHeroConfig.moonRadius*w.p.scale*(1+w.emphasis*.03));w.u.dim.value=(.92+depth*.10)*w.focusDim*(1+w.emphasis*.05);w.air.uniforms.strength.value=w.p.atmosphere*.45*(1+w.emphasis*.12)*(.90+depth*.12);
    });
    if(debugOrbits?.visible)debugMoons.forEach((m,i)=>{m.position.copy(worlds[i].mesh.position);m.visible=i<count;});
    system.updateMatrixWorld(true);
    globe.getWorldPosition(planetPosition);
    sunPosition.copy(light).multiplyScalar(lightingConfig.sunDistance*scale).add(planetPosition);
    uniforms.sunDirection.value.copy(sunPosition).sub(planetPosition).normalize();
    worlds.forEach((w,i)=>{
      if(i>=count)return;
      w.mesh.getWorldPosition(w.position);
      w.u.sunDirection.value.copy(sunPosition).sub(w.position).normalize();
      const distance=w.u.planetDirection.value.copy(planetPosition).sub(w.position).length();
      w.u.planetDirection.value.normalize();
      const target=eclipseAt(w.position,sunPosition,planetPosition,portfolioHeroConfig.planetRadius*scale,portfolioHeroConfig.moonRadius*w.p.scale*scale);
      w.eclipse=w.eclipse===null||reduced||qaTime!==null?target:THREE.MathUtils.lerp(w.eclipse,target,1-Math.exp(-dt/lightingConfig.eclipseResponse));
      w.u.eclipse.value=w.eclipse;
      w.u.planetshine.value=lightingConfig.planetshineStrength*Math.pow(portfolioHeroConfig.planetRadius*scale/distance,3.);
    });
    const projected=[];
    worlds.forEach((w,i)=>{
      if(i>=count)return;w.mesh.getWorldPosition(w.position);const p=w.position.clone().project(camera);const x=(p.x*.5+.5)*width,y=(-p.y*.5+.5)*height;
      raycaster.setFromCamera(new THREE.Vector2(p.x,p.y),camera);const nearest=raycaster.intersectObjects([globe,w.mesh],false)[0];
      w.occluded=nearest?.object===globe;w.eligible=nearest?.object===w.mesh&&x>(small?width*.12:width*.46)&&x<width-25&&y>height*.16&&y<height*(width<992?.90:.78);
      if((width>=992&&x<width*.46)||y<height*.14){w.u.dim.value*=.03;w.air.uniforms.strength.value*=.03;}
      w.screen={x,y};
      if(w.eligible&&w.position.z>system.position.z)projected.push(w);
    });
    const engaged=active&&(hovered||focused||tapped);
    if(engaged&&(focused||tapped)){anchoredPreview();}
    else if(engaged&&previewHovered&&!active.eligible){preview.style.opacity='1';preview.setAttribute('aria-hidden','false');preview.tabIndex=0;connector.style.opacity='0';}
    else if(engaged&&active.eligible){
      const p=active.screen,pw=preview.offsetWidth,ph=preview.offsetHeight,box=root.getBoundingClientRect();
      const planet=planetPosition.clone().project(camera),px=(planet.x*.5+.5)*width,py=(-planet.y*.5+.5)*height;
      const radiusPx=height*wScreenRadius(active),gap=portfolioHeroConfig.previewGap;
      const length=Math.hypot(p.x-px,p.y-py)||1,dx=(p.x-px)/length,dy=(p.y-py)/length;
      const radial=(ux,uy,spacing=gap)=>{const d=radiusPx+spacing+Math.min(Math.abs(ux)>.001?pw/2/Math.abs(ux):Infinity,Math.abs(uy)>.001?ph/2/Math.abs(uy):Infinity);return [p.x+ux*d-pw/2,p.y+uy*d-ph/2];};
      const rect=el=>{const r=el.getBoundingClientRect();return {x:r.left-box.left-8,y:r.top-box.top-8,w:r.width+16,h:r.height+16};};
      const copyBounds=[...root.querySelectorAll('.breadcrumb-inner .title,.breadcrumb-inner .description')].map(el=>{const r=rect(el);r.w+=24;return r;});
      const blocked=[...copyBounds,{x:0,y:0,w:width,h:Math.max(height*.14,110)},{x:0,y:height*.70,w:width,h:height*.30}];
      if(width>=992)blocked.push({x:0,y:height*.14,w:width*.47,h:height*.56});
      else blocked.push(rect(root.querySelector('.breadcrumb-inner')));
      document.querySelectorAll('header,[id*="chatbot"],[class*="chat-toggle"],[class*="chat-launcher"],.lp-hero-scroll').forEach(el=>{if(el.getBoundingClientRect().width)blocked.push(rect(el));});
      blocked.push({x:width-110,y:Math.min(height,innerHeight-box.top)-115,w:110,h:115});
      const overlaps=(x,y,r)=>x<r.x+r.w&&x+pw>r.x&&y<r.y+r.h&&y+ph>r.y;
      const margin=24,top=Math.max(margin,margin-box.top),bottom=Math.min(height,innerHeight-box.top)-margin;
      const moonGap=(x,y)=>Math.hypot(p.x-THREE.MathUtils.clamp(p.x,x,x+pw),p.y-THREE.MathUtils.clamp(p.y,y,y+ph))-radiusPx;
      const valid=(x,y)=>x>=margin&&x+pw<=width-margin&&y>=top&&y+ph<=bottom&&moonGap(x,y)>=15&&!blocked.some(r=>overlaps(x,y,r));
      const direction=(x,y)=>{const d=Math.hypot(x,y)||1;return [x/d,y/d];};
      const directions=[[dx,dy],direction(dx,dy-.8),direction(dx,dy+.8),direction(dx,dy-1.6),direction(dx,dy+1.6),[-1,0],[1,0],[0,-1],[0,1],direction(1,-1),direction(-1,-1),direction(1,1),direction(-1,1)];
      const pr=height*portfolioHeroConfig.planetRadius*scale/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*Math.sqrt(camera.position.distanceToSquared(planetPosition)-Math.pow(portfolioHeroConfig.planetRadius*scale,2)));
      const candidates=[];
      directions.forEach(([ux,uy],rank)=>[gap,24,36].forEach(spacing=>{
        const point=radial(ux,uy,spacing);
        // Edge adjustments retain a real moon-to-card gap; invalid candidates are rejected.
        let x=THREE.MathUtils.clamp(point[0],width>=992?Math.max(margin,width*.47):margin,width-pw-margin),y=THREE.MathUtils.clamp(point[1],top,bottom-ph);
        if(width>=992)for(const r of copyBounds)if(overlaps(x,y,r))x=Math.max(x,r.x+r.w);
        for(const r of blocked)if(r.x<=0&&r.x+r.w>=width&&overlaps(x,y,r))y=r.y<top+height*.2?Math.max(y,r.y+r.h):Math.min(y,r.y-ph);
        if(!valid(x,y))return;
        const distance=Math.hypot(px-THREE.MathUtils.clamp(px,x,x+pw),py-THREE.MathUtils.clamp(py,y,y+ph));
        const overlap=Math.max(0,pr+8-distance),illuminated=Math.max(0,(x+pw/2-px)/pr);
        const score=(overlap>0?10000+overlap*30+illuminated*300:0)+rank*8+Math.max(0,moonGap(x,y)-35)*2+Math.hypot(x-point[0],y-point[1])*.15;
        candidates.push({point:[x,y],score});
      }));
      candidates.sort((a,b)=>a.score-b.score);
      let target=candidates[0]?.point;
      // Keep the contextual card still while the connector tracks the slowed world.
      // Reposition only when screen exclusions or a stretched connection require it.
      if(placementLock&&valid(placementLock.x,placementLock.y)&&moonGap(placementLock.x,placementLock.y)<=56)target=[placementLock.x,placementLock.y];
      else if(target)placementLock={x:target[0],y:target[1]};
      if(target){
        const [x,y]=target,damping=reduced?1:1-Math.exp(-dt*7.5);
        const wasHidden=preview.getAttribute('aria-hidden')==='true';
        const next=previewPosition.clone().lerp(new THREE.Vector2(x,y),damping);
        if(wasHidden||!valid(next.x,next.y))previewPosition.set(x,y);else previewPosition.copy(next);
        preview.style.left=`${previewPosition.x}px`;preview.style.top=`${previewPosition.y}px`;
        const cx=THREE.MathUtils.clamp(p.x,previewPosition.x,previewPosition.x+pw),cy=THREE.MathUtils.clamp(p.y,previewPosition.y,previewPosition.y+ph);
        const distance=Math.hypot(cx-p.x,cy-p.y),ux=(cx-p.x)/distance,uy=(cy-p.y)/distance;
        connector.style.left=`${p.x+ux*radiusPx}px`;connector.style.top=`${p.y+uy*radiusPx}px`;
        connector.style.width=`${Math.max(0,distance-radiusPx)}px`;connector.style.transform=`rotate(${Math.atan2(uy,ux)}rad)`;
        connector.style.opacity='.40';
      preview.style.setProperty('--sun-reflection',`${.04+.09*active.eclipse*Math.max(active.u.sunDirection.value.z,0)}`);
      preview.style.opacity=performance.now()<swapUntil?'0':'1';preview.style.transform='translateY(0) scale(1)';preview.setAttribute('aria-hidden','false');preview.tabIndex=0;
      }else hidePreview();
    }else hidePreview();
    meteors.update(dt,reduced,firstFrameRendered&&root.dataset.scene==='ready');
    renderer.render(scene,camera);
    // The atlas is awaited above; reveal only after the completed scene has rendered.
    if(!firstFrameRendered){
      firstFrameRendered=true;
      readyFrame=requestAnimationFrame(()=>{if(root.dataset.scene!=='fallback'){root.dataset.scene='ready';canvas.classList.add('is-ready');}});
    }
    root.dataset.cloudRotation=dustShells[0].u.turn.value;root.dataset.hazeRotation=dustShells[1].u.turn.value;root.dataset.rotation=uniforms.turn.value;root.dataset.orbitTime=time;root.dataset.worldCount=count;root.dataset.worlds=JSON.stringify(worlds.slice(0,count).map(w=>({id:w.p.id,angle:w.angle,z:w.position.z,visible:w.eligible,occluded:w.occluded,x:w.screen?.x,y:w.screen?.y,eclipse:w.eclipse,sun:w.u.sunDirection.value.toArray(),planetshine:w.u.planetshine.value,phase:(1+w.u.sunDirection.value.dot(camera.position.clone().sub(w.position).normalize()))*.5})));root.dataset.reducedMotion=reduced;
    cost=cost*.96+(performance.now()-begin)*.04;if(++frames%240===0&&cost>19&&renderer.getPixelRatio()>1){renderer.setPixelRatio(Math.max(1,renderer.getPixelRatio()*.85));renderer.setSize(width,height,false);}
  });
  // Local review only: render real geometry at sampled orbital times.
  if(development)window.portfolioSceneQA={setTime(seconds){qaTime=seconds===null?null:THREE.MathUtils.clamp(Number(seconds)||0,0,21600);redraw();},state(){return worlds.map(w=>({id:w.p.id,local:w.mesh.position.toArray(),radius:w.mesh.scale.x,screenRadius:height*wScreenRadius(w),screen:w.screen,eligible:w.eligible,occluded:w.occluded,eclipse:w.eclipse,phase:(1+w.u.sunDirection.value.dot(camera.position.clone().sub(w.position).normalize()))*.5}));}};
  // Bind once, outside the render loop; the existing controller owns cleanup.
  lifecycle.reduced.addEventListener('change',()=>{targetParallax.set(0,0);parallax.set(0,0);},{signal});
  window.addEventListener('scroll',()=>{if(lifecycle.reduced.matches)return;root.style.setProperty('--universe-scroll',THREE.MathUtils.clamp(-root.getBoundingClientRect().top/(height*.35),0,1));},{passive:true,signal});
  const initialFocus=document.activeElement;
  if(initialFocus?.matches('.universe-project-links a')){focused=worlds.find(w=>w.p.id===initialFocus.dataset.project);choose(focused);redraw();}


}
