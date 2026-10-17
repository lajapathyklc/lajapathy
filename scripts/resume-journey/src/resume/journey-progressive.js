import './resume-journey.css';
import './journey-progressive.css';
import {setupJourneyMenu} from './journey-menu.js';
const activate=document.querySelector('#activate'),shell=document.querySelector('.journey-shell');
const preview=document.querySelector('#journey-preview'),reader=document.querySelector('#journey-reader');
const status=document.querySelector('#progressive-status'),progress=document.querySelector('#progressive-progress');
const skip=document.querySelector('.journey-skip');
setupJourneyMenu();
let state='idle';
const observer=new MutationObserver(()=>{
 if(state!=='loading')return;
 status.textContent=document.querySelector('#load-detail').textContent;
 const source=document.querySelector('#journey-progress');progress.hidden=source.hidden;
 if(source.hasAttribute('value'))progress.value=source.value;else progress.removeAttribute('value');
});
function fallback() {
 state='failed';observer.disconnect();progress.hidden=true;
 document.body.classList.add('journey-reading');shell.hidden=true;shell.inert=true;
 shell.setAttribute('aria-hidden','true');preview.hidden=false;reader.hidden=false;skip.hidden=false;
 activate.removeAttribute('aria-disabled');activate.textContent='Reload to retry 3D';
 status.textContent='The interactive Journey is unavailable. All eight chapters remain readable below.';
 performance.mark('lp-progressive-fallback');
}
addEventListener('lp-journey-error',fallback);
addEventListener('lp-resume-phase-a2-ready',()=>{
 if(state!=='loading')return;
 state='ready';observer.disconnect();progress.hidden=true;
 // If a visitor is reading or using navigation, let them choose the handoff.
 activate.removeAttribute('aria-disabled');activate.textContent='Open interactive Journey';
 status.textContent='Your spacecraft is ready. Open the interactive Journey whenever you are ready.';
 performance.mark('lp-progressive-model-ready');
 if(document.activeElement===activate)openJourney();
});
function openJourney() {
 preview.hidden=true;reader.hidden=true;skip.hidden=true;
 shell.inert=false;shell.removeAttribute('aria-hidden');
 document.body.classList.remove('journey-reading');
 scrollTo({top:0,behavior:'instant'});
 requestAnimationFrame(()=>{dispatchEvent(new Event('resize'));document.querySelector('#planet-trigger').focus({preventScroll:true});performance.mark('lp-progressive-interactive-ready');});
}
activate.hidden=false;
activate.addEventListener('click',async()=>{
 if(state==='failed'){location.reload();return;}
 if(state==='ready'){openJourney();return;}
 if(state!=='idle')return;
 state='loading';performance.mark('lp-progressive-activation');
 activate.setAttribute('aria-disabled','true');activate.focus({preventScroll:true});status.textContent='Loading the full-quality spacecraft. You can keep reading below.';
 shell.hidden=false;shell.inert=true;shell.setAttribute('aria-hidden','true');
 observer.observe(document.querySelector('#journey-load'),{subtree:true,childList:true,characterData:true,attributes:true});
 try{await import('./resume-journey.js');}catch(error){console.error('[LP Journey loader]',error);fallback();}
});
performance.mark('lp-progressive-reader-ready');
const poster=document.querySelector('#poster');
poster.decode().then(()=>performance.mark('lp-progressive-poster-ready')).catch(()=>{status.textContent='Preview unavailable. All eight chapters remain readable below.';});
