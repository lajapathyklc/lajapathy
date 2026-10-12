import * as THREE from 'three';
import { createSiteDust, createValleyHaze } from './atmosphere-effects.js';
import { createLandingPlatform, PLATFORM_TOP } from './landing-platform.js';
import { geologyGLSL } from './geology.js';
import { CHAPTERS } from './chapters.js';
import { JOURNEY_LAYOUT, PLANET_RADIUS, SURFACE_HEIGHT } from './journey-layout.js';
import {hardLandingImpact} from './landing-controller.js';
export const WORLD_DEFINITIONS=Object.freeze(Object.fromEntries(CHAPTERS.map((chapter,index)=>{const pose=JOURNEY_LAYOUT[index];return [chapter.id,Object.freeze({id:chapter.id,name:chapter.name,radius:PLANET_RADIUS,position:[pose.x,SURFACE_HEIGHT-PLANET_RADIUS,pose.z],landingAnchor:[pose.x,SURFACE_HEIGHT,pose.z],landingHeading:pose.heading,tint:chapter.tint})];})));
const vertex=`varying vec3 vNormal;varying vec3 vWorld;void main(){vNormal=normal;vec4 p=modelMatrix*vec4(position,1.);vWorld=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}`;
// Same basalt/slate palette, grazing relief and ridge lighting as the Home hero.
const fragment=`precision highp float;varying vec3 vNormal;varying vec3 vWorld;uniform sampler2D atlas;uniform vec2 texel;uniform float relief,turn,reveal;uniform vec3 tint,sunDirection;const float PI=3.14159265359;${geologyGLSL}
void main(){vec3 n=normalize(vNormal),v=normalize(cameraPosition-vWorld);vec2 globeUV=geologyUV(n,turn);vec2 capUV=n.xz*2.8+vec2(.44+turn*.08,.55);float capMix=smoothstep(.84,.97,n.y)*(1.-smoothstep(28.,55.,distance(cameraPosition,vWorld)));vec2 m=mix(globeUV,capUV,capMix);float ld=dot(n,sunDirection),slope;float day=smoothstep(-.045,.065,ld),grazing=exp(-pow((ld-.09)/.25,2.));vec3 detailed=terrainNormal(n,m,grazing,slope);vec2 d=texel*1.4;vec2 capGradient=vec2(heightAt(m+vec2(d.x,0.))-heightAt(m-vec2(d.x,0.)),heightAt(m+vec2(0.,d.y))-heightAt(m-vec2(0.,d.y)));detailed=mix(detailed,normalize(n-vec3(capGradient.x,0.,capGradient.y)*relief*.38),capMix);detailed=normalize(mix(n,detailed,smoothstep(.025,.20,dot(n,v))));float elevation=heightAt(m);float lit=max(dot(detailed,sunDirection),0.)*day;float horizon=heightAt(m+vec2(-texel.x*7.,texel.y*5.));float shadows=1.-smoothstep(.018,.075,horizon-elevation)*grazing*.72;float cavity=clamp(.56+elevation*.85,.56,1.)*shadows;vec3 albedo=stonePalette(m,elevation,slope);float reflected=.008+exp(-pow(ld/.19,2.))*.15;vec3 energy=pow(albedo,vec3(2.2))*((lit*3.25+reflected)*cavity)*vec3(1.13,1.,.88);energy+=pow(albedo,vec3(2.2))*vec3(.54,.19,.028)*lit*grazing*smoothstep(.035,.18,slope);float ridgeCatch=max(dot(detailed,sunDirection)-max(ld,0.),0.);energy+=vec3(.21,.132,.055)*ridgeCatch*grazing*day;float contrast=clamp(.85+(elevation-rock(m+texel*12.))*2.5,.38,1.18);energy*=contrast;float grain=rock(vWorld.xz*.025);energy*=mix(1.,.8+grain*.5,1.-smoothstep(25.,75.,distance(cameraPosition,vWorld)));float rim=pow(1.-max(dot(n,v),0.),5.);energy+=vec3(.82,.29,.055)*rim*day*.3;gl_FragColor=vec4(pow(aces(max(energy,vec3(0.))),vec3(1./2.2)),reveal);}`;
export function createWorldSystem(scene) {
  const root=new THREE.Group();root.name='ResumeJourneyWorldSystem';scene.add(root);
  let activeIndex=0,worlds=[],atlas;const haze=createValleyHaze(scene);
  // Keep the light count fixed to avoid shader recompilation during takeoff.
  const deckLights=[-1,1].map(side=>{const light=new THREE.PointLight(0xffb76d,.8,7,2);light.userData.side=side;root.add(light);return light;});
  const geometry=new THREE.SphereGeometry(65,160,112);
  async function load(renderer){
    atlas=await new THREE.TextureLoader().loadAsync(new URL('../../assets/textures/journey/geology-4k.webp',import.meta.url).href);
    atlas.wrapS=atlas.wrapT=THREE.RepeatWrapping;atlas.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
    for(const [index,chapter] of CHAPTERS.entries()){
      const def=WORLD_DEFINITIONS[chapter.id],group=new THREE.Group();group.name=`WORLD_${chapter.id}`;group.position.fromArray(def.position);
      const uniforms={atlas:{value:atlas},texel:{value:new THREE.Vector2(1/atlas.image.width,1/atlas.image.height)},relief:{value:4.2},turn:{value:index*.127},atmosphere:{value:1},reveal:{value:0},cloudTurn:{value:index*.127},tint:{value:new THREE.Color(chapter.tint)},sunDirection:{value:new THREE.Vector3(.65,.18,-.74).normalize()}};
      const planet=new THREE.Mesh(geometry,new THREE.ShaderMaterial({uniforms,vertexShader:vertex,fragmentShader:fragment,transparent:true}));planet.userData.planetIndex=index;group.add(planet);
      const air=new THREE.Mesh(geometry,new THREE.ShaderMaterial({
        uniforms:{color:{value:new THREE.Color(chapter.tint)},atmosphere:uniforms.atmosphere},vertexShader:vertex,
        fragmentShader:`varying vec3 vNormal;varying vec3 vWorld;uniform vec3 color;uniform float atmosphere;void main(){vec3 n=normalize(vNormal),v=normalize(cameraPosition-vWorld);float rim=pow(1.-max(dot(n,v),0.),4.);float day=max(dot(n,normalize(vec3(.65,.18,-.74))),0.);gl_FragColor=vec4(mix(color,vec3(1.,.65,.32),day),atmosphere*rim*(.10+day*.24));}`,
        transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.FrontSide}));air.scale.setScalar(1.008);group.add(air);
      const outer=air.clone();outer.material=air.material.clone();outer.material.uniforms.atmosphere=uniforms.atmosphere;outer.scale.setScalar(1.035);group.add(outer);
      const clouds=new THREE.Mesh(geometry,new THREE.ShaderMaterial({uniforms,vertexShader:vertex,fragmentShader:`precision highp float;varying vec3 vNormal;varying vec3 vWorld;uniform sampler2D atlas;uniform vec2 texel;uniform float relief,turn,cloudTurn,atmosphere;uniform vec3 tint,sunDirection;const float PI=3.14159265359;${geologyGLSL}
      void main(){vec3 n=normalize(vNormal);vec2 uv=geologyUV(n,cloudTurn+.08);vec3 sampleColor=texture2D(atlas,uv).rgb;float mask=smoothstep(.39,.62,dot(sampleColor,vec3(.333)))*(1.-smoothstep(.38,.64,texture2D(atlas,uv*1.7+.2).r));float day=max(dot(n,sunDirection),0.);gl_FragColor=vec4(mix(vec3(.10,.13,.16),vec3(.39,.33,.25),day),atmosphere*mask*.22*(.2+day*.8));}`,transparent:true,depthWrite:false,side:THREE.FrontSide}));clouds.scale.setScalar(1.012);group.add(clouds);root.add(group);
      const site=new THREE.Group();site.name=`LANDING_${chapter.id}`;site.position.fromArray(def.landingAnchor);site.rotation.y=def.landingHeading;root.add(site);
      const platform=createLandingPlatform(site,atlas,index,planet.material);
      // Small weathered outcrops add depth without blocking the ship or horizon.
      const rockMaterial=new THREE.MeshStandardMaterial({map:atlas,color:0x343a42,roughness:1});
      for(let i=0;i<14;i++){
        const angle=i*2.399,r=8+(i%5)*2.5,x=Math.cos(angle)*r,z=Math.sin(angle)*r,height=.35+(i%4)*.18;
        const shape=new THREE.SphereGeometry(1,28,20),p=shape.attributes.position;
        for(let j=0;j<p.count;j++){const x=p.getX(j),y=p.getY(j),z=p.getZ(j),scale=.85+.17*Math.sin(x*11+y*9+z*7);p.setXYZ(j,x*scale,y*scale,z*scale);}shape.computeVertexNormals();
        const rock=new THREE.Mesh(shape,rockMaterial);rock.position.set(x,Math.sqrt(65*65-r*r)-65+height*.28,z);rock.scale.set(.5+(i%3)*.3,height,.5+(i%2)*.3);rock.rotation.set(i*.3,i*.7,i*.2);site.add(rock);
      }
      // Soft contact shadow, independent of the expensive ship's mesh shadow passes.
      const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=128;const ctx=shadowCanvas.getContext('2d'),gradient=ctx.createRadialGradient(64,64,8,64,64,60);gradient.addColorStop(0,'rgba(0,0,0,.75)');gradient.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=gradient;ctx.fillRect(0,0,128,128);
      const shadowTexture=new THREE.CanvasTexture(shadowCanvas),shadow=new THREE.Mesh(new THREE.PlaneGeometry(5,6),new THREE.MeshBasicMaterial({map:shadowTexture,transparent:true,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.position.y=PLATFORM_TOP+.004;shadow.name='SHIP_CONTACT_SHADOW';site.add(shadow);
      const dust=createSiteDust(site);worlds.push({group,planet,site,shadow,uniforms,dust,platform,contactY:SURFACE_HEIGHT+PLATFORM_TOP,index,def});
    }
  }
  function activate(id){activeIndex=CHAPTERS.findIndex(c=>c.id===id);if(activeIndex<0)throw new Error(`Unknown world: ${id}`);return worlds[activeIndex].group;}
  function update(delta,animated,progress=0,from=null,to=activeIndex,playback='idle'){
    const reveal=from===null?THREE.MathUtils.smootherstep(progress,.14,.29):1;
    for(const world of worlds){
      world.uniforms.reveal.value=world.index===to?reveal:1;
      world.group.visible=(world.index===to&&reveal>.001)||(world.index===from&&progress<.90);
      world.uniforms.atmosphere.value=world.index===to?reveal*(1-THREE.MathUtils.smootherstep(progress,.60,.93)):world.index===from?THREE.MathUtils.smootherstep(progress,0,.26):1;
      if(animated)world.uniforms.cloudTurn.value+=delta*.004;
      world.site.visible=(world.index===to&&reveal>.995)||(world.index===from&&progress<.90);
      world.shadow.material.opacity=world.index===to?THREE.MathUtils.smootherstep(progress,.78,1):1-THREE.MathUtils.smootherstep(progress,.06,.26);
      const landing=world.index===to&&playback==='playing'?THREE.MathUtils.smootherstep(progress,.76,.94):0;
      const takeoff=world.index===from&&playback==='playing'?THREE.MathUtils.smootherstep(progress,0,.09)*(1-THREE.MathUtils.smootherstep(progress,.16,.31)):0;
      const impact=world.index===to&&playback==='playing'?hardLandingImpact(progress,to)*2.4:0;
      world.dust.update(delta,animated,Math.max(landing,takeoff,impact));
      world.platform.update(Math.max(landing,takeoff));
    }
    const litWorld=worlds[from!==null&&progress<.48?from:to];
    if(litWorld)for(const light of deckLights){light.position.copy(litWorld.site.position).add(new THREE.Vector3(light.userData.side*3.6,.55,-.6).applyQuaternion(litWorld.site.quaternion));light.intensity=reveal===0?0:playback==='playing'?1.8:.8;}
    haze.update(delta,animated,playback==='landed'?1:THREE.MathUtils.smootherstep(progress,.65,.94));
  }
  function dispose(){const materials=new Set(),textures=new Set();root.traverse(n=>{if(n.geometry&&n.geometry!==geometry)n.geometry.dispose();if(n.material)materials.add(n.material);});materials.forEach(m=>{if(m.map)textures.add(m.map);m.dispose();});textures.forEach(t=>t.dispose());atlas?.dispose();geometry.dispose();root.removeFromParent();}
  return {root,load,activate,update,get effects(){return {visiblePlanets:worlds.filter(w=>w.group.visible).length,cloudTime:haze.time,dust:worlds.map(w=>w.dust.strength)};},setLandingMode(){},dispose,get active(){return worlds[activeIndex]?.group??null;},get planet(){return worlds[activeIndex]?.planet??null;},get planets(){return worlds.map(w=>w.planet);},get landingSite(){const w=worlds[activeIndex];return w?{group:w.site,contactY:w.contactY}:null;}};
}
