(function(){
  'use strict';
  function init(){
    var menu=document.querySelector('.lp-mobile-menu');
    var openers=document.querySelectorAll('.humberger_menu_active');
    if(!menu || !openers.length) return;
    var close=menu.querySelector('.lp-menu-close');
    var backdrop=menu.querySelector('.lp-menu-backdrop');
    var lastFocus=null;
    if(!menu.id) menu.id='lp-mobile-navigation';
    // Keep the approved nav labels; expose the same current-page state everywhere.
    var current=location.pathname.split('/').pop() || 'index.html';
    var portfolio=Boolean(document.querySelector('.case-snapshot'));
    document.querySelectorAll('header a, .lp-mobile-nav a').forEach(function(a){
      var target=new URL(a.href,location.href).pathname.split('/').pop() || 'index.html';
      if(target===current || (portfolio && target==='Casestudies.html')) a.setAttribute('aria-current','page');
    });

    function openMenu(e){
      if(e){ e.preventDefault(); e.stopImmediatePropagation(); }
      lastFocus=e && e.currentTarget ? e.currentTarget : document.activeElement;
      menu.classList.add('is-open');
      menu.setAttribute('aria-hidden','false');
      document.body.classList.add('lp-menu-lock');
      document.documentElement.classList.add('lp-menu-open');
      openers.forEach(function(b){
        b.setAttribute('aria-expanded','true');
        b.classList.add('active');
      });
      // WebKit can retain hidden visibility until the opening style is painted.
      // Focus only after the modal can actually receive it; closing cancels the handoff.
      requestAnimationFrame(function focusClose(){
        if(!close || !menu.classList.contains('is-open')) return;
        if(getComputedStyle(close).visibility!=='visible') { requestAnimationFrame(focusClose); return; }
        close.focus({preventScroll:true});
      });
    }
    function closeMenu(e){
      if(e){ e.preventDefault(); e.stopPropagation(); }
      menu.classList.remove('is-open');
      document.body.classList.remove('lp-menu-lock');
      document.documentElement.classList.remove('lp-menu-open');
      openers.forEach(function(b){
        b.setAttribute('aria-expanded','false');
        b.classList.remove('active');
      });
      // Restore focus before hiding its ancestor from the accessibility tree.
      var target=lastFocus && lastFocus.isConnected && !menu.contains(lastFocus) ? lastFocus : openers[0];
      if(target && target.focus) target.focus({preventScroll:true});
      menu.setAttribute('aria-hidden','true');
    }

    // Capture phase is intentional: several legacy sub-pages have their own
    // hamburger handler. This guarantees the new menu wins without editing
    // every legacy handler individually.
    openers.forEach(function(b){
      b.setAttribute('aria-haspopup','dialog');
      b.setAttribute('aria-controls',menu.id);
      if(!b.hasAttribute('aria-label')) b.setAttribute('aria-label','Open navigation');
      b.setAttribute('aria-expanded','false');
      b.addEventListener('click',openMenu,true);
      b.addEventListener('keydown',function(e){
        if((e.key==='Enter'||e.key===' ') && !menu.classList.contains('is-open')) openMenu(e);
      },true);
    });

    if(close) close.addEventListener('click',closeMenu);
    if(backdrop) backdrop.addEventListener('click',closeMenu);
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){ closeMenu(); });
    });
    document.addEventListener('keydown',function(e){
      if(!menu.classList.contains('is-open')) return;
      if(e.key==='Escape') closeMenu(e);
      if(e.key==='Tab') {
        var items=Array.from(menu.querySelectorAll('a[href],button,input,[tabindex]')).filter(function(el){return !el.disabled && el.tabIndex>=0 && el.getClientRects().length;});
        var first=items[0],last=items[items.length-1];
        if(e.shiftKey && (document.activeElement===first || !menu.contains(document.activeElement))){e.preventDefault();if(last) last.focus();}
        else if(!e.shiftKey && (document.activeElement===last || !menu.contains(document.activeElement))){e.preventDefault();if(first) first.focus();}
      }
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
