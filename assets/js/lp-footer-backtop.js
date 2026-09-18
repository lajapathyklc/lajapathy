/* LP footer back-to-top — shared across all pages */
(function () {
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
        document.addEventListener('DOMContentLoaded', initBackToTop, { once: true });
    } else {
        initBackToTop();
    }
    window.addEventListener('load', initBackToTop, { once: true });
})();
