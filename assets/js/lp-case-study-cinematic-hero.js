import {THREE,createHeroRenderer,loadGeology,heroLifecycle} from './hero-3d-core.js';
import {createHeroPlanet,createHeroValleyHaze} from './hero-planet-system.js';
import {createHeroMeteors} from './lp-meteor-system.js';
import {CASE_STUDY_WORLDS,validateCaseStudyWorlds,seedHash} from './lp-case-study-worlds.js';

async function mount(root){
 if(root.dataset.heroMounted)return;root.dataset.heroMounted='true';const world=CASE_STUDY_WORLDS[root.dataset.caseStudy];if(!world){console.error('Unknown case-study world:',root.dataset.caseStudy);return;}
 root.style.setProperty('--world-nebula',world.nebulaColor);root.dataset.scene='loading';
 const canvas=document.createElement('canvas');canvas.className='lp-case-study-planet';canvas.setAttribute('aria-hidden','true');root.prepend(canvas);const terrain=document.createElement('div');terrain.className='lp-case-study-horizon';terrain.setAttribute('aria-hidden','true');canvas.after(terrain);if(!root.querySelector('.ewallet-hero-transition')){const transition=document.createElement('div');transition.className='ewallet-hero-transition';transition.setAttribute('aria-hidden','true');terrain.after(transition);}
 const fallback=document.createElement('div');fallback.className='lp-case-study-fallback';fallback.style.setProperty('--case-fallback-desktop',`url('${new URL(`assets/images/hero-cinematic/case-${world.id}.webp`,document.baseURI).href}')`);fallback.style.setProperty('--case-fallback-mobile',`url('${new URL(`assets/images/hero-cinematic/case-${world.id}-mobile.webp`,document.baseURI).href}')`);root.prepend(fallback);
 let observer;let renderer,scene,lifecycle,meteors,atlas,disposed=false,paused=false,inViewport=true,elapsed=0,rotation=0,frames=0,cost=16,frameMS=16.7,previousFrame=0,last=0;
 const artInsets=new WeakMap();
 let mobile=innerWidth<700;const tilt=world.axialTilt*Math.PI/180;
 const resources=new Set();
 function dispose(){if(disposed)return;disposed=true;observer?.disconnect();document.removeEventListener('visibilitychange',visibility);lifecycle?.dispose();meteors?.dispose();const geometries=new Set(),materials=new Set();scene?.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material);});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());resources.forEach(t=>t.dispose());renderer?.dispose();canvas.removeEventListener('webglcontextlost',lost);if(window.lpCaseStudyHeroDebug?.root===root)delete window.lpCaseStudyHeroDebug;}
 function visibility(){root.dataset.animation=document.hidden||paused||!inViewport?'paused':'running';}
 document.addEventListener('visibilitychange',visibility);
 function lost(e){e.preventDefault();root.dataset.scene='fallback';dispose();}
 canvas.addEventListener('webglcontextlost',lost);
 try{
 for(const image of root.querySelectorAll('.ewallet-hero-illustration')){
 await image.decode();const sample=document.createElement('canvas');sample.width=160;sample.height=160;const context=sample.getContext('2d',{willReadFrequently:true});context.drawImage(image,0,0,160,160);const pixels=context.getImageData(0,0,160,160).data;let left=159,right=0,top=159,bottom=0;
 for(let y=0;y<160;y++)for(let x=0;x<160;x++)if(pixels[(y*160+x)*4+3]>220){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}
 const bands=[];for(let band=0;band<8;band++){let l=159,r=0,t=159,b=0;for(let y=band*20;y<(band+1)*20;y++)for(let x=0;x<160;x++)if(pixels[(y*160+x)*4+3]>220){l=Math.min(l,x);r=Math.max(r,x);t=Math.min(t,y);b=Math.max(b,y);}if(r>=l)bands.push({left:l/160,right:(r+1)/160,top:t/160,bottom:(b+1)/160});}artInsets.set(image,{left:left/160,right:(159-right)/160,top:top/160,bottom:(159-bottom)/160,bands});
 }
 renderer=createHeroRenderer(canvas,mobile?1.25:1.75);scene=new THREE.Scene();const camera=new THREE.OrthographicCamera(-1,1,1,-1,.1,100);camera.position.z=10;
 const environment=['assets/images/hero-cinematic/space.webp','assets/images/bg/footerbg.webp'].map(src=>{const image=new Image();image.src=src;return image.decode();});[atlas]=await Promise.all([loadGeology(renderer,mobile).then(texture=>{if(disposed)texture.dispose();else resources.add(texture);return texture;}),...environment]);if(disposed){atlas.dispose();return;}resources.add(atlas);
 const light=new THREE.Vector3(...world.sunPosition,.52).normalize();
 const globe=createHeroPlanet({scene,atlas,light,mobile,config:{relief:world.relief,displacement:.003,sunIntensity:1.1,surfaceExposure:.68,cloudSpeed:world.cloudSpeed,hazeSpeed:world.hazeSpeed,cloudOpacity:world.cloudDensity,highHazeOpacity:world.cloudDensity*.4,atmosphereIntensity:world.atmosphereDensity,rimIntensity:1,atmosphereThickness:world.atmosphereThickness,outerAtmosphereIntensity:world.outerAtmosphereIntensity,outerAtmosphereScale:1.028,sunGlow:.38}});
 const color=c=>{const v=new THREE.Color(c).convertLinearToSRGB();return `vec3(${v.r.toFixed(5)},${v.g.toFixed(5)},${v.b.toFixed(5)})`;};
 // Seed offsets affect atlas minerals/clouds; family fields shape local rotating terrain.
 const seed=world.worldSeed,reference=world.id==='ewallet'?seedHash('lp-world-v1:ewallet'):0,offset=[((seed%4093)-(reference%4093))/4093,(((seed>>>12)%4093)-((reference>>>12)%4093))/4093];
 const f=n=>Number(n).toFixed(8);
 const geologyTransform=shader=>{
  shader=shader.replace('vec3 a=vec3(n.x*.990+n.y*.14,-n.x*.14+n.y*.990,n.z);',`vec3 a=vec3(n.x*${f(Math.cos(tilt))}+n.y*${f(Math.sin(tilt))},-n.x*${f(Math.sin(tilt))}+n.y*${f(Math.cos(tilt))},n.z);`);
  // Preserve the approved E-Wallet atlas sampling. Its seed still determines particulate haze.
  shader=shader.replace('texture2D(atlas,warpUV(p))',world.id==='ewallet'?`texture2D(atlas,warpUV(p+vec2(${f(offset[0])},${f(offset[1])})))`:`texture2D(atlas,warpUV(vec2(p.x+${f(offset[0])},1.-abs(1.-mod(p.y+${f(offset[1])},2.)))))`);
  const base=`rock(vec2(p.x*${f(world.terrainScale)},p.y))*.66+rock(vec2(p.x*${f(2*world.craterScale)}+.17,p.y*${f(world.ridgeDensity)}+.08))*.34`;
  if(world.id==='ewallet')return shader.replace('return rock(p)*.78+rock(vec2(p.x*2.+.17,p.y*.81+.08))*.22;',`return ${base};`);
  const kind=world.geologyProfile,organic=kind==='CONSUMER_ORGANIC',structured=kind==='ENTERPRISE_STRUCTURED',rugged=kind==='OUTDOOR_RUGGED',fractured=kind==='TECH_SECURITY_FRACTURED',calm=kind==='HEALTHCARE_CALM';
  const formation=`float h=${base};float plate=rock(vec2(p.x*${f(calm?.65:structured?1.8:.9)},p.y*${f(organic?.60:structured?2.2:1.1)}));float ridge=1.-abs(plate*2.-1.);`;
  // Periodic spherical fields keep crater and ridge formations attached to terrain.
  const craters=`vec2 cells=vec2(fract(p.x)*12.,p.y*8.);vec2 cell=floor(cells);vec2 local=fract(cells);float hash=fract(sin(dot(cell,vec2(127.1,311.7))+${f(seed%8191)})*43758.5453);vec2 center=vec2(.25)+vec2(hash,fract(hash*7.13))*.5;float d=length(local-center);float crater=(smoothstep(.20,.23,d)-smoothstep(.23,.29,d))*.045-(1.-smoothstep(.12,.22,d))*.06;h+=crater*step(hash,${f(world.craterDensity)});`;
  const shape=calm?'h=mix(h,plate,.70);':organic?'h=mix(h,plate,.42);h+=sin(p.y*24.+plate*7.)*.065;':structured?'h=mix(h,floor(plate*7.)/7.,.42);':rugged?'h=mix(h,plate,.28);h-=pow(1.-ridge,4.)*.20;':fractured?'h-=pow(1.-ridge,6.)*.23;':kind==='COMMERCE_DUSTY'?'h=mix(h,plate,.36);h-=pow(1.-plate,3.)*.10;':'h=mix(h,plate,.30);';
  return shader.replace('return rock(p)*.78+rock(vec2(p.x*2.+.17,p.y*.81+.08))*.22;',`${formation}${shape}h+=pow(ridge,${rugged||fractured?'4.':'2.'})*${f(world.ridgeStrength*.08)};${craters}return clamp(h,0.,1.);`);
 };

 globe.group.traverse(o=>{if(o.material?.isShaderMaterial){o.material.vertexShader=geologyTransform(o.material.vertexShader);o.material.fragmentShader=geologyTransform(o.material.fragmentShader);o.material.onBeforeCompile=()=>{};}});
 globe.planet.material.fragmentShader=globe.planet.material.fragmentShader
  .replace('mix(n,detail,.55)',`mix(n,detail,${world.normalStrength.toFixed(3)})`)
  .replace('vec3 darkStone=vec3(.055,.073,.091);',`vec3 darkStone=mix(vec3(.055,.073,.091),${color(world.planetBaseColor)},.20);`)
  .replace('albedo=mix(albedo,geological*.72,.25);',`albedo=mix(albedo,geological*.72,${world.id==='ewallet'?'.30':'.18'});float mineralRegion=smoothstep(.25,.64,rock(vec2(m.x*.82+.23,m.y*.72+.12)));albedo=mix(albedo,${color(world.mineralPrimary)}*${world.id==='ewallet'?'1.':'1.45'},${world.id==='ewallet'?'mineral*.18':'(.12+mineralRegion*.36)'});albedo=mix(albedo,${color(world.mineralSecondary)},smoothstep(.40,.72,elevation)*${world.id==='ewallet'?'0.':'.20'});`)
  .replace('dust*.10',`dust*${world.dustAmount.toFixed(3)}`)
  .replace('mix(.90,.78,smoothstep(.28,.65,elevation))',`mix(${world.roughness.toFixed(3)},.76,smoothstep(.28,.65,elevation))`);
 for(const shell of [globe.air,globe.outerAir])shell.material.fragmentShader=shell.material.fragmentShader
  .replace('float rayleigh=fresnel*(day+.33*max(v.y,0.));','float alignment=dot(normalize(v.xy),normalize(sunDirection.xy));float angular=pow(smoothstep(-.17,1.,alignment),3.);float rayleigh=fresnel*day*angular;')
  .replace('mie*.65','mie*.65*angular').replace('smoothstep(.05,.8,day)',world.id==='ewallet'?'smoothstep(.05,.8,day)':'smoothstep(.25,.98,day)').replace('vec3(.35,.48,.58)',color(world.atmosphereColor));
 for(const shell of [globe.clouds,globe.haze]){
  const material=globe.group.children.find(o=>o.material?.uniforms===shell.u)?.material;
  if(material)material.fragmentShader=material.fragmentShader.replace('vec3(.10,.13,.16)',`mix(vec3(.10,.13,.16),${color(world.cloudColor)},.15)`);
 }
 globe.sun.material.onBeforeCompile=()=>{};globe.sun.material.fragmentShader=globe.sun.material.fragmentShader.replace('i<6','i<4').replace('direction=-.85+j*.31','direction=1.02+j*.42').replace('(.024+j*.005)','(.042+j*.008)').replace('glare*4.','glare*2.');
 const fog=createHeroValleyHaze({scene,speeds:[.004+(seed%17)*.0001,.006+(seed%13)*.0001,.002+(seed%11)*.0001],opacities:[.035,.025,.015]});scene.children.at(-1).material.fragmentShader=scene.children.at(-1).material.fragmentShader.replace('float n=fog(vec2(p.x*',`float n=fog(vec2(${(offset[0]*9).toFixed(5)}+p.x*`);scene.children.at(-1).renderOrder=20;scene.children.at(-1).material.depthTest=false;
 function regions(e,r){if(e.matches('.ewallet-kicker,.ewallet-hero h1,.ewallet-hero-lede,.project-case-study-kicker,.project-case-study-title,.project-case-study-lede')){const range=document.createRange();range.selectNodeContents(e);return [...range.getClientRects()].map(b=>({left:b.left,right:b.right,top:b.top,bottom:b.bottom}));}const a=artInsets.get(e);return a?.bands.map(b=>({left:r.left+b.left*r.width-5,right:r.left+b.right*r.width+5,top:r.top+b.top*r.height-5,bottom:r.top+b.bottom*r.height+5}));}
 let width=1,height=1,radius=1;
 function resize(){width=root.clientWidth;height=root.clientHeight;mobile=width<700;if(mobile&&renderer.getPixelRatio()>1.25)renderer.setPixelRatio(1.25);camera.left=-width/height;camera.right=width/height;camera.top=1;camera.bottom=-1;camera.updateProjectionMatrix();renderer.setSize(width,height,false);radius=mobile?width/height*.88:world.planetScale*2;globe.group.position.set((world.planetPosition[0]*2-1)*width/height,1-world.planetPosition[1]*2,0);if(mobile)globe.group.position.set(width/height*.95,-.34,0);globe.planet.scale.setScalar(radius);for(const o of globe.group.children.slice(1))o.scale.multiplyScalar(radius/(o.userData.radius||1));globe.group.children.slice(1).forEach(o=>o.userData.radius=radius);globe.sun.position.set(globe.group.position.x+light.x/Math.hypot(light.x,light.y)*radius*.995,globe.group.position.y+light.y/Math.hypot(light.x,light.y)*radius*.995,-radius*1.5);globe.sun.scale.setScalar(radius*.85);scene.updateMatrixWorld(true);}
 function target(){
  const box=root.getBoundingClientRect(),rects=[...root.querySelectorAll(world.safeArea)].flatMap(e=>{const r=e.getBoundingClientRect();return regions(e,r)||[r];});
  for(let i=0;i<500;i++){const n=new THREE.Vector3(Math.random()*1.5-.75,Math.random()*1.4-.3,0);if(n.x*n.x+n.y*n.y>.78)continue;n.z=Math.sqrt(1-n.x*n.x-n.y*n.y);const p=globe.group.localToWorld(n.clone().multiplyScalar(radius)).project(camera),x=(p.x*.5+.5)*width,y=(-p.y*.5+.5)*height;if(x<width*.50||x>width*.995||y<height*.11||y>height*.69)continue;if(rects.some(r=>x>r.left-box.left-18&&x<r.right-box.left+18&&y>r.top-box.top-18&&y<r.bottom-box.top+18))continue;return n.toArray();}return null;
 }
 resize();meteors=createHeroMeteors({system:globe.group,globe:globe.planet,camera,renderer,root,uniforms:globe.uniforms,page:'CaseStudy',firstDelay:.5,cadenceScale:1/.8,eventKind:n=>n%24===0?'impact':n%12===0?'skim':'flyby',protectedSelector:world.safeArea,protectedRegions:regions,protectedInset:(e,r)=>{const a=artInsets.get(e);return a?{left:a.left*r.width,right:a.right*r.width,top:a.top*r.height,bottom:a.bottom*r.height}:null},screenBounds:{left:.50,right:.995,top:.10,bottom:.70},axisTilt:tilt,targetNormal:target,impactDirection:()=>[-.15,-.15,-1],failedEventFallback:true,config:{skimArc:mobile?.35:.65,skimDirection:[1,0],intensity:world.meteorIntensity,mobileDebrisCount:4,debrisCount:8}});
 lifecycle=heroLifecycle(root,resize,(_time,dt,reduced)=>{
  if(paused||!inViewport)return;elapsed+=dt;rotation+=dt/world.rotationSeconds;globe.uniforms.turn.value=rotation;globe.clouds.u.cloudTurn.value=rotation*world.cloudSpeed;globe.haze.u.cloudTurn.value=rotation*world.hazeSpeed;
  globe.air.material.uniforms.time.value=globe.outerAir.material.uniforms.time.value=globe.sun.material.uniforms.time.value=fog.time.value=elapsed;
  meteors.update(dt,reduced,true);const start=performance.now();if(previousFrame&&start-previousFrame<150)frameMS=frameMS*.95+(start-previousFrame)*.05;previousFrame=start;renderer.render(scene,camera);cost=cost*.95+(performance.now()-start)*.05;frames++;
  if(frames%240===0&&(cost>20||frameMS>23)&&renderer.getPixelRatio()>1)renderer.setPixelRatio(Math.max(1,renderer.getPixelRatio()*.8));
  root.dataset.scene='ready';root.dataset.frames=frames;root.dataset.rotation=globe.uniforms.turn.value;root.dataset.dpr=renderer.getPixelRatio();root.dataset.reducedMotion=reduced;last=elapsed;
 });
 if(/^(localhost|127\.0\.0\.1)$/.test(location.hostname))window.lpCaseStudyHeroDebug={root,world,getWorldConfig:()=>structuredClone(world),getRotation:()=>rotation*Math.PI*2,getRotationSeconds:()=>world.rotationSeconds,validate:()=>validateCaseStudyWorlds(),forceMeteor:()=>window.forceCaseStudyMeteor(),forceImpact:()=>window.forceCaseStudyMeteorImpact(),forceSkim:()=>window.forceCaseStudyMeteorSkim(),pause(){paused=true;root.dataset.animation='paused';},resume(){paused=false;visibility();lifecycle.redraw();},stats:()=>({frames,elapsed:last,cost,meteors:JSON.parse(root.dataset.meteors||'{}')})};
 observer=new IntersectionObserver(([e])=>{inViewport=e.isIntersecting&&e.intersectionRatio>=.08;visibility();if(inViewport&&!paused)lifecycle.redraw();},{threshold:[0,.08]});observer.observe(root);
 addEventListener('pagehide',e=>{if(!e.persisted)dispose();},{once:true});
 }catch(error){console.error('Case-study hero:',error);root.dataset.scene='fallback';dispose();}
}
for(const root of document.querySelectorAll('.case-study-cinematic-hero[data-case-study]'))mount(root);
