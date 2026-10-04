import {THREE,createHeroRenderer,loadGeology,heroLifecycle} from './hero-3d-core.js';
import {createHeroPlanet,createHeroValleyHaze} from './hero-planet-system.js';
import {createHeroMeteors} from './lp-meteor-system.js';

// Preserve the source footerbg circle and cover crop; only its rendering becomes live.
export const contactHeroConfig={
  rotationDuration:270, planetSource:{x:1467,y:949,radius:813,width:1920,height:640},
  maxDPR:1.75,relief:1.8,displacement:.0015,sunIntensity:3.0,
  cloudSpeed:1.013,hazeSpeed:1.022,cloudOpacity:.09,highHazeOpacity:.03,
  surfaceExposure:.60,outerAtmosphereIntensity:.045,outerAtmosphereScale:1.012,
  atmosphereIntensity:.32,rimIntensity:1.0,atmosphereThickness:1.006,sunGlow:.48,
  fogSpeed:[.003,-.0054,.0072],fogOpacity:[.035,.028,.018],
  firstMeteorDelay:3,
};
const root=document.querySelector('.contact-universe');
let renderer,fogRenderer,lifecycle,meteors,scene,fogScene,disposed=false;
if(root) init().catch(error=>{root.dataset.scene='fallback';dispose();console.error('Contact hero:',error);});
async function init(){
  const canvas=root.querySelector('.contact-environment'),fogCanvas=root.querySelector('.contact-valley-fog');
  const mobile=matchMedia('(max-width:900px)').matches;
  renderer=createHeroRenderer(canvas,mobile?1.25:contactHeroConfig.maxDPR);
  scene=new THREE.Scene();const camera=new THREE.OrthographicCamera(-1,1,1,-1,.1,100);camera.position.z=8;
  const atlas=await loadGeology(renderer,mobile);
  const light=new THREE.Vector3(-.20,.82,-.52).normalize();
  const planetSystem=createHeroPlanet({scene,atlas,light,mobile,config:contactHeroConfig});
  const {group,planet,uniforms,clouds,haze,air,outerAir,sun}=planetSystem;
  const starPositions=[];let starSeed=913;
  function starRandom(){starSeed=(starSeed*1664525+1013904223)>>>0;return starSeed/4294967296;}
  for(let i=0;i<(mobile?28:80);i++)starPositions.push(starRandom()*8-4,starRandom()*2-1,-5);
  scene.add(new THREE.Points(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(starPositions,3)),new THREE.PointsMaterial({color:0xb7a394,size:.0018,transparent:true,opacity:.22,depthWrite:false})));
  fogRenderer=createHeroRenderer(fogCanvas,1);
  fogScene=new THREE.Scene();const fogCamera=new THREE.OrthographicCamera(-1,1,1,-1,0,2);
  const fogUniforms=createHeroValleyHaze({scene:fogScene,speeds:contactHeroConfig.fogSpeed,opacities:contactHeroConfig.fogOpacity});
  // Ambient cadence/sizes/depths remain Home's; major Contact events are occasional.
  function visibleTarget({kind}){
    if(kind==='skim')return null;
    const p=JSON.parse(root.dataset.planetGeometry),box=root.getBoundingClientRect(),small=p.width<700;
    const copyBottom=root.querySelector('.lp-hero-copy').getBoundingClientRect().bottom-box.top;
    const x=p.width*(small?.55+Math.random()*.13:.75+Math.random()*.15);
    const minY=small?copyBottom+52:p.height*.45,maxY=p.height*(small?.69:.65);
    if(minY>maxY)return null;
    const y=minY+Math.random()*(maxY-minY),nx=(x-p.x)/p.radius,ny=(p.y-y)/p.radius;
    if(nx*nx+ny*ny>.85)return null;
    return [nx,ny,Math.sqrt(1-nx*nx-ny*ny)];
  }
  meteors=createHeroMeteors({system:group,globe:planet,camera,renderer,root,uniforms,page:'Contact',firstDelay:contactHeroConfig.firstMeteorDelay,
    eventKind:count=>count%12===8?'impact':count%12===0?'skim':'flyby',targetBounds:{x:[-.85,.15],y:[.30,.90]},impactDirection:({width})=>width<700?[-.4,0,-1]:null,targetNormal:visibleTarget,failedEventFallback:true});
  let width=1,height=1,frames=0,cost=16.7;
  function resize(){
    width=root.clientWidth;height=root.clientHeight;const aspect=width/height;
    camera.left=-aspect;camera.right=aspect;camera.updateProjectionMatrix();
    renderer.setSize(width,height,false);fogRenderer.setSize(width,height,false);
    const p=contactHeroConfig.planetSource,scale=Math.max(width/p.width,height/p.height);
    const x=p.x*scale-(p.width*scale-width)/2,y=p.y*scale-(p.height*scale-height)/2,r=p.radius*scale;
    group.position.set((x-width/2)*2/height,1-y*2/height,0);group.scale.setScalar(r*2/height);
    const direction=new THREE.Vector2(light.x,light.y).normalize();
    sun.position.set(group.position.x+direction.x*group.scale.x*1.005,group.position.y+direction.y*group.scale.x*1.005,-1.4);
    sun.scale.setScalar(group.scale.x*.82);
    scene.updateMatrixWorld(true);
    root.dataset.planetGeometry=JSON.stringify({x,y,radius:r,width,height});
  }
  lifecycle=heroLifecycle(root,resize,(time,dt,reduced)=>{
    if(disposed)return;const start=performance.now();
    uniforms.turn.value=time/contactHeroConfig.rotationDuration;
    clouds.u.cloudTurn.value=uniforms.turn.value*clouds.speed;haze.u.cloudTurn.value=uniforms.turn.value*haze.speed;
    sun.material.uniforms.time.value=time;air.material.uniforms.time.value=time;outerAir.material.uniforms.time.value=time;
    fogUniforms.time.value=time;scene.updateMatrixWorld(true);meteors.update(dt,reduced,true);
    renderer.render(scene,camera);fogRenderer.render(fogScene,fogCamera);
    if(root.dataset.scene!=='ready')root.dataset.scene='ready';
    cost=cost*.95+(performance.now()-start)*.05;
    if(++frames%240===0&&cost>19&&renderer.getPixelRatio()>1){renderer.setPixelRatio(Math.max(1,renderer.getPixelRatio()*.8));resize();}
    root.dataset.rotation=String(uniforms.turn.value);root.dataset.cloudRotation=String(clouds.u.cloudTurn.value);
    root.dataset.hazeRotation=String(haze.u.cloudTurn.value);root.dataset.fogTime=String(time);
    root.dataset.reducedMotion=String(reduced);root.dataset.dpr=String(renderer.getPixelRatio());
  });
  canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();root.dataset.scene='fallback';dispose();},{once:true});
  window.addEventListener('pagehide',event=>{if(!event.persisted)dispose();});
}
function dispose(){
  if(disposed)return;disposed=true;lifecycle?.dispose();meteors?.dispose();
  const geometries=new Set(),materials=new Set(),textures=new Set();
  for(const s of [scene,fogScene])s?.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material);});
  for(const m of materials){for(const u of Object.values(m.uniforms||{}))if(u.value?.isTexture)textures.add(u.value);m.dispose();}
  geometries.forEach(g=>g.dispose());textures.forEach(t=>t.dispose());renderer?.dispose();fogRenderer?.dispose();
}
