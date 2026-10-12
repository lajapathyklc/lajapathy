import * as THREE from 'three';
import {createJourneyMeteors} from './journey-meteors.js';

// Keep the sun above the opening composition: its soft edge light belongs on the
// hull, leaving the title clear. Camera turns can bring the source into view.
// The background pass is occluded by all scene geometry.
const SUN_DIRECTION=new THREE.Vector3(.6,.32,1).normalize();

export async function createFlightEnvironment(scene,renderer,viewport){
 const texture=await new THREE.TextureLoader().loadAsync(new URL('../../assets/textures/journey/space-4k.webp',import.meta.url).href);
 texture.colorSpace=THREE.SRGBColorSpace;
 texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
 const skyUniforms={
  atlas:{value:texture},imageAspect:{value:texture.image.width/texture.image.height},
  viewportAspect:{value:1},offset:{value:new THREE.Vector2()},cover:{value:.82},
  sunPosition:{value:new THREE.Vector2()},sunVisibility:{value:0},time:{value:0}
 };
 const sky=new THREE.Mesh(new THREE.PlaneGeometry(2,2),new THREE.ShaderMaterial({
  uniforms:skyUniforms,depthWrite:false,depthTest:false,
  vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.999999,1.);}',
  fragmentShader:`
   varying vec2 vUv;
   uniform sampler2D atlas;
   uniform float imageAspect,viewportAspect,cover,sunVisibility;
   uniform vec2 offset,sunPosition;
   void main(){
    vec2 crop=viewportAspect>imageAspect?vec2(1.,imageAspect/viewportAspect):vec2(viewportAspect/imageAspect,1.);
    vec2 uv=(vUv-.5)*crop*cover+.5+offset;
    vec3 sky=texture2D(atlas,uv).rgb*.18;

    // Compact sun halo and lens glare only; no atmospheric ray pass.
    vec2 p=(vUv-sunPosition)*vec2(viewportAspect,1.);
    float r=length(p);
    float core=(1.-smoothstep(.0028,.0042,r))*4.;
    float innerGlow=exp(-r*95.)*.16;
    float scatter=exp(-r*r*42.)*.026+exp(-r*8.)*.008;
    float glare=exp(-p.y*p.y*65000.)*exp(-abs(p.x)*17.)*.012;
    vec3 sunlight=vec3(1.,.91,.74)*(core+innerGlow)+vec3(1.,.82,.61)*(scatter+glare);
    gl_FragColor=vec4(sky+sunlight*sunVisibility,1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`
 }));
 sky.name='TravelParallax4KNebulaAndSun';sky.frustumCulled=false;sky.renderOrder=-10;scene.add(sky);
 const sunLight=new THREE.DirectionalLight(0xffddad,.55);
 sunLight.name='JourneySunRim';sunLight.position.copy(SUN_DIRECTION).multiplyScalar(1000);scene.add(sunLight);
 const meteors=createJourneyMeteors(scene,renderer,viewport);
 let seed=19784;
 const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const layers=[];
 // Three finite-depth layers move at different rates as the camera translates.
 // Nearby motes, rather than a faster flight, supply the missing travel cues.
 for(const [count,span,size,opacity] of [[1000,700,2,.62],[420,180,2.7,.66],[220,70,2.1,.38]]){
  const positions=new Float32Array(count*3);for(let i=0;i<positions.length;i++)positions[i]=(rand()-.5)*span;
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
  const uniforms={span:{value:span},pixelRatio:{value:1},alpha:{value:opacity},size:{value:size}};
  const material=new THREE.ShaderMaterial({uniforms,transparent:true,depthWrite:false,
   vertexShader:`uniform float span,size,pixelRatio;varying float fade;void main(){vec3 relative=mod(position-cameraPosition+span*.5,span)-span*.5;vec3 p=cameraPosition+relative;float distanceToEye=length(relative);fade=smoothstep(8.,18.,distanceToEye)*(1.-smoothstep(span*.35,span*.49,distanceToEye));vec4 mv=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=pixelRatio*clamp(size*65./max(15.,-mv.z),1.,3.);}`,
   fragmentShader:`uniform float alpha;varying float fade;void main(){float r=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(.66,.78,.87,alpha*fade*(1.-smoothstep(.05,1.,r)));}`});
  const field=new THREE.Points(geometry,material);field.frustumCulled=false;field.name=`ParallaxStars_${span}`;scene.add(field);layers.push(field);
 }
 const positions=new Float32Array(120*6),seeds=[];
 for(let i=0;i<120;i++)seeds.push(new THREE.Vector3((rand()-.5)*100,(rand()-.5)*100,(rand()-.5)*100));
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
 const wake=new THREE.LineSegments(geometry,new THREE.LineBasicMaterial({color:0xc0d8e4,transparent:true,opacity:0,depthWrite:false}));
 wake.frustumCulled=false;wake.name='FlightDepthStreaks';scene.add(wake);
 let streak=0,first=true;
 const previous=new THREE.Vector3(),velocity=new THREE.Vector3(),direction=new THREE.Vector3(),look=new THREE.Vector3(),sunPoint=new THREE.Vector3(),p=new THREE.Vector3();
 const sunView=new THREE.Vector3(),sunTarget=new THREE.Vector3(),viewRotation=new THREE.Quaternion();
 let lightReady=false;
 function update(camera,ship,delta,moving,animated,dpr=1){
  camera.getWorldDirection(look);
  skyUniforms.viewportAspect.value=camera.aspect;
  // Bounded overscan keeps all texture coordinates inside the sharp 4K atlas.
  // Position provides travel; camera bearing provides the larger orbital sweep.
  // Absolute coordinates retain the same sky at takeoff, touchdown and reversal.
  skyUniforms.offset.value.set(
   look.x*.052+Math.sin(ship.x*.004)*.032,
   look.y*.026+Math.sin(ship.z*.004)*.035+Math.sin(ship.y*.01)*.018
  );
  skyUniforms.cover.value=.82-Math.min(.025,Math.max(0,ship.y-10)*.00045);
  if(animated)skyUniforms.time.value+=delta;
  // Ease the sun direction in view space, before projection, so camera turns
  // cannot whip a screen-space light source through infinity. Reset and
  // reduced-motion changes settle immediately; normal tracking has a short lag.
  viewRotation.copy(camera.quaternion).invert();sunTarget.copy(SUN_DIRECTION).applyQuaternion(viewRotation);
  const settle=!lightReady||!animated||(!moving&&previous.distanceToSquared(ship)>4);
  const follow=settle?1:1-Math.exp(-delta*7);
  sunView.lerp(sunTarget,follow).normalize();lightReady=true;
  const facing=-sunView.z,visibility=THREE.MathUtils.smoothstep(facing,.18,.55);
  skyUniforms.sunVisibility.value=settle?visibility:THREE.MathUtils.damp(skyUniforms.sunVisibility.value,visibility,8,delta);
  if(facing>.14){
   sunPoint.copy(sunView).multiplyScalar(10000).applyMatrix4(camera.projectionMatrix);
   skyUniforms.sunPosition.value.set(sunPoint.x*.5+.5,sunPoint.y*.5+.5);
  }
  layers.forEach(field=>field.material.uniforms.pixelRatio.value=dpr);
  meteors.update(delta,camera,animated);
  velocity.copy(ship).sub(previous).divideScalar(Math.max(delta,.001));
  if(first||!moving||!animated)velocity.set(0,0,0);
  previous.copy(ship);first=false;
  const speed=Math.min(1,velocity.length()/130);
  streak=animated?THREE.MathUtils.damp(streak,speed,5,delta):0;
  wake.material.opacity=streak*.3;
  direction.copy(velocity).normalize().multiplyScalar(-Math.min(1.6,streak*1.6));
  for(let i=0;i<seeds.length;i++){
   p.copy(seeds[i]);
   for(const axis of ['x','y','z'])p[axis]=camera.position[axis]+THREE.MathUtils.euclideanModulo(p[axis]-camera.position[axis]+50,100)-50;
   positions.set(p.toArray(),i*6);positions.set(p.add(direction).toArray(),i*6+3);
  }
  geometry.attributes.position.needsUpdate=true;wake.visible=streak>.01;
 }
 return {update,dispose(){texture.dispose();},get parallax(){return {
  layers:4,streakStrength:streak,backgroundResolution:[texture.image.width,texture.image.height],backgroundMapping:'bounded-travel-parallax',
  skyOffset:skyUniforms.offset.value.toArray(),skyCover:skyUniforms.cover.value,
  sun:{style:'soft-sun-glare',cameraResponseSeconds:1/7,position:skyUniforms.sunPosition.value.toArray(),visibility:skyUniforms.sunVisibility.value,time:skyUniforms.time.value,occlusion:'behind-scene-geometry'},
  meteors:meteors.stats
 };}};
}
