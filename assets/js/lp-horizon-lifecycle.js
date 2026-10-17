// Contact and closing-footer scheduler only; approved page engines are untouched.
export function horizonLifecycle(root,resize,render){
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let raf=0,last=0,time=0,visible=true,disposed=false,suspended=false;
 function frame(now){
  raf=0;if(disposed||suspended||!visible||document.hidden)return;
  if(!reduced.matches&&last&&now-last<1000/30-.5){raf=requestAnimationFrame(frame);return;}
  const dt=reduced.matches?0:last?Math.min((now-last)/1000,.1):0;last=now;time+=dt;
  render(time,dt,reduced.matches);if(!reduced.matches)raf=requestAnimationFrame(frame);
 }
 function redraw(){if(!disposed&&!suspended&&visible&&!document.hidden&&!raf)raf=requestAnimationFrame(frame);}
 function invalidate(){last=0;cancelAnimationFrame(raf);raf=0;redraw();}
 const ro=new ResizeObserver(()=>{resize();invalidate()});ro.observe(root);
 const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;root.dataset.animation=visible&&!document.hidden?'running':'paused';invalidate()});io.observe(root);
 function visibility(){root.dataset.animation=visible&&!document.hidden?'running':'paused';invalidate()}
 function hide(){suspended=true;invalidate()}function show(){suspended=false;invalidate()}
 reduced.addEventListener('change',invalidate);document.addEventListener('visibilitychange',visibility);window.addEventListener('pagehide',hide);window.addEventListener('pageshow',show);
 resize();redraw();return{redraw,reduced,dispose(){disposed=true;cancelAnimationFrame(raf);ro.disconnect();io.disconnect();reduced.removeEventListener('change',invalidate);document.removeEventListener('visibilitychange',visibility);window.removeEventListener('pagehide',hide);window.removeEventListener('pageshow',show)}};
}
