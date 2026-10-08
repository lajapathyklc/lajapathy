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
        const outgoing = panels.get(active);
        const incoming = panels.get(key) || createPanel(key);
        section.setAttribute('aria-busy', 'true');
        tabs.forEach(tab => {
            const selected = tab.dataset.workCategory === key;
            tab.setAttribute('aria-selected', String(selected));
            tab.tabIndex = selected ? 0 : -1;
        });
        // Inactive panels have no images until first selected. Decode the lead art
        // before revealing a panel, with a bounded wait for a slow connection.
        const firstImage = incoming.querySelector('img');
        if (firstImage && !firstImage.complete) {
            firstImage.loading = 'eager';
            await Promise.race([firstImage.decode().catch(() => {}), new Promise(resolve => setTimeout(resolve, 800))]);
        }
        if (version !== request) return;
        if (animate && !motion.matches) {
            outgoing.classList.add('work-category-leaving');
            await new Promise(resolve => setTimeout(resolve, 180));
        }
        if (version !== request) return;
        panels.forEach(panel => {
            panel.hidden = panel !== incoming;
            panel.classList.remove('work-category-leaving', 'work-category-entering');
        });
        active = key;
        if (animate && !motion.matches) incoming.classList.add('work-category-entering');
        section.removeAttribute('aria-busy');
    }

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
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                if (!motion.matches) entry.target.classList.add('work-revealed');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12 });
        section.querySelectorAll('[data-work-reveal]').forEach(node => observer.observe(node));
    }
}
