// One header/menu remains in the top-level document before and after activation.
let removeListeners;
export function setupJourneyMenu({onOpen=()=>{},onClose=()=>{}}={}) {
  removeListeners?.();
  const controller=new AbortController(), options={signal:controller.signal};
  const menu=document.querySelector('#site-menu'), panel=menu.querySelector('.lp-menu-panel');
  const opener=document.querySelector('#open-site-menu'), closer=menu.querySelector('.lp-menu-close');
  let lastFocus;
  function close(event) {
    if(event){event.preventDefault();event.stopPropagation();}
    menu.classList.remove('is-open');menu.setAttribute('aria-hidden','true');
    document.body.classList.remove('lp-menu-lock');document.documentElement.classList.remove('lp-menu-open');
    opener.setAttribute('aria-expanded','false');onClose();
    (lastFocus??opener).focus({preventScroll:true});
  }
  opener.addEventListener('click',event=>{
    event.preventDefault();lastFocus=opener;onOpen();
    menu.classList.add('is-open');menu.setAttribute('aria-hidden','false');
    document.body.classList.add('lp-menu-lock');document.documentElement.classList.add('lp-menu-open');
    opener.setAttribute('aria-expanded','true');closer.focus({preventScroll:true});
  },options);
  closer.addEventListener('click',close,options);
  menu.querySelector('.lp-menu-backdrop').addEventListener('click',close,options);
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>close(),options));
  document.addEventListener('keydown',event=>{
    if(!menu.classList.contains('is-open'))return;
    if(event.key==='Escape'){close(event);return;}
    if(event.key!=='Tab')return;
    const items=[...panel.querySelectorAll('a[href],button:not(:disabled),[tabindex]:not([tabindex="-1"])')].filter(el=>el.getClientRects().length);
    const first=items[0],last=items.at(-1);
    if(event.shiftKey&&(document.activeElement===first||!menu.contains(document.activeElement))){event.preventDefault();last?.focus();}
    else if(!event.shiftKey&&(document.activeElement===last||!menu.contains(document.activeElement))){event.preventDefault();first?.focus();}
  },options);
  removeListeners=()=>controller.abort();
  return {close};
}
