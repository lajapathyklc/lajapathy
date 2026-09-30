document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.interactive-phone-gallery').forEach(function (gallery) {
        var viewport = gallery.querySelector('.ewallet-phone-screen-viewport');
        var track = gallery.querySelector('.ewallet-phone-screen-track');
        var slides = track ? Array.from(track.querySelectorAll('.ewallet-phone-shot')) : [];
        var previousButton = gallery.querySelector('[data-gallery-direction="-1"]');
        var nextButton = gallery.querySelector('[data-gallery-direction="1"]');
        var count = gallery.querySelector('.ewallet-gallery-count');
        var title = gallery.querySelector('.ewallet-screen-title');
        var description = gallery.querySelector('.ewallet-screen-description');
        var previousPreview = gallery.querySelector('.ewallet-side-preview--previous');
        var nextPreview = gallery.querySelector('.ewallet-side-preview--next');
        var phone = viewport ? viewport.closest('.ewallet-phone-device') : null;
        var previousScrollLeft = viewport ? viewport.scrollLeft : 0;
        var wheelLocked = false;
        var wheelUnlockTimer;

        if (!viewport || !track || !slides.length || !previousButton || !nextButton || !count || !title || !description || !previousPreview || !nextPreview) return;

        function getCurrentIndex() {
            if (!viewport.clientWidth) return 0;
            return Math.max(0, Math.min(slides.length - 1, Math.round(viewport.scrollLeft / viewport.clientWidth)));
        }

        function scrollToIndex(index) {
            var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            viewport.scrollTo({ left: index * viewport.clientWidth, behavior: reducedMotion ? 'auto' : 'smooth' });
        }

        function updatePreview(preview, index) {
            if (index < 0 || index >= slides.length) {
                preview.classList.add('is-hidden');
                return;
            }
            var source = slides[index].querySelector('img');
            var active = preview.querySelector('img.is-active');
            var incoming = Array.from(preview.querySelectorAll('img')).find(function (image) { return image !== active; });
            var target = source.currentSrc || source.src;
            preview.classList.remove('is-hidden');
            if (!incoming || (active && active.src === target)) return;
            incoming.dataset.pendingSource = target;
            incoming.onload = function () {
                if (incoming.dataset.pendingSource !== target) return;
                incoming.classList.add('is-active');
                if (active) active.classList.remove('is-active');
            };
            incoming.src = target;
            if (incoming.complete && incoming.naturalWidth) incoming.onload();
        }

        function updateGallery() {
            var index = getCurrentIndex();
            var slide = slides[index];
            var scrollLeft = viewport.scrollLeft;
            var position = viewport.clientWidth ? scrollLeft / viewport.clientWidth : 0;
            var progress = Math.sin(Math.PI * (position - Math.floor(position)));
            var direction = scrollLeft >= previousScrollLeft ? 1 : -1;
            var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (phone) {
                phone.style.setProperty('--ew-phone-turn', reducedMotion ? '0deg' : (direction * 3.5 * progress) + 'deg');
                phone.style.setProperty('--ew-phone-lift', reducedMotion ? '0px' : (-8 * progress) + 'px');
            }
            previousScrollLeft = scrollLeft;
            updatePreview(previousPreview, index - 1);
            updatePreview(nextPreview, index + 1);
            previousButton.disabled = index === 0;
            nextButton.disabled = index === slides.length - 1;
            count.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
            if (title.dataset.activeTitle !== slide.dataset.title) {
                title.dataset.activeTitle = slide.dataset.title;
                title.textContent = slide.dataset.title;
                title.classList.remove('is-line-animating');
                void title.offsetWidth;
                title.classList.add('is-line-animating');
            }
            description.textContent = slide.dataset.narrative;
            viewport.setAttribute('aria-label', 'App screen ' + (index + 1) + ' of ' + slides.length + ': ' + slide.dataset.title);
        }

        previousButton.addEventListener('click', function () { scrollToIndex(Math.max(0, getCurrentIndex() - 1)); });
        nextButton.addEventListener('click', function () { scrollToIndex(Math.min(slides.length - 1, getCurrentIndex() + 1)); });
        viewport.addEventListener('wheel', function (event) {
            if (Math.abs(event.deltaY) <= Math.abs(event.deltaX) || !event.deltaY) return;
            var direction = event.deltaY > 0 ? 1 : -1;
            var targetIndex = getCurrentIndex() + direction;
            if (targetIndex < 0 || targetIndex >= slides.length) return;
            event.preventDefault();
            window.clearTimeout(wheelUnlockTimer);
            if (!wheelLocked) {
                wheelLocked = true;
                scrollToIndex(targetIndex);
            }
            wheelUnlockTimer = window.setTimeout(function () { wheelLocked = false; }, 520);
        }, { passive: false });
        viewport.addEventListener('scroll', updateGallery, { passive: true });
        viewport.addEventListener('keydown', function (event) {
            if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
            event.preventDefault();
            scrollToIndex(Math.max(0, Math.min(slides.length - 1, getCurrentIndex() + (event.key === 'ArrowRight' ? 1 : -1))));
        });
        window.addEventListener('resize', updateGallery);
        updateGallery();
    });
});