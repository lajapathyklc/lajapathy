import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createEngineExhaust } from './exhaust-journey.js';
import { createWorldSystem, WORLD_DEFINITIONS } from './world-system.js';
import { LANDING_DURATION, sampleLanding, sampleCamera, setLandingHeight } from './landing-controller.js';
import { createLandingGear } from './landing-gear.js';
import { brandSpacecraft } from './ship-branding.js';
import { createFlightEnvironment } from './flight-environment.js';
import { createJourneyAudio } from './resume-journey-audio.js';
import { CHAPTERS } from './chapters.js';
import './resume-journey.css';

const MODEL_URL=new URL('../../assets/models/lp-explorer-stage1.glb',import.meta.url).href;
const $=selector=>document.querySelector(selector),canvas=$('#journey-canvas'),viewport=$('.journey-viewport'),motionQuery=matchMedia('(prefers-reduced-motion: reduce)');
const soundToggle=$('#journey-sound'),soundStatus=$('#journey-sound-status');
const journeyAudio=createJourneyAudio(error=>{
 console.warn('[LP Resume Journey audio]',error);
 setSoundToggle(false);soundStatus.textContent='Sound unavailable; the journey continues silently.';
});
const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(42,1,.1,2000),shipPivot=new THREE.Group(),worlds=createWorldSystem(scene),clock=new THREE.Clock(false),abort=new AbortController(),raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
const cameraFill=new THREE.DirectionalLight(0xd5e3ff,1.35);scene.add(cameraFill,cameraFill.target);
scene.background=null;scene.fog=new THREE.FogExp2(0x050609,.0007);shipPivot.name='ResumeJourneyLandingTransform';scene.add(shipPivot);
let renderer,model,exhaust,gear,branding,environment,environmentTarget,frame=null,lastRender=null,modelStats=null,ready=false,disposed=false,contextLost=false,errorMessage=null,elapsed=0,playback='idle',hoverTime=0,renderedFrames=0,loadedBytes=0,scrollIntent=0,scrollLocked=false,compact=false;
const errors=[];
let currentIndex=0,fromIndex=null,startTime=0,lastTelemetry=0,touchStart=null,completedAt=null,openingSpin=0;
const OPENING_SPIN_RATE=Math.PI*2/40;


function state(){return sampleLanding(elapsed,fromIndex,currentIndex);}
function openingShot(){return fromIndex===null&&playback==='idle';}
function openingWeight(){return fromIndex===null?1-THREE.MathUtils.smootherstep(state().progress,0,.30):0;}
function isBusy(){return playback==='playing'||playback==='paused';}
function applyPose(){
 const s=state();shipPivot.position.copy(s.position);shipPivot.quaternion.copy(s.quaternion);
 if(!motionQuery.matches){const fade=openingWeight(),spin=openingShot()?hoverTime*OPENING_SPIN_RATE:openingSpin*fade;shipPivot.position.y+=Math.sin(hoverTime*.8)*.035*fade;shipPivot.rotateY(spin);shipPivot.rotateZ(Math.sin(hoverTime*.55)*.003*fade);}
 gear?.update(s.progress,fromIndex,playback);shipPivot.updateMatrixWorld(true);
}
function applyCamera(){
 const s=state(),rig=sampleCamera(s.progress,s.position,compact,fromIndex,currentIndex,camera.aspect);
 if(!motionQuery.matches&&openingWeight()>0){const offset=rig.position.clone().sub(s.position);offset.applyAxisAngle(new THREE.Vector3(0,1,0),Math.sin(hoverTime*.18)*.022*openingWeight());rig.position.copy(s.position).add(offset);}
 camera.position.copy(rig.position);camera.fov=rig.fov;camera.lookAt(rig.target);camera.updateProjectionMatrix();cameraFill.position.copy(camera.position).add(new THREE.Vector3(0,8,0));cameraFill.target.position.copy(s.position);
}
function statusCopy(){
 const number=String(currentIndex+1).padStart(2,'0');
 if(playback==='landed')return `Touchdown complete · ${CHAPTERS[currentIndex].name}`;
 if(playback==='playing')return `${state().phase.toLowerCase()} · ${Math.round(state().progress*100)}%`;
 if(playback==='paused')return 'Flight paused · continue when ready';
 if(motionQuery.matches)return 'Reduced motion · Ignite to reveal the first chapter';
 return 'ENGINES LIVE · READY TO EXPLORE';
}
function spacecraftBounds(){
 const box=new THREE.Box3();shipPivot.updateMatrixWorld(true);
 shipPivot.traverse(node=>{if(!node.isMesh)return;let ancestor=node;while(ancestor&&ancestor!==shipPivot){if(!ancestor.visible||ancestor.name.startsWith('EngineExhaust_'))return;ancestor=ancestor.parent;}if(!node.geometry.boundingBox)node.geometry.computeBoundingBox();box.union(node.geometry.boundingBox.clone().applyMatrix4(node.matrixWorld));});return box;
}
function snapshot(){
 const s=state(),buffer=renderer?.getDrawingBufferSize(new THREE.Vector2());
 const shipBox=model?spacecraftBounds():null,contactY=worlds.landingSite?.contactY;
 return {ready,error:errorMessage,contextLost,prototype:'Resume Journey · Eight Worlds',playback,chapter:currentIndex+1,from:fromIndex===null?null:fromIndex+1,
 flight:{...s,position:s.position.toArray(),quaternion:s.quaternion.toArray(),tangent:s.tangent.toArray(),visibleDuration:LANDING_DURATION,actualDuration:completedAt===null?null:(completedAt-startTime)/1000},
 opening:{configuration:'assembled',assemblySequence:false,brandingDecals:branding?.decals??0},
 effects:{...environment?.parallax,flameTime:exhaust?.time??0,flameThrust:exhaust?.thrust??0,...worlds.effects},landing:{gearType:gear?.type,gearDeployment:gear?.deployment??0,bayDoors:gear?.doorOpen??0,heading:WORLD_DEFINITIONS[CHAPTERS[currentIndex].id].landingHeading,anchor:WORLD_DEFINITIONS[CHAPTERS[currentIndex].id].landingAnchor,platformTop:contactY,shipBounds:shipBox?{min:shipBox.min.toArray(),max:shipBox.max.toArray()}:null,clearance:shipBox?shipBox.min.y-contactY:null},
 camera:{position:camera.position.toArray(),quaternion:camera.quaternion.toArray(),fov:camera.fov,aspect:camera.aspect},
 world:{id:CHAPTERS[currentIndex].id,actual3DGeometry:true,activeDestinations:worlds.planets.length,horizonVisible:!!worlds.active?.visible},
 renderer:renderer?{count:1,dpr:renderer.getPixelRatio(),drawingBuffer:{width:buffer.x,height:buffer.y},calls:lastRender?.calls??null,triangles:lastRender?.triangles??null,frames:renderedFrames}:null,
 lifecycle:{visible:!document.hidden,reducedMotion:motionQuery.matches,compact},errors:[...errors]};
}
function updateChapter(){
 const c=CHAPTERS[currentIndex],number=String(currentIndex+1).padStart(2,'0');
 $('.chapter-kicker').textContent=`WORLD ${number} / ${c.name.toUpperCase()}`;
 const year=$('.chapter-year');year.replaceChildren(document.createTextNode(c.years[0]));
 if(c.years[1])year.append(document.createTextNode(`–${c.years[1]}`));
 $('#chapter-title').textContent=c.title;$('.chapter-story').textContent=c.story;
 const list=$('.chapter-highlights ul');list.replaceChildren();
 for(const [label,text] of c.highlights){const li=document.createElement('li'),span=document.createElement('span');span.textContent=label;li.append(span,document.createTextNode(text));list.append(li);}
 $('#chapter-select').value=String(currentIndex);
 canvas.setAttribute('aria-label',`Spacecraft journey to ${c.name}`);
 viewport.setAttribute('aria-label',`Planet ${number}: ${c.name}`);
}
function publish(){
 const currentState=state();journeyAudio.sync(playback,currentState.progress,currentState.thrust);
 $('#journey-status').textContent=statusCopy();
 const busy=isBusy(),opening=openingShot(),begin=$('#begin-journey');
 document.body.classList.toggle('journey-opening',opening);
 document.body.classList.toggle('journey-first-flight',fromIndex===null&&busy);
 document.body.style.setProperty('--flight-framing',String(THREE.MathUtils.smootherstep(state().progress,0,.30)));
 $('.chapter-panel').inert=opening;
 $('.chapter-panel').setAttribute('aria-hidden',String(opening));
 begin.disabled=!ready||playback==='playing'||(playback==='landed'&&currentIndex===7);
 begin.textContent=playback==='landed'?(currentIndex===7?'Journey complete':'Continue journey'):playback==='paused'?'Continue flight':motionQuery.matches?'Reveal chapter':playback==='playing'?'In flight':'Ignite';
 const trigger=$('#planet-trigger');trigger.disabled=!ready||playback==='playing'||playback==='landed';trigger.hidden=!opening;trigger.textContent='IGNITE';
 $('#reset-journey').disabled=!ready||playback==='idle';
 $('#previous-chapter').disabled=!ready||busy||currentIndex===0;
 $('#next-chapter').disabled=!ready||busy||currentIndex===7;
 $('#chapter-select').disabled=!ready||busy;
 for(const button of document.querySelectorAll('.planet-waypoint')){const i=Number(button.dataset.index);button.disabled=!ready||busy||(playback==='landed'&&i===currentIndex);button.setAttribute('aria-current',i===currentIndex?'step':'false');}
 document.body.dataset.journeyState=playback;
 document.body.classList.toggle('chapter-revealed',playback==='landed'||!!errorMessage);
 document.body.classList.toggle('is-flight',playback==='playing');
 for(const content of [$('.chapter-panel header'),$('.chapter-highlights')]){const hidden=playback!=='landed'&&!errorMessage;content.inert=hidden;content.setAttribute('aria-hidden',String(hidden));}
 if(motionQuery.matches||performance.now()-lastTelemetry>160){lastTelemetry=performance.now();$('#journey-telemetry').textContent=JSON.stringify(snapshot());}
}
// Keep the opening engines at full power; the first departure eases into cruise
// without restarting ignition. Reduced motion holds a still, fully lit plume.
function updateExhaust(delta,immediate=false){
 if(!exhaust)return;
 const s=state(),burning=openingShot()||playback==='playing';
 const thrust=openingShot()?1:playback==='playing'?(fromIndex===null&&s.progress<.64?1-.1*THREE.MathUtils.smootherstep(s.progress,.12,.30):s.thrust):0;
 exhaust.setVisible(burning);exhaust.setThrust(thrust,immediate);exhaust.update(delta,!motionQuery.matches&&burning);
}
function requestFrame(){if(!ready||!renderer||disposed||contextLost||document.hidden||frame!==null)return;if(!clock.running)clock.start();frame=requestAnimationFrame(render);}
function render(){
 frame=null;if(!ready||disposed||contextLost||document.hidden||!renderer){clock.stop();return;}
 const delta=Math.min(clock.getDelta(),.05),before=playback;hoverTime+=delta;
 if(playback==='playing'&&!motionQuery.matches){elapsed=Math.min(LANDING_DURATION,(performance.now()-startTime)/1000);if(elapsed===LANDING_DURATION){playback='landed';completedAt=performance.now();}}
 const s=state();applyPose();applyCamera();environment?.update(camera,s.position,delta,playback==='playing',!motionQuery.matches,renderer.getPixelRatio());
 worlds.update(delta,!motionQuery.matches,s.progress,fromIndex,currentIndex,playback);
 updateExhaust(delta);
 renderer.info.reset();renderer.render(scene,camera);lastRender={...renderer.info.render};renderedFrames++;publish();
 if(!motionQuery.matches||before!==playback)requestFrame();else clock.stop();
}
function begin(){
 if(!ready||errorMessage||playback==='playing')return;
 if(playback==='landed'){if(currentIndex<7)navigate(currentIndex+1);return;}
 if(openingShot()&&!motionQuery.matches)openingSpin=hoverTime*OPENING_SPIN_RATE;
 if(motionQuery.matches){elapsed=LANDING_DURATION;playback='landed';}
 else{playback='playing';completedAt=null;startTime=performance.now()-elapsed*1000;}
 if(journeyAudio.enabled)void journeyAudio.resume();
 if(compact&&!motionQuery.matches)viewport.scrollIntoView({block:'start',behavior:'instant'});
 publish();requestFrame();
}
function navigate(index){
 if(!ready||isBusy()||index<0||index>=CHAPTERS.length)return;
 if(index===currentIndex){begin();return;}
 fromIndex=playback==='landed'?currentIndex:null;currentIndex=index;elapsed=0;completedAt=null;playback='idle';hoverTime=0;
 worlds.activate(CHAPTERS[index].id);updateChapter();begin();
}
function reset(){
 if(!ready)return;journeyAudio.reset();currentIndex=0;fromIndex=null;elapsed=0;completedAt=null;playback='idle';hoverTime=0;openingSpin=0;scrollIntent=0;scrollLocked=false;
 worlds.activate(CHAPTERS[0].id);updateChapter();updateExhaust(0,true);applyPose();applyCamera();publish();requestFrame();
}
function resize(){if(!renderer||disposed)return;const{width,height}=viewport.getBoundingClientRect();compact=matchMedia('(max-width: 820px)').matches;renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));renderer.setSize(Math.max(1,width),Math.max(1,height),false);camera.aspect=Math.max(1,width)/Math.max(1,height);applyCamera();requestFrame();}
function fail(problem){errorMessage=problem instanceof Error?problem.message:String(problem);errors.push(errorMessage);$('#journey-load').hidden=false;$('#journey-load').classList.add('error');$('#load-title').textContent='The 3D journey is unavailable';$('#load-detail').textContent=`${errorMessage} The Origins chapter remains readable.`;publish();console.error('[LP Resume Journey Phase A2]',problem);}
function disposeTree(root){const geometries=new Set(),materials=new Set(),textures=new Set();root?.traverse(node=>{if(node.geometry)geometries.add(node.geometry);if(node.material)for(const material of Array.isArray(node.material)?node.material:[node.material])materials.add(material);});materials.forEach(material=>{Object.values(material).forEach(value=>{if(value?.isTexture)textures.add(value);});material.dispose();});geometries.forEach(g=>g.dispose());textures.forEach(t=>t.dispose());}
function loadingStage(text){$('#load-detail').textContent=text;}
async function init(){try{renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'high-performance'});renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.08;renderer.info.autoReset=false;const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment();environmentTarget=pmrem.fromScene(room,.04);scene.environment=environmentTarget.texture;scene.environmentIntensity=.42;room.dispose();pmrem.dispose();scene.add(new THREE.HemisphereLight(0x68728b,0x180b06,.34));const key=new THREE.DirectionalLight(0xffa35a,4.8);key.position.set(28,35,-45);const fill=new THREE.DirectionalLight(0x6177a5,1.1);fill.position.set(-35,18,-8);scene.add(key,fill);loadingStage('Loading the star field');environment=await createFlightEnvironment(scene,renderer,viewport);loadingStage('Preparing planet surfaces');await worlds.load(renderer);worlds.activate('origins');worlds.update(0,false,0,null,0,'idle');resize();loadingStage('Loading your spacecraft');const response=await fetch(MODEL_URL,{signal:abort.signal,cache:'no-cache'});if(!response.ok)throw new Error(`Spacecraft request returned HTTP ${response.status}.`);const buffer=await response.arrayBuffer();loadedBytes=buffer.byteLength;if(buffer.byteLength<12||new DataView(buffer).getUint32(0,true)!==0x46546c67)throw new Error('The approved spacecraft is not a valid binary GLB.');const gltf=await new GLTFLoader().parseAsync(buffer,new URL('.',MODEL_URL).href);gltf.scene.updateMatrixWorld(true);model=gltf.scene.getObjectByName('SPACECRAFT_LP_EXPLORER');if(!model)throw new Error('SPACECRAFT_LP_EXPLORER root is missing.');const matrix=model.matrixWorld.clone();model.removeFromParent();matrix.decompose(model.position,model.quaternion,model.scale);const rig=[];model.traverse(node=>{if(node.isCamera||node.isLight)rig.push(node);});rig.forEach(node=>node.removeFromParent());model.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(model);model.position.sub(box.getCenter(new THREE.Vector3()));model.scale.multiplyScalar(.32);let triangles=0,meshes=0;const materials=new Set();model.traverse(node=>{if(!node.isMesh)return;meshes++;triangles+=(node.geometry.index?.count??node.geometry.attributes.position.count)/3;for(const m of Array.isArray(node.material)?node.material:[node.material])materials.add(m);});modelStats={root:model.name,meshes,triangles,materials:materials.size};shipPivot.add(model);
 // Journey-only gear integrates into hull bays; original spacecraft remains unchanged.
 shipPivot.position.set(0,0,0);shipPivot.quaternion.identity();shipPivot.updateMatrixWorld(true);model.updateMatrixWorld(true);const hull=new THREE.Box3().setFromObject(model),footY=hull.min.y-.42;
 gear=createLandingGear(shipPivot,hull,footY,model);
 setLandingHeight(worlds.landingSite.contactY-footY+.004);
 loadingStage('Preparing spacecraft details');branding=await brandSpacecraft(model,renderer);
 exhaust=createEngineExhaust(model);updateExhaust(0,true);applyPose();
 // Render the opening scene first. Waiting for all hidden worlds through
 // compileAsync can remain pending on some GPU drivers and block Ignite.
 loadingStage('Preparing the opening scene');
 worlds.update(0,false,0,null,currentIndex,'idle');applyPose();updateExhaust(0,true);renderer.render(scene,camera);ready=true;updateChapter();$('#journey-load').hidden=true;publish();requestFrame();dispatchEvent(new CustomEvent('lp-resume-phase-a2-ready',{detail:snapshot()}));}catch(problem){if(problem.name!=='AbortError')fail(problem);}}

for(const [index,c] of CHAPTERS.entries()){
 const option=document.createElement('option');option.value=String(index);option.textContent=`${String(index+1).padStart(2,'0')} — ${c.name}`;$('#chapter-select').append(option);
 const button=document.createElement('button');button.type='button';button.className='planet-waypoint';button.dataset.index=String(index);button.textContent=String(index+1).padStart(2,'0');button.title=c.name;button.setAttribute('aria-label',`Planet ${index+1}: ${c.name}`);button.addEventListener('click',()=>navigate(index));$('#planet-waypoints').append(button);
}
$('#begin-journey').addEventListener('click',begin);$('#planet-trigger').addEventListener('click',begin);$('#reset-journey').addEventListener('click',reset);
$('#previous-chapter').addEventListener('click',()=>navigate(currentIndex-1));$('#next-chapter').addEventListener('click',()=>navigate(currentIndex+1));$('#chapter-select').addEventListener('change',event=>navigate(Number(event.target.value)));
canvas.addEventListener('click',event=>{
 if(!ready||isBusy())return;
 const rect=canvas.getBoundingClientRect();pointer.set(((event.clientX-rect.left)/rect.width)*2-1,-((event.clientY-rect.top)/rect.height)*2+1);raycaster.setFromCamera(pointer,camera);
 const hit=raycaster.intersectObjects(worlds.planets.filter(planet=>planet.parent.visible))[0];if(hit)navigate(hit.object.userData.planetIndex);
});
function scrollEligible(target,direction=1){return playback==='idle'&&direction>0&&viewport.contains(target)||playback==='landed'&&(compact?(direction>0?window.scrollY+innerHeight>=document.documentElement.scrollHeight-24:window.scrollY<=0&&viewport.contains(target)):viewport.contains(target));}
function scrollTravel(direction){if(scrollLocked||!ready)return;scrollLocked=true;if(playback==='idle')begin();else if(playback==='landed')navigate(currentIndex+direction);setTimeout(()=>{scrollLocked=false;scrollIntent=0;},800);}
document.addEventListener('wheel',event=>{
 if(playback==='playing'){if(viewport.contains(event.target))event.preventDefault();return;}
 const direction=Math.sign(event.deltaY);if(!direction||!scrollEligible(event.target,direction)||event.target.closest('select,button'))return;
 scrollIntent+=Math.abs(event.deltaY);if(scrollIntent>=90){event.preventDefault();scrollTravel(direction);}
},{passive:false});
document.addEventListener('touchstart',event=>{touchStart={y:event.touches[0].clientY,target:event.target};},{passive:true});
document.addEventListener('touchmove',event=>{if(playback==='playing')event.preventDefault();else if(touchStart){const distance=touchStart.y-event.touches[0].clientY,direction=Math.sign(distance);if(Math.abs(distance)>65&&scrollEligible(touchStart.target,direction)){event.preventDefault();touchStart=null;scrollTravel(direction);}}},{passive:false});
document.addEventListener('keydown',event=>{
 if(event.target.closest('button,select,a,dialog,input,textarea'))return;
 if(event.code==='Space'||event.key==='Enter'){event.preventDefault();begin();}
 if(playback==='idle'&&fromIndex===null)return;
 if(event.key==='ArrowRight'){event.preventDefault();navigate(currentIndex+1);}if(event.key==='ArrowLeft'){event.preventDefault();navigate(currentIndex-1);}
 if(event.key.toLowerCase()==='r')reset();
});
document.addEventListener('visibilitychange',()=>{if(document.hidden){void journeyAudio.suspend();if(frame!==null)cancelAnimationFrame(frame);frame=null;clock.stop();if(playback==='playing'){playback='paused';publish();}}else{publish();requestFrame();}});
motionQuery.addEventListener('change',()=>{if(motionQuery.matches&&isBusy()){elapsed=LANDING_DURATION;playback='landed';publish();requestFrame();}else requestFrame();});canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();contextLost=true;fail(new Error('WebGL context was lost. Reload to restore the journey.'));});
const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(viewport);window.addEventListener('pagehide',event=>{if(event.persisted||disposed)return;disposed=true;abort.abort();if(frame!==null)cancelAnimationFrame(frame);resizeObserver.disconnect();void journeyAudio.dispose();exhaust?.dispose();environment?.dispose();worlds.dispose();disposeTree(scene);environmentTarget?.dispose();renderer?.dispose();});
Object.defineProperty(window,'__LP_RESUME_PHASE_A2__',{value:Object.freeze({snapshot,begin,reset,navigate}),writable:false});init();

const siteMenu=$('#site-menu'),menuPanel=siteMenu.querySelector('.lp-menu-panel'),menuClose=siteMenu.querySelector('.lp-menu-close'),openMenu=$('#open-site-menu');let resumeAfterMenu=false,lastMenuFocus=null;
let soundOperation=0;
function setSoundToggle(enabled){
 soundToggle.textContent=enabled?'Sound on':'Sound off';
 soundToggle.setAttribute('aria-pressed',String(enabled));
 soundToggle.setAttribute('aria-label',enabled?'Turn sound off':'Turn sound on');
}
soundToggle.addEventListener('click',async()=>{
 const currentOperation=++soundOperation;
 soundStatus.textContent='';
 if(journeyAudio.enabled){journeyAudio.disable();setSoundToggle(false);return;}
 setSoundToggle(true);
 const enabled=await journeyAudio.enable();
 if(currentOperation!==soundOperation)return;
 if(!enabled){setSoundToggle(false);soundStatus.textContent='Sound unavailable; the journey continues silently.';}
});
function closeSiteMenu(event){
 if(event){event.preventDefault();event.stopPropagation();}
 siteMenu.classList.remove('is-open');siteMenu.setAttribute('aria-hidden','true');document.body.classList.remove('lp-menu-lock');document.documentElement.classList.remove('lp-menu-open');openMenu.setAttribute('aria-expanded','false');
 if(resumeAfterMenu&&playback==='paused')begin();else requestFrame();
 resumeAfterMenu=false;(lastMenuFocus??openMenu).focus({preventScroll:true});
}
openMenu.addEventListener('click',event=>{
 event.preventDefault();lastMenuFocus=document.activeElement;resumeAfterMenu=playback==='playing';if(resumeAfterMenu)playback='paused';
 if(frame!==null)cancelAnimationFrame(frame);frame=null;clock.stop();siteMenu.classList.add('is-open');siteMenu.setAttribute('aria-hidden','false');document.body.classList.add('lp-menu-lock');document.documentElement.classList.add('lp-menu-open');openMenu.setAttribute('aria-expanded','true');publish();menuClose.focus({preventScroll:true});
});
menuClose.addEventListener('click',closeSiteMenu);
siteMenu.querySelector('.lp-menu-backdrop').addEventListener('click',closeSiteMenu);
siteMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>closeSiteMenu()));
document.addEventListener('keydown',event=>{
 if(!siteMenu.classList.contains('is-open'))return;
 if(event.key==='Escape'){closeSiteMenu(event);return;}
 if(event.key!=='Tab')return;
 const focusable=[...menuPanel.querySelectorAll('a[href],button:not(:disabled),[tabindex]:not([tabindex="-1"])')].filter(element=>element.getClientRects().length);
 const first=focusable[0],last=focusable[focusable.length-1];
 if(event.shiftKey&&(document.activeElement===first||!siteMenu.contains(document.activeElement))){event.preventDefault();last?.focus();}
 else if(!event.shiftKey&&(document.activeElement===last||!siteMenu.contains(document.activeElement))){event.preventDefault();first?.focus();}
});
