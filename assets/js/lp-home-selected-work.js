/* Taxonomy and qualitative outcomes verified against Casestudies.html.
   Existing Fintech markup stays intact; other panels are created on first visit. */
(() => {
    const section = document.querySelector('.home-selected-work');
    if (!section) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const categories = {
  "enterprise": [
    {
      "slug": "norton",
      "name": "Norton Security",
      "story": "Security & Monitoring Platform",
      "outcome": "Real-time threat monitoring and faster security response",
      "image": "assets/images/latest-portfolio/norton-home-product.webp",
      "width": 1448,
      "height": 1086,
      "world": [
        42,
        93,
        174
      ],
      "hue": 175,
      "saturation": 2.2
    },
    {
      "slug": "homenest",
      "name": "HomeNest",
      "story": "Smart Living & Home Automation",
      "outcome": "Simplified smart-home control across multiple devices",
      "image": "assets/images/latest-portfolio/homenest-home-product.webp",
      "width": 1122,
      "height": 1402,
      "world": [
        162,
        120,
        68
      ],
      "hue": 4,
      "saturation": 1.4
    },
    {
      "slug": "zmeet",
      "name": "Zmeet",
      "story": "Meetings, Notes & Follow-Ups",
      "outcome": "Streamlined meeting coordination and team collaboration",
      "image": "assets/images/latest-portfolio/zmeet-home-product.webp",
      "width": 1448,
      "height": 1086,
      "world": [
        114,
        83,
        178
      ],
      "hue": 207,
      "saturation": 1.6
    },
    {
      "slug": "eater",
      "name": "Eater",
      "story": "Food Discovery & Ordering",
      "outcome": "Faster food discovery and frictionless ordering",
      "image": "assets/images/latest-portfolio/eater-home-product.webp",
      "width": 1536,
      "height": 1024,
      "world": [
        169,
        74,
        46
      ],
      "hue": 335,
      "saturation": 1.6
    }
  ],
  "saas": [
    {
      "slug": "fluxcrm",
      "name": "FluxCRM",
      "story": "Clinic Operations Dashboard",
      "outcome": "Appointment time in six-month pilot",
      "image": "assets/images/bg/fluxcrm%20hero.png",
      "width": 1448,
      "height": 1086,
      "world": [
        71,
        139,
        169
      ],
      "hue": 148,
      "saturation": 1.4,
      "metric": "↓ 69%"
    },
    {
      "slug": "taskee",
      "name": "Taskee",
      "story": "Team Tasks & Workflows",
      "outcome": "Streamlined task execution and cross-team collaboration",
      "image": "assets/images/latest-portfolio/taskee-home-product.webp",
      "width": 1448,
      "height": 1086,
      "world": [
        40,
        137,
        115
      ],
      "hue": 111,
      "saturation": 1.6
    },
    {
      "slug": "staffee",
      "name": "Staffee",
      "story": "Workforce Insights",
      "outcome": "Faster workforce insights and data-driven HR decisions",
      "image": "assets/images/latest-portfolio/staffee-home-product.webp",
      "width": 1448,
      "height": 1086,
      "world": [
        106,
        98,
        177
      ],
      "hue": 198,
      "saturation": 1.4
    }
  ],
  "ecommerce": [
    {
      "slug": "amazon",
      "name": "Amazon",
      "story": "Product Discovery & Checkout",
      "outcome": "Improved product discovery and simplified checkout journey",
      "image": "assets/images/latest-portfolio/amazon-home-product.webp",
      "width": 1536,
      "height": 1024,
      "world": [
        164,
        119,
        54
      ],
      "hue": 0,
      "saturation": 1.6
    },
    {
      "slug": "eddiebauer",
      "name": "Eddie Bauer",
      "story": "Confident Outdoor Shopping",
      "outcome": "Improved product discovery and purchase confidence",
      "image": "assets/images/latest-portfolio/eddiebauer-home-product.webp",
      "width": 1536,
      "height": 1024,
      "world": [
        129,
        89,
        61
      ],
      "hue": 345,
      "saturation": 1
    },
    {
      "slug": "lider",
      "name": "Líder",
      "story": "Checkout & Purchase Flow",
      "outcome": "Optimized checkout flow and improved shopping efficiency",
      "image": "assets/images/latest-portfolio/lider-home-product.webp",
      "width": 1536,
      "height": 1024,
      "world": [
        54,
        102,
        155
      ],
      "hue": 175,
      "saturation": 1.7
    },
    {
      "slug": "slurrpfarm",
      "name": "Slurrpfarm",
      "story": "D2C Commerce Redesign",
      "outcome": "Increased purchase confidence for health-focused products",
      "image": "assets/images/latest-portfolio/slurrpfarm-home-product.webp",
      "width": 1448,
      "height": 1086,
      "world": [
        92,
        126,
        73
      ],
      "hue": 76,
      "saturation": 1
    },
    {
      "slug": "gocart",
      "name": "GoCart",
      "story": "A Scalable Commerce Experience",
      "outcome": "Faster shopping and frictionless checkout experience",
      "image": "assets/images/latest-portfolio/gocart-home-product.webp",
      "width": 1122,
      "height": 1402,
      "world": [
        46,
        136,
        168
      ],
      "hue": 156,
      "saturation": 1.6
    },
    {
      "slug": "dailymart",
      "name": "DailyMart",
      "story": "Grocery Shopping & Delivery",
      "outcome": "Reduced grocery order time",
      "image": "assets/images/latest-portfolio/dailymart-home-product.webp",
      "width": 1122,
      "height": 1402,
      "world": [
        85,
        140,
        66
      ],
      "hue": 64,
      "saturation": 1.5,
      "metric": "15 → 5 min"
    },
    {
      "slug": "quickcart",
      "name": "Quickcart",
      "story": "Instant Cart, Instant Happiness",
      "outcome": "Simplified everyday purchases through quick-commerce flows",
      "image": "assets/images/latest-portfolio/quickcart-home-product.webp",
      "width": 1122,
      "height": 1402,
      "world": [
        157,
        100,
        54
      ],
      "hue": 350,
      "saturation": 1.8
    }
  ],
  "healthcare": [
    {
      "slug": "mydoc",
      "name": "MyDoc",
      "story": "Find & Book Specialist Care",
      "outcome": "Faster doctor discovery and seamless appointment booking",
      "image": "assets/images/latest-portfolio/mydoc-home-product.webp",
      "width": 1122,
      "height": 1402,
      "world": [
        75,
        144,
        178
      ],
      "hue": 153,
      "saturation": 1.2
    },
    {
      "slug": "dronline",
      "name": "DrOnline",
      "story": "Care at Your Fingertips",
      "outcome": "Simplified virtual consultations and care scheduling",
      "image": "assets/images/latest-portfolio/dronline-home-product.webp",
      "width": 1122,
      "height": 1402,
      "world": [
        60,
        149,
        142
      ],
      "hue": 125,
      "saturation": 1.2
    }
  ]
};
    const tabs = [...section.querySelectorAll('[role="tab"]')];
    const nav = section.querySelector('[role="tablist"]');
    const fintech = section.querySelector('#work-panel-fintech');
    const panels = new Map([['fintech', fintech]]);
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
    fintech.querySelectorAll('article').forEach(card => {
        const slug = card.querySelector('a').getAttribute('href').replace('.html', '');
        prepareProduct(card.querySelector('.work-product'), slug);
    });

    function createPanel(key) {
        const panel = section.querySelector('#work-panel-' + key);
        panel.className = 'selected-work-grid work-category-grid work-category-grid--' + key;
        panel.id = 'work-panel-' + key;
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', 'work-tab-' + key);
        panel.hidden = true;
        const category = tabs.find(tab => tab.dataset.workCategory === key).textContent.replace(/\s*·\s*\d+\s*$/, '').trim();
        categories[key].forEach((project, index) => {
            const size = key === 'saas' && index === 0 ? 'featured' : key === 'ecommerce' && index >= 4 ? 'standard' : 'large';
            const card = element('article', 'work-project work-card--' + size);
            card.dataset.project = project.slug;
            card.style.setProperty('--world', project.world.join(','));
            // CSS custom URLs resolve against the document when supplied inline.
            card.style.setProperty('--world-art', 'url("' + new URL('assets/images/hero-cinematic/case-' + project.slug + '.webp', document.baseURI).href + '")');
            card.style.setProperty('--world-grade', 'sepia(1) saturate(' + project.saturation + ') hue-rotate(' + project.hue + 'deg) brightness(2.6)');
            card.style.setProperty('--work-stagger', Math.min(index * 45, 180) + 'ms');
            const link = element('a', 'work-project-link');
            link.href = project.slug + '.html';
            link.setAttribute('aria-label', 'View ' + project.name + ' case study');
            const world = element('div', 'work-world');
            world.setAttribute('aria-hidden', 'true');
            const copy = element('div', 'work-project-copy');
            copy.append(element('p', 'work-category', category), element('h3', '', project.name), element('p', 'work-story', project.story));
            const product = element('div', 'work-product');
            const image = element('img');
            image.src = project.image;
            image.width = project.width;
            image.height = project.height;
            image.loading = index === 0 ? 'eager' : 'lazy';
            image.decoding = 'async';
            image.alt = project.name + ' product interface';
            product.append(image);
            prepareProduct(product, project.slug);
            const foot = element('div', 'work-project-foot');
            const outcome = element('div', 'work-impact' + (project.metric ? (project.metric.includes(' min') ? ' work-impact--duration' : '') : ' work-impact--qualitative'));
            if (project.metric) outcome.append(element('span', '', project.outcome), element('strong', '', project.metric));
            else outcome.append(element('strong', '', project.outcome));
            const cue = element('span', 'work-link-cue');
            cue.setAttribute('aria-hidden', 'true');
            cue.append(element('span', 'work-link-text', 'View case study'), element('span', 'work-link-arrow', '↗'));
            foot.append(outcome, cue);
            link.append(world, copy, product, foot);
            card.append(link);
            panel.append(card);
        });
        section.querySelector('.selected-work-end').before(panel);
        panels.set(key, panel);
        return panel;
    }

    async function selectCategory(key) {
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
        // Decode the selected category's first artwork before revealing it.
        const firstImage = incoming.querySelector('img');
        if (firstImage && !firstImage.complete) {
            firstImage.loading = 'eager';
            await Promise.race([firstImage.decode().catch(() => {}), new Promise(resolve => setTimeout(resolve, 800))]);
        }
        if (version !== request) return;
        if (!motion.matches) {
            outgoing.classList.add('work-category-leaving');
            await new Promise(resolve => setTimeout(resolve, 180));
        }
        if (version !== request) return;
        panels.forEach(panel => {
            panel.hidden = panel !== incoming;
            panel.classList.remove('work-category-leaving', 'work-category-entering');
        });
        active = key;
        if (!motion.matches) incoming.classList.add('work-category-entering');
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
        section.querySelector('.selected-work-end').before(panel);
    });
    nav.hidden = false;

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
})();
