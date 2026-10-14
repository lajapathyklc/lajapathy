import * as THREE from 'three';

const average=points=>{const value=new THREE.Vector3();for(const point of points)value.add(point);return value.multiplyScalar(1/Math.max(1,points.length));};
const processedMaterials=new WeakSet();

function measureAircraft(craft){
 const points=[];craft.updateMatrixWorld(true);craft.traverse(object=>{if(!object.isMesh)return;const attribute=object.geometry.attributes.position,point=new THREE.Vector3();for(let i=0;i<attribute.count;i++)points.push(point.fromBufferAttribute(attribute,i).applyMatrix4(object.matrixWorld).clone());});
 const mean=average(points),matrix=[0,0,0,0,0,0,0,0,0];for(const point of points){const x=point.x-mean.x,y=point.y-mean.y,z=point.z-mean.z;matrix[0]+=x*x;matrix[1]+=x*y;matrix[2]+=x*z;matrix[3]+=x*y;matrix[4]+=y*y;matrix[5]+=y*z;matrix[6]+=x*z;matrix[7]+=y*z;matrix[8]+=z*z;}
 const multiply=(m,v)=>new THREE.Vector3(m[0]*v.x+m[1]*v.y+m[2]*v.z,m[3]*v.x+m[4]*v.y+m[5]*v.z,m[6]*v.x+m[7]*v.y+m[8]*v.z),power=(m,seed)=>{const v=seed.clone().normalize();for(let i=0;i<60;i++)v.copy(multiply(m,v)).normalize();return v;};
 let forward=power(matrix,new THREE.Vector3(0,0,1));if(forward.z<0)forward.negate();const lambda=forward.dot(multiply(matrix,forward)),remainder=matrix.map((value,index)=>value-lambda*[forward.x,forward.y,forward.z][Math.floor(index/3)]*[forward.x,forward.y,forward.z][index%3]);let lateral=power(remainder,new THREE.Vector3(1,0,0));if(lateral.x<0)lateral.negate();lateral.addScaledVector(forward,-lateral.dot(forward)).normalize();const up=forward.clone().cross(lateral).normalize();lateral.copy(up).cross(forward).normalize();let minimum=Infinity;for(const point of points)minimum=Math.min(minimum,point.dot(forward));const rear=points.filter(point=>point.dot(forward)<minimum+.28&&Math.abs(point.dot(lateral))>.3),basis=new THREE.Matrix4().makeBasis(lateral,up,forward);
 return {left:average(rear.filter(point=>point.dot(lateral)<0)),right:average(rear.filter(point=>point.dot(lateral)>0)),correction:new THREE.Quaternion().setFromRotationMatrix(basis).invert()};
}

export function prepareApprovedSpacecraft(source){
 const craft=new THREE.Group();craft.name='APPROVED_V7_1_SPACECRAFT';craft.add(source);let bounds=new THREE.Box3().setFromObject(craft),size=bounds.getSize(new THREE.Vector3());if(size.x>size.z&&size.x>size.y)craft.rotation.y=-Math.PI/2;else if(size.y>size.z)craft.rotation.x=Math.PI/2;craft.rotation.y+=Math.PI;bounds.setFromObject(craft);source.position.sub(bounds.getCenter(new THREE.Vector3()));craft.scale.setScalar(17/Math.max(...bounds.getSize(new THREE.Vector3()).toArray()));bounds.setFromObject(craft);craft.position.sub(bounds.getCenter(new THREE.Vector3()));craft.updateMatrixWorld(true);
 const measured=measureAircraft(craft),canonical=new THREE.Group();canonical.name='V7_1_CANONICAL_FRAME';canonical.quaternion.copy(measured.correction);canonical.add(craft);canonical.updateMatrixWorld(true);const root=new THREE.Group();root.name='APPROVED_V7_1_JOURNEY_ADAPTER';root.rotation.y=Math.PI;root.add(canonical);root.scale.setScalar(.32);
 source.traverse(object=>{if(!object.isMesh)return;object.castShadow=true;object.receiveShadow=true;for(const material of Array.isArray(object.material)?object.material:[object.material]){if(!material||processedMaterials.has(material))continue;processedMaterials.add(material);const livery=object.name?.startsWith('LP_')||material.name?.startsWith('LP_');if(!livery)material.color.multiply(new THREE.Color(0x7c8790));material.metalness=livery?Math.max(material.metalness||0,.62):.74;material.roughness=livery?.36:.44;material.envMapIntensity=livery?.95:1.12;if('emissiveIntensity'in material)material.emissiveIntensity=livery?0:.18;if(!livery){const previous=material.onBeforeCompile;material.onBeforeCompile=shader=>{previous?.(shader);shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',`float lpCool=max(outgoingLight.b,outgoingLight.g);
float lpWarm=outgoingLight.r;
float lpChroma=max(max(outgoingLight.r,outgoingLight.g),outgoingLight.b)-min(min(outgoingLight.r,outgoingLight.g),outgoingLight.b);
float lpCoolDominance=lpCool-lpWarm*.88;
float lpBlueMask=smoothstep(.006,.075,lpCoolDominance)*smoothstep(.012,.13,lpChroma);
float lpNeutral=dot(outgoingLight,vec3(.24,.52,.24));
vec3 lpWarmMetal=vec3(lpNeutral*.64,lpNeutral*.59,lpNeutral*.55);
outgoingLight=mix(outgoingLight,lpWarmMetal,lpBlueMask*.998);
#include <opaque_fragment>`);};material.customProgramCacheKey=()=>`lp-v71-no-cyan-artifact-${material.uuid}`; }}});return {root,canonical,nozzles:[measured.left.clone(),measured.right.clone()]};
}

export {createApprovedPropulsion} from './cinematic-propulsion.js';
