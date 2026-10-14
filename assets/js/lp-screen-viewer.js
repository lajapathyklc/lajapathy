document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.ewallet-phone-screen-viewport').forEach(function (viewport, galleryIndex) {
        var slides = Array.from(viewport.querySelectorAll('.ewallet-phone-shot'));
        if (!slides.length) return;
        var controls = viewport.closest('.interactive-phone-gallery');
        controls = controls && controls.querySelector('.ewallet-gallery-controls');
        if (!controls) return;
        var open = document.createElement('button');
        open.type = 'button'; open.className = 'lp-screen-open'; open.textContent = 'Enlarge screen';
        controls.appendChild(open);
        var dialog = document.createElement('dialog');
        dialog.className = 'lp-screen-viewer';
        var titleId = 'screen-viewer-title-' + galleryIndex;
        dialog.setAttribute('aria-labelledby', titleId);
        dialog.innerHTML = '<header><h2 id="' + titleId + '"></h2><button type="button" data-close aria-label="Close enlarged screen">Close ×</button></header><div class="lp-screen-image"><img alt=""></div><footer><button type="button" data-prev aria-label="Previous enlarged screen">← Previous</button><span aria-live="polite"></span><button type="button" data-next aria-label="Next enlarged screen">Next →</button><button type="button" data-zoom aria-pressed="false">Zoom in</button></footer>';
        document.body.appendChild(dialog);
        var image = dialog.querySelector('img'), title = dialog.querySelector('h2');
        var previous = dialog.querySelector('[data-prev]'), next = dialog.querySelector('[data-next]');
        var zoom = dialog.querySelector('[data-zoom]'), index = 0;
        function render() {
            var slide = slides[index], source = slide.querySelector('img');
            image.src = source.currentSrc || source.src; image.alt = source.alt;
            title.textContent = slide.dataset.title || source.alt;
            dialog.querySelector('footer span').textContent = (index + 1) + ' / ' + slides.length;
            previous.disabled = index === 0; next.disabled = index === slides.length - 1;
            dialog.classList.remove('is-zoomed'); zoom.textContent = 'Zoom in'; zoom.setAttribute('aria-pressed', 'false');
            dialog.querySelector('.lp-screen-image').scrollTo(0, 0);
        }
        open.addEventListener('click', function () {
            index = Math.max(0, Math.min(slides.length - 1, Math.round(viewport.scrollLeft / (viewport.clientWidth || 1))));
            render(); dialog.showModal();
        });
        dialog.querySelector('[data-close]').addEventListener('click', function () { dialog.close(); });
        dialog.addEventListener('close', function () { open.focus({preventScroll:true}); });
        previous.addEventListener('click', function () { if (index > 0) { index--; render(); } });
        next.addEventListener('click', function () { if (index < slides.length - 1) { index++; render(); } });
        zoom.addEventListener('click', function () {
            var enlarged = dialog.classList.toggle('is-zoomed');
            zoom.setAttribute('aria-pressed', String(enlarged)); zoom.textContent = enlarged ? 'Fit screen' : 'Zoom in';
        });
        dialog.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowLeft' && index > 0) { event.preventDefault(); index--; render(); }
            if (event.key === 'ArrowRight' && index < slides.length - 1) { event.preventDefault(); index++; render(); }
        });
    });
});
