import * as THREE from 'three';

export const PLATFORM_TOP = .16;
export const PLATFORM_RADIUS = 4.45;

function deckTexture(index) {
 const canvas=document.createElement('canvas');canvas.width=canvas.height=1024;
 const c=canvas.getContext('2d');c.fillStyle='#42484b';c.fillRect(0,0,1024,1024);
 let seed=1947+index;const random=()=>((seed=Math.imul(seed,1664525)+1013904223>>>0)/4294967296);
 // Fine aggregate, abrasion and heat staining are baked once, not drawn each frame.
 for(let i=0;i<38000;i++){const v=70+Math.floor(random()*40);c.fillStyle=`rgba(${v},${v+3},${v+5},${random()*.32})`;c.fillRect(random()*1024,random()*1024,1+random()*3,1+random()*2);}
 const heat=c.createRadialGradient(512,490,70,512,490,400);heat.addColorStop(0,'#161c21a8');heat.addColorStop(.7,'#242b3030');heat.addColorStop(1,'#242b3000');c.fillStyle=heat;c.fillRect(0,0,1024,1024);
 c.strokeStyle='#161c22';c.lineWidth=3;
 for(const x of [200,400,624,824]){c.beginPath();c.moveTo(x,0);c.lineTo(x,1024);c.stroke();}
 for(const y of [205,410,615,820]){c.beginPath();c.moveTo(0,y);c.lineTo(1024,y);c.stroke();}
 c.strokeStyle='#7b7e7b55';c.lineWidth=1;
 for(const x of [204,404,628,828]){c.beginPath();c.moveTo(x,0);c.lineTo(x,1024);c.stroke();}
 // Faded approach brackets and short perimeter caution marks, without a neon ring.
 c.strokeStyle='#b4b9af';c.lineWidth=8;
 for(const [x,y,sx,sy] of [[320,300,1,1],[704,300,-1,1],[320,724,1,-1],[704,724,-1,-1]]){c.beginPath();c.moveTo(x+sx*70,y);c.lineTo(x,y);c.lineTo(x,y+sy*70);c.stroke();}
 c.strokeStyle='#c5934b';c.lineWidth=10;
 for(let i=0;i<32;i++){const a=i*Math.PI/16;if(i%4===0)continue;c.beginPath();c.moveTo(512+Math.cos(a)*441,512+Math.sin(a)*441);c.lineTo(512+Math.cos(a+.025)*464,512+Math.sin(a+.025)*464);c.stroke();}
 c.textAlign='center';c.fillStyle='#aeb6b5';c.font='500 23px monospace';c.fillText(`LP / ${String(index+1).padStart(2,'0')}`,512,865);
 c.fillStyle='#9c7844';c.font='16px monospace';c.fillText('APPROACH',512,180);
 for(let i=0;i<1200;i++){c.fillStyle=`rgba(36,42,45,${.15+random()*.5})`;c.fillRect(random()*1024,random()*1024,1+random()*12,1+random()*2);}
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=4;return texture;
}

export function createLandingPlatform(site,atlas,index,surfaceMaterial) {
 const texture=deckTexture(index);
 const foundationMaterial=new THREE.MeshStandardMaterial({color:0x353b40,bumpMap:atlas,bumpScale:.04,roughness:.98,metalness:.08});
 const edgeMaterial=new THREE.MeshStandardMaterial({color:0x343d44,roughness:.64,metalness:.65});
 const foundation=new THREE.Mesh(new THREE.CylinderGeometry(4.52,4.9,.43,8),foundationMaterial);
 foundation.rotation.y=Math.PI/8;foundation.position.y=-.185;site.add(foundation);
 // The outer apron follows the planet curvature and buries the foundation edge.
 const positions=[],uvs=[],indices=[];
 for(let ring=0;ring<2;ring++)for(let i=0;i<=96;i++){
  const a=i/96*Math.PI*2,r=ring?6.8+.17*Math.sin(a*13):4.8;
  positions.push(Math.cos(a)*r,ring?Math.sqrt(65*65-r*r)-65+.024:-.08,Math.sin(a)*r);
  uvs.push(.5+Math.cos(a)*r*.045,.5+Math.sin(a)*r*.045);
  if(ring&&i)indices.push(i-1,i,i+97,i-1,i+97,i+96);
 }
 const apronGeometry=new THREE.BufferGeometry();apronGeometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));apronGeometry.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));apronGeometry.setIndex(indices);apronGeometry.computeVertexNormals();
 site.add(new THREE.Mesh(apronGeometry,new THREE.ShaderMaterial({uniforms:surfaceMaterial.uniforms,vertexShader:surfaceMaterial.vertexShader.replace('vNormal=normal','vNormal=normalize(mat3(modelMatrix)*vec3(position.x,65.+position.y,position.z))'),fragmentShader:surfaceMaterial.fragmentShader,side:THREE.DoubleSide})));
 const edge=new THREE.Mesh(new THREE.CylinderGeometry(4.45,4.53,.12,8),edgeMaterial);edge.rotation.y=Math.PI/8;edge.position.y=PLATFORM_TOP-.065;site.add(edge);
 const deck=new THREE.Mesh(new THREE.CircleGeometry(PLATFORM_RADIUS,8),new THREE.MeshStandardMaterial({map:texture,bumpMap:texture,bumpScale:.014,roughness:.86,metalness:.28}));
 deck.rotation.set(-Math.PI/2,0,Math.PI/8);deck.position.y=PLATFORM_TOP;deck.name='WEATHERED_LANDING_DECK';site.add(deck);
 const fasteners=new THREE.InstancedMesh(new THREE.CylinderGeometry(.035,.035,.014,6),new THREE.MeshStandardMaterial({color:0x68727a,roughness:.48,metalness:.8}),32);
 const matrix=new THREE.Matrix4();for(let i=0;i<32;i++){const a=i/32*Math.PI*2,r=3.92;matrix.makeTranslation(Math.cos(a)*r,PLATFORM_TOP+.007,Math.sin(a)*r);fasteners.setMatrixAt(i,matrix);}site.add(fasteners);
 const glowCanvas=document.createElement('canvas');glowCanvas.width=glowCanvas.height=64;const ctx=glowCanvas.getContext('2d'),g=ctx.createRadialGradient(32,32,1,32,32,30);g.addColorStop(0,'#ffcb82a0');g.addColorStop(.3,'#e7974550');g.addColorStop(1,'#e7974500');ctx.fillStyle=g;ctx.fillRect(0,0,64,64);
 const glowTexture=new THREE.CanvasTexture(glowCanvas);glowTexture.colorSpace=THREE.SRGBColorSpace;
 const lenses=[],pools=[];
 for(let i=0;i<8;i++){
  const a=i*Math.PI/4,x=Math.cos(a)*3.98,z=Math.sin(a)*3.98;
  const housing=new THREE.Mesh(new THREE.BoxGeometry(.62,.055,.16),edgeMaterial);housing.position.set(x,PLATFORM_TOP+.018,z);housing.rotation.y=-a+Math.PI/2;site.add(housing);
  const lens=new THREE.Mesh(new THREE.BoxGeometry(.40,.012,.065),new THREE.MeshBasicMaterial({color:0xffd197,toneMapped:false}));lens.position.set(x,PLATFORM_TOP+.050,z);lens.rotation.y=housing.rotation.y;site.add(lens);lenses.push(lens);
  const pool=new THREE.Mesh(new THREE.PlaneGeometry(1.6,.85),new THREE.MeshBasicMaterial({map:glowTexture,transparent:true,opacity:.4,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false}));pool.rotation.x=-Math.PI/2;pool.position.set(x*.94,PLATFORM_TOP+.003,z*.94);site.add(pool);pools.push(pool);
 }
 return {update(approach){const strength=.72+approach*.28;for(const lens of lenses)lens.material.color.setRGB(1.1*strength,.71*strength,.35*strength);for(const pool of pools)pool.material.opacity=.32+approach*.16;}};
}
