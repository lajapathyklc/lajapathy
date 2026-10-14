// Prioritize the page content before downloading and starting its 3D enhancement.
const roots = Array.from(document.querySelectorAll('.case-study-cinematic-hero[data-case-study]'));
if (roots.length) {
 let scheduled = false;
 const start = () => {
  if (scheduled) return;
  scheduled = true;
  observer.disconnect();
  const load = () => {
   const enhance = () => import('./lp-case-study-cinematic-scene.js?v=performance-20261014-1').catch(error => {
    roots.forEach(root => { root.dataset.scene = 'fallback'; });
    console.error('Case-study enhancement:', error);
   });
   if ('requestIdleCallback' in window) requestIdleCallback(enhance, { timeout: 1200 });
   else requestAnimationFrame(() => requestAnimationFrame(enhance));
  };
  if (document.readyState === 'complete') load();
  else window.addEventListener('load', load, { once: true });
 };
 const observer = new IntersectionObserver(entries => {
  if (entries.some(entry => entry.isIntersecting)) start();
 }, { rootMargin: '200px 0px' });
 roots.forEach(root => observer.observe(root));
 window.addEventListener('pagehide', event => { if (!event.persisted) observer.disconnect(); });
}
