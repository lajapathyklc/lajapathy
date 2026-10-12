import * as THREE from 'three';
import {DecalGeometry} from 'three/addons/geometries/DecalGeometry.js';

export async function brandSpacecraft(model,renderer){
 const logo=await new THREE.TextureLoader().loadAsync(new URL('../../assets/images/journey/lp-logo.png',import.meta.url).href);
 const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=768;
 const ctx=canvas.getContext('2d');
 ctx.fillStyle='#f5a02b';ctx.fillRect(36,70,28,620);ctx.fillStyle='#b5d6e3';ctx.fillRect(80,70,10,620);
 ctx.drawImage(logo.image,190,24,570,570);ctx.fillStyle='#edf3f5';ctx.font='500 55px Arial';ctx.textAlign='center';ctx.fillText('L P  /  E X P L O R E R',520,660);
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());logo.dispose();
 const material=new THREE.MeshStandardMaterial({map:texture,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-4,roughness:.52,metalness:.38});
 const ray=new THREE.Raycaster(),decals=[];model.updateMatrixWorld(true);
 for(const side of ['port','starboard']){
  const wing=model.getObjectByName(`HULL_${side}_swept_shoulder`),panel=model.getObjectByName(`WING_${side}_thermal_service_panel`);
  if(panel){panel.material=panel.material.clone();panel.material.color.set(side==='port'?0xa9681b:0x7d9eac);panel.material.metalness=.7;panel.material.roughness=.42;}
  const x=side==='port'?-1.04:1.04;ray.set(new THREE.Vector3(x,4,1.1),new THREE.Vector3(0,-1,0));
  const hit=ray.intersectObjects([panel,wing].filter(Boolean),false)[0];if(!hit)continue;
  const decal=new THREE.Mesh(new DecalGeometry(hit.object,hit.point,new THREE.Euler(-Math.PI/2,0,Math.PI),new THREE.Vector3(.32,.57,.15)),material);
  decal.name=`LP_Livery_${side}`;hit.object.attach(decal);decals.push(decal);
 }
 // A quieter amber edge on the canopy ties the craft to the site's palette.
 const sill=model.getObjectByName('COCKPIT_fitted_alloy_sill');if(sill){sill.material=sill.material.clone();sill.material.color.set(0xae762f);}
 return {decals:decals.length};
}
