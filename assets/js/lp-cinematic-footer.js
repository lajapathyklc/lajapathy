// One CTA implementation upgrades the existing shared footer, keeping its legal links.
// This lightweight controller imports no renderer, textures or animation until nearby.
const footer=document.querySelector('footer.lp-cinematic-footer');
const legalOnly=document.body.dataset.footerVariant==='legal-only';
if(footer&&!legalOnly){
  const contact=location.pathname.split('/').pop().toLowerCase()==='contact.html';
  const inner=footer.querySelector('.lp-footer-v28__inner');
  const scene=document.createElement('section');
  scene.className='lp-cinematic-footer__scene';
  scene.id='lp-cinematic-footer';
  scene.dataset.scene='idle';
  scene.setAttribute('aria-label','Start a conversation');
  scene.innerHTML=`
    <div class="lp-cinematic-footer__space" aria-hidden="true"></div>
    <canvas class="lp-cinematic-footer__canvas" aria-hidden="true"></canvas>
    <div class="lp-cinematic-footer__terrain" aria-hidden="true"></div>
    <div class="lp-cinematic-footer__fallback" aria-hidden="true"></div>
    <div class="lp-cinematic-footer__shell">
      <div class="lp-cinematic-footer__copy lp-hero-copy">
        <div class="lp-cinematic-footer__eyebrow"><span aria-hidden="true"></span>NEXT CHAPTER</div>
        <h2 class="lp-cinematic-footer__title">LET’S BUILD<br><em>WHAT’S NEXT</em></h2>
        <p class="lp-cinematic-footer__sub">Designing products that move businesses forward.</p>
        <a class="lp-cinematic-footer__cta" href="${contact?'#contacts':'contact.html'}">START A CONVERSATION <span aria-hidden="true">→</span></a>
      </div>
    </div>`;
  if(contact)footer.dataset.calm='true';
  const previous=inner.querySelector('.lp-footer-v28__hero');
  if(previous)previous.replaceWith(scene);else inner.prepend(scene);
  footer.querySelector('.lp-footer-v28__visual')?.remove();
  let instance,initializing=false,destroyed=false;
  async function initialize(){
    if(initializing||destroyed)return;initializing=true;scene.dataset.scene='loading';
    try{
      const {createCinematicFooterScene}=await import('./lp-cinematic-footer-scene.js?v=20261004');
      if(destroyed)return;
      instance=await createCinematicFooterScene(scene,{calm:contact});
      if(destroyed)instance.dispose();
    }catch(error){scene.dataset.scene='fallback';console.error('Cinematic footer:',error);}
  }
  const near=new IntersectionObserver(([entry])=>{
    if(entry.isIntersecting){near.disconnect();initialize();}
  },{rootMargin:'450px 0px'});
  near.observe(scene);
  window.addEventListener('pagehide',event=>{
    if(!event.persisted){destroyed=true;near.disconnect();instance?.dispose();}
  });
}
