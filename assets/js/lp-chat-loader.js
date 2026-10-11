/* Keep the approved Noupe widget; let page loading finish before automatic startup. */
(function () {
    var loaded = false;
    function load() {
        if (loaded) return;
        loaded = true;
        document.removeEventListener('pointerdown', load);
        document.removeEventListener('keydown', load);
        var script = document.createElement('script');
        script.src = 'https://www.noupe.com/embed/01995bdd01597da5b1195cbbd8e283fd0a1a.js';
        script.async = true;
        document.head.appendChild(script);
    }
    document.addEventListener('pointerdown', load, { once: true, passive: true });
    document.addEventListener('keydown', load, { once: true });
    function schedule() {
        setTimeout(load, 5000);
    }
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });
})();
