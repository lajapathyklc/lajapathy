import * as THREE from 'three';
import {homeMeteorCadence as cadence,nextHomeMeteorDelay} from './meteor-cadence.js';

// Home's cadence, speed bands and three-band luminous trail, adapted to a moving camera.
// Flybys remain in the scenery and are depth-tested against the ship and planets.
export function createJourneyMeteors(scene,renderer,viewport){
 const random=(a,b)=>a+Math.random()*(b-a),slots=[],group=new THREE.Group();group.name='LP_MeteorFlybys';scene.add(group);
 const resolution={value:new THREE.Vector2(1,1)},protectedRects={value:Array.from({length:24},()=>new THREE.Vector4(-2,-2,-1,-1))};
 const uniforms=()=>({fade:{value:0},resolution,protectedRects});
 const safe=`uniform vec2 resolution;uniform vec4 protectedRects[24];void protectCopy(){vec2 p=gl_FragCoord.xy/resolution;for(int i=0;i<24;i++){vec4 r=protectedRects[i];if(p.x>=r.x&&p.x<=r.z&&p.y>=r.y&&p.y<=r.w)discard;}}`;
 const tailVertex='varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}';
 const tailFragment=`varying vec2 vUv;uniform float fade;${safe}void main(){protectCopy();float t=vUv.x,w=abs(vUv.y*2.-1.);float broad=exp(-w*w*2.)*.12,mid=exp(-w*w*18.)*.65,core=exp(-w*w*170.)*.95;float wake=(1.-smoothstep(.08,1.,t))*mix(.12,.95,pow(1.-t,2.));gl_FragColor=vec4(mix(vec3(.95,.35,.14),vec3(1.,.99,.92),pow(1.-t,4.)),fade*wake*(broad+mid+core));}`;
 for(let i=0;i<cadence.desktopLimit;i++){
  const positions=new Float32Array(37*2*3),uv=new Float32Array(37*2*2),indices=[];
  for(let j=0;j<=36;j++){uv.set([j/36,0,j/36,1],j*4);if(j<36){const k=j*2;indices.push(k,k+1,k+2,k+1,k+3,k+2);}}
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3).setUsage(THREE.DynamicDrawUsage));geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));geometry.setIndex(indices);
  const tail=new THREE.Mesh(geometry,new THREE.ShaderMaterial({uniforms:uniforms(),vertexShader:tailVertex,fragmentShader:tailFragment,transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending}));
  const head=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.ShaderMaterial({uniforms:uniforms(),vertexShader:tailVertex,fragmentShader:`varying vec2 vUv;uniform float fade;${safe}void main(){protectCopy();float r=length((vUv-.5)*2.);float core=exp(-r*r*30.),halo=exp(-r*r*5.);gl_FragColor=vec4(mix(vec3(1.,.47,.18),vec3(1.,.99,.92),core),fade*(core+halo*.2)*(1.-smoothstep(.8,1.,r)));}`,transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending}));
  tail.frustumCulled=head.frustumCulled=false;group.add(tail,head);
  // Visible at zero opacity during startup, so both shaders compile behind the loader.
  slots.push({active:false,tail,head,positions,age:0,position:new THREE.Vector3(),start:new THREE.Vector3(),direction:new THREE.Vector3(),side:new THREE.Vector3()});
 }
 let time=0,next=cadence.firstDelay,spawned=0,lastExclusions=-1,visible=0;
 function exclusions(){
  const box=viewport.getBoundingClientRect();const elements=document.querySelectorAll('.site-header-shell,.journey-brand,.planet-waypoints,.journey-status,.planet-trigger,.chapter-panel');
  const rects=[];for(const element of elements){const r=element.getBoundingClientRect();if(!r.width||!r.height||element.hidden)continue;rects.push(new THREE.Vector4((r.left-box.left-8)/box.width,1-(r.bottom-box.top+8)/box.height,(r.right-box.left+8)/box.width,1-(r.top-box.top-8)/box.height));}
  protectedRects.value.forEach((r,i)=>r.copy(rects[i]??new THREE.Vector4(-2,-2,-1,-1)));
 }
 function spawn(camera,width,height){
  const slot=slots.find(m=>!m.active);if(!slot)return;
  const roll=Math.random(),layer=roll<cadence.layerThresholds[0]?0:roll<cadence.layerThresholds[1]?1:2,depth=cadence.depth[layer];
  const distance=[180,115,75][layer],halfHeight=Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*distance,worldPerPixel=halfHeight*2/height;
  const forward=new THREE.Vector3();camera.getWorldDirection(forward);const right=new THREE.Vector3(1,0,0).applyQuaternion(camera.quaternion),up=new THREE.Vector3(0,1,0).applyQuaternion(camera.quaternion);
  // Enter below the fixed header/waypoints so the protected copy does not hide
  // most of a flyby before it has crossed the visible sky.
  const x=width<600?random(-.9,-.2):random(-.05,.25),y=width<600?random(.25,.55):random(.22,.46);
  slot.start.copy(camera.position).addScaledVector(forward,distance).addScaledVector(right,x*halfHeight*camera.aspect).addScaledVector(up,y*halfHeight);
  const angle=random(...cadence.angle);slot.direction.copy(right).multiplyScalar(Math.cos(angle)).addScaledVector(up,-Math.sin(angle));slot.side.copy(right).multiplyScalar(Math.sin(angle)).addScaledVector(up,Math.cos(angle));
  const pace=Math.random(),band=pace<cadence.speedThresholds[0]?0:pace<cadence.speedThresholds[1]?1:2;
  const speedPixels=Math.max(width,600)*random(...cadence.speed[band])*depth;
  slot.speed=speedPixels*worldPerPixel;slot.size=random(...cadence.headSize)*depth*worldPerPixel;
  slot.length=THREE.MathUtils.clamp(speedPixels*random(...cadence.tailSeconds),...cadence.tailPixels)*worldPerPixel;
  slot.opacity=cadence.opacity[layer];slot.age=0;slot.seed=random(0,50);slot.active=true;slot.head.visible=slot.tail.visible=true;spawned++;
 }
 function update(delta,camera,animated){
  renderer.getDrawingBufferSize(resolution.value);
  if(!animated){slots.forEach(m=>{m.active=false;m.head.visible=m.tail.visible=false;});visible=0;next=time+cadence.firstDelay;return;}
  time+=delta;const width=viewport.clientWidth,height=viewport.clientHeight;
  if(time-lastExclusions>.2){exclusions();lastExclusions=time;}
  if(time>=next){if(slots.filter(m=>m.active).length<(width<cadence.mobileBreakpoint?cadence.mobileLimit:cadence.desktopLimit))spawn(camera,width,height);next=time+nextHomeMeteorDelay(spawned,random);}
  visible=0;
  for(const m of slots){
   if(!m.active){m.head.visible=m.tail.visible=false;continue;}
   m.age+=delta;m.position.copy(m.start).addScaledVector(m.direction,m.speed*m.age);const ndc=m.position.clone().project(camera);
   if(m.age>cadence.life||ndc.x>1.3||ndc.y< -1.2){m.active=false;m.head.visible=m.tail.visible=false;continue;}
   const fade=Math.max(0,Math.min(m.age/.08,(cadence.life-m.age)/.16,1))*m.opacity;
   m.head.position.copy(m.position);m.head.quaternion.copy(camera.quaternion);m.head.scale.setScalar(m.size*5);m.head.material.uniforms.fade.value=fade;m.tail.material.uniforms.fade.value=fade;
   const length=Math.min(m.length,m.speed*m.age);
   for(let j=0;j<=36;j++){const t=j/36,point=m.position.clone().addScaledVector(m.direction,-length*t),wobble=Math.sin(t*26+m.seed+m.age*16)*m.size*.16*t,band=m.size*3.8*Math.pow(1-t,.85);for(let k=0;k<2;k++){m.positions.set(point.clone().addScaledVector(m.side,wobble+(k?1:-1)*band).toArray(),(j*2+k)*3);}}
   m.tail.geometry.attributes.position.needsUpdate=true;
   if(Math.abs(ndc.x)<1&&Math.abs(ndc.y)<1)visible++;
  }
 }
 return {update,get stats(){return {time,spawned,active:slots.filter(m=>m.active).length,inFrame:visible,nextIn:Math.max(0,next-time),positions:slots.filter(m=>m.active).map(m=>m.position.toArray()),ages:slots.filter(m=>m.active).map(m=>m.age)};}};
}
