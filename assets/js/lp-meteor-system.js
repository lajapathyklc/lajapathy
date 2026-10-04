import {THREE} from './hero-3d-core.js';
import {homeMeteorCadence as home,homeMeteorKind,nextHomeMeteorDelay} from './lp-meteor-cadence.js';

// Adapter of Home's spawn/advanceMeteor/contact/streak/renderImpacts logic in
// lp-hero-cinematic.js. Home draws projected 3D trajectories on canvas; here
// the same sphere collision, geological longitude, tail bands, cooling rates,
// ballistic ejecta and cached ash are rendered in the existing WebGL scene.
export const meteorConfig = {
  poolSize:home.desktopLimit, impactPoolSize:2, debrisCount:12, mobileDebrisCount:6,
  intensity:.75, markLifetime:6.5, atmosphereRadius:1.025,
  forcedImpactSpeed:[.32,.52], // Existing debug approach speed, separate from Home production cadence.
};
export function sphereContact(position,direction,radius,travel=Infinity) {
  // Home's ray/sphere quadratic; the position is relative to the planet center.
  const b=position.dot(direction),c=position.lengthSq()-radius*radius,disc=b*b-c;
  if(disc<0)return null;
  const distance=-b-Math.sqrt(disc);
  return distance>=0&&distance<=travel?distance:null;
}
function ashTexture(seed){
  // Home's cloudTexture/impactSmoke, generated once and reused by every slot.
  const canvas=document.createElement('canvas');canvas.width=256;canvas.height=128;
  const ctx=canvas.getContext('2d'),image=ctx.createImageData(256,128);
  const hash=(x,y)=>{const n=Math.sin(x*127.1+y*311.7+seed*73.3)*43758.5453;return n-Math.floor(n);};
  const smooth=t=>t*t*(3-2*t);
  const noise=(x,y)=>{const ix=Math.floor(x),iy=Math.floor(y),fx=smooth(x-ix),fy=smooth(y-iy);return (hash(ix,iy)*(1-fx)+hash(ix+1,iy)*fx)*(1-fy)+(hash(ix,iy+1)*(1-fx)+hash(ix+1,iy+1)*fx)*fy;};
  for(let y=0;y<128;y++)for(let x=0;x<256;x++){
    const nx=x/256,ny=y/128,warp=noise(nx*4,ny*3)*1.4;
    const n=noise(nx*5+warp,ny*4)*.55+noise(nx*11,ny*9)*.27+noise(nx*23,ny*19)*.13+noise(nx*47,ny*37)*.05;
    const i=(y*256+x)*4;image.data[i]=68;image.data[i+1]=61;image.data[i+2]=53;
    image.data[i+3]=Math.min(195,Math.max(0,n-.29)*Math.pow(Math.sin(nx*Math.PI),1.2)*Math.pow(Math.sin(ny*Math.PI),1.7)*420);
  }
  ctx.putImageData(image,0,0);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;return texture;
}
const safeFragment=`uniform vec2 resolution;uniform float copyBottom;uniform vec4 textRects[16];void safeArea(){vec2 p=gl_FragCoord.xy/resolution;if(p.x<.47&&p.y>1.-copyBottom)discard;for(int i=0;i<16;i++){vec4 r=textRects[i];if(p.x>=r.x&&p.x<=r.z&&p.y>=r.y&&p.y<=r.w)discard;}}`;
const vertex=`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
export function createHeroMeteors({system,globe,camera,renderer,root,uniforms,worlds=[],predictMoon,page="Portfolio",firstDelay=home.firstDelay,eventKind=homeMeteorKind,targetBounds=null,impactDirection=null,targetNormal=null,failedEventFallback=false,cadenceScale=1,protectedSelector=null,screenBounds=null,axisTilt=null,protectedInset=null,protectedRegions=null,config={}}){
  const cfg={...meteorConfig,...config},random=(a,b)=>a+Math.random()*(b-a),resolution={value:new THREE.Vector2(1,1)},copyBottom={value:1},textRects={value:Array.from({length:16},()=>new THREE.Vector4(-2,-2,-1,-1))};
  const group=new THREE.Group();group.name='Home meteor adapter';system.add(group);
  const radius=()=>globe.scale.x,particles=new THREE.SphereGeometry(1,8,6),ash=[ashTexture(17),ashTexture(43),ashTexture(89)];
  const scratch=new THREE.Vector3(),side=new THREE.Vector3(),view=new THREE.Vector3(),past=new THREE.Vector3(),world=new THREE.Vector3(),projected=new THREE.Vector3();
  const slots=[],hits=[],events=[],counts={flyby:0,skim:0,impact:0,foreground:0};
  let started=false,clock=0,next=Infinity,small=false,spawned=0,width=1,height=1;
  let activeIntegral=0,peakActive=0,contactCount=0,visibleCount=0;
  const depthCounts=[0,0,0], speedCounts=[0,0,0], visibleDepthCounts=[0,0,0];
  const protectedRects=[];
  function exclusions(){
    protectedRects.length=0;const box=root.getBoundingClientRect();
    const copy=root.querySelector(protectedSelector?".ewallet-hero-copy,.project-case-study-hero-inner":".lp-hero-copy");
    copyBottom.value=protectedSelector?0:page==="About"&&width<=900&&copy?(copy.getBoundingClientRect().bottom-box.top+24)/height:1;
    for(const e of [...root.querySelectorAll(protectedSelector||(page==="Contact"||page==="Footer"?".timeline-label,.lp-hero-copy":".timeline-label")),...document.querySelectorAll(".tmp-header-area-start .tmp-mainmenu-nav,.tmp-header-area-start .tmp-header-right")]){const r=e.getBoundingClientRect();const regions=protectedRegions?.(e,r);if(regions){for(const a of regions)protectedRects.push({left:a.left-box.left-4,right:a.right-box.left+4,top:a.top-box.top-4,bottom:a.bottom-box.top+4});continue;}const inset=protectedInset?.(e,r)||{x:0,y:0};const padding=protectedSelector&&root.contains(e)?4:16;protectedRects.push({left:r.left-box.left-padding+(inset.left??inset.x??0),right:r.right-box.left+padding-(inset.right??inset.x??0),top:r.top-box.top-padding+(inset.top??inset.y??0),bottom:r.bottom-box.top+padding-(inset.bottom??inset.y??0)});}
    textRects.value.forEach((v,i)=>{const r=protectedRects[i];if(r)v.set(r.left/width,1-r.bottom/height,r.right/width,1-r.top/height);else v.set(-2,-2,-1,-1);});
  }
  function obscuresText(p,padding=0){const x=(p.x*.5+.5)*width,y=(-p.y*.5+.5)*height;return protectedRects.some(r=>x>=r.left-padding&&x<=r.right+padding&&y>=r.top-padding&&y<=r.bottom+padding);}
  let geometryWidth=0,geometryHeight=0;
  function heatMaterial(scar=false){return new THREE.ShaderMaterial({uniforms:{age:{value:0},power:{value:0},scar:{value:scar?1:0},resolution,textRects,copyBottom},vertexShader:vertex,fragmentShader:`varying vec2 vUv;uniform float age,power,scar;${safeFragment}void main(){safeArea();float r=length((vUv-.5)*2.);float core=exp(-r*r*80.)*exp(-max(age-.065,0.)*18.);float halo=exp(-r*r*9.)*exp(-age*1.8);float mark=exp(-pow((r-.35)*14.,2.))*exp(-age*.55)*.22;float crater=scar*exp(-r*r*70.)*exp(-age*.55)*(1.-exp(-age*12.))*.24;float heat=core+halo*.36+mark;vec3 color=mix(mix(vec3(1.,.34,.08),vec3(1.,.96,.83),core),vec3(.005,.007,.009),crater/(heat+crater+.0001));gl_FragColor=vec4(color,power*(heat+crater));}`,transparent:true,depthWrite:false,blending:scar?THREE.NormalBlending:THREE.AdditiveBlending});}
  for(let i=0;i<cfg.poolSize;i++){
    const positions=new Float32Array(37*2*3),uv=new Float32Array(37*2*2),indices=[];
    for(let j=0;j<=36;j++){uv.set([j/36,0,j/36,1],j*4);if(j<36){const k=j*2;indices.push(k,k+1,k+2,k+1,k+3,k+2);}}
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3).setUsage(THREE.DynamicDrawUsage));geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));geometry.setIndex(indices);
    const material=new THREE.ShaderMaterial({uniforms:{fade:{value:0},resolution,textRects,copyBottom},vertexShader:vertex,fragmentShader:`varying vec2 vUv;uniform float fade;${safeFragment}void main(){safeArea();float t=vUv.x,w=abs(vUv.y*2.-1.);float broad=exp(-w*w*2.)*.12,mid=exp(-w*w*18.)*.65,core=exp(-w*w*170.)*.95;float wake=(1.-smoothstep(.08,1.,t))*mix(.12,.95,pow(1.-t,2.));gl_FragColor=vec4(mix(vec3(.95,.35,.14),vec3(1.,.99,.92),pow(1.-t,4.)),fade*wake*(broad+mid+core));}`,transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending});
    const tail=new THREE.Mesh(geometry,material);tail.frustumCulled=false;group.add(tail);
    const head=new THREE.Mesh(particles,new THREE.MeshBasicMaterial({color:0xfff9e9,transparent:true,depthWrite:false}));group.add(head);
    const entry=new THREE.Mesh(new THREE.PlaneGeometry(.065,.065),heatMaterial());group.add(entry);
    slots.push({active:false,head,tail,entry,positions,start:new THREE.Vector3(),dir:new THREE.Vector3(),n:new THREE.Vector3(),tangent:new THREE.Vector3(),position:new THREE.Vector3(),age:0,entryAge:0});
    head.visible=tail.visible=entry.visible=false;
  }
  for(let i=0;i<cfg.impactPoolSize;i++){
    const anchor=new THREE.Group();globe.add(anchor);anchor.visible=false;
    const mark=new THREE.Mesh(new THREE.PlaneGeometry(.092,.092),heatMaterial(true));anchor.add(mark);
    const pointsGeometry=new THREE.BufferGeometry();pointsGeometry.setAttribute('position',new THREE.BufferAttribute(new Float32Array(cfg.debrisCount*3),3).setUsage(THREE.DynamicDrawUsage));
    const debris=new THREE.Points(pointsGeometry,new THREE.PointsMaterial({color:0xffbd72,size:.004,transparent:true,depthWrite:false,sizeAttenuation:true}));anchor.add(debris);
    const smoke=Array.from({length:3},(_,j)=>{const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:ash[j],transparent:true,depthWrite:false,opacity:0}));anchor.add(sprite);return sprite;});
    hits.push({active:false,anchor,mark,debris,smoke,normal:new THREE.Vector3(),lon:0,ny:0,age:0,velocities:Array.from({length:cfg.debrisCount},()=>new THREE.Vector3()),lifetimes:new Float32Array(cfg.debrisCount)});
  }
  function at(m,age,out){
    if(m.kind==='skim'){const phi=(age/m.life-.5)*(cfg.skimArc??1.25),r=radius()*(cfg.atmosphereRadius+.9*phi*phi);return out.copy(m.n).multiplyScalar(Math.cos(phi)*r).addScaledVector(m.tangent,Math.sin(phi)*r);}
    return out.copy(m.start).addScaledVector(m.dir,m.speed*age);
  }
  function safePath(m){
    if(m.kind==='impact'){
      system.localToWorld(world.copy(m.n).multiplyScalar(radius()));
      view.copy(camera.position).sub(world).normalize();scratch.copy(m.n).transformDirection(system.matrixWorld);
      if(scratch.dot(view)<.40)return false;
      projected.copy(world).project(camera);
      const preview=root.querySelector('.universe-preview');
      if(preview?.getAttribute('aria-hidden')==='false'){
        const r=preview.getBoundingClientRect(),box=root.getBoundingClientRect(),x=box.left+(projected.x*.5+.5)*root.clientWidth,y=box.top+(-projected.y*.5+.5)*root.clientHeight;
        // Reserve room for contact flash and ejecta, not just the impact center.
        if(x>=r.left-28&&x<=r.right+28&&y>=r.top-28&&y<=r.bottom+28)return false;
      }
      if(obscuresText(projected,protectedSelector?12:28))return false;
      if(projected.x*.5+.5<(screenBounds?.left??(copyBottom.value<1?.20:.50))||projected.x*.5+.5>(screenBounds?.right??.94)||-projected.y*.5+.5<(screenBounds?.top??.20)||-projected.y*.5+.5>(screenBounds?.bottom??.70))return false;
      for(const w of worlds){if(!w.mesh.visible)continue;w.mesh.getWorldPosition(scratch);const moon=scratch.project(camera);if(Math.hypot(projected.x-moon.x,projected.y-moon.y)<.15)return false;}
    }
    if(m.kind==='impact')for(const w of worlds){
      if(!w.mesh.visible)continue;
      scratch.copy(m.start).sub(w.mesh.position);
      if(sphereContact(scratch,m.dir,w.mesh.scale.x+.035,m.speed*m.life)!==null)return false;
    }

    for(let j=0;j<=32;j++){
      at(m,j/32*m.life,scratch);system.localToWorld(world.copy(scratch));projected.copy(world).project(camera);
      if((projected.x*.5+.5)<.47&&(-projected.y*.5+.5)<copyBottom.value)return false;
      if((m.kind!=='flyby'||protectedSelector)&&obscuresText(projected,8))return false;
      for(const w of worlds){if(w.mesh.visible&&scratch.distanceTo(predictMoon?predictMoon(w,j/32*m.life,past):w.mesh.position)<w.mesh.scale.x+.035)return false;}
    }
    return true;
  }
  function approachScore(m){
    let visible=0;
    for(let i=0;i<12;i++){
      at(m,i/12*m.life,scratch);system.localToWorld(world.copy(scratch));projected.copy(world).project(camera);
      const x=projected.x*.5+.5,y=-projected.y*.5+.5;
      if(x>(copyBottom.value<1?.20:.48)&&x<.96&&y>.16&&y<.72)visible++;
    }
    return visible/12+m.n.z*.25+Math.min(m.life,1.8)*.1;
  }
  function spawn(forced=null){
    if(protectedSelector)exclusions();
    const m=slots.find(s=>!s.active);if(!m)return;
    const kind=forced||eventKind(spawned+1);
    const layerRoll=Math.random();m.layer=kind==='flyby'?(layerRoll<home.layerThresholds[0]?0:layerRoll<home.layerThresholds[1]?1:2):1;
    const depth=home.depth[m.layer],pace=Math.random();m.speedBand=pace<home.speedThresholds[0]?0:pace<home.speedThresholds[1]?1:2;
    // Convert Home's screen-pixel sizes/speeds to this scene's local units.
    system.localToWorld(world.set(0,0,0));const origin=world.clone().project(camera);
    system.localToWorld(world.set(1,0,0));const pixelsPerUnit=Math.abs(world.project(camera).x-origin.x)*width*.5;
    m.kind=kind;m.speed=Math.max(width,600)*random(...home.speed[m.speedBand])*depth/pixelsPerUnit;
    if(forced==='impact')m.speed=radius()*random(...cfg.forcedImpactSpeed);
    m.size=random(...(kind==='impact'?home.impactSize:home.headSize))* (kind==='impact'?1:depth)/pixelsPerUnit;
    m.opacity=kind==='impact'?.9:home.opacity[m.layer];m.age=0;m.seed=random(0,50);
    m.length=Math.min(home.tailPixels[1],Math.max(home.tailPixels[0],m.speed*pixelsPerUnit*random(...home.tailSeconds)))/pixelsPerUnit;
    m.entryAge=0;m.entrySeen=false;m.seen=false;
    let valid=false,best=null,bestScore=-Infinity;
    for(let attempt=0;attempt<(forced?800:kind==='impact'?160:80);attempt++){
      const r=radius();
      if(kind==='impact'||kind==='skim'){
        if(kind!=='impact'||attempt%8===0){const candidate=targetNormal?.({kind,forced,width});if(candidate)m.n.fromArray(candidate).normalize();else {const nx=random(...(targetBounds?.x||[copyBottom.value<1?-.72:-.32,.60])),ny=random(...(targetBounds?.y||[.12,.84]));if(nx*nx+ny*ny>.85)continue;m.n.set(nx,ny,Math.sqrt(1-nx*nx-ny*ny)).normalize();}}
        if(kind==='impact'){
          const incoming=impactDirection?.({width,forced,normal:m.n});
          if(incoming)m.dir.fromArray(incoming).normalize();
          else if(forced)m.dir.set(-m.n.x*.65+random(-.30,.30),-m.n.y*.65+random(-.12,.12),-m.n.z).normalize();
          else m.dir.fromArray(home.impactDirection).normalize();
          m.start.copy(m.n).multiplyScalar(r).addScaledVector(m.dir,-(forced?m.speed*random(.8,1.4):r*random(...home.standOff)));m.life=2.8;
          const contact=sphereContact(m.start,m.dir,r);if(contact===null)continue;m.life=contact/m.speed+.03;
        }else{
          const direction=cfg.skimDirection||home.skimDirection;m.tangent.set(direction[0],direction[1],(-direction[0]*m.n.x-direction[1]*m.n.y)/m.n.z).normalize();m.life=forced?random(1.8,2.8):1.45*r/m.speed;
        }
      }else{
        const angle=random(...home.angle),z=(m.layer===0?-1.4:m.layer===1?0:1.5)*radius();
        const ndc=new THREE.Vector3(random(.5,.82)*2-1,1+40/height,0).unproject(camera);
        m.start.copy(system.worldToLocal(ndc));m.start.z=z;
        // Camera-aligned direction retains Home's right/down angle variation.
        const direction=new THREE.Vector3(Math.cos(angle),-Math.sin(angle),0).transformDirection(camera.matrixWorld);
        m.dir.copy(direction).transformDirection(system.matrixWorld.clone().invert());m.life=home.life;

      }
      if(!safePath(m)||(kind!=='flyby'&&approachScore(m)<.55))continue;
      const score=approachScore(m);
      if(score>bestScore){bestScore=score;best={n:m.n.clone(),dir:m.dir.clone(),start:m.start.clone(),tangent:m.tangent.clone(),life:m.life};valid=true;}
      if(kind!=='impact')break;
    }
    if(!valid)return false;
    m.n.copy(best.n);m.dir.copy(best.dir);m.start.copy(best.start);m.tangent.copy(best.tangent);m.life=best.life;
    spawned++;counts[kind]++;depthCounts[m.layer]++;speedCounts[m.speedBand]++;m.active=true;m.head.visible=m.tail.visible=true;
    events.push({type:kind,time:clock,approachSeconds:m.life-.03,targetLocal:kind==='impact'?m.n.toArray():null,targetWorld:kind==='impact'?system.localToWorld(world.copy(m.n).multiplyScalar(radius())).toArray():null});if(events.length>80)events.shift();return true;
  }
  function contact(m,point){
    contactCount++;
    const hit=hits.find(h=>!h.active)||hits.reduce((a,b)=>a.age>b.age?a:b); // Recycle the oldest residual, never block the shower.
    // Use the actual transforms, then Home's geological axis/longitude mapping.
    system.localToWorld(world.copy(point));globe.worldToLocal(hit.normal.copy(world)).normalize();
    const c=axisTilt===null?.990:Math.cos(axisTilt),s=axisTilt===null?.14:Math.sin(axisTilt);const p=hit.normal,axisX=p.x*c+p.y*s,axisY=-p.x*s+p.y*c;
    hit.lon=Math.atan2(axisX,p.z)-uniforms.turn.value*Math.PI*2;hit.ny=axisY;hit.age=0;hit.active=true;hit.anchor.visible=true;
    const count=small?cfg.mobileDebrisCount:cfg.debrisCount;hit.debris.geometry.setDrawRange(0,count);
    for(let j=0;j<cfg.debrisCount;j++){const angle=random(-Math.PI,Math.PI),speed=random(.035,.12);hit.velocities[j].set(Math.cos(angle)*speed,Math.sin(angle)*speed,random(.06,.16));hit.lifetimes[j]=random(.35,1.5);}
    const visible=p.clone().transformDirection(globe.matrixWorld).dot(camera.position.clone().sub(world).normalize())>.40;
    events.push({type:'contact',time:clock,feedback:{entry:m.entrySeen,flash:hit.mark.visible,terrain:uniforms.impactStrength.value.length>0,ejecta:hit.debris.geometry.drawRange.count>0,mark:hit.anchor.visible},error:Math.abs(point.length()-radius()),visible,local:p.toArray()});if(events.length>40)events.shift();
  }
  function updateHits(dt){
    for(let i=0;i<hits.length;i++){
      const hit=hits[i];uniforms.impactStrength.value[i]=0;if(!hit.active)continue;
      hit.age+=dt;if(hit.age>cfg.markLifetime){hit.active=false;hit.anchor.visible=false;continue;}
      const lon=hit.lon+uniforms.turn.value*Math.PI*2,lat=Math.sqrt(Math.max(0,1-hit.ny*hit.ny)),ax=Math.sin(lon)*lat;
      const c=axisTilt===null?.990:Math.cos(axisTilt),s=axisTilt===null?.14:Math.sin(axisTilt);hit.normal.set(ax*c-hit.ny*s,ax*s+hit.ny*c,Math.cos(lon)*lat).normalize();
      hit.anchor.position.copy(hit.normal).multiplyScalar(1.003);hit.anchor.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),hit.normal);
      hit.mark.material.uniforms.age.value=hit.age;hit.mark.material.uniforms.power.value=cfg.intensity;
      uniforms.impactPoints.value[i].copy(hit.normal);uniforms.impactStrength.value[i]=Math.exp(-hit.age*7)*.48;
      const attr=hit.debris.geometry.attributes.position;
      for(let j=0;j<cfg.debrisCount;j++){const t=Math.min(hit.age,hit.lifetimes[j]),v=hit.velocities[j];attr.setXYZ(j,v.x*t,v.y*t,v.z*t-.035*t*t);}
      attr.needsUpdate=true;hit.debris.visible=hit.age<1.5;hit.debris.material.opacity=Math.max(0,1-hit.age/1.5)*.6;
      hit.smoke.forEach((sprite,j)=>{const t=Math.max(0,hit.age-j*.09);sprite.position.set(Math.sin(j*4+hit.lon)*.012*t,Math.cos(j*3)*.014*t,.012+.028*Math.log1p(t*2));sprite.scale.set(.065+.075*Math.sqrt(t),.045+.05*Math.sqrt(t),1);sprite.material.opacity=(1-Math.exp(-t*7))*Math.exp(-t*.8)*.28;});
    }
  }
  function reset(){slots.forEach(m=>{m.active=false;m.head.visible=m.tail.visible=m.entry.visible=false;});hits.forEach(h=>{h.active=false;h.anchor.visible=false;});uniforms.impactStrength.value.fill(0);started=false;next=Infinity;root.dataset.meteors=JSON.stringify({time:clock,counts,active:0,impacts:0,events});}
  function update(dt,reduced,ready){
    small=root.clientWidth<700;width=root.clientWidth;height=root.clientHeight;renderer.getDrawingBufferSize(resolution.value);
    if(reduced||!ready){reset();return;}
    if(!started){started=true;next=clock+firstDelay;}
    clock+=dt;
    if(width!==geometryWidth||height!==geometryHeight){geometryWidth=width;geometryHeight=height;exclusions();}
    if(clock>=next){
      const limit=width<home.mobileBreakpoint?home.mobileLimit:home.desktopLimit;
      if(slots.filter(s=>s.active).length>=limit)next=clock+nextHomeMeteorDelay(spawned,random)*cadenceScale;
      else {let launched=spawn();if(!launched&&failedEventFallback)launched=spawn('flyby');next=clock+(launched?nextHomeMeteorDelay(spawned,random)*cadenceScale:.15);}
    }
    updateHits(dt);
    for(const m of slots){
      if(!m.active)continue;
      const previousAge=m.age;m.age+=dt;
      if(m.kind==='impact'){
        at(m,previousAge,scratch);const distance=sphereContact(scratch,m.dir,radius(),m.speed*dt);
        if(distance!==null){scratch.addScaledVector(m.dir,distance);contact(m,scratch);m.active=false;m.head.visible=m.tail.visible=m.entry.visible=false;continue;}
      }
      if(m.age>m.life){m.active=false;m.head.visible=m.tail.visible=m.entry.visible=false;continue;}
      at(m,m.age,m.position);const burn=(m.kind==='impact'||m.kind==='skim')?Math.exp(-Math.pow((m.position.length()/radius()-cfg.atmosphereRadius)/.055,2.)):0;
      scratch.copy(m.position);system.localToWorld(scratch);scratch.project(camera);m.head.visible=((scratch.x*.5+.5)>.47||(-scratch.y*.5+.5)>copyBottom.value)&&(-scratch.y*.5+.5)>=0&&!obscuresText(scratch);
      if(scratch.x>1+m.length||scratch.y < -1.2){m.active=false;m.head.visible=m.tail.visible=m.entry.visible=false;continue;}
      if(!m.seen&&m.head.visible&&scratch.x<=1&&scratch.y>=-.64&&!(m.position.z<0&&m.position.x*m.position.x+m.position.y*m.position.y<radius()*radius())){m.seen=true;visibleCount++;visibleDepthCounts[m.layer]++;}
      m.head.position.copy(m.position);m.head.scale.setScalar(m.size*(1+burn*.25));m.head.material.opacity=m.opacity;
      const fade=Math.max(0,Math.min(m.age/.08,(m.life-m.age)/.16,1))*m.opacity*(1+burn*.3);
      m.tail.material.uniforms.fade.value=fade;
      system.worldToLocal(view.copy(camera.position));view.sub(m.position).normalize();side.crossVectors(m.dir,view).normalize();if(m.kind==='skim'){at(m,m.age-.01,past);scratch.copy(m.position).sub(past).normalize();side.crossVectors(scratch,view).normalize();}
      const length=Math.min(m.length,m.speed*m.age);
      for(let j=0;j<=36;j++){
        const t=j/36;at(m,Math.max(0,m.age-length*t/m.speed),past);
        const wobble=Math.sin(t*26+m.seed+m.age*16)*m.size*.16*t,band=m.size*3.8*Math.pow(1-t,.85);
        for(let k=0;k<2;k++){scratch.copy(past).addScaledVector(side,wobble+(k?1:-1)*band);const offset=(j*2+k)*3;m.positions[offset]=scratch.x;m.positions[offset+1]=scratch.y;m.positions[offset+2]=scratch.z;}
      }
      m.tail.geometry.attributes.position.needsUpdate=true;
      m.entry.visible=burn>.03;if(m.entry.visible)m.entrySeen=true;
      if(m.entry.visible){scratch.copy(m.position).normalize();m.entry.position.copy(scratch).multiplyScalar(radius()*cfg.atmosphereRadius);m.entry.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),scratch);m.entry.material.uniforms.age.value=0;m.entry.material.uniforms.power.value=burn*cfg.intensity*.14;}
    }
    const active=slots.filter(s=>s.active).length;activeIntegral+=active*dt;peakActive=Math.max(peakActive,active);
    root.dataset.meteors=JSON.stringify({time:clock,counts,active,meteorSpawnCount:spawned,visibleMeteorCount:visibleCount,visibleDepthCounts,foregroundCount:depthCounts[2],distantCount:depthCounts[0],impactCount:contactCount,skimCount:counts.skim,flyByCount:counts.flyby,averageActive:clock?activeIntegral/clock:0,peakActive,depthCounts,speedCounts,impacts:hits.filter(h=>h.active).length,events});
  }
  function dispose(){if(development){delete window[`force${page}Meteor`];delete window[`force${page}MeteorImpact`];delete window[`force${page}MeteorSkim`];}group.removeFromParent();hits.forEach(h=>h.anchor.removeFromParent());const geometries=new Set(),materials=new Set();[group,...hits.map(h=>h.anchor)].forEach(g=>g.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material);}));geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());ash.forEach(t=>t.dispose());}
  const noRaycast=()=>{};[group,...hits.map(h=>h.anchor)].forEach(g=>g.traverse(o=>{if(o.isMesh||o.isPoints||o.isSprite)o.raycast=noRaycast;}));
  const development=['localhost','127.0.0.1'].includes(location.hostname);
  if(development){window[`force${page}Meteor`]=()=>started&&spawn('flyby');window[`force${page}MeteorImpact`]=()=>force('impact');window[`force${page}MeteorSkim`]=()=>force('skim');}
  function force(kind){if(!started)return false;slots.forEach(m=>{m.active=false;m.head.visible=m.tail.visible=m.entry.visible=false;});hits.forEach(h=>{h.active=false;h.anchor.visible=false;});const result=spawn(kind);next=clock+nextHomeMeteorDelay(spawned,random)*cadenceScale;return result;}
  return {update,dispose};
}
