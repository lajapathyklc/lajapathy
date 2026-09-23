/* Reveal the shared light treatment as each homepage chapter enters view. */
(function () {
    'use strict';

    var scenes = document.querySelectorAll('.lp-cinematic-scene');
    if (!scenes.length) return;

    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
        scenes.forEach(function (scene) { scene.classList.add('lp-scene-live'); });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('lp-scene-live');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    scenes.forEach(function (scene) { observer.observe(scene); });
})();
