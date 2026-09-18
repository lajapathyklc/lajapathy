/**

/**
 * 2. ElectricBorder Class
 * This class encapsulates the creation and management of the electric border effect.
 */
class ElectricCardBorder {
    /**
     * @param {HTMLElement} hostElement - The element to wrap the border around.
     * @param {Object} props - Component properties.
     */
    constructor(hostElement, props = {}) {
        this.hostElement = hostElement;
        this.props = {
            color: '#FF9800',
            speed: 1,
            chaos: 1,
            thickness: 2,
            ...props
        };

        this.rootRef = null;
        this.svgRef = null;
        this.strokeRef = null;
        this.filterId = `turbulent-displace-${Math.random().toString(36).substring(2, 9)}`; // Simple unique ID
        this.resizeObserver = null;

        this.init();
    }

    /**
     * Generates the SVG content for the border filter.
     * @returns {string} The SVG markup.
     */
    createSVG() {
        const { filterId } = this;
        return `
            <svg class="eb-svg" aria-hidden="true" focusable="false">
                <defs>
                    <filter id="${filterId}" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1_v" seed="1" />
                        <feOffset in="noise1_v" dx="0" dy="0" result="offsetNoise1">
                            <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
                        </feOffset>

                        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2_v" seed="1" />
                        <feOffset in="noise2_v" dx="0" dy="0" result="offsetNoise2">
                            <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
                        </feOffset>
                        
                        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1_h" seed="2" />
                        <feOffset in="noise1_h" dx="0" dy="0" result="offsetNoise3">
                            <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
                        </feOffset>

                        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2_h" seed="2" />
                        <feOffset in="noise2_h" dx="0" dy="0" result="offsetNoise4">
                            <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
                        </feOffset>
                        
                        <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" operator="arithmetic" k1="1" k2="1" k3="0" k4="0" />
                        <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" operator="arithmetic" k1="1" k2="1" k3="0" k4="0" />
                        <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
                        
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="combinedNoise"
                            scale="30"
                            xChannelSelector="R"
                            yChannelSelector="B"
                        />
                    </filter>
                </defs>
            </svg>
        `;
    }

    /**
     * Initializes the component by creating the DOM and setting up observers.
     */
    init() {
        // 1. Create the root border element and move the host content inside
        this.rootRef = document.createElement('div');
        this.rootRef.className = `electric-border ${this.hostElement.className ?? ''}`;

        // Move children from hostElement to the new content wrapper
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'eb-content';
        while (this.hostElement.firstChild) {
            contentWrapper.appendChild(this.hostElement.firstChild);
        }

        // 2. Create the layers and SVG
        this.rootRef.innerHTML = `
            <div class="eb-layers">
                <div class="eb-stroke"></div>
                <div class="eb-glow-1"></div>
                <div class="eb-glow-2"></div>
                <div class="eb-background-glow"></div>
            </div>
            ${this.createSVG()}
        `;

        // 3. Append the content wrapper and insert into the DOM
        this.rootRef.appendChild(contentWrapper);
        this.hostElement.replaceWith(this.rootRef);

        // 4. Get references for dynamic updates
        this.svgRef = this.rootRef.querySelector('.eb-svg');
        this.strokeRef = this.rootRef.querySelector('.eb-stroke');

        // 5. Apply initial props and styles
        this.updateStyles();
        this.updateAnim();

        // 6. Set up hover event listeners
        this.setupHoverEvents();

        // 7. Set up ResizeObserver for automatic animation adjustments (like useLayoutEffect)
        this.resizeObserver = new ResizeObserver(() => this.updateAnim());
        this.resizeObserver.observe(this.rootRef);
    }

    /**
     * Updates CSS variables based on props.
     */
    updateStyles() {
        this.rootRef.style.setProperty('--electric-border-color', this.props.color);
        this.rootRef.style.setProperty('--eb-border-width', `${this.props.thickness}px`);
    }

    /**
     * Sets up hover event listeners to control animation state.
     */
    setupHoverEvents() {
        let animationElements = [];

        this.rootRef.addEventListener('mouseenter', () => {
            // Apply the electric filter on hover
            if (this.strokeRef) {
                this.strokeRef.style.filter = `url(#${this.filterId})`;
            }

            // Start/resume animations on hover
            if (this.svgRef) {
                animationElements = this.svgRef.querySelectorAll('animate');
                animationElements.forEach(anim => {
                    if (typeof anim.beginElement === 'function') {
                        try {
                            anim.beginElement();
                        } catch (e) {
                            // Silently handle animation start errors
                        }
                    }
                });
            }
        });

        this.rootRef.addEventListener('mouseleave', () => {
            // Remove the electric filter when not hovering
            if (this.strokeRef) {
                this.strokeRef.style.filter = 'none';
            }

            // Pause animations when not hovering (optional)
            // You can uncomment the lines below if you want to pause animations on mouse leave
            // animationElements.forEach(anim => {
            //     if (typeof anim.endElement === 'function') {
            //         try {
            //             anim.endElement();
            //         } catch (e) {
            //             // Silently handle animation end errors
            //         }
            //     }
            // });
        });
    }

    /**
     * Updates SVG animation parameters based on element size and props (speed, chaos).
     */
    updateAnim = () => {
        if (!this.svgRef || !this.rootRef) return;

        const { speed, chaos, thickness } = this.props;

        // Don't apply filter automatically - it will be applied on hover
        // The filter setup is handled in setupHoverEvents()

        // 1. Calculate dimensions
        const width = Math.max(1, Math.round(this.rootRef.clientWidth || 0));
        const height = Math.max(1, Math.round(this.rootRef.clientHeight || 0));

        // 2. Update animate values (vertical displacement)
        const dyAnims = Array.from(this.svgRef.querySelectorAll('feOffset > animate[attributeName="dy"]'));
        if (dyAnims.length >= 2) {
            dyAnims[0].setAttribute('values', `${height}; 0`);
            dyAnims[1].setAttribute('values', `0; -${height}`);
        }

        // 3. Update animate values (horizontal displacement)
        const dxAnims = Array.from(this.svgRef.querySelectorAll('feOffset > animate[attributeName="dx"]'));
        if (dxAnims.length >= 2) {
            dxAnims[0].setAttribute('values', `${width}; 0`);
            dxAnims[1].setAttribute('values', `0; -${width}`);
        }

        // 4. Update animation duration (speed prop)
        const baseDur = 6;
        const dur = Math.max(0.001, baseDur / (speed || 1));
        [...dyAnims, ...dxAnims].forEach(a => {
            a.setAttribute('dur', `${dur}s`);
            // Restart the animation after attributes change (only for SMIL animations)
            if (typeof a.beginElement === 'function') {
                try {
                    a.beginElement();
                } catch (e) {
                    // console.warn('ElectricBorder: beginElement failed:', e);
                }
            }
        });

        // 5. Update displacement scale (chaos prop)
        const disp = this.svgRef.querySelector('feDisplacementMap');
        if (disp) disp.setAttribute('scale', String(30 * (chaos || 1)));

        // 6. Update filter area (to prevent clipping when displacement occurs)
        const filterEl = this.svgRef.querySelector(`#${this.filterId}`);
        if (filterEl) {
            filterEl.setAttribute('x', '-200%');
            filterEl.setAttribute('y', '-200%');
            filterEl.setAttribute('width', '500%');
            filterEl.setAttribute('height', '500%');
        }
    };

    /**
     * Cleanup function (analogous to the return of useEffect/useLayoutEffect).
     */
    destroy() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        // In a real application, you might want to replace the rootRef with the original content
        // For this example, we'll leave it as is.
    }
}

/**
 * 3. Card Data and Generation Logic
 */
const cardData = [
    {
        icon: "fa-light fa-diagram-project",
        title: "Product Strategy<br>& Direction",
        description: "Define product strategy that aligns business goals with scalable system design",
        color: '#FF9800' // Reddish
    },
    {
        icon: "fa-light fa-sitemap",
        title: "Enterprise Platform<br>Design",
        description: "Design scalable platform experiences for complex enterprise workflows",
        color: "#FF9800"
    },
    {
        icon: "fa-light fa-route",
        title: "End-to-End Product<br>Delivery",
        description: "Lead design from discovery to delivery across product lifecycle",
        color: '#FF9800' // Bluish (Original)
    },
    {
        icon: "fa-light fa-layer-group",
        title: "Scalable Design<br>Systems",
        description: "Build scalable design systems that enable consistency and accelerate product delivery",
        color: '#FF9800' // Bluish (Original)
    },
    {
        icon: "fa-light fa-compass",
        title: "Data-Informed<br>Decision Making",
        description: "Use data and experimentation to drive product decisions and measure impact",
        color: '#FF9800' // Greenish
    },
    {
        icon: "fa-light fa-people-arrows",
        title: "Cross-functional<br>Leadership",
        description: "Drive alignment across product, design, and engineering to deliver cohesive outcomes",
        color: '#FF9800' // Bluish (Original)
    },
];

const cardContainer = document.getElementById('card-container');
console.log(cardContainer)
cardData.forEach((data, index) => {
    // create a col div
    const cardCol = document.createElement('div');
    cardCol.className = 'col-lg-4 col-md-4 col-sm-6';

    // 1. Create the base element that will be enhanced
    const cardEl = document.createElement('div');
    cardEl.className = 'service-card-v1 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4 tmp-link-animation'; // Temporary class to get unique styling outside of electric-border

    // 2. Create the content elements
    cardEl.innerHTML = `
        <div class="service-card-icon"><i class=" ${data.icon}"></i></div>
        <h3 class="service-title">${data.title}</h3>
        <p class="service-para">${data.description}</p>
    `;
    console.log(cardContainer)

    cardCol.appendChild(cardEl)
    console.log(cardEl)
    // 3. Append to the container
    cardContainer.appendChild(cardCol);

    // 4. Initialize the ElectricBorder wrapper
    new ElectricCardBorder(cardEl, {
        color: data.color,
        speed: 0.5, // Random speed for visual interest
        chaos: 0.4, // Random chaos
        thickness: 2
    });
});