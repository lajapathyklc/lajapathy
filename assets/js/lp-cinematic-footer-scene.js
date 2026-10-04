import {THREE,createHeroRenderer,loadGeology,heroLifecycle} from './hero-3d-core.js';
import {createHeroPlanet,createHeroValleyHaze} from './hero-planet-system.js';
import {createHeroMeteors} from './lp-meteor-system.js';

// Contact's material treatment, applied to instances so no page hero is modified.
function polishPlanet({group,planet,air,outerAir,sun}){
  group.traverse(object=>{if(object.material?.isShaderMaterial)object.material.onBeforeCompile=()=>{};});
  planet.material.onBeforeCompile=shader=>{
    shader.fragmentShader=shader.fragmentShader
      .replace('mix(n,detail,.55)','mix(n,detail,mix(.56,.77,grazing))')
      .replace('albedo=mix(albedo,geological*.72,.25)',
        'albedo=mix(albedo,geological*.72,.33);albedo*=mix(.88,1.13,smoothstep(.24,.67,elevation));albedo=mix(albedo,albedo*vec3(.91,1.025,1.075),mineral*.22)')
      .replace('mix(.90,.78,smoothstep(.28,.65,elevation))','mix(.94,.72,smoothstep(.28,.65,elevation))')
      .replace('energy*=surfaceExposure;',
        'energy*=surfaceExposure;energy*=mix(1.,mix(.82,1.22,smoothstep(.27,.64,elevation)),grazing*smoothstep(-.14,.24,ld));');
  };
  for(const shell of [air,outerAir])shell.material.onBeforeCompile=shader=>{
    shader.fragmentShader=shader.fragmentShader
      .replace('float rayleigh=fresnel*(day+.33*max(v.y,0.));',
        'float alignment=dot(normalize(v.xy),normalize(sunDirection.xy));float angular=pow(smoothstep(-.17,1.,alignment),3.);float nearSun=pow(max(alignment,0.),12.);float rayleigh=fresnel*angular*(day*.80+nearSun*.15);')
      .replace('mie*.65','mie*.78*angular').replace('time*.628','time*.571');
  };
  sun.material.onBeforeCompile=shader=>{
    shader.vertexShader=shader.vertexShader.replace('vec4(position,1.)',
      'vec4(position-vec3(normalize(vec2(-.20,.82))*(.011/.82),0.),1.)');
    shader.fragmentShader=shader.fragmentShader
      .replace('i<6','i<4').replace('direction=-.85+j*.31','direction=1.02+j*.42')
      .replace('(.024+j*.005)','(.042+j*.008)').replace('(12.+j*2.3)','(8.+j*1.8)')
      .replace('glare*4.','glare*2.0').replaceAll('time*.48','time*.571').replace('time*.628','time*.571');
  };
}

export async function createCinematicFooterScene(root,{calm=false}={}){
  let renderer,lifecycle,meteors,scene,atlas,disposed=false;
  const ownedTextures=new Set();
  function own(texture){if(disposed)texture.dispose();else ownedTextures.add(texture);return texture;}
  const canvas=root.querySelector('.lp-cinematic-footer__canvas');
  function dispose(){
    if(disposed)return;disposed=true;lifecycle?.dispose();meteors?.dispose();
    canvas.removeEventListener('webglcontextlost',contextLost);
    const geometries=new Set(),materials=new Set(),textures=new Set();
    scene?.traverse(object=>{
      if(object.geometry)geometries.add(object.geometry);
      if(object.material)materials.add(object.material);
    });
    for(const material of materials){
      for(const uniform of Object.values(material.uniforms||{}))if(uniform.value?.isTexture)textures.add(uniform.value);
      material.dispose();
    }
    ownedTextures.forEach(texture=>textures.add(texture));
    geometries.forEach(geometry=>geometry.dispose());textures.forEach(texture=>texture.dispose());
    renderer?.dispose();
    root.dataset.animation='disposed';
  }
  function contextLost(event){event.preventDefault();root.dataset.scene='fallback';dispose();}
  try{
    const mobile=matchMedia('(max-width:767px)').matches;
    const config={rotationDuration:300,relief:2.15,displacement:.0015,sunIntensity:3,
      cloudSpeed:1.010,hazeSpeed:1.018,cloudOpacity:.12,highHazeOpacity:.045,
      surfaceExposure:calm?.54:.60,atmosphereIntensity:calm?.35:.43,rimIntensity:1,
      atmosphereThickness:1.006,outerAtmosphereScale:1.012,outerAtmosphereIntensity:.060,
      sunGlow:calm?.33:.40};
    renderer=createHeroRenderer(canvas,mobile?1.25:1.75);
    scene=new THREE.Scene();const camera=new THREE.OrthographicCamera(-1,1,1,-1,.1,100);camera.position.z=8;
    atlas=own(await loadGeology(renderer,mobile));
    const loader=new THREE.TextureLoader();
    const [landscape,maskText]=await Promise.all([
      loader.loadAsync('assets/images/bg/footerbg.webp').then(own),
      fetch('assets/images/hero-cinematic/contact-horizon-mask.svg').then(response=>{
        if(!response.ok)throw new Error('Footer landscape mask failed to load');return response.text();
      })]);
    // Rasterize the existing SVG mask once: direct SVG uploads fail on Metal/ANGLE.
    const maskCanvas=document.createElement('canvas');maskCanvas.width=1920;maskCanvas.height=640;
    const maskImage=new Image(),maskURL=URL.createObjectURL(new Blob([
      maskText.replace('<svg ','<svg width="1920" height="640" ')],{type:'image/svg+xml'}));
    try{maskImage.src=maskURL;await maskImage.decode();maskCanvas.getContext('2d').drawImage(maskImage,0,0);}
    finally{URL.revokeObjectURL(maskURL);}
    const horizon=own(new THREE.CanvasTexture(maskCanvas));
    landscape.colorSpace=THREE.SRGBColorSpace;
    const landscapeUniforms={landscape:{value:landscape},horizon:{value:horizon},cover:{value:new THREE.Vector2(1,1)}};
    const terrain=new THREE.Mesh(new THREE.PlaneGeometry(2,2),new THREE.ShaderMaterial({
      uniforms:landscapeUniforms,transparent:true,depthTest:false,depthWrite:false,
      vertexShader:'varying vec2 p;void main(){p=uv;gl_Position=vec4(position.xy,0.,1.);}',
      fragmentShader:`varying vec2 p;uniform sampler2D landscape,horizon;uniform vec2 cover;
        void main(){vec2 uv=(p-.5)*cover+.5;vec4 color=texture2D(landscape,uv);gl_FragColor=vec4(color.rgb,color.a*texture2D(horizon,uv).a);
        #include <colorspace_fragment>
        }`}));
    terrain.material.onBeforeCompile=()=>{};terrain.renderOrder=30;terrain.frustumCulled=false;scene.add(terrain);
    // Decode the shared nebula before publishing the first complete frame.
    await loader.loadAsync('assets/images/hero-cinematic/space.webp').then(texture=>texture.dispose());
    const light=new THREE.Vector3(-.20,.82,-.52).normalize();
    const planetSystem=createHeroPlanet({scene,atlas,light,mobile,config});
    polishPlanet(planetSystem);
    const {group,planet,uniforms,clouds,haze,air,outerAir,sun}=planetSystem;
    const fogUniforms=createHeroValleyHaze({scene,speeds:[.0025,-.004,.0055],
      opacities:mobile?[.05,.025,.012]:[.075,.045,.018]});
    const fog=scene.children.at(-1);fog.material.depthTest=false;fog.material.onBeforeCompile=()=>{};
    fog.renderOrder=31;fog.frustumCulled=false;
    // The exact Home scheduler and flight speeds, with intervals stretched to 55% density.
    // Cloud, rotation and meteor flight time remain independent of scheduler spacing.
    meteors=createHeroMeteors({system:group,globe:planet,camera,renderer,root,uniforms,
      page:'Footer',firstDelay:3,cadenceScale:1/.55,
      eventKind:count=>count%28===0?'impact':count%12===0?'skim':'flyby',
      config:{poolSize:mobile?2:3,intensity:calm?.45:.55,debrisCount:6,mobileDebrisCount:4},
      failedEventFallback:true,
      impactDirection:({width})=>width<768?[-.4,0,-1]:null,
      targetNormal:({kind})=>{
        if(kind==='skim')return null;
        const {x,y,radius,width,height}=JSON.parse(root.dataset.planetGeometry);
        const box=root.getBoundingClientRect(),copy=root.querySelector('.lp-hero-copy').getBoundingClientRect();
        const small=width<768;
        const px=width*(small?.64+Math.random()*.10:.75+Math.random()*.14);
        const minY=small?copy.bottom-box.top+80:height*.38,maxY=height*.66;
        if(minY>maxY)return null;
        const py=minY+Math.random()*(maxY-minY),nx=(px-x)/radius,ny=(y-py)/radius;
        if(nx*nx+ny*ny>.85)return null;
        return[nx,ny,Math.sqrt(1-nx*nx-ny*ny)];
      }});
    let width=1,height=1,frames=0,cost=16,frameDuration=16.7;
    function resize(){
      width=root.clientWidth;height=root.clientHeight;const aspect=width/height,small=width<768;
      camera.left=-aspect;camera.right=aspect;camera.updateProjectionMatrix();
      renderer.setSize(width,height,false);
      const sourceAspect=1920/640;
      landscapeUniforms.cover.value.set(Math.min(1,aspect/sourceAspect),Math.min(1,sourceAspect/aspect));
      const radius=width*(small?.82:width<1100?.285:.28);
      const x=width*(small?1.10:.86),y=height*(small?.87:.84);
      group.position.set((x-width/2)*2/height,1-y*2/height,0);group.scale.setScalar(radius*2/height);
      const direction=new THREE.Vector2(light.x,light.y).normalize();
      sun.position.set(group.position.x+direction.x*group.scale.x*1.005,group.position.y+direction.y*group.scale.x*1.005,-1.4);
      sun.scale.setScalar(group.scale.x*.82);
      if(small){
        const copyBottom=root.querySelector('.lp-hero-copy').getBoundingClientRect().bottom-root.getBoundingClientRect().top;
        canvas.style.maskImage=`linear-gradient(180deg,transparent ${copyBottom+24}px,#000 ${copyBottom+95}px)`;
      }else canvas.style.maskImage='none';
      scene.updateMatrixWorld(true);root.dataset.planetGeometry=JSON.stringify({x,y,radius,width,height});
    }
    lifecycle=heroLifecycle(root,resize,(time,dt,reduced)=>{
      if(disposed)return;const start=performance.now();
      uniforms.turn.value=time/config.rotationDuration;
      clouds.u.cloudTurn.value=uniforms.turn.value*clouds.speed;haze.u.cloudTurn.value=uniforms.turn.value*haze.speed;
      for(const object of [sun,air,outerAir])object.material.uniforms.time.value=time;
      fogUniforms.time.value=time;scene.updateMatrixWorld(true);meteors.update(dt,reduced,true);
      renderer.render(scene,camera);
      root.dataset.scene='ready';root.dataset.rotation=String(uniforms.turn.value);
      root.dataset.cloudRotation=String(clouds.u.cloudTurn.value);root.dataset.hazeRotation=String(haze.u.cloudTurn.value);
      root.dataset.reducedMotion=String(reduced);root.dataset.dpr=String(renderer.getPixelRatio());
      root.dataset.frames=String(++frames);
      cost=cost*.95+(performance.now()-start)*.05;
      if(dt>0)frameDuration=frameDuration*.98+dt*1000*.02;
      if(frames%240===0){
        if(Math.max(cost,frameDuration)>23&&renderer.getPixelRatio()>1){renderer.setPixelRatio(Math.max(1,renderer.getPixelRatio()*.8));resize();}
        else if(frames>=960&&Math.max(cost,frameDuration)>44&&renderer.getPixelRatio()<=1){root.dataset.scene='fallback';dispose();}
      }
    });
    canvas.addEventListener('webglcontextlost',contextLost);
    return {dispose};
  }catch(error){root.dataset.scene='fallback';dispose();throw error;}
}
