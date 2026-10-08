// Geological shading shared with the existing LP home ray-sphere pipeline.
// Source: lp-hero-cinematic.js. Home remains untouched; no meteor/global behavior imported.
import * as THREE from './plugins/three.module.js';
export { THREE };
export const geologyGLSL = `vec2 warpUV(vec2 p){return vec2(fract(p.x+.034*sin(p.y*PI*6.)+.012*sin(p.x*PI*10.)),clamp(p.y+.017*sin(p.x*PI*6.)*sin(p.y*PI),.002,.998));}
float rock(vec2 p){return dot(texture2D(atlas,warpUV(p)).rgb,vec3(.299,.587,.114));}
// Source photography provides geological texture; height is artistically inferred, not measured topography.
float heightAt(vec2 p){return rock(p)*.78+rock(vec2(p.x*2.+.17,p.y*.81+.08))*.22;}
vec2 geologyUV(vec3 n,float turn){vec3 a=vec3(n.x*.990+n.y*.14,-n.x*.14+n.y*.990,n.z);return vec2(fract(atan(a.x,a.z)/(2.*PI)+.5-turn),acos(clamp(a.y,-1.,1.))/PI);}
vec3 aces(vec3 c){return clamp((c*(2.51*c+.03))/(c*(2.43*c+.59)+.14),0.,1.);}
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
vec3 terrainNormal(vec3 n,vec2 m,float grazing,out float slope){
 vec2 d=texel*1.4;
 vec2 fine=vec2(heightAt(m+vec2(d.x,0.))-heightAt(m-vec2(d.x,0.)),heightAt(m+vec2(0.,d.y))-heightAt(m-vec2(0.,d.y)));
 vec2 broad=vec2(rock(m+vec2(d.x*6.,0.))-rock(m-vec2(d.x*6.,0.)),rock(m+vec2(0.,d.y*6.))-rock(m-vec2(0.,d.y*6.)));
 vec2 g=(fine*.80+broad*.20)*relief*(.55+.7*grazing);slope=length(g);
 vec3 t=normalize(vec3(n.z,.0001,-n.x)),b=normalize(cross(n,t));return normalize(n-t*g.x+b*g.y);
}
vec3 stonePalette(vec2 m,float elevation,float slope){
 float region=rock(vec2(m.x+.31,m.y*.57+.11));
 vec3 basalt=vec3(.065,.072,.079),slate=vec3(.24,.255,.269),sediment=vec3(.205,.16,.12),oxide=vec3(.25,.105,.065),copper=vec3(.35,.25,.15);
 vec3 c=mix(basalt,slate,smoothstep(.20,.52,elevation));
 float deposits=smoothstep(.38,.51,region)*(1.-smoothstep(.36,.46,elevation));
 c=mix(c,sediment,deposits*.75);
 c=mix(c,oxide,smoothstep(.49,.62,region)*smoothstep(.39,.51,elevation)*.6);
 c=mix(c,copper,smoothstep(.57,.70,elevation)*smoothstep(.38,.5,region)*.65);
 return c*mix(1.,.48,smoothstep(.10,.4,slope));
}
float specularBRDF(vec3 n,vec3 l,float rough){
 vec3 v=vec3(0.,0.,1.),h=normalize(l+v);float nl=max(dot(n,l),0.),nv=max(n.z,.001),nh=max(dot(n,h),0.),vh=max(dot(v,h),0.);
 float a2=pow(rough,4.),den=nh*nh*(a2-1.)+1.;float D=a2/(PI*den*den+.0001);
 float k=pow(rough+1.,2.)/8.;float G=(nl/(nl*(1.-k)+k+.0001))*(nv/(nv*(1.-k)+k));
 float F=.035+.965*pow(1.-vh,5.);return min(.06,D*G*F/(4.*nl*nv+.0001));
}
`;
export function createHeroRenderer(canvas, maxDPR) {
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'high-performance'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,maxDPR));
 renderer.outputColorSpace=THREE.SRGBColorSpace;
 return renderer;
}
export function loadGeology(renderer, mobile) {
 return new THREE.TextureLoader().loadAsync('assets/images/hero-cinematic/geology-4k.webp').then(texture=>{
 texture.wrapS=THREE.RepeatWrapping; texture.anisotropy=Math.min(mobile?2:8,renderer.capabilities.getMaxAnisotropy());
 texture.generateMipmaps=true; return texture;
 });
}
export function heroLifecycle(root, resize, render) {
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'); let visible=true,raf=0,last=0,time=0,disposed=false;
 function frame(now){raf=0;if(disposed||document.hidden||!visible)return;const isReduced=reduced.matches,interval=isReduced?1000/20:0;if(last&&now-last<interval){raf=requestAnimationFrame(frame);return;}const dt=last?Math.min((now-last)/1000,.05):0;last=now;time+=dt;render(time,dt,isReduced);raf=requestAnimationFrame(frame);}
 function start(){if(disposed)return;last=0;if(!raf&&visible&&!document.hidden)raf=requestAnimationFrame(frame);}
 const ro=new ResizeObserver(()=>{resize();start();});ro.observe(root);
 const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;if(!visible){cancelAnimationFrame(raf);raf=0;}start();});io.observe(root);
 function motionChange(){cancelAnimationFrame(raf);raf=0;start();}
 document.addEventListener('visibilitychange',start);reduced.addEventListener('change',motionChange);
 resize();start();return {reduced,redraw:start,dispose(){disposed=true;cancelAnimationFrame(raf);raf=0;ro.disconnect();io.disconnect();document.removeEventListener("visibilitychange",start);reduced.removeEventListener("change",motionChange);}};
}
