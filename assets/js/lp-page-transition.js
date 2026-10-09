(function () {
    'use strict';
    if (window.__lpPageTransition) return;
    window.__lpPageTransition = true;

    var storageKey = 'lp-page-transition-destination';
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    var mobile = window.matchMedia('(max-width: 767px)');
    var overlay = document.createElement('div');
    overlay.className = 'lp-page-transition';
    overlay.setAttribute('aria-hidden', 'true');
    var glow = document.createElement('div');
    glow.className = 'lp-page-transition__glow';
    overlay.appendChild(glow);
    // Loaded in the head so an incoming veil exists before the first paint.
    document.documentElement.appendChild(overlay);

    var navigating = false;
    var leaveTimer;
    var enterTimer;
    var recoveryTimer;
    var coverTimer;

    function clearPending() {
        try { sessionStorage.removeItem(storageKey); } catch (_) { /* Storage may be unavailable. */ }
    }
    function reset() {
        clearTimeout(leaveTimer);
        clearTimeout(enterTimer);
        clearTimeout(recoveryTimer);
        clearTimeout(coverTimer);
        navigating = false;
        overlay.classList.remove('is-leaving', 'is-entering', 'is-covered');
    }
    function enter() {
        reset();
        if (reduced.matches) return;
        overlay.classList.add('is-entering');
        enterTimer = setTimeout(reset, mobile.matches ? 140 : 200);
    }

    var incoming = false;
    try {
        var pending = JSON.parse(sessionStorage.getItem(storageKey) || 'null');
        incoming = Boolean(pending && pending.url === location.href && Date.now() - pending.time < 30000);
        clearPending();
    } catch (_) { clearPending(); }
    var navigation = performance.getEntriesByType('navigation')[0];
    if (incoming && !reduced.matches && (!navigation || navigation.type !== 'reload')) {
        overlay.classList.add('is-covered');
        // Reveal a ready document rather than consuming the fade during parsing.
        function reveal() { if (overlay.classList.contains('is-covered')) enter(); }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', reveal, { once: true });
            coverTimer = setTimeout(reveal, 1200);
        } else reveal();
    }

    function pageDestination(event) {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null;
        var anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
        if (!anchor || anchor.hasAttribute('download')) return null;
        // Respect both explicit and document-wide browsing-context targets.
        var target = anchor.getAttribute('target') || (document.querySelector('base[target]') || {}).target;
        if (target && target.toLowerCase() !== '_self') return null;
        var href = anchor.getAttribute('href').trim();
        if (!href || href[0] === '#') return null;
        var url;
        try { url = new URL(href, document.baseURI); } catch (_) { return null; }
        if (!/^https?:$/.test(url.protocol) || url.origin !== location.origin) return null;
        // Same-page anchors and query-only controls keep native behavior.
        if (url.pathname === location.pathname) return null;
        // This static site's public page destinations are HTML pages or directory indexes.
        if (!/\.html?$/i.test(url.pathname) && !url.pathname.endsWith('/')) return null;
        return url;
    }

    document.addEventListener('click', function (event) {
        var destination = pageDestination(event);
        if (!destination) return;
        if (navigating) { event.preventDefault(); return; }
        if (reduced.matches) return; // Immediate native navigation, no glow or delay.
        event.preventDefault();
        reset();
        navigating = true;
        overlay.classList.add('is-leaving');
        leaveTimer = setTimeout(function () {
            try {
                sessionStorage.setItem(storageKey, JSON.stringify({ url: destination.href, time: Date.now() }));
            } catch (_) { /* Leaving still works without an incoming fade. */ }
            // A cancelled/failed navigation must never leave a permanent black veil.
            recoveryTimer = setTimeout(function () { clearPending(); reset(); }, 4000);
            try { location.assign(destination.href); } catch (_) { clearPending(); reset(); }
        }, mobile.matches ? 170 : 280);
    });

    window.addEventListener('pagehide', reset);
    window.addEventListener('pageshow', function (event) {
        // BFCache restores are immediately usable, including focus and scroll position.
        if (event.persisted) { clearPending(); reset(); }
    });
    reduced.addEventListener('change', function () {
        // Keep a scheduled destination intact if the preference changes mid-leave.
        if (!navigating) reset();
    });
})();
