import * as THREE from 'three';
export const EXHAUST_REACH=13;
const SOCKET_NAMES=['ATTACH_engine_port','ATTACH_engine_starboard'];
function plumeGeometry(){
 const positions=[],uvs=[],indices=[],rings=44,sides=24;
 for(let i=0;i<=rings;i++)for(let j=0;j<=sides;j++){
  const a=j/sides*Math.PI*2;positions.push(Math.cos(a),Math.sin(a),i/rings);uvs.push(j/sides,i/rings);
  if(i<rings&&j<sides){const n=i*(sides+1)+j;indices.push(n,n+1,n+sides+1,n+1,n+sides+2,n+sides+1);}
 }
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));g.setIndex(indices);g.boundingSphere=new THREE.Sphere(new THREE.Vector3(0,0,6),8);return g;
}
const vertex=`uniform float time,thrust,layer;varying vec2 vUv;varying float vRipple;
void main(){vUv=uv;float t=position.z;float pulse=1.+.12*sin(time*24.)+.07*sin(time*39.+layer);float ripple=sin(t*45.-time*31.+uv.x*19.)*.12+sin(t*83.-time*47.-uv.x*31.)*.06;float radius=(.24+.20*sin(t*3.14))*pow(1.-t,.72)*(1.+ripple)*(layer<.5?1.:.5);vec3 p=vec3(position.xy*radius,t*10.*mix(.08,1.,thrust)*pulse*(layer<.5?1.:.64));p.xy+=vec2(sin(t*18.-time*13.),cos(t*23.-time*16.))*t*t*.18*thrust;vRipple=ripple;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`;
const fragment=`uniform float time,thrust,layer;varying vec2 vUv;varying float vRipple;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
void main(){float t=vUv.y;float n=noise(vec2(vUv.x*12.+sin(t*11.-time*4.),t*27.-time*18.));float streak=noise(vec2(vUv.x*23.,t*53.-time*32.));float breakup=smoothstep(.13+t*.45,.72,n*.7+streak*.3);float life=1.-smoothstep(.5,1.,t);vec3 fire=mix(vec3(1.7,.53,.055),vec3(1.2,.075,.005),t);fire=mix(fire,vec3(1.7,1.15,.55),exp(-t*8.));if(layer>.5)fire=mix(vec3(1.7,1.8,2.),vec3(1.8,.65,.07),smoothstep(0.,.75,t));float alpha=(layer<.5?.46:.58)*life*(.25+breakup*.75)*smoothstep(0.,.08,thrust);gl_FragColor=vec4(fire,alpha);
#include <tonemapping_fragment>
#include <colorspace_fragment>}`;
const sparkVertex=`attribute float size,alpha;varying vec3 vColor;varying float vAlpha;
void main(){vColor=color;vAlpha=alpha;vec4 viewPosition=modelViewMatrix*vec4(position,1.);gl_PointSize=size*(300./max(1.,-viewPosition.z));gl_Position=projectionMatrix*viewPosition;}`;
const sparkFragment=`varying vec3 vColor;varying float vAlpha;
void main(){vec2 p=abs(gl_PointCoord-.5)*2.;float core=1.-smoothstep(0.,.52,length(p));float rays=max(exp(-p.x*34.-p.y*5.),exp(-p.y*34.-p.x*5.));float sparkle=max(core,rays*.8);gl_FragColor=vec4(vColor*(.8+sparkle),vAlpha*sparkle);
#include <tonemapping_fragment>
#include <colorspace_fragment>}`;
function createSparks(group,index){
 const count=24,positions=new Float32Array(count*3),colors=new Float32Array(count*3),sizes=new Float32Array(count),alphas=new Float32Array(count);
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3).setUsage(THREE.DynamicDrawUsage));geometry.setAttribute('color',new THREE.BufferAttribute(colors,3).setUsage(THREE.DynamicDrawUsage));geometry.setAttribute('size',new THREE.BufferAttribute(sizes,1).setUsage(THREE.DynamicDrawUsage));geometry.setAttribute('alpha',new THREE.BufferAttribute(alphas,1).setUsage(THREE.DynamicDrawUsage));
 const material=new THREE.ShaderMaterial({vertexShader:sparkVertex,fragmentShader:sparkFragment,transparent:true,depthWrite:false,vertexColors:true,blending:THREE.AdditiveBlending});
 const points=new THREE.Points(geometry,material);points.name='ThrusterSparkles';group.add(points);
 const random=n=>{const value=Math.sin((index+1)*127.1+(n+1)*311.7)*43758.5453;return value-Math.floor(value);};
 const particles=Array.from({length:count},(_,i)=>({phase:random(i*5),life:.52+random(i*5+1)*.72,speed:6+random(i*5+2)*4.5,spread:.18+random(i*5+3)*.42,size:.16+random(i*5+4)*.24,warm:random(i*5+5)}));
 return {geometry,material,positions,colors,sizes,alphas,particles};
}
export function createEngineExhaust(model){
 const groups=[],materials=[],lights=[],sparkFields=[],geometry=plumeGeometry();let time=0,thrust=0,target=0;
 for(const [index,name] of SOCKET_NAMES.entries()){
  const socket=model.getObjectByName(name);if(!socket)throw new Error('Engine socket missing');
  const group=new THREE.Group();group.name=`EngineExhaust_${index}`;socket.add(group);groups.push(group);
  for(let layer=0;layer<2;layer++){
   const material=new THREE.ShaderMaterial({uniforms:{time:{value:0},thrust:{value:0},layer:{value:layer}},vertexShader:vertex,fragmentShader:fragment,transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending});
   const mesh=new THREE.Mesh(geometry,material);mesh.name=layer?'MovingFlameCore':'Turbulent3DFlame';group.add(mesh);materials.push({material,index});
  }
  sparkFields.push(createSparks(group,index));
  const light=new THREE.PointLight(0xff8c32,0,9,2);light.position.z=.35;socket.add(light);lights.push(light);
 }
 return {sockets:SOCKET_NAMES,get thrust(){return thrust;},get targetThrust(){return target;},get time(){return time;},setThrust(v=0,immediate=false){target=THREE.MathUtils.clamp(v,0,1);if(immediate)thrust=target;},setVisible(v){groups.forEach(g=>g.visible=v);},
 update(delta,animated=true){if(animated){time+=delta;thrust=THREE.MathUtils.damp(thrust,target,7,delta);}else thrust=target;for(const {material,index} of materials){material.uniforms.time.value=time+index*.19;material.uniforms.thrust.value=thrust;}sparkFields.forEach(field=>{for(let i=0;i<field.particles.length;i++){const p=field.particles[i],cycle=(time/p.life+p.phase)%1,age=cycle*p.life,spread=p.spread*(.25+cycle);field.positions[i*3]=Math.sin(age*13+i*2.4)*spread;field.positions[i*3+1]=Math.cos(age*11+i*1.7)*spread;field.positions[i*3+2]=.12+age*p.speed;const fade=Math.sin(Math.PI*cycle)*thrust;field.alphas[i]=fade;field.sizes[i]=p.size*(1-cycle*.45);const warmth=THREE.MathUtils.clamp(cycle*.8+p.warm*.35,0,1);field.colors[i*3]=1;field.colors[i*3+1]=1-warmth*.48;field.colors[i*3+2]=.65-warmth*.58;}field.geometry.attributes.position.needsUpdate=true;field.geometry.attributes.color.needsUpdate=true;field.geometry.attributes.size.needsUpdate=true;field.geometry.attributes.alpha.needsUpdate=true;});lights.forEach((l,i)=>l.intensity=thrust*(3.4+.7*Math.sin(time*27+i)));},
 dispose(){lights.forEach(l=>l.removeFromParent());groups.forEach(g=>g.removeFromParent());materials.forEach(({material})=>material.dispose());sparkFields.forEach(({geometry,material})=>{geometry.dispose();material.dispose();});geometry.dispose();}};
}
