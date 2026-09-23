/* Reduced-motion handling for the things CSS cannot reach.
   CSS hides the hero video and stills the decorative layers; this stops the
   video streaming, halts carousel autoplay, and snaps the counters straight
   to their final value instead of animating them. */
(function () {
    'use strict';

    var query = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!query) return;

    function apply() {
        if (!query.matches) return;

        // Stop the hero videos loading and looping.
        var videos = document.querySelectorAll('video');
        for (var i = 0; i < videos.length; i++) {
            var v = videos[i];
            try {
                v.autoplay = false;
                v.loop = false;
                v.pause();
                // removeAttribute alone leaves a buffered stream running
                v.setAttribute('preload', 'none');
            } catch (e) { /* a detached or already-torn-down element */ }
        }

        // Halt Swiper autoplay wherever an instance is reachable.
        var slides = document.querySelectorAll('.swiper, .swiper-container');
        for (var j = 0; j < slides.length; j++) {
            var inst = slides[j].swiper;
            if (inst && inst.autoplay && typeof inst.autoplay.stop === 'function') {
                try { inst.autoplay.stop(); } catch (e) { /* older Swiper build */ }
            }
        }

        // Counters: show the number, skip the roll-up.
        var odos = document.querySelectorAll('.odometer');
        for (var k = 0; k < odos.length; k++) {
            var target = odos[k].getAttribute('data-count');
            if (target) {
                odos[k].innerHTML = '';
                odos[k].textContent = target;
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apply);
    } else {
        apply();
    }

    // Re-apply if the visitor changes the preference while the page is open.
    if (typeof query.addEventListener === 'function') {
        query.addEventListener('change', apply);
    } else if (typeof query.addListener === 'function') {
        query.addListener(apply);
    }
})();
