const {chromium}=require(process.env.LP_PLAYWRIGHT_PATH || 'playwright');
const fs=require('fs'),path=require('path');
const widths=process.argv.length>2?process.argv.slice(2).map(Number):[390,430,768,1024,1366,1440,1536,1920,2560,3440,3840];
const heights={390:844,430:932,768:1024,1024:1366,1366:768,1440:900,1536:864,1920:1080,2560:1440,3440:1440,3840:2160};
const pages=fs.readdirSync('.').filter(f=>f.endsWith('.html'));
(async()=>{
 const browser=await chromium.launch({headless:true}); const results=[];
 for(const width of widths){
  for(let start=0;start<pages.length;start+=4) await Promise.all(pages.slice(start,start+4).map(async file=>{
   const page=await browser.newPage({viewport:{width,height:heights[width]||900},reducedMotion:'reduce'});
   await page.route('**/*',r=>{if(['image','media','font'].includes(r.request().resourceType()))return r.abort();const u=new URL(r.request().url());if(u.origin!=='http://127.0.0.1:8765')return r.abort();const f=path.join(process.cwd(),decodeURIComponent(u.pathname));return fs.existsSync(f)&&fs.statSync(f).isFile()?r.fulfill({path:f}):r.abort();});
   await page.goto('http://127.0.0.1:8765/'+file,{waitUntil:'domcontentloaded'});
   await page.waitForTimeout(150);
   const data=await page.evaluate(()=>{
    const ref=document.querySelector('header .lp-shell'); if(!ref)return {error:'missing header shell'};
    const rect=ref.getBoundingClientRect();
    const selectors='.lp-shell,.case-snapshot,.ewallet-story-row,.project-story-row,.ewallet-screen-gallery,.project-case-study-screens,.lp-cinematic-footer__shell,.lp-footer-v28__navrow,.lp-footer-v28__bottom';
    const rows=[...document.querySelectorAll(selectors)].filter(e=>e.getBoundingClientRect().width>0&&!e.closest('.lp-mobile-menu')).map(e=>{
     const r=e.getBoundingClientRect(),cs=getComputedStyle(e);const inset=e.matches('.case-snapshot,.ewallet-story-row,.project-story-row,.ewallet-screen-gallery,.project-case-study-screens');
     const left=r.left+(inset?parseFloat(cs.paddingLeft):0),right=r.right-(inset?parseFloat(cs.paddingRight):0);
     return {selector:e.tagName.toLowerCase()+(e.id?'#'+e.id:'')+'.'+[...e.classList].join('.'),left,right,deviation:Math.max(Math.abs(left-rect.left),Math.abs(right-rect.right)),paddingLeft:cs.paddingLeft,paddingRight:cs.paddingRight};
    });return {left:rect.left,right:rect.right,max:Math.max(...rows.map(r=>r.deviation)),failures:rows.filter(r=>r.deviation>2),count:rows.length};
   });results.push({file,width,...data});await page.close();
  }));
  console.log(width,JSON.stringify(results.filter(r=>r.width===width&& (r.max>2||r.error))));
 }
 const prior=process.argv.length>2&&fs.existsSync('docs/grid-qa/geometry.json')?JSON.parse(fs.readFileSync('docs/grid-qa/geometry.json')).filter(r=>!widths.includes(r.width)):[];
 fs.writeFileSync('docs/grid-qa/geometry.json',JSON.stringify([...prior,...results],null,2));await browser.close();
 if(results.some(r=>r.error||r.max>2))process.exitCode=1;
})();
