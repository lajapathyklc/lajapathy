/* LP footer back-to-top — shared across all pages */
(function () {
    function initHeroPingPongVideo() {
        var hero = document.querySelector('.tmp-banner-one-area.moody-hero');
        if (!hero || hero.__lpPingPongBound) return;
        var forward = hero.querySelector('[data-hero-video="forward"]');
        var reverse = hero.querySelector('[data-hero-video="reverse"]');
        if (!forward || !reverse) return;
        hero.__lpPingPongBound = true;
        forward.muted = true;
        reverse.muted = true;
        forward.playbackRate = 0.35;
        reverse.playbackRate = 0.35;

        function playVideo(video, other) {
            other.pause();
            other.style.visibility = 'hidden';
            video.currentTime = 0;
            video.style.visibility = 'visible';
            video.play().catch(function () {});
        }

        forward.addEventListener('ended', function () {
            playVideo(reverse, forward);
        });
        reverse.addEventListener('ended', function () {
            playVideo(forward, reverse);
        });
        forward.addEventListener('canplay', function () {
            if (forward.paused && reverse.paused && forward.currentTime === 0) {
                playVideo(forward, reverse);
            }
        }, { once: true });
    }

    function initBackToTop() {
        var buttons = document.querySelectorAll('[data-lp-backtop]');
        if (!buttons.length) return;
        buttons.forEach(function (backTop) {
            if (backTop.__lpBackTopBound) return;
            backTop.__lpBackTopBound = true;
            backTop.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopImmediatePropagation();
                var scroller = document.scrollingElement || document.documentElement;
                try {
                    scroller.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                } catch (e) {
                    scroller.scrollTop = 0;
                }
                window.setTimeout(function () {
                    scroller.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                    window.scrollTo(0, 0);
                }, 450);
            }, false);
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initHeroPingPongVideo();
            initBackToTop();
        }, { once: true });
    } else {
        initHeroPingPongVideo();
        initBackToTop();
    }
    window.addEventListener('load', function () {
        initHeroPingPongVideo();
        initBackToTop();
    }, { once: true });
})();
