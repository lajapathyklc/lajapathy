const {chromium}=require(process.env.LP_PLAYWRIGHT_PATH||'playwright');
const fs=require('fs'),path=require('path'),assert=require('assert/strict');
const origin='http://127.0.0.1:8765';
const viewports=[[390,844],[430,932],[768,1024],[1024,1366],[1366,768],[1440,900],[1920,1080],[2560,1440]];
const files=fs.readdirSync('.').filter(f=>f.endsWith('.html'));
(async()=>{
 const browser=await chromium.launch({headless:true});const results=process.argv.includes('--safety-only')?JSON.parse(fs.readFileSync('docs/transition-qa/results.json')):{pages:[],flows:[],exclusions:[],errors:[]};
 async function newPage(width=1440,height=900,reducedMotion='no-preference'){
  const p=await browser.newPage({viewport:{width,height},reducedMotion});
  p.on('pageerror',e=>results.errors.push({url:p.url(),message:e.message}));
  await p.route('**/*',r=>{const u=new URL(r.request().url());if(u.origin!==origin||['image','media','font'].includes(r.request().resourceType()))return r.abort();if(u.pathname==='/api/contact')return r.fulfill({json:{ok:true}});const f=path.join(process.cwd(),decodeURIComponent(u.pathname));return fs.existsSync(f)&&fs.statSync(f).isFile()?r.fulfill({path:f}):r.abort()});
  return p;
 }
 function veil(p){return p.locator('.lp-page-transition')}
 for(const file of (process.argv.includes('--safety-only')?[]:files)){
  const p=await newPage();await p.goto(origin+'/'+file);assert.equal(await veil(p).count(),1);assert.equal(await veil(p).getAttribute('aria-hidden'),'true');assert.equal(await veil(p).evaluate(e=>getComputedStyle(e).opacity),'0');
  await p.addScriptTag({path:'assets/js/lp-page-transition.js'});assert.equal(await veil(p).count(),1);results.pages.push(file);await p.close();
 }
 for(const [width,height]of (process.argv.includes('--safety-only')?[]:viewports)){
  const p=await newPage(width,height);await p.goto(origin+'/index.html');
  const routes=[['index.html','header a[href="about.html"]','about.html'],['about.html','header a[href="Casestudies.html"]','Casestudies.html'],['Casestudies.html','.work-project-link[href="ewallet.html"]','ewallet.html'],['ewallet.html','.project-swiper-button-next','zappay.html'],['Casestudies.html','header a[href="contact.html"]','contact.html'],['contact.html','header a[href="index.html"]','index.html'],['index.html','footer nav a[href="about.html"]','about.html']];
  for(const[from,selector,to]of routes){
   if(!p.url().endsWith('/'+from))await p.goto(origin+'/'+from);
   const reference=await p.locator('header .lp-shell').evaluate(e=>({left:e.getBoundingClientRect().left,right:e.getBoundingClientRect().right}));
   const start=Date.now();const state=await p.locator(selector).first().evaluate(e=>{e.click();const r=document.querySelector('header .lp-shell').getBoundingClientRect();return {leaving:document.querySelector('.lp-page-transition').classList.contains('is-leaving'),reference:{left:r.left,right:r.right}}});
   assert.equal(state.leaving,true,`${width}: ${from} → ${to}`);
   assert.deepEqual(state.reference,reference);
   await p.waitForURL(origin+'/'+to,{waitUntil:'domcontentloaded'});const elapsed=Date.now()-start;await p.waitForTimeout(250);
   assert.equal(await veil(p).evaluate(e=>getComputedStyle(e).opacity),'0');results.flows.push({width,height,from,to,elapsedToDocumentMs:elapsed});console.log(width,from,to);
  }
  await p.reload();assert.equal(await veil(p).evaluate(e=>e.classList.contains('is-entering')),false);
  await p.goBack();await p.waitForTimeout(250);assert.equal(await veil(p).evaluate(e=>getComputedStyle(e).opacity),'0');
  await p.goForward();await p.waitForTimeout(250);assert.equal(await veil(p).evaluate(e=>getComputedStyle(e).opacity),'0');await p.close();
 }
 fs.writeFileSync('docs/transition-qa/results.json',JSON.stringify(results,null,2));
 const p=await newPage();await p.goto(origin+'/index.html');
 results.exclusions=await p.evaluate(()=>{
  const cases=[['hash','#portfolio',{}],['same document','index.html#portfolio',{}],['same page','index.html',{}],['query only','?mode=test',{}],['external','https://www.linkedin.com/in/lajapathyk/',{}],['mailto','mailto:test@example.com',{}],['tel','tel:+15555550123',{}],['javascript','javascript:void(0)',{}],['download','about.html',{download:''}],['new tab','about.html',{target:'_blank'}],['named target','about.html',{target:'preview'}],['PDF','test.pdf',{}],['ctrl','about.html',{}, {ctrlKey:true}],['cmd','about.html',{}, {metaKey:true}],['middle','about.html',{}, {button:1}],['shift','about.html',{}, {shiftKey:true}],['alt','about.html',{}, {altKey:true}]];
  const out=[];let prevented=false;
  function stop(e){prevented=e.defaultPrevented;e.preventDefault()}window.addEventListener('click',stop);
  for(const[label,href,attrs,mod]of cases){let a=document.createElement('a');a.href=href;for(const[k,v]of Object.entries(attrs))a.setAttribute(k,v);document.body.append(a);a.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,button:0,...mod}));out.push({label,intercepted:prevented,leaving:document.querySelector('.lp-page-transition').classList.contains('is-leaving')});a.remove()}
  window.removeEventListener('click',stop);return out;
 });assert(results.exclusions.every(r=>!r.intercepted&&!r.leaving));
 // Duplicate internal clicks keep the first destination.
 await p.evaluate(()=>{document.querySelector('header a[href="about.html"]').click();document.querySelector('header a[href="contact.html"]').click()});await p.waitForURL(origin+'/about.html');await p.waitForTimeout(250);assert(p.url().endsWith('/about.html'));
 // Lifecycle restoration resets an active veil, without unload listeners.
 const restored=await p.evaluate(()=>{document.querySelector('header a[href="contact.html"]').click();dispatchEvent(new PageTransitionEvent('pagehide',{persisted:true}));dispatchEvent(new PageTransitionEvent('pageshow',{persisted:true}));return document.querySelector('.lp-page-transition').className});assert.equal(restored,'lp-page-transition');
 await p.close();
 const reduced=await newPage(390,844,'reduce');await reduced.goto(origin+'/index.html');await reduced.locator('header a[href="about.html"]').first().evaluate(e=>e.click());await reduced.waitForURL(origin+'/about.html');assert.equal(await veil(reduced).evaluate(e=>e.className),'lp-page-transition');await reduced.close();
 const contact=await newPage();await contact.goto(origin+'/contact.html');await contact.locator('[name="name"]').fill('Local QA');await contact.locator('[name="email"]').fill('qa@example.com');await contact.locator('[name="message"]').fill('Local mocked form verification.');
 const request=contact.waitForRequest(r=>r.url().endsWith('/api/contact')&&r.method()==='POST');await contact.locator('#contact-form button').first().evaluate(e=>e.click());await request;await contact.waitForFunction(()=>document.querySelector('#mail-success-popup').style.display==='block');assert.equal(await veil(contact).evaluate(e=>e.className),'lp-page-transition');results.form='Mocked local POST succeeded; popup shown; no transition';await contact.close();
 fs.writeFileSync('docs/transition-qa/results.json',JSON.stringify(results,null,2));await browser.close();assert.equal(results.errors.length,0,'No uncaught runtime errors');console.log(JSON.stringify({pages:results.pages.length,flows:results.flows.length,exclusions:results.exclusions.length,form:results.form,errors:results.errors},null,2));
})().catch(e=>{console.error(e);process.exit(1)});
