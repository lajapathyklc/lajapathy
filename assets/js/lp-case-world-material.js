// Case-study material refinements on the existing shared planet factory.
// Spherical atlas projection keeps macro formations continuous over longitude.
import {THREE,geologyGLSL} from './hero-3d-core.js?v=performance-20261011-09b';
export function refineCaseWorld(globe,world){
 const f=n=>Number(n).toFixed(7),seed=world.worldSeed%997,tilt=world.axialTilt*Math.PI/180;
 const color=c=>{const v=new THREE.Color(c).convertLinearToSRGB();return `vec3(${f(v.r)},${f(v.g)},${f(v.b)})`;};
 const common=geologyGLSL.replace(/float rock\(vec2 p\)\{[^}]*\}/,`
 vec3 sphereField(vec2 p){float a=p.x*2.*PI,b=p.y*PI;return vec3(sin(b)*cos(a),cos(b),sin(b)*sin(a));}
 float mineralSample(vec3 q){vec3 w=pow(abs(normalize(q)),vec3(4.));w/=max(dot(w,vec3(1.)),.001);q=q*.95+vec3(${f(seed*.013)},${f(seed*.007)},${f(seed*.019)});return dot(texture2D(atlas,.5+.48*sin(q.yz)).rgb,vec3(.299,.587,.114))*w.x+dot(texture2D(atlas,.5+.48*sin(q.zx)).rgb,vec3(.299,.587,.114))*w.y+dot(texture2D(atlas,.5+.48*sin(q.xy)).rgb,vec3(.299,.587,.114))*w.z;}
 float rock(vec2 p){return mineralSample(sphereField(p));}
 `).replace(/float heightAt\(vec2 p\)\{[^}]*\}/,`
 float heightAt(vec2 p){vec3 q=sphereField(p);float macro=mineralSample(q*${f(world.formationScale)});float grain=mineralSample(q*3.13);float band=.5+.5*sin(q.y*${f(18+world.strata*33)}+macro*9.+q.x*2.);float ridge=1.-abs(macro*2.-1.);vec3 cells=q*${f(4.5+world.formationScale*2)};vec3 cell=floor(cells);float h=fract(sin(dot(cell,vec3(17.13,39.61,71.7))+${f(seed)})*43758.5);vec3 center=vec3(.5)+(fract(h*vec3(3.17,7.13,11.71))-.5)*.18;float d=length(fract(cells)-center)+(grain-.5)*.025;float r=.105+h*.16;float crater=(smoothstep(r*.78,r*.96,d)-smoothstep(r*.96,r*1.25,d))*.065-(1.-smoothstep(r*.45,r*.88,d))*.08;return clamp(macro*.68+grain*.20+band*${f(world.strata*.13)}+pow(ridge,4.)*${f(world.ridge*.18)}+crater*step(h,${f(world.craterDensity)}),.02,.97);}
 `).replace('n.x*.990+n.y*.14,-n.x*.14+n.y*.990',`n.x*${f(Math.cos(tilt))}+n.y*${f(Math.sin(tilt))},-n.x*${f(Math.sin(tilt))}+n.y*${f(Math.cos(tilt))}`);
 globe.group.traverse(o=>{if(o.material?.isShaderMaterial){o.material.vertexShader=o.material.vertexShader.replace(geologyGLSL,common);o.material.fragmentShader=o.material.fragmentShader.replace(geologyGLSL,common);}});
 const surface=globe.planet.material;
 surface.uniforms.weatherTurn=globe.clouds.u.cloudTurn;
 surface.vertexShader=surface.vertexShader.replace('(h-.35)*displacement','(h-.35)*displacement*smoothstep(.02,.20,abs(normal.z))');
 surface.fragmentShader=surface.fragmentShader
 .replace('uniform float relief,turn,sunIntensity,surfaceExposure;', 'uniform float relief,turn,sunIntensity,surfaceExposure,weatherTurn;')
 .replace('mix(n,detail,.55)',`mix(n,detail,${f(world.normalStrength)})`)
 .replace('vec3(.145,.165,.18)','vec3(.23,.25,.27)')
 .replace('vec3 darkStone=vec3(.055,.073,.091);',`vec3 darkStone=mix(vec3(.055,.073,.091),${color(world.mineralPrimary)},.18);`)
 .replace('albedo=mix(albedo,geological*.72,.25);',`albedo=mix(albedo,geological*.72,.32);float province=smoothstep(.24,.64,rock(m));albedo=mix(albedo,${color(world.mineralPrimary)}*1.10,province*.32);albedo=mix(albedo,${color(world.mineralSecondary)},smoothstep(.54,.73,elevation)*.30);`)
 .replace('float shadow=1.-dust*.10;',`float cloud=rock(geologyUV(normalize(n+sunDirection*.007),weatherTurn));float shadow=1.-dust*${f(world.dustAmount*.5)}-smoothstep(.40,.64,cloud)*${f(world.cloudDensity*.26)};`)
 .replace('mix(.90,.78,smoothstep(.28,.65,elevation))',`mix(${f(world.roughness)},.83,smoothstep(.28,.65,elevation))`)
 .replace('vec3(.42,.16,.025)','vec3(.22,.12,.055)')
 .replace('pow(1.-n.z,5.)*max(ld,0.)*.35','pow(1.-n.z,5.)*max(ld,0.)*.06');
 for(const shell of [globe.air,globe.outerAir])shell.material.fragmentShader=`varying vec3 n;uniform vec3 sunDirection;uniform float intensity,time;void main(){vec3 v=normalize(n);float limb=pow(1.-abs(v.z),4.);float alignment=dot(normalize(v.xy+vec2(.00001)),normalize(sunDirection.xy));float day=smoothstep(-.18,.75,dot(v,sunDirection));float angular=smoothstep(-.35,.95,alignment);float optical=limb*day*angular;vec3 tint=mix(${color(world.atmosphereColor)}*.42,vec3(.85,.65,.39),day*.66);gl_FragColor=vec4(tint,intensity*optical*.62);}`;
 for(const [layer,alt]of [[globe.clouds,world.weatherAltitude],[globe.haze,world.weatherAltitude+.004]]){
  const mesh=globe.group.children.find(o=>o.material?.uniforms===layer.u);mesh.scale.setScalar(alt);mesh.visible=world.cloudDensity>0;
  mesh.material.fragmentShader=mesh.material.fragmentShader.replace('geologyUV(norm,cloudTurn)','geologyUV(norm,cloudTurn)+vec2(.014*sin(norm.y*5.+cloudTurn*3.),0.)').replace('vec3(.10,.13,.16)',`mix(vec3(.10,.13,.16),${color(world.cloudColor)},.12)`);
 }
 globe.sun.material.fragmentShader=globe.sun.material.fragmentShader.replace('i<6','i<4').replace('glare*4.','glare*.25').replace('bloom*1.53','bloom*.85').replace('(.024+j*.005)','(.046+j*.008)');
}
export function createCaseStars(scene,world,mobile){
 const positions=[],colors=[],random=(()=>{let s=world.worldSeed;return()=>{s=(Math.imul(s,1664525)+1013904223)>>>0;return s/4294967296}})();
 for(let i=0;i<(mobile?Math.floor(world.starDensity*.4):world.starDensity);i++){positions.push((random()-.5)*6,(random()-.5)*2.3,-4-random()*2);const b=.15+random()*.35;colors.push(b,b*.93,b*.85)}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));const points=new THREE.Points(g,new THREE.PointsMaterial({size:mobile?.006:.004,vertexColors:true,transparent:true,opacity:.45,depthWrite:false}));scene.add(points);return points;
}
