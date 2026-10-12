import * as THREE from 'three';
const noiseGLSL=`float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}`;
export function createSiteDust(site){
 const quad=new THREE.PlaneGeometry(1,1),g=new THREE.InstancedBufferGeometry();g.index=quad.index.clone();g.setAttribute('position',quad.attributes.position.clone());g.setAttribute('uv',quad.attributes.uv.clone());quad.dispose();
 const count=64,data=new Float32Array(count*3);for(let i=0;i<count;i++)data.set([i/count,(i*.61803398875)%1,(i*.38196601125+.17)%1],i*3);g.setAttribute('seed',new THREE.InstancedBufferAttribute(data,3));g.instanceCount=count;
 const uniforms={time:{value:0},strength:{value:0}};
 const material=new THREE.ShaderMaterial({uniforms,transparent:true,depthWrite:false,vertexShader:`attribute vec3 seed;uniform float time,strength;varying vec2 vUv;varying float age;varying float variation;void main(){age=fract(seed.x+time*.32);float angle=seed.y*6.283185+time*.045;float radius=1.5+age*9.;vec3 p=vec3(cos(angle)*radius,.7+sin(age*3.14)*(1.+seed.z),sin(angle)*radius);vec4 mv=modelViewMatrix*vec4(p,1.);mv.xy+=position.xy*(1.2+age*4.5)*vec2(1.5,.6);gl_Position=projectionMatrix*mv;vUv=uv;variation=seed.z;}`,
 fragmentShader:`uniform float time,strength;varying vec2 vUv;varying float age;varying float variation;${noiseGLSL}void main(){vec2 p=vUv*2.-1.;float n=noise(p*4.+variation*30.-vec2(time*.4,time*.18));float alpha=exp(-dot(p,p)*3.2)*(1.-smoothstep(.6,1.,length(p)))*smoothstep(0.,.15,age)*(1.-smoothstep(.55,1.,age));alpha*=strength*.5*smoothstep(.17,.75,n);gl_FragColor=vec4(mix(vec3(.18,.15,.12),vec3(.62,.43,.26),n),alpha);}`});
 const mesh=new THREE.Mesh(g,material);mesh.name='LandingTakeoffDust';mesh.frustumCulled=false;site.add(mesh);
 let strength=0;
 return {update(delta,animated,target){if(animated)uniforms.time.value+=delta;strength=animated?THREE.MathUtils.damp(strength,target,target>strength?4:1.25,delta):0;uniforms.strength.value=strength;mesh.visible=strength>.002;},get strength(){return strength;}};
}
export function createValleyHaze(scene){
 const uniforms={time:{value:0},strength:{value:0}};
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(2,2),new THREE.ShaderMaterial({uniforms,transparent:true,depthWrite:false,depthTest:false,vertexShader:'varying vec2 p;void main(){p=uv;gl_Position=vec4(position.xy,0.,1.);}',fragmentShader:`varying vec2 p;uniform float time,strength;${noiseGLSL}void main(){float cloud=noise(vec2(p.x*6.-time*.025,p.y*8.))+noise(vec2(p.x*12.+time*.04,p.y*14.))*.35;float band=exp(-pow((p.y-.39)*11.,2.));float alpha=smoothstep(.4,.95,cloud)*band*.16*strength;gl_FragColor=vec4(vec3(.43,.32,.22),alpha);}`}));mesh.frustumCulled=false;mesh.renderOrder=8;scene.add(mesh);
 return {update(delta,animated,strength){if(animated)uniforms.time.value+=delta;uniforms.strength.value=strength;},get time(){return uniforms.time.value;}};
}
