import * as THREE from 'three';

export const ASSEMBLY_DURATION=3.2;
const smooth=THREE.MathUtils.smootherstep;
export function frameAssembly(rig,position,progress,compact,time=0,aspect=1.5){
 const remaining=1-smooth(progress,.25,1),offset=rig.position.clone().sub(position);
 offset.multiplyScalar(1+remaining*(compact?.30:.18));offset.y+=remaining*1.7;
 if(compact)offset.multiplyScalar(1+remaining*Math.max(0,.44/aspect-1));
 offset.applyAxisAngle(new THREE.Vector3(0,1,0),Math.sin(time*.22)*.06*remaining);
 rig.position.copy(position).add(offset);rig.target.y+=remaining*.25;return rig;
}
export function assemblyPart(name){
 const side=name.includes('starboard')?1:-1;
 if(name.startsWith('ENGINE_')||name.startsWith('ATTACH_engine'))return {key:`engine-${side}`,offset:[side*.75,.12,1.05],start:.1,end:.65};
 if(name.startsWith('WING_')||name.includes('swept_shoulder'))return {key:`wing-${side}`,offset:[side*1.2,.25,0],start:0,end:.6};
 if(/glazing|structural_arch|alloy_sill|perimeter_gasket/.test(name))return {key:'canopy',offset:[0,1.25,-.15],start:.32,end:.94};
 if(name.startsWith('UNDERSIDE_'))return {key:'belly',offset:[0,-.65,0],start:.12,end:.7};
 if(name.includes('dorsal_avionics'))return {key:'avionics',offset:[0,.7,.15],start:.22,end:.82};
 return null;
}

// Animate existing independent components; never alter the approved model file.
export function createShipAssembly(model,parent){
 model.updateMatrixWorld(true);
 const parts=[],guideGroups=new Map();
 for(const node of [...model.children]){
  const spec=assemblyPart(node.name);if(!spec)continue;
  const inverse=node.parent.matrixWorld.clone().invert();
  const offset=new THREE.Vector3(...spec.offset).applyMatrix4(inverse).sub(new THREE.Vector3().applyMatrix4(inverse));
  parts.push({node,home:node.position.clone(),offset,...spec,localOffset:offset});
  if(node.isMesh&&!guideGroups.has(spec.key))guideGroups.set(spec.key,{...spec,center:new THREE.Box3().setFromObject(node).getCenter(new THREE.Vector3())});
 }
 const positions=new Float32Array(guideGroups.size*6),geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
 const material=new THREE.LineBasicMaterial({color:0x9fc4d2,transparent:true,opacity:.16,depthWrite:false});
 const guides=new THREE.LineSegments(geometry,material);guides.name='AssemblyAlignmentGuides';guides.frustumCulled=false;parent.add(guides);
 let progress=0;
 function update(value){
  progress=THREE.MathUtils.clamp(value,0,1);
  for(const part of parts)part.node.position.copy(part.home).addScaledVector(part.localOffset,1-smooth(progress,part.start,part.end));
  let i=0;for(const part of guideGroups.values()){const amount=1-smooth(progress,part.start,part.end);positions.set(part.center.toArray(),i);positions.set(part.center.clone().addScaledVector(new THREE.Vector3(...part.offset),amount).toArray(),i+3);i+=6;}
  geometry.attributes.position.needsUpdate=true;guides.visible=progress<.94;material.opacity=.16*(1-smooth(progress,.6,.94));
 }
 update(0);
 return {update,get progress(){return progress;},get parts(){return parts.length;},get aligned(){return parts.every(p=>p.node.position.distanceTo(p.home)<1e-8);}};
}
