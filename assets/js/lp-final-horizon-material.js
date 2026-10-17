// Instance-owned refinements on the existing planet factory. No global shader hooks.
import {THREE,geologyGLSL} from './hero-3d-core.js?v=performance-20261011-09b';
export function refineHorizonPlanet(globe,{footer=false}={}){
 const common=geologyGLSL;
 globe.group.traverse(o=>{if(o.material?.isShaderMaterial){o.material.onBeforeCompile=()=>{};o.material.vertexShader=o.material.vertexShader.replace(geologyGLSL,common);o.material.fragmentShader=o.material.fragmentShader.replace(geologyGLSL,common)}});
 const material=globe.planet.material;material.uniforms.weatherTurn=globe.clouds.u.cloudTurn;
 material.vertexShader=material.vertexShader.replace('(h-.35)*displacement','(h-.35)*displacement*smoothstep(.015,.18,abs(normal.z))');
 material.fragmentShader=material.fragmentShader
 .replace('uniform float relief,turn,sunIntensity,surfaceExposure;','uniform float relief,turn,sunIntensity,surfaceExposure,weatherTurn;')
 .replace('mix(n,detail,.55)','mix(n,detail,mix(.60,.78,grazing))')
 .replace('vec3(.145,.165,.18)','vec3(.22,.235,.245)')
 .replace('albedo=mix(albedo,geological*.72,.25);','albedo=mix(albedo,geological*.72,.35);albedo*=mix(.90,1.10,smoothstep(.24,.67,elevation));')
 .replace('float shadow=1.-dust*.10;','float weather=rock(geologyUV(normalize(n+sunDirection*.008),weatherTurn));float shadow=1.-dust*.06-smoothstep(.42,.65,weather)*.035;')
 .replace('mix(.90,.78,smoothstep(.28,.65,elevation))','mix(.94,.84,smoothstep(.28,.65,elevation))')
 .replace('vec3(.42,.16,.025)','vec3(.22,.115,.045)')
 .replace('pow(1.-n.z,5.)*max(ld,0.)*.35','pow(1.-n.z,5.)*max(ld,0.)*.05');
 for(const shell of[globe.air,globe.outerAir])shell.material.fragmentShader=`varying vec3 n;uniform vec3 sunDirection;uniform float intensity,time;void main(){vec3 v=normalize(n);float edge=pow(1.-abs(v.z),4.5);float alignment=dot(normalize(v.xy+vec2(.00001)),normalize(sunDirection.xy));float angular=pow(smoothstep(-.25,.99,alignment),2.);float day=smoothstep(-.22,.70,dot(v,sunDirection));vec3 tint=mix(vec3(.22,.29,.35),vec3(.94,.64,.32),day);gl_FragColor=vec4(tint,intensity*edge*angular*day*.72);}`;
 for(const [layer,scale]of[[globe.clouds,1.004],[globe.haze,1.008]]){const mesh=globe.group.children.find(o=>o.material?.uniforms===layer.u);mesh.scale.setScalar(scale);mesh.material.fragmentShader=mesh.material.fragmentShader.replace('geologyUV(norm,cloudTurn)','geologyUV(norm,cloudTurn)+vec2(.016*sin(norm.y*5.+cloudTurn*4.),0.)');}
 globe.sun.material.onBeforeCompile=()=>{};
 globe.sun.material.fragmentShader=`varying vec2 p;uniform float time,opacity;void main(){float r=length(p);float core=exp(-r*r*8500.);float bloom=exp(-r*r*330.)*.64+exp(-r*24.)*.12;float angle=atan(p.y,p.x);float shafts=0.;for(int i=0;i<3;i++){float j=float(i);float axis=1.00+j*.39;float beam=exp(-pow(sin(angle-axis)/(.10+j*.02),2.));shafts+=beam*exp(-r*(16.+j*3.))*.018;}shafts*=smoothstep(.01,.04,r);vec3 color=mix(vec3(1.,.53,.18),vec3(1.,.94,.79),core);gl_FragColor=vec4(color,opacity*(core*.95+bloom+shafts));}`;
}
export function horizonStars(scene,mobile,{footer=false}={}){
 let seed=footer?1931:914;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};const positions=[],colors=[];
 for(let i=0;i<(mobile?24:64);i++){positions.push(random()*8-4,random()*2.5-1.25,-4-random()*2);const b=.10+random()*.36;colors.push(b,b*.94,b*.86)}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));const points=new THREE.Points(g,new THREE.PointsMaterial({size:.003,vertexColors:true,transparent:true,opacity:footer?.30:.38,depthWrite:false}));scene.add(points);
}
