import { PORTFOLIO_CATEGORIES as categories } from './lp-portfolio-data.js';

/* One renderer for Home and the full library. Only the library owns URL history. */
for (const section of document.querySelectorAll('.selected-work')) {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const tabs = [...section.querySelectorAll('[role="tab"]')];
    const nav = section.querySelector('[role="tablist"]');
    const panels = new Map();
    const historyEnabled = section.dataset.workHistory === 'true';
    let active = 'fintech';
    let request = 0;
    let revealObserver;
    let cancelWait = () => {};

    function waitForMotion(duration) {
        return new Promise(resolve => {
            const timer = window.setTimeout(() => { cancelWait = () => {}; resolve(true); }, duration);
            cancelWait = () => { window.clearTimeout(timer); resolve(false); };
        });
    }

    function element(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text) node.textContent = text;
        return node;
    }

    // Keep devices sharp; only the baked reflection tail gets a separate fade.
    const reflectedProjects = new Set(['ewallet', 'zappay', 'unipay', 'smartfin', 'coverride', 'norton', 'homenest', 'zmeet', 'taskee', 'gocart', 'quickcart', 'mydoc', 'dronline']);
    function prepareProduct(product, slug) {
        const image = product.querySelector('img');
        const frame = element('div', 'work-art-frame' + (reflectedProjects.has(slug) ? ' work-art-frame--reflected' : ''));
        frame.style.setProperty('--art-ratio', Number(image.getAttribute('width')) / Number(image.getAttribute('height')));
        image.classList.add('work-art-primary');
        frame.append(image);
        if (reflectedProjects.has(slug)) {
            const reflection = image.cloneNode();
            reflection.className = 'work-art-reflection';
            reflection.alt = '';
            reflection.setAttribute('aria-hidden', 'true');
            frame.append(reflection);
        }
        product.append(frame);
    }

    function createCard(project, key, index) {
        const fintech = key === 'fintech';
        // The full library gives Amazon the flagship slot using the same variants.
        const layout = historyEnabled && key === 'ecommerce'
            ? (index === 0 ? 'featured' : 'standard') : project.layout;
        const card = element('article', 'work-project work-card--' + layout + (fintech ? ' work-project--' + project.slug : ''));
        card.style.setProperty('--filter-order', index);
        if (fintech) card.setAttribute('data-work-reveal', '');
        else {
            card.dataset.project = project.slug;
            card.style.setProperty('--world', project.world.join(','));
            // CSS custom URLs resolve against the document when supplied inline.
            card.style.setProperty('--world-art', 'url("' + new URL('assets/images/hero-cinematic/case-' + project.slug + '.webp', document.baseURI).href + '")');
            card.style.setProperty('--world-grade', 'sepia(1) saturate(' + project.saturation + ') hue-rotate(' + project.hue + 'deg) brightness(2.6)');
            card.style.setProperty('--work-stagger', Math.min(index * 45, 180) + 'ms');
        }
        const category = tabs.find(tab => tab.dataset.workCategory === key).textContent.replace(/\s*·\s*\d+\s*$/, '').trim();
        const link = element('a', 'work-project-link');
        link.href = project.url;
        link.setAttribute('aria-label', 'View ' + project.name + ' case study');
        const world = element('div', 'work-world');
        world.setAttribute('aria-hidden', 'true');
        const copy = element('div', 'work-project-copy');
        copy.append(element('p', 'work-category', project.label || category), element('h3', '', project.name), element('p', 'work-story', project.story));
        const product = element('div', 'work-product');
        const image = element('img');
        image.src = project.image;
        image.width = project.width;
        image.height = project.height;
        image.loading = !fintech && index === 0 ? 'eager' : 'lazy';
        image.decoding = 'async';
        image.alt = project.alt;
        product.append(image);
        prepareProduct(product, project.slug);
        const foot = element('div', 'work-project-foot');
        const outcome = element('div', 'work-impact' + (project.metric ? (project.metric.includes(' min') ? ' work-impact--duration' : '') : ' work-impact--qualitative'));
        if (project.metric) {
            const label = element('span', '', project.outcome);
            const metric = element('strong', '', project.metric);
            // Preserve the approved Fintech fallback's DOM as well as its output.
            outcome.append(...(fintech ? [metric, label] : [label, metric]));
        } else outcome.append(element('strong', '', project.outcome));
        const cue = element('span', 'work-link-cue');
        cue.setAttribute('aria-hidden', 'true');
        if (fintech) {
            if (index === 0) cue.append(document.createTextNode('View case study '));
            cue.append(element('span', '', '↗'));
        } else cue.append(element('span', 'work-link-text', 'View case study'), element('span', 'work-link-arrow', '↗'));
        foot.append(outcome, cue);
        link.append(world, copy, product, foot);
        card.append(link);
        return card;
    }

    function createPanel(key) {
        const panel = section.querySelector('#work-panel-' + key);
        panel.className = 'selected-work-grid' + (key === 'fintech' ? '' : ' work-category-grid work-category-grid--' + key);
        const cards = document.createDocumentFragment();
        categories[key].forEach((project, index) => cards.append(createCard(project, key, index)));
        panel.replaceChildren(cards);
        panels.set(key, panel);
        return panel;
    }

    function categoryFromURL() {
        const key = new URL(window.location.href).searchParams.get('category');
        return tabs.some(tab => tab.dataset.workCategory === key) ? key : 'fintech';
    }

    function updateURL(key) {
        const url = new URL(window.location.href);
        if (url.searchParams.get('category') === key) return;
        url.searchParams.set('category', key);
        window.history.pushState(null, '', url);
    }

    async function selectCategory(key, { updateHistory = historyEnabled, animate = true } = {}) {
        if (updateHistory) updateURL(key);
        if (key === active && !section.hasAttribute('aria-busy')) return;
        const version = ++request;
        cancelWait();
        const outgoing = panels.get(active);
        const incoming = panels.get(key) || createPanel(key);
        const animated = animate && !motion.matches;
        const mobile = window.matchMedia('(max-width:575px)').matches;
        const leavingDuration = mobile ? 100 : 140;
        const enteringDuration = mobile ? 190 : 240;
        const staggerLimit = mobile ? 75 : 90;
        const staggerStep = mobile ? 25 : 35;
        const enteringTotal = enteringDuration + Math.min((categories[key].length - 1) * staggerStep, staggerLimit);
        panels.forEach(panel => {
            panel.classList.remove('work-category-leaving', 'work-category-entering');
            panel.inert = animated;
            // Category entry owns the outer card; the original scroll reveal must
            // not restart when returning to a cached Fintech panel.
            panel.querySelectorAll('[data-work-reveal]').forEach(card => {
                if (revealObserver) revealObserver.unobserve(card);
                card.classList.remove('work-revealed');
            });
        });
        section.setAttribute('aria-busy', 'true');
        tabs.forEach(tab => {
            const selected = tab.dataset.workCategory === key;
            tab.setAttribute('aria-selected', String(selected));
            tab.tabIndex = selected ? 0 : -1;
        });
        // Start the existing lead-image decode during exit rather than holding
        // tab feedback behind an 800 ms network wait. Panels and assets stay cached.
        const firstImage = incoming.querySelector('img');
        if (firstImage && !firstImage.complete) {
            firstImage.loading = 'eager';
            firstImage.decode().catch(() => {});
        }
        if (animated) {
            outgoing.classList.add('work-category-leaving');
            if (!await waitForMotion(leavingDuration) || version !== request) return;
        }
        panels.forEach(panel => { panel.hidden = panel !== incoming; });
        outgoing.classList.remove('work-category-leaving');
        active = key;
        if (animated) {
            incoming.classList.add('work-category-entering');
            if (!await waitForMotion(enteringTotal) || version !== request) return;
        }
        incoming.classList.remove('work-category-entering');
        panels.forEach(panel => { panel.inert = false; });
        section.removeAttribute('aria-busy');
    }

    function finishPendingCategory() {
        if (!section.hasAttribute('aria-busy')) return;
        const selected = tabs.find(tab => tab.getAttribute('aria-selected') === 'true');
        selectCategory(selected.dataset.workCategory, { updateHistory: false, animate: false });
    }
    window.addEventListener('pageshow', finishPendingCategory);
    motion.addEventListener('change', finishPendingCategory);

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => selectCategory(tab.dataset.workCategory));
        tab.addEventListener('keydown', event => {
            let next;
            if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
            if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
            if (event.key === 'Home') next = 0;
            if (event.key === 'End') next = tabs.length - 1;
            if (next === undefined) return;
            event.preventDefault();
            tabs[next].focus({ preventScroll: true });
            const target = tabs[next].getBoundingClientRect();
            const viewport = nav.getBoundingClientRect();
            if (target.left < viewport.left) nav.scrollLeft -= viewport.left - target.left;
            if (target.right > viewport.right) nav.scrollLeft += target.right - viewport.right;
            selectCategory(tabs[next].dataset.workCategory);
        });
    });
    tabs.slice(1).forEach(tab => {
        const panel = element('div');
        panel.id = tab.getAttribute('aria-controls');
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', tab.id);
        panel.hidden = true;
        const end = section.querySelector('.selected-work-end');
        if (end) end.before(panel);
        else section.querySelector('.selected-work-container').append(panel);
    });
    createPanel('fintech');
    nav.hidden = false;

    if (historyEnabled) {
        selectCategory(categoryFromURL(), { updateHistory: false, animate: false });
        window.addEventListener('popstate', () => selectCategory(categoryFromURL(), { updateHistory: false }));
    }

    if ('IntersectionObserver' in window) {
        revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                if (!motion.matches && !section.hasAttribute('aria-busy') && active === 'fintech') entry.target.classList.add('work-revealed');
                revealObserver.unobserve(entry.target);
            });
        }, { threshold: 0.12 });
        section.querySelectorAll('[data-work-reveal]').forEach(node => revealObserver.observe(node));
    }
}
