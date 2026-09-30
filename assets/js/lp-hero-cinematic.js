
(() => {
  const HERO_DEBUG = true;
  const root=document.getElementById('home');
  if(!root)return;
  const stage=root,canvases=[...root.querySelectorAll('.meteor-canvas')],contexts=canvases.map(c=>c.getContext('2d'));
  const replay=root.querySelector('.meteor-replay'),pause=root.querySelector('.meteor-pause'),reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  root.querySelector('.meteor-controls').hidden=true;
  let w=1,h=1,meteors=[],particles=[],impacts=[],spawnCount=0,running=!reduced.matches,visible=true,last=0,elapsed=0,next=.25,raf=0;
  const random=(a,b)=>a+Math.random()*(b-a),clamp=v=>Number.isFinite(v)?Math.max(0,Math.min(1,v)):0;
  const planetConfig={previewControls:HERO_DEBUG,rotationDuration:200,centerX:.82,centerY:.55,sunX:.965,sunY:.21,light:[.44,.804,-.40],relief:4.1,displacement:.0032,atmosphere:.52,cloudOpacity:.23,cloudRotationMultiplier:1.012,highHazeRotationMultiplier:1.022,lavaIntensity:.38,plumeDensity:.16,nebulaIntensity:.38,maxDPR:1.25,meteorEnabled:true};
  let renderScale=Math.min(window.devicePixelRatio||1,planetConfig.maxDPR),frameCost=16.7,qualityFrames=0,parallaxX=0,parallaxY=0;
  function planetPlacement(){
    const r=h*(w<600?.55:.60),cx=w*planetConfig.centerX,cy=h*(w<600?.58:w/h<1.5?.60:planetConfig.centerY)+100;
    const sx=Math.min(w*.985,cx+r*.86),dx=sx-cx;
    const sy=cy-Math.sqrt(Math.max(0,r*r-dx*dx));
    return {r,cx,cy,sx,sy};
  }
  const planetCanvas=root.querySelector('.planet-canvas');
  const gl=planetCanvas.getContext('webgl',{alpha:true,antialias:true,premultipliedAlpha:false});
  const planetCtx=gl?null:planetCanvas.getContext('2d');let gpu=null;
  const originalScene=root.querySelector('.original-scene-map').src;
  root.querySelector('.lp-hero-environment').style.backgroundImage='linear-gradient(90deg,rgba(0,0,0,.93),rgba(0,0,0,.92) 40%,rgba(0,0,0,.59) 55%,rgba(0,0,0,'+(1-planetConfig.nebulaIntensity)+') 80%,rgba(0,0,0,.60)),url("'+originalScene+'")';
  const starCanvas=root.querySelector('.cosmic-static'),starCtx=starCanvas.getContext('2d');
  const globe=gl?null:document.createElement('canvas');if(globe){globe.width=512;globe.height=512;}
  const globeCtx=globe?globe.getContext('2d'):null,globeImage=globeCtx?globeCtx.createImageData(512,512):null,samples=[];
  let surface=null,surfaceWidth=0,surfaceHeight=0,planetTime=-1;
  function initPlanetGPU(){
    if(!gl)return;
    const vertex=`attribute vec2 position;varying vec2 uv;void main(){uv=position*.5+.5;gl_Position=vec4(position,0.,1.);}`;
    const fragment=`precision highp float;
varying vec2 uv;
uniform sampler2D atlas;
uniform vec2 view,center,sun,texel,cloudTurns;
uniform vec3 sunDirection;
uniform float pixelSize,glowPhase;
uniform float radius,turns,relief,displacement,atmosphere,cloudOpacity,lavaIntensity,plumeDensity;
const float PI=3.14159265359;
vec2 warpUV(vec2 p){return vec2(fract(p.x+.034*sin(p.y*PI*6.)+.012*sin(p.x*PI*10.)),clamp(p.y+.017*sin(p.x*PI*6.)*sin(p.y*PI),.002,.998));}
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
vec3 volcanism(vec2 m,float day,float light,out float ash){
 // Unevenly scattered, surface-locked fields; only a few are visible at once.
 vec2 cells=vec2(11.,6.),id=floor(m*cells),local=fract(m*cells)-.5;
 float seed=hash(id);vec2 offset=vec2(hash(id+17.),hash(id+37.))*.5-.25;vec2 d=local-offset;
 float field=exp(-dot(d*vec2(1.,1.4),d*vec2(1.,1.4))*72.)*step(.60,seed);
 float crust=rock(m),rift=abs(sin((d.x*17.+d.y*9.+crust*2.)*PI));
 float fissure=(1.-smoothstep(.018,.13,rift))*field*smoothstep(.14,.45,field);
 float vent=exp(-dot(d,d)*2400.)*step(.60,seed);
 vec2 plume=d-vec2(.025*sin(turns*2.*PI+seed),-.08);
 ash=exp(-plume.x*plume.x*150.-plume.y*plume.y*26.)*field*3.;
 float twilight=exp(-pow((light+.01)/.27,2.));float visible=.13+.87*twilight;
 return (vec3(.40,.065,.009)*fissure+vec3(.86,.29,.025)*vent)*lavaIntensity*visible;
}
vec3 innerAir(vec3 n,float light,float sunLocal){
 float path=pow(1.-n.z,4.);float day=smoothstep(-.04,.25,light);
 vec3 rim=vec3(.82,.29,.055)*path*day*atmosphere*(.22+sunLocal*1.1);
 return rim+vec3(.08,.047,.029)*exp(-pow(light/.095,2.))*pow(1.-n.z,2.)*.08;
}
void main(){
 vec2 pixel=vec2(uv.x*view.x,(1.-uv.y)*view.y),p=(pixel-center)/radius;float q=dot(p,p),distance=sqrt(q);vec3 color=vec3(0.);float alpha=0.;vec3 light=normalize(sunDirection);
 vec3 provisional=normalize(vec3(p.x,-p.y,sqrt(max(0.,1.-q))));
 // Iterated ray/surface intersection: radial relief changes geometry and silhouette.
 float terrainRadius=1.;
 if(q<1.015){
  for(int i=0;i<4;i++){
   vec3 hit=normalize(vec3(p.x,-p.y,sqrt(max(.000001,terrainRadius*terrainRadius-q))));
   // Fade subpixel relief at the limb to prevent texture-driven silhouette chatter.
   float limbFilter=smoothstep(.004,.055,1.-min(q,1.));
   terrainRadius=1.+(heightAt(geologyUV(hit,turns))-.35)*displacement*limbFilter;
  }
 }
 float locality=exp(-pow(length(pixel-sun)/(radius*.5),2.));
 float aa=max(.00001,pixelSize*1.15/radius);
 float coverage=1.-smoothstep(-aa,aa,distance-terrainRadius);
 if(coverage>0.){
  vec3 n=normalize(vec3(p.x,-p.y,sqrt(max(0.,terrainRadius*terrainRadius-q))));vec2 m=geologyUV(n,turns);
  float lightDot=dot(n,light),day=smoothstep(-.045,.065,lightDot),grazing=exp(-pow((lightDot-.09)/.25,2.)),slope;
  vec3 detailed=terrainNormal(n,m,grazing,slope);
  detailed=normalize(mix(n,detailed,smoothstep(.025,.20,n.z)));
  float elevation=heightAt(m);
  float lit=max(dot(detailed,light),0.)*day;
  float horizon=heightAt(m+vec2(-texel.x*7.,texel.y*5.));float shadows=1.-smoothstep(.018,.075,horizon-elevation)*grazing*.72;
  float cavity=clamp(.56+elevation*.85,.56,1.)*shadows;
  vec3 albedo=stonePalette(m,elevation,slope);
  float reflected=.0015+exp(-pow(lightDot/.19,2.))*.15;
  float rough=mix(.94,.69,smoothstep(.16,.38,elevation))+.04*slope;
  vec3 linear=pow(albedo,vec3(2.2))*((lit*3.25+reflected)*cavity)*vec3(1.13,1.,.88);
  linear+=vec3(1.,.67,.31)*specularBRDF(detailed,light,rough)*max(lightDot,0.)*day;
  // Amber catches exposed peaks and ridge tops; valleys retain cool charcoal tones.
  linear+=pow(albedo,vec3(2.2))*vec3(.54,.19,.028)*lit*grazing*smoothstep(.035,.18,slope);
  float ridgeCatch=max(dot(detailed,light)-max(lightDot,0.),0.);
  linear+=vec3(.21,.132,.055)*ridgeCatch*grazing*day;
  float localContrast=clamp(.85+(elevation-rock(m+texel*12.))*2.5,.38,1.18);linear*=localContrast;
  float ash;linear+=volcanism(m,day,lightDot,ash);
  vec3 lowN=normalize(vec3(p.x,-p.y,sqrt(max(0.,1.012*1.012-q))));
  vec3 highN=normalize(vec3(p.x,-p.y,sqrt(max(0.,1.022*1.022-q))));
  vec2 low=geologyUV(lowN,cloudTurns.x),high=geologyUV(highN,cloudTurns.y);
  float lowDust=smoothstep(.32,.47,rock(low+vec2(.12,.01)))*smoothstep(.23,.37,1.-rock(low));
  float highDust=smoothstep(.44,.61,rock(high))*smoothstep(.33,.49,1.-rock(high+vec2(.028,.01)));
  float dust=(lowDust*.8+highDust*.4)*cloudOpacity;
  vec3 dustLight=vec3(.10,.079,.055)*max(lightDot,0.)+vec3(.16,.066,.013)*locality*pow(1.-n.z,3.);
  linear=mix(linear,dustLight,dust*day);
  linear=mix(linear,vec3(.017,.016,.014)*(reflected+max(lightDot,0.)),clamp(ash*plumeDensity,0.,.22));
  linear+=innerAir(n,lightDot,locality);color=pow(aces(max(linear,vec3(0.))),vec3(1./2.2));alpha=coverage;
 }
 // Atmosphere and surface share the same continuous coverage, avoiding a branch seam.
 float daylight=max(dot(normalize(vec3(p.x,-p.y,0.)),light),0.);
 float rimDistance=(distance-1.)*radius;
 float inner=exp(-pow(rimDistance/max(1.25,pixelSize*1.2),2.));
 float mid=exp(-pow((rimDistance-2.5)/5.5,2.));
 float outer=exp(-pow((rimDistance-6.)/12.,2.));
 float directional=pow(daylight,3.)*(.18+.82*locality);
 float airAlpha=clamp((inner*.50+mid*.19+outer*.035)*directional,0.,.85);
 airAlpha*=smoothstep(-3.,1.,rimDistance);
 vec3 airColor=mix(vec3(.34,.23,.12),vec3(1.,.62,.23),locality);
 float merged=alpha+airAlpha*(1.-alpha);
 color=(color*alpha+airColor*airAlpha*(1.-alpha))/max(merged,.00001);alpha=merged;
 // A finite stellar disc behind the displaced limb, followed by optical scattering.
 float unit=550./view.y;
 vec2 outward=normalize(sun-center);
 vec2 source=sun-outward*(1.4/unit);
 vec2 delta=(pixel-source)*unit;float sd=length(delta);
 float edge=(distance-terrainRadius)*radius*unit;
 float occult=smoothstep(-pixelSize*unit,pixelSize*unit,edge);
 float breathing=1.+.065*sin(glowPhase*.72)+.022*sin(glowPhase*1.44);
 float safe=smoothstep(.47,.66,pixel.x/view.x);
 float disc=(1.-smoothstep(3.0,4.4,sd))*occult;
 float corona=exp(-sd/11.)*.52*occult;
 // Atmospheric optical depth creates a bright crest with three different falloffs.
 float along=length(pixel-sun)*unit;
 float crest=exp(-pow(edge/1.7,2.))*exp(-along/64.);
 float limbMist=exp(-pow((edge-3.)/10.,2.))*exp(-along/108.);
 float outerMist=exp(-pow((edge-9.)/25.,2.))*exp(-along/125.)*occult;
 // A handful of broad, unequal shafts, softened by nonuniform suspended dust.
 float theta=atan(delta.y,delta.x);
 float shafts=0.;
 for(int i=0;i<6;i++){
  float fi=float(i);
  float direction=-2.96+fi*.63+.12*sin(fi*4.7)+.038*sin(glowPhase*.72+fi*1.7)+.012*sin(glowPhase*.31+fi*.9);
  float angle=atan(sin(theta-direction),cos(theta-direction));
  float width=(.028+.025*fract(fi*.618+.2))*(.94+.08*sin(glowPhase*.55+fi*1.3));
  float extent=(45.+105.*fract(fi*.754+.38))*(1.+.10*sin(glowPhase*.72+fi*.9));
  float beam=exp(-pow(angle/width,2.))*exp(-sd/extent);
  float rayFlow=.82+.18*sin(sd*.025-glowPhase*.7+fi*1.1);
  shafts+=beam*(.14+.10*fract(fi*.37))*rayFlow;
 }
 float suspended=.73+.16*sin(theta*19.+sd*.025+.42*sin(glowPhase*.72))+.11*sin(theta*33.-sd*.012+.28*cos(glowPhase*.53));
 float volume=(shafts*suspended*1.3+exp(-sd/58.)*.15)*occult;
 // Lens bloom may cross the silhouette; direct rays and the stellar disc may not.
 float bloom=exp(-sd*sd/240.)*.42+exp(-sd*sd/2400.)*.10;
 float anamor=exp(-pow(delta.y/1.05,2.))*exp(-abs(delta.x)/125.)*.13;
 float softStreak=exp(-pow(delta.y/3.7,2.))*exp(-abs(delta.x)/65.)*.032;
 // Glowing, diffuse filaments follow the curved atmospheric shell, not straight spokes.
 float limbAngle=atan(p.y,p.x),sourceAngle=atan(outward.y,outward.x);
 float arc=atan(sin(limbAngle-sourceAngle),cos(limbAngle-sourceAngle));
 float arcEnvelope=exp(-pow(arc/.57,2.));
 float drift=.055*sin(glowPhase*.72)+.022*sin(glowPhase*.36);
 float filaments=.62+.23*sin(arc*23.-drift*23.)+.15*sin(arc*41.+.35*cos(glowPhase*.53));
 float radialSpread=3.8+4.2*(.5+.5*sin(arc*17.+.38*sin(glowPhase*.72)));
 float wrapRays=exp(-pow((edge-3.5)/radialSpread,2.))*arcEnvelope*filaments;
 wrapRays*=smoothstep(-2.,1.,edge);
 float wrapHaze=exp(-pow((edge-8.)/18.,2.))*arcEnvelope;
 vec3 lightEnergy=vec3(1.,.81,.47)*(disc*2.7+corona)
  +vec3(1.,.49,.15)*(crest*.65+limbMist*.29+outerMist*.085)
  +vec3(1.,.62,.28)*(volume+wrapRays*.26+wrapHaze*.045)
  +vec3(1.,.65,.34)*(bloom+anamor+softStreak+shafts*.16);
 lightEnergy*=breathing;
 float lightAlpha=clamp(wrapRays*.22+wrapHaze*.045+disc+corona+crest*.65+limbMist*.22+outerMist*.05+volume+bloom+anamor+softStreak+shafts*.16,0.,1.)*safe;
 // Composite in premultiplied space, then return straight alpha for WebGL canvas.
 vec3 radiance=vec3(1.)-exp(-lightEnergy*safe);
 float combinedAlpha=alpha+lightAlpha*(1.-alpha);
 color=(color*alpha+radiance)/max(combinedAlpha,.0001);
 gl_FragColor=vec4(color,combinedAlpha);
}`;
    function compile(type,source){const sh=gl.createShader(type);gl.shaderSource(sh,source);gl.compileShader(sh);if(!gl.getShaderParameter(sh,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(sh));return sh;}
    const program=gl.createProgram();gl.attachShader(program,compile(gl.VERTEX_SHADER,vertex));gl.attachShader(program,compile(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));gl.useProgram(program);
    const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
    const pos=gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0);
    const uniforms=Object.fromEntries(['pixelSize','glowPhase','view','center','sun','radius','turns','texel','sunDirection','relief','atmosphere','cloudOpacity','lavaIntensity','displacement','plumeDensity','cloudTurns'].map(k=>[k,gl.getUniformLocation(program,k)]));
    const texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.REPEAT);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
    const anis=gl.getExtension('EXT_texture_filter_anisotropic');if(anis)gl.texParameterf(gl.TEXTURE_2D,anis.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(8,gl.getParameter(anis.MAX_TEXTURE_MAX_ANISOTROPY_EXT)));
    gpu={program,uniforms,texture,ready:false};
  }
  function drawPlanetGPU(time){
    if(!gpu||!gpu.ready)return;
    const {r,cx,cy,sx,sy}=planetPlacement(),u=gpu.uniforms;
    gl.viewport(0,0,planetCanvas.width,planetCanvas.height);gl.useProgram(gpu.program);
    gl.uniform1f(u.pixelSize,w/planetCanvas.width);gl.uniform1f(u.glowPhase,(time%48)/48*Math.PI*2);gl.uniform2f(u.view,w,h);gl.uniform2f(u.center,cx,cy);gl.uniform2f(u.sun,sx,sy);gl.uniform1f(u.radius,r);gl.uniform1f(u.turns,(time/planetConfig.rotationDuration)%1);gl.uniform2f(u.texel,1/(gpu.textureWidth||4096),1/(gpu.textureHeight||2048));
    gl.uniform3f(u.sunDirection,(sx-cx)/r*.9165,(cy-sy)/r*.9165,-.4);gl.uniform2f(u.cloudTurns,(time/planetConfig.rotationDuration*planetConfig.cloudRotationMultiplier)%1,(time/planetConfig.rotationDuration*planetConfig.highHazeRotationMultiplier)%1);for(const k of ['relief','atmosphere','cloudOpacity','lavaIntensity','displacement','plumeDensity'])gl.uniform1f(u[k],planetConfig[k]*(w<600&&(k==='plumeDensity'||k==='cloudOpacity')?.65:1));
    gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
  }
  initPlanetGPU();
  const surfaceImage=new Image();
  surfaceImage.onload=()=>{
    if(gl){let upload=surfaceImage;if(w<600){upload=document.createElement('canvas');upload.width=2048;upload.height=1024;upload.getContext('2d').drawImage(surfaceImage,0,0,2048,1024);}gpu.textureWidth=upload.width||surfaceImage.naturalWidth;gpu.textureHeight=upload.height||surfaceImage.naturalHeight;gl.bindTexture(gl.TEXTURE_2D,gpu.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,upload);gl.generateMipmap(gl.TEXTURE_2D);gpu.ready=true;surface=true;}
    else{const t=document.createElement('canvas');t.width=Math.min(1024,surfaceImage.naturalWidth);t.height=Math.round(t.width*surfaceImage.naturalHeight/surfaceImage.naturalWidth);const c=t.getContext('2d');c.drawImage(surfaceImage,0,0,t.width,t.height);surface=c.getImageData(0,0,t.width,t.height).data;surfaceWidth=t.width;surfaceHeight=t.height;}
    drawPlanet(elapsed,true);
  };
  surfaceImage.src=root.querySelector('.terrain-map').src;
  if(!gl)for(let y=0;y<512;y++)for(let x=0;x<512;x++){
    const nx=(x-255.5)/254,ny=-(y-255.5)/254,q=nx*nx+ny*ny;if(q>1)continue;
    const nz=Math.sqrt(1-q),light=Math.max(0,nx*.44+ny*.804-nz*.40);
    samples.push({i:(y*512+x)*4,coverage:clamp((1-Math.sqrt(q))*254),u:Math.atan2(nx,nz)/(Math.PI*2)+.5,v:Math.acos(ny)/Math.PI,shade:.004+.996*Math.pow(light,.8),rim:Math.pow(1-nz,7)*Math.pow(light,.5),nx,ny,nz});
  }
  const stars=Array.from({length:65},()=>({x:random(0,1),y:random(0,1),r:random(.3,.9),a:random(.08,.28)}));
  function resizeCosmos(){
    const d=Math.min(window.devicePixelRatio||1,1.25);
    for(const c of [planetCanvas,starCanvas]){const quality=c===planetCanvas&&gl?Math.min(renderScale,3840/w,2160/h):d;c.width=Math.round(w*quality);c.height=Math.round(h*quality);if(c!==planetCanvas||!gl)c.getContext('2d').setTransform(quality,0,0,quality,0,0);}
    starCtx.clearRect(0,0,w,h);
    for(const s of stars){starCtx.fillStyle=`rgba(190,200,217,${s.a*(s.x<.42?.4:1)})`;starCtx.beginPath();starCtx.arc(s.x*w,s.y*h,s.r,0,Math.PI*2);starCtx.fill();}
    drawDistantBodies();
    drawPlanet(elapsed,true);
  }
  function drawDistantBodies(){
    for(const body of [{x:.49,y:.15,r:4,a:.24},{x:.57,y:.40,r:7,a:.19}]){
      const x=body.x*w,y=body.y*h,r=body.r;
      starCtx.save();starCtx.globalAlpha=body.a;starCtx.fillStyle='#050609';starCtx.beginPath();starCtx.arc(x,y,r,0,Math.PI*2);starCtx.fill();
      starCtx.strokeStyle='#b28b61';starCtx.lineWidth=.65;starCtx.beginPath();starCtx.arc(x,y,r,-1.5,-.25);starCtx.stroke();starCtx.restore();
    }
  }
  function drawPlanet(time,force=false){
    if(!surface)return;
    if(gl){drawPlanetGPU(time);return;}
    if(!force&&time-planetTime<1/24)return;planetTime=time;
    // One full turn every 200 seconds. Wrapping longitude preserves direction and continuity.
    const turns=time/planetConfig.rotationDuration,data=globeImage.data,placement=planetPlacement();const lx=(placement.sx-placement.cx)/placement.r*.9165,ly=(placement.cy-placement.sy)/placement.r*.9165;
    for(const p of samples){
      const u=((p.u-turns)%1+1)%1,tx=Math.floor(u*surfaceWidth),ty=Math.min(surfaceHeight-1,Math.floor(p.v*surfaceHeight)),j=(ty*surfaceWidth+tx)*4;
      const illumination=p.nx*lx+p.ny*ly-p.nz*.4;const shade=.004+.93*Math.pow(Math.max(0,illumination),.8)+.025*Math.exp(-Math.pow(illumination/.14,2)),rim=Math.pow(1-p.nz,7)*Math.max(0,illumination);
      const rock=surface[j]*.299+surface[j+1]*.587+surface[j+2]*.114;
      data[p.i]=Math.min(255,rock*shade*.72+rim*55);
      data[p.i+1]=Math.min(255,rock*shade*.63+rim*28);
      data[p.i+2]=Math.min(255,rock*shade*.52+rim*12);
      data[p.i+3]=Math.round(p.coverage*255);
    }
    globeCtx.putImageData(globeImage,0,0);
    planetCtx.clearRect(0,0,w,h);
    const {r:radius,cx,cy,sx,sy}=planetPlacement();
    // Thin illuminated atmosphere follows the sphere silhouette.
    const halo=planetCtx.createRadialGradient(cx,cy,radius*.98,cx,cy,radius*1.055);
    halo.addColorStop(0,'rgba(255,192,87,0)');halo.addColorStop(.37,'rgba(255,176,60,.025)');halo.addColorStop(1,'rgba(255,131,32,0)');
    planetCtx.fillStyle=halo;planetCtx.beginPath();planetCtx.arc(cx,cy,radius*1.055,0,Math.PI*2);planetCtx.fill();
    planetCtx.imageSmoothingEnabled=true;planetCtx.imageSmoothingQuality="high";planetCtx.drawImage(globe,cx-radius,cy-radius,radius*2,radius*2);

    planetCtx.save();planetCtx.beginPath();planetCtx.rect(0,0,w,h);planetCtx.arc(cx,cy,radius*1.005,0,Math.PI*2);planetCtx.clip('evenodd');planetCtx.globalCompositeOperation='screen';
    const phase=(time%48)/48*Math.PI*2;
    for(let i=0;i<6;i++){
      const direction=-2.96+i*.63+.12*Math.sin(i*4.7)+.038*Math.sin(phase*.72+i*1.7)+.012*Math.sin(phase*.31+i*.9);
      const length=(45+105*((i*.754+.38)%1))*(1+.10*Math.sin(phase*.72+i*.9))*h/550;
      const width=(.028+.025*((i*.618+.2)%1))*(.94+.08*Math.sin(phase*.55+i*1.3));
      const endX=sx+Math.cos(direction)*length,endY=sy+Math.sin(direction)*length,spread=Math.tan(width*1.7)*length;
      const normalX=-Math.sin(direction)*spread,normalY=Math.cos(direction)*spread;
      const beam=planetCtx.createLinearGradient(sx,sy,endX,endY),energy=.065+.025*Math.sin(phase*.7+i*1.1);
      beam.addColorStop(0,'rgba(255,205,145,'+energy+')');beam.addColorStop(.32,'rgba(255,173,96,'+(energy*.62)+')');beam.addColorStop(1,'rgba(255,145,74,0)');
      planetCtx.fillStyle=beam;planetCtx.beginPath();planetCtx.moveTo(sx,sy);planetCtx.quadraticCurveTo(sx+Math.cos(direction)*length*.45+normalX*.35,sy+Math.sin(direction)*length*.45+normalY*.35,endX+normalX,endY+normalY);planetCtx.lineTo(endX-normalX,endY-normalY);planetCtx.quadraticCurveTo(sx+Math.cos(direction)*length*.45-normalX*.35,sy+Math.sin(direction)*length*.45-normalY*.35,sx,sy);planetCtx.fill();
    }
    planetCtx.restore();

    const glow=planetCtx.createRadialGradient(sx,sy,0,sx,sy,95);glow.addColorStop(0,'rgba(255,255,224,.96)');glow.addColorStop(.055,'rgba(255,240,157,.7)');glow.addColorStop(.19,'rgba(255,174,44,.26)');glow.addColorStop(1,'rgba(255,119,15,0)');
    planetCtx.globalCompositeOperation='screen';planetCtx.globalAlpha=.94+.065*Math.sin(phase*.72)+.022*Math.sin(phase*1.44);planetCtx.fillStyle=glow;planetCtx.fillRect(sx-95,sy-95,190,190);planetCtx.globalAlpha=1;planetCtx.globalCompositeOperation='source-over';
  }
  const portraitElement=root.querySelector('.hero-static-portrait');let portraitLighting=null;
  function preparePortraitLighting(){
    if(!portraitElement.complete||!portraitElement.naturalWidth)return;
    const edge=document.createElement('canvas');edge.height=512;edge.width=Math.round(512*portraitElement.naturalWidth/portraitElement.naturalHeight);const c=edge.getContext('2d');
    const b=portraitElement.getBoundingClientRect(),bounds=stage.getBoundingClientRect(),{sx,sy}=planetPlacement();
    const dx=Math.sign(sx-(b.left-bounds.left+b.width*.5))*3,dy=Math.sign(sy-(b.top-bounds.top+b.height*.4))*2;
    c.drawImage(portraitElement,0,0,edge.width,edge.height);c.globalCompositeOperation='destination-out';c.drawImage(portraitElement,-dx,-dy,edge.width,edge.height);
    c.globalCompositeOperation='source-in';const tint=c.createLinearGradient(0,0,0,edge.height);tint.addColorStop(0,'rgba(255,207,140,.26)');tint.addColorStop(.3,'rgba(255,182,91,.46)');tint.addColorStop(1,'rgba(255,122,24,.02)');c.fillStyle=tint;c.fillRect(0,0,edge.width,edge.height);portraitLighting=edge;
  }
  portraitElement.addEventListener('load',preparePortraitLighting);
  const mountainElement=root.querySelector('.original-mountain-layer');let mountainLighting=null;
  function prepareMountainLighting(){
    if(!mountainElement.complete||!mountainElement.naturalWidth)return;
    const layer=document.createElement('canvas');layer.width=1024;layer.height=Math.round(1024*mountainElement.naturalHeight/mountainElement.naturalWidth);
    const c=layer.getContext('2d');c.drawImage(mountainElement,0,0,layer.width,layer.height);
    const pixels=c.getImageData(0,0,layer.width,layer.height),d=pixels.data,{sx}=planetPlacement();
    for(let y=0;y<layer.height;y++)for(let x=0;x<layer.width;x++){
      const i=(y*layer.width+x)*4,lum=(d[i]*.299+d[i+1]*.587+d[i+2]*.114)/255;
      const selected=clamp((lum-.24)/.45),reach=Math.exp(-Math.abs(x/layer.width-sx/w)*1.8);
      d[i+3]=Math.round(d[i+3]*selected*reach*.22);d[i]=255;d[i+1]=185;d[i+2]=98;
    }
    c.putImageData(pixels,0,0);mountainLighting=layer;
  }
  mountainElement.addEventListener('load',prepareMountainLighting);
  const valleyCanvas=document.createElement('canvas');valleyCanvas.className='valley-atmosphere';valleyCanvas.setAttribute('aria-hidden','true');
  Object.assign(valleyCanvas.style,{position:'absolute',inset:'0',width:'100%',height:'100%',zIndex:'3',pointerEvents:'none'});
  mountainElement.insertAdjacentElement('afterend',valleyCanvas);const valleyCtx=valleyCanvas.getContext('2d');
  const clouds=[],dust=[],mountainDust=[],textures=[];
  function cloudTexture(seed){
    const texture=document.createElement('canvas');texture.width=256;texture.height=128;
    const tc=texture.getContext('2d'),image=tc.createImageData(256,128);
    const hash=(x,y)=>{const n=Math.sin(x*127.1+y*311.7+seed*73.3)*43758.5453;return n-Math.floor(n);};
    const smooth=t=>t*t*(3-2*t);
    function noise(x,y){const ix=Math.floor(x),iy=Math.floor(y),fx=smooth(x-ix),fy=smooth(y-iy);return (hash(ix,iy)*(1-fx)+hash(ix+1,iy)*fx)*(1-fy)+(hash(ix,iy+1)*(1-fx)+hash(ix+1,iy+1)*fx)*fy;}
    for(let y=0;y<128;y++)for(let x=0;x<256;x++){
      const nx=x/256,ny=y/128;
      const warp=noise(nx*4,ny*3)*1.4;
      const n=noise(nx*5+warp,ny*4)*.55+noise(nx*11,ny*9)*.27+noise(nx*23,ny*19)*.13+noise(nx*47,ny*37)*.05;
      const edge=Math.pow(Math.sin(nx*Math.PI),1.2)*Math.pow(Math.sin(ny*Math.PI),1.7);
      const density=Math.max(0,n-.29)*edge;
      const i=(y*256+x)*4,light=100+n*50;
      image.data[i]=light;image.data[i+1]=light*.75;image.data[i+2]=light*.52;image.data[i+3]=Math.min(195,density*420);
    }
    tc.putImageData(image,0,0);return texture;
  }
  for(let i=0;i<3;i++)textures.push(cloudTexture(random(0,1000)));
  // Small cached ash textures avoid per-frame noise generation and blur filters.
  const impactSmoke=textures.map(texture=>{
    const c=document.createElement('canvas');c.width=256;c.height=128;
    const ctx=c.getContext('2d');ctx.drawImage(texture,0,0);
    ctx.globalCompositeOperation='source-in';ctx.fillStyle='#443d35';ctx.fillRect(0,0,256,128);
    return c;
  });
  function resetAtmosphere(){
    clouds.length=0;dust.length=0;mountainDust.length=0;
    for(let i=0;i<(w<600?5:8);i++){
      const angle=random(-Math.PI,Math.PI),speed=random(3.5,9),front=i===7;
      clouds.push({x:random(.15,.85)*w,y:random(.77,.91)*h,width:random(.30,.64)*Math.max(w,600),height:random(32,78),vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed*.32,alpha:front?random(.09,.14):random(.25,.39),seed:random(0,100),texture:i%3,front,flip:Math.random()<.5?-1:1});
    }
    for(let i=0;i<Math.min(w<600?18:55,Math.round(w/14));i++){
      const angle=random(0,Math.PI*2),speed=random(1.2,6);
      dust.push({x:random(0,w),y:random(0,h),vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,r:random(.35,1.3),alpha:random(.025,.1),seed:random(0,100),front:Math.random()<.45});
    }
    for(let i=0;i<(w<600?26:68);i++){
      const depth=i%3,scale=[.55,1,1.45][depth],minY=[.67,.75,.82][depth]*h,maxY=[.96,1.04,1.12][depth]*h;
      const radius=depth===0?random(.6,1.2):depth===1?random(1,2):random(1.5,3.1);
      mountainDust.push({x:random(w*.38,w*1.08),y:random(minY,maxY),minY,maxY,depth,vx:random(-6,6)*scale,vy:random(-1.4,1.4)*scale,sway:random(.7,1.8)*scale,r:radius*scale,alpha:random(.05,.13),seed:random(0,100)});
    }
  }
  function renderAtmosphere(dt){
    valleyCtx.clearRect(0,0,w,h);
    const lightBreath=1+.045*Math.sin(elapsed/48*Math.PI*2)+.018*Math.sin(elapsed/48*Math.PI*4);
    if(mountainLighting){const b=mountainElement.getBoundingClientRect(),bounds=stage.getBoundingClientRect(),ctx=valleyCtx;ctx.save();ctx.globalCompositeOperation='screen';ctx.globalAlpha=clamp(.94*lightBreath);ctx.drawImage(mountainLighting,b.left-bounds.left,b.top-bounds.top,b.width,b.height);ctx.restore();}
    if(portraitLighting){const b=portraitElement.getBoundingClientRect(),bounds=stage.getBoundingClientRect(),ctx=contexts[3];ctx.save();ctx.globalCompositeOperation='screen';ctx.globalAlpha=clamp(.94*lightBreath);ctx.drawImage(portraitLighting,b.left-bounds.left,b.top-bounds.top,b.width,b.height);ctx.restore();}
    for(const c of clouds){
      const wind=.8+.28*Math.sin(elapsed*.16+c.seed);
      c.x+=c.vx*dt*wind;c.y+=c.vy*dt*wind;
      if(c.x>w+c.width*.5)c.x=-c.width;
      if(c.x<-c.width*1.1)c.x=w+c.width*.2;
      if(c.y>h+30)c.y=-c.height*.5;
      if(c.y<-c.height)c.y=h-20;
      const ctx=c.front?contexts[3]:valleyCtx;ctx.save();ctx.globalCompositeOperation='screen';
      const sunPosition=planetPlacement();const lightReach=clamp(1-Math.abs(c.x+c.width*.5-sunPosition.sx)/(w*1.1));
      ctx.globalAlpha=clamp(c.alpha*(.88+.12*Math.sin(elapsed*.08+c.seed))*(.8+lightReach*.65)*lightBreath);
      ctx.filter=c.front?'blur(5px)':'blur(3px)';
      const stretch=1+.035*Math.sin(elapsed*.05+c.seed);
      ctx.translate(c.x+c.width*.5,c.y+c.height*.5);ctx.scale(c.flip,1);
      ctx.drawImage(textures[c.texture],-c.width*stretch*.5,-c.height*.5,c.width*stretch,c.height);
      ctx.restore();
    }
    for(const p of dust){
      p.x+=(p.vx+Math.sin(elapsed*.2+p.seed)*.65)*dt;p.y+=p.vy*dt;
      if(p.x<-5)p.x=w+5;if(p.x>w+5)p.x=-5;if(p.y<-5)p.y=h+5;if(p.y>h+5)p.y=-5;
      const ctx=p.y>h*.74?valleyCtx:contexts[0],a=p.alpha*(.75+.25*Math.sin(elapsed*.4+p.seed));
      ctx.save();ctx.globalCompositeOperation='screen';ctx.fillStyle=`rgba(217,190,143,${clamp(a)})`;
      if(p.r>1)ctx.filter='blur(.6px)';ctx.beginPath();ctx.ellipse(p.x,p.y,p.r,p.r*.7,p.seed,0,Math.PI*2);ctx.fill();ctx.restore();
    }
    const sun=planetPlacement();
    for(const p of mountainDust){
      const wind=.55+.2*Math.sin(elapsed*.07+p.seed);
      p.x+=(p.vx+Math.sin(elapsed*.11+p.seed)*p.sway)*dt*wind;
      p.y+=(p.vy+Math.cos(elapsed*.09+p.seed)*p.sway*.2)*dt*wind;
      if(p.x<w*.34)p.x=w*1.08;if(p.x>w*1.1)p.x=w*.34;
      if(p.y<p.minY)p.y=p.maxY;if(p.y>p.maxY)p.y=p.minY;
      const ctx=p.depth===0?contexts[0]:p.depth===1?valleyCtx:contexts[3];
      const light=clamp(1-Math.abs(p.x-sun.sx)/(w*.95)),shimmer=.78+.22*Math.sin(elapsed*.35+p.seed);
      ctx.save();ctx.globalCompositeOperation='screen';ctx.globalAlpha=clamp(p.alpha*(.58+light*.8)*shimmer);
      ctx.fillStyle=p.depth===0?'rgba(200,170,133,1)':'rgba(255,207,151,1)';
      ctx.filter=p.depth===0?'none':p.depth===1?'blur(.45px)':'blur(1.1px)';
      const angle=Math.atan2(p.vy,p.vx),length=(.7+p.r*1.8)*(p.depth===2?1.35:1);
      ctx.translate(p.x,p.y);ctx.rotate(angle);ctx.beginPath();ctx.ellipse(0,0,length,p.r*.48,0,0,Math.PI*2);ctx.fill();
      ctx.restore();
    }
  }
  function resize(){const b=stage.getBoundingClientRect();if(w===b.width&&h===b.height)return;w=b.width;h=b.height;const d=Math.min(window.devicePixelRatio||1,1.25);for(let i=0;i<canvases.length;i++){canvases[i].width=Math.round(w*d);canvases[i].height=Math.round(h*d);contexts[i].setTransform(d,0,0,d,0,0);}valleyCanvas.width=Math.round(w*d);valleyCanvas.height=Math.round(h*d);valleyCtx.setTransform(d,0,0,d,0,0);particles=[];meteors=[];impacts=[];next=elapsed+.25;resetAtmosphere();renderAtmosphere(0);resizeCosmos();preparePortraitLighting();prepareMountainLighting();}
  const ro=new ResizeObserver(resize);ro.observe(stage);
  function spawn(layer,kind){
    spawnCount++;
    if(kind===undefined)kind=spawnCount%4===1||spawnCount%4===3?'impact':spawnCount%4===0?'graze':'flyby';
    if(layer===undefined){const n=Math.random();layer=n<.45?0:n<.88?1:2;}
    if(kind!=='flyby')layer=1;
    const depth=[.55,.85,1.15][layer],angle=random(.18,.55),pace=Math.random();
    const speed=Math.max(w,600)*(pace<.3?random(.18,.30):pace<.8?random(.35,.62):random(.75,1.1))*depth;
    const m={kind,layer,x:random(.5,.82)*w,y:-20,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,r:random(.65,1.5)*depth,a:[.28,.60,.76][layer],age:0,life:5,seed:random(0,50),emit:0,length:Math.min(220,Math.max(40,speed*random(.18,.32))),fragments:layer===2?2:1};
    if(kind!=='flyby'){
      if(kind==='impact'){m.r=random(1.4,2.2);m.a=.9;}
      const P=planetPlacement();
      const nx=random(-.32,.16),ny=random(.62,.84),nz=Math.sqrt(1-nx*nx-ny*ny);
      let d={x:.70,y:-.36,z:-.62};
      if(kind==='graze'){d={x:.90,y:-.28,z:(-.90*nx+.28*ny)/nz};}
      const length=Math.hypot(d.x,d.y,d.z);for(const k of ['x','y','z'])d[k]/=length;
      const standOff=kind==='graze'?.65:random(.38,.65),shell=kind==='graze'?1.019:1;
      m.pos={x:nx*shell-d.x*standOff,y:ny*shell-d.y*standOff,z:nz*shell-d.z*standOff};m.dir=d;m.rate=speed/P.r;
      m.x=P.cx+m.pos.x*P.r;m.y=P.cy-m.pos.y*P.r;m.vx=d.x*speed;m.vy=-d.y*speed;m.life=kind==='graze'?1.45/m.rate:2/m.rate;
    }
    meteors.push(m);
  }
  function contact(m,point){
    const axisX=point.x*.990+point.y*.14,axisY=-point.x*.14+point.y*.990;
    const lon=Math.atan2(axisX,point.z)-elapsed/planetConfig.rotationDuration*Math.PI*2;
    impacts.push({lon,ny:axisY,age:0,life:4.2,seed:m.seed,r:m.r,
      debris:Array.from({length:12},()=>({angle:random(-2.8,-.2),speed:random(12,46),life:random(.35,1.5),width:random(.35,1.05)})),
      plume:Array.from({length:5},(_,i)=>({drift:random(-9,9),rise:random(8,21),size:random(15,27),texture:i%3,delay:i*.09}))});
    m.dead=true;
  }
  function advanceMeteor(m,dt){
    m.age+=dt;m.emit+=dt;
    if(!m.pos){m.x+=m.vx*dt;m.y+=m.vy*dt;return;}
    const p=m.pos,d=m.dir,travel=m.rate*dt;
    if(m.kind==='impact'){
      const B=p.x*d.x+p.y*d.y+p.z*d.z,C=p.x*p.x+p.y*p.y+p.z*p.z-1,disc=B*B-C;
      if(disc>=0){const hit=-B-Math.sqrt(disc);if(hit>=0&&hit<=travel){contact(m,{x:p.x+d.x*hit,y:p.y+d.y*hit,z:p.z+d.z*hit});return;}}
    }
    p.x+=d.x*travel;p.y+=d.y*travel;p.z+=d.z*travel;
    const P=planetPlacement();m.x=P.cx+p.x*P.r;m.y=P.cy-p.y*P.r;
    m.burn=m.kind==='graze'?Math.exp(-Math.pow((Math.hypot(p.x,p.y,p.z)-1.019)/.055,2.)):0;
  }
  function renderImpacts(dt){
    const P=planetPlacement(),ctx=contexts[1];
    for(const hit of impacts){
      hit.age+=dt;const lon=hit.lon+elapsed/planetConfig.rotationDuration*Math.PI*2,latRadius=Math.sqrt(Math.max(0,1-hit.ny*hit.ny));
      const nz=Math.cos(lon)*latRadius;if(nz<=0)continue;
      const ax=Math.sin(lon)*latRadius,nx=ax*.990-hit.ny*.14,ny=ax*.14+hit.ny*.990;
      const x=P.cx+nx*P.r,y=P.cy-ny*P.r,age=hit.age;
      const scale=Math.min(1,P.r/350),foreshorten=Math.max(.25,nz);
      const surfaceAngle=Math.atan2(-ny,nx);
      ctx.save();ctx.beginPath();ctx.arc(P.cx,P.cy,P.r,0,Math.PI*2);ctx.clip();
      // Low, lingering heat on the surface; a brief white core, without a neon ring.
      ctx.globalCompositeOperation='screen';
      puff(ctx,x,y,(12+age*5)*scale,'rgba(183,77,28,ALPHA)',Math.exp(-age*1.8)*.5,foreshorten,surfaceAngle);
      puff(ctx,x,y,19*scale,'rgba(255,202,133,ALPHA)',Math.exp(-age*15)*.65,foreshorten,surfaceAngle);
      puff(ctx,x,y,4*scale,'rgba(255,245,218,ALPHA)',Math.exp(-age*21),foreshorten,surfaceAngle);
      // Unequal ballistic fragments cool quickly instead of radiating in a circle.
      for(const d of hit.debris){
        if(age>d.life)continue;
        const t=age,tail=Math.max(0,t-.035),cool=Math.pow(1-t/d.life,2);
        const point=u=>({x:x+Math.cos(d.angle)*d.speed*u*scale,
          y:y+(Math.sin(d.angle)*d.speed*u+14*u*u)*scale});
        const a=point(tail),b=point(t);
        ctx.strokeStyle=`rgba(255,${Math.round(115+100*cool)},65,${cool*.7})`;
        ctx.lineWidth=d.width*scale;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
      }
      // Opaque mineral dust rises slowly and obscures the cooling impact site.
      ctx.globalCompositeOperation='source-over';
      for(const plume of hit.plume){
        const t=age-plume.delay;if(t<=0)continue;
        const size=(plume.size+19*Math.sqrt(t))*scale;
        const fade=(1-Math.exp(-t*7))*Math.exp(-t*.8);
        ctx.globalAlpha=fade*.46;
        const px=x+plume.drift*t*scale,py=y-plume.rise*Math.log1p(t*2)*scale;
        ctx.drawImage(impactSmoke[plume.texture],px-size,py-size*.7,size*2,size*1.4);
      }
      ctx.restore();
    }
    impacts=impacts.filter(hit=>hit.age<hit.life).slice(-4);
  }
  function puff(ctx,x,y,r,color,alpha,stretch=1,angle=0){alpha=clamp(alpha);if(!alpha)return;ctx.save();ctx.translate(x,y);ctx.rotate(angle);ctx.scale(stretch,1);const g=ctx.createRadialGradient(0,0,0,0,0,r);g.addColorStop(0,color.replace('ALPHA',alpha));g.addColorStop(.35,color.replace('ALPHA',alpha*.6));g.addColorStop(1,color.replace('ALPHA',0));ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();ctx.restore();}
  function streak(ctx,m,fade){
    const speed=Math.hypot(m.vx,m.vy),angle=Math.atan2(m.vy,m.vx),length=Math.min(m.length,speed*m.age),radius=m.r;
    if(length<1||fade<=0)return;
    ctx.save();ctx.translate(m.x,m.y);ctx.rotate(angle);ctx.globalCompositeOperation='lighter';
    // A continuous, tapered luminous wake. No circular flame particles or spark spray.
    for(const band of [{width:radius*3.8,a:.12},{width:radius*1.35,a:.65},{width:radius*.37,a:.95}]){
      const g=ctx.createLinearGradient(-length,0,4,0);
      g.addColorStop(0,'rgba(255,89,35,0)');
      g.addColorStop(.26,`rgba(242,126,66,${clamp(fade*band.a*.12)})`);
      g.addColorStop(.7,`rgba(255,188,119,${clamp(fade*band.a*.55)})`);
      g.addColorStop(1,`rgba(255,253,235,${clamp(fade*band.a)})`);
      ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(4,0);
      for(let i=0;i<=36;i++){const t=i/36;const wobble=Math.sin(t*26+m.seed+m.age*16)*radius*.16*t;ctx.lineTo(-length*t,wobble+band.width*Math.pow(1-t,.85));}
      for(let i=36;i>=0;i--){const t=i/36;const wobble=Math.sin(t*26+m.seed+m.age*16)*radius*.16*t;ctx.lineTo(-length*t,wobble-band.width*Math.pow(1-t,.85));}
      ctx.closePath();ctx.fill();
    }
    // Compact incandescent leading edge, slightly stretched by motion blur.
    puff(ctx,0,0,radius*5,'rgba(255,192,121,ALPHA)',fade*.2,1.5);
    ctx.fillStyle=`rgba(255,255,248,${fade})`;ctx.beginPath();ctx.ellipse(0,0,radius*2.5,radius*.65,0,0,Math.PI*2);ctx.fill();
    // A few ablated fragments stay in the wake, never radiating like fireworks.
    for(let j=0;j<m.fragments;j++){const t=.12+j*.14;const x=-length*t,offset=Math.sin(m.seed+j*4)*radius*.7;ctx.strokeStyle=`rgba(255,209,151,${clamp(fade*.4*(1-t))})`;ctx.lineWidth=Math.max(.3,radius*.22);ctx.beginPath();ctx.moveTo(x,offset);ctx.lineTo(x-radius*7,offset);ctx.stroke();}
    ctx.restore();
  }
  function render(dt){
    for(const ctx of contexts)ctx.clearRect(0,0,w,h);elapsed+=dt;
    if(planetConfig.meteorEnabled&&elapsed>=next){if(meteors.length<(w<600?3:4))spawn();next=elapsed+(spawnCount%6===0?random(3.8,5.5):random(.75,1.65));}
    for(const m of meteors){
      advanceMeteor(m,dt);
      // A thin residual ionization wake hangs very briefly in the flight path.
      if(m.emit>.025){m.emit=0;particles.push({layer:m.layer,x:m.x,y:m.y,vx:m.vx,vy:m.vy,r:m.r,age:0,life:random(.18,.35),a:m.a*.08});}
    }
    meteors=meteors.filter(m=>!m.dead&&m.age<m.life&&m.y<h+100&&m.x<w+m.length);
    particles=particles.filter(p=>p.age+dt<p.life).slice(-160);
    for(let layer=0;layer<3;layer++){
      const ctx=contexts[layer];ctx.save();ctx.beginPath();ctx.rect(w*.47,0,w*.53,h);ctx.clip();if(layer===0){const P=planetPlacement();ctx.beginPath();ctx.rect(0,0,w,h);ctx.moveTo(P.cx+P.r,P.cy);ctx.arc(P.cx,P.cy,P.r,0,Math.PI*2);ctx.clip('evenodd');}ctx.globalCompositeOperation='lighter';
      for(const p of particles){if(p.layer!==layer)continue;p.age+=dt;const a=clamp(1-p.age/p.life)*p.a;ctx.strokeStyle=`rgba(229,168,113,${a})`;ctx.lineWidth=Math.max(.35,p.r*.5);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x-p.vx*.032,p.y-p.vy*.032);ctx.stroke();}
      for(const m of meteors){if(m.layer!==layer)continue;const fade=clamp(Math.min(m.age/.08,(m.life-m.age)/.16))*m.a;streak(ctx,m,fade);if(m.burn>.01)puff(ctx,m.x,m.y,9,'rgba(255,162,74,ALPHA)',m.burn*.25,3,Math.atan2(m.vy,m.vx));}
      ctx.globalCompositeOperation='source-over';ctx.restore();
    }
    renderImpacts(dt);renderAtmosphere(dt);drawPlanet(elapsed);
  }
  function frame(t){raf=0;if(!root.isConnected){ro.disconnect();io.disconnect();document.removeEventListener('visibilitychange',visibility);window.removeEventListener('scroll',scrollParallax);return;}if(!running||!visible||document.hidden){last=0;return;}// Limit expensive canvas draws to 30 fps, retaining elapsed time between draws.
    const raw=last?t-last:1000/30;if(last&&raw<1000/30-.5){raf=requestAnimationFrame(frame);return;}
    const dt=last?Math.min(raw/1000,.1):0;last=t;
    if(gl&&raw<120){frameCost=frameCost*.95+raw*.05;qualityFrames++;if(qualityFrames>180&&frameCost>40&&renderScale>1){renderScale=Math.max(1,renderScale*.75);qualityFrames=0;resizeCosmos();}}
    render(dt);raf=requestAnimationFrame(frame);}
  function start(){if(!raf&&running&&visible&&!document.hidden)raf=requestAnimationFrame(frame);}
  function sync(){pause.textContent=running?'Pause':'Play';pause.setAttribute('aria-pressed',String(!running));}
  replay.addEventListener('click',()=>{meteors=[];particles=[];impacts=[];spawn(1,'impact');spawn(0,'flyby');next=elapsed+.85;running=true;last=0;sync();start();});
  pause.addEventListener('click',()=>{running=!running;last=0;sync();start();});
  function visibility(){last=0;start();}document.addEventListener('visibilitychange',visibility);
  const io=new IntersectionObserver(e=>{visible=e[0].isIntersecting;last=0;start();});io.observe(stage);
  reduced.addEventListener('change',()=>{running=!reduced.matches;sync();start();});
  function scrollParallax(){const y=reduced.matches?0:Math.max(-18,Math.min(18,-stage.getBoundingClientRect().top*.065));stage.style.setProperty('--mountain-y',y+'px');}
  window.addEventListener('scroll',scrollParallax,{passive:true});
  sync();resize();start();
})();
