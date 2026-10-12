import * as THREE from 'three';

export const WHEEL_RADIUS=.21;
export const WHEEL_BAYS=Object.freeze([
 {x:-.30,z:.94,y:-.855,hinge:-1},
 {x:.30,z:.94,y:-.855,hinge:1},
 {x:0,z:-.88,y:-.77,hinge:-1},
].map(Object.freeze));

// Cut journey-only belly openings in cloned materials. The approved GLB is intact.
function openBellyBays(parent,model){
 parent.updateMatrixWorld(true);
 const toParent=new THREE.Matrix4().copy(parent.matrixWorld).invert();
 model.traverse(mesh=>{
  if(!mesh.isMesh||!(mesh.name==='HULL_continuous_pressure_body'||mesh.name.startsWith('UNDERSIDE_')))return;
  const matrix=new THREE.Matrix4().multiplyMatrices(toParent,mesh.matrixWorld);
  const slots=WHEEL_BAYS.map(b=>`(abs(vGearPosition.x-(${b.x.toFixed(4)}))<.096&&abs(vGearPosition.z-(${b.z.toFixed(4)}))<.255&&vGearPosition.y<${(b.y+.12).toFixed(4)})`).join('||');
  const clone=material=>{const result=material.clone();result.onBeforeCompile=shader=>{
   shader.uniforms.gearToShip={value:matrix};
   shader.vertexShader='uniform mat4 gearToShip;varying vec3 vGearPosition;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvGearPosition=(gearToShip*vec4(transformed,1.)).xyz;');
   shader.fragmentShader='varying vec3 vGearPosition;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <clipping_planes_fragment>',`#include <clipping_planes_fragment>\nif(${slots})discard;`);
  };result.customProgramCacheKey=()=> 'lp-journey-belly-bays-v1';return result;};
  mesh.material=Array.isArray(mesh.material)?mesh.material.map(clone):clone(mesh.material);
 });
}

export function createLandingGear(parent,hull,footY,model){
 const root=new THREE.Group();root.name='RetractableWheels';parent.add(root);
 const rubber=new THREE.MeshStandardMaterial({color:0x111319,roughness:.88});
 const alloy=new THREE.MeshStandardMaterial({color:0x8c959c,metalness:.85,roughness:.32});
 const doorMaterial=new THREE.MeshStandardMaterial({color:0x343c45,metalness:.7,roughness:.5});
 const tyreGeometry=new THREE.TorusGeometry(.15,.06,12,28);
 const hubGeometry=new THREE.CylinderGeometry(.092,.092,.13,24);
 const wheels=[];let deployment=0,doorOpen=0;
 if(model)openBellyBays(parent,model);
 for(const bay of WHEEL_BAYS){
  const wheel=new THREE.Group();wheel.name='LandingWheel';root.add(wheel);
  const tyre=new THREE.Mesh(tyreGeometry,rubber);tyre.rotation.y=Math.PI/2;wheel.add(tyre);
  const hub=new THREE.Mesh(hubGeometry,alloy);hub.rotation.z=Math.PI/2;wheel.add(hub);
  const hinge=new THREE.Group();hinge.position.set(bay.x+bay.hinge*.10,bay.y,bay.z);root.add(hinge);
  const door=new THREE.Mesh(new THREE.BoxGeometry(.198,.008,.516),doorMaterial);door.position.x=-bay.hinge*.099;hinge.add(door);
  const cavity=new THREE.Mesh(new THREE.BoxGeometry(.19,.06,.50),new THREE.MeshStandardMaterial({color:0x07090b,roughness:1}));cavity.position.set(bay.x,bay.y+.15,bay.z);root.add(cavity);
  wheels.push({...bay,wheel,hingeNode:hinge});
 }
 function update(progress,from,playback){
  const landed=playback==='landed',idle=playback==='idle';
  deployment=landed?1:idle?0:Math.max(from===null?0:1-THREE.MathUtils.smootherstep(progress,.08,.21),THREE.MathUtils.smootherstep(progress,.74,.91));
  doorOpen=landed?1:idle?0:Math.max(from===null?0:1-THREE.MathUtils.smootherstep(progress,.23,.29),THREE.MathUtils.smootherstep(progress,.65,.72));
  for(const item of wheels){
   item.wheel.visible=deployment>.001;
   item.wheel.position.set(item.x,THREE.MathUtils.lerp(item.y+.27,footY+WHEEL_RADIUS,deployment),item.z);
   item.hingeNode.rotation.z=item.hinge*doorOpen*1.49;
  }
 }
 update(0,null,'idle');return {update,get deployment(){return deployment;},get doorOpen(){return doorOpen;},type:'retractable-wheels'};
}
