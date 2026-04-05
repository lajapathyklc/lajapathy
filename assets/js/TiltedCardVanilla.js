// TiltedCardVanilla.js

/**
 * Class to create a Tilted Card effect using Vanilla JavaScript and CSS variables.
 * @param {HTMLElement} element The root container element for the card.
 */
class TiltedCardVanilla {
    constructor(element) {
        this.element = element;
        this.ref = element;

        // Get properties from data attributes, falling back to defaults
        this.imageSrc = this.ref.dataset.imageSrc;
        this.altText = this.ref.dataset.altText || 'Tilted card image';
        this.captionText = this.ref.dataset.captionText || '';
        this.containerHeight = this.ref.dataset.containerHeight || '300px';
        this.containerWidth = this.ref.dataset.containerWidth || '300px';
        this.imageHeight = this.ref.dataset.imageHeight || this.containerHeight;
        this.imageWidth = this.ref.dataset.imageWidth || this.containerWidth;
        this.scaleOnHover = parseFloat(this.ref.dataset.scaleOnHover) || 1.1;
        this.rotateAmplitude = parseFloat(this.ref.dataset.rotateAmplitude) || 14;
        this.showMobileWarning = this.ref.dataset.showMobileWarning === 'true';
        this.showTooltip = this.ref.dataset.showTooltip === 'true';
        this.displayOverlayContent = this.ref.dataset.displayOverlayContent === 'true';
        this.overlayContentText = this.ref.dataset.overlayContent || null;

        this.lastY = 0; // State equivalent for lastY

        if (!this.imageSrc) {
            console.error('TiltedCard: Missing image-src data attribute.', this.element);
            return;
        }

        this.initStructure();
        this.initListeners();
    }

    /**
     * Dynamically injects the inner HTML structure into the container.
     */
    initStructure() {
        this.ref.style.setProperty('--container-height', this.containerHeight);
        this.ref.style.setProperty('--container-width', this.containerWidth);
        this.ref.style.setProperty('--image-height', this.imageHeight);
        this.ref.style.setProperty('--image-width', this.imageWidth);

        // Build the inner HTML structure
        let innerHTML = `
            <figure class="tilted-card-figure" style="height: ${this.containerHeight}; width: ${this.containerWidth};">
                ${this.showMobileWarning ? `
                    <div class="tilted-card-mobile-alert" style="--show-mobile-warning: ${this.showMobileWarning ? 'block' : 'none'};">
                        This effect is not optimized for mobile. Check on desktop.
                    </div>
                ` : ''}

                <div class="tilted-card-inner">
                    <img
                        src="${this.imageSrc}"
                        alt="${this.altText}"
                        class="tilted-card-img"
                    />

                    ${(this.displayOverlayContent && this.overlayContentText) ? `
                        <div class="tilted-card-overlay">
                            <p class="tilted-card-demo-text">${this.overlayContentText}</p>
                        </div>
                    ` : ''}
                </div>

                ${this.showTooltip ? `
                    <figcaption class="tilted-card-caption">
                        ${this.captionText}
                    </figcaption>
                ` : ''}
            </figure>
        `;

        // Preserve the original content (like your portfolio-link-wrapper) if present
        const originalContent = this.ref.innerHTML;
        this.ref.innerHTML = innerHTML;

        // Find the inner element to append original content if needed
        const figure = this.ref.querySelector('.tilted-card-figure');
        if (figure) {
            const originalContentWrapper = document.createElement('div');
            originalContentWrapper.innerHTML = originalContent;
            Array.from(originalContentWrapper.children).forEach(child => figure.appendChild(child));
        }

        this.inner = this.ref.querySelector('.tilted-card-inner');
        this.caption = this.ref.querySelector('.tilted-card-caption');
    }

    /**
     * Handles the mouse movement for the tilting and tooltip position.
     * @param {MouseEvent} e
     */
    handleMouse = (e) => {
        if (!this.ref || !this.inner) return;

        const rect = this.ref.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        // Calculate rotation in degrees
        const rotationX = (offsetY / (rect.height / 2)) * -this.rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * this.rotateAmplitude;

        // Apply rotation via CSS Custom Properties
        this.inner.style.setProperty('--rx', `${rotationX}deg`);
        this.inner.style.setProperty('--ry', `${rotationY}deg`);

        if (this.caption) {
            // Calculate tooltip position (x, y)
            const tooltipX = e.clientX - rect.left;
            const tooltipY = e.clientY - rect.top;

            // Calculate figcaption rotation (based on Y velocity, simplified from motion/react)
            const velocityY = offsetY - this.lastY;
            const figCaptionRotation = -velocityY * 0.6;
            this.lastY = offsetY;

            // Apply tooltip position and rotation
            this.caption.style.setProperty('--tx', `${tooltipX}px`);
            this.caption.style.setProperty('--ty', `${tooltipY}px`);
            this.caption.style.setProperty('--rfig', `${figCaptionRotation}deg`);
        }
    }

    /**
     * Handles mouse enter: scales up and shows tooltip/opacity.
     */
    handleMouseEnter = () => {
        if (!this.inner) return;
        this.inner.style.setProperty('--scale', this.scaleOnHover);
        if (this.caption) {
            this.caption.style.setProperty('--opacity', '1');
        }
    }

    /**
     * Handles mouse leave: resets all transforms and opacity.
     */
    handleMouseLeave = () => {
        if (!this.inner) return;
        this.inner.style.setProperty('--opacity', '0');
        this.inner.style.setProperty('--scale', '1');
        this.inner.style.setProperty('--rx', '0deg');
        this.inner.style.setProperty('--ry', '0deg');
        if (this.caption) {
            this.caption.style.setProperty('--opacity', '0');
            this.caption.style.setProperty('--rfig', '0deg'); // Reset rotation
        }
        this.lastY = 0;
    }

    /**
     * Attaches all event listeners.
     */
    initListeners() {
        this.ref.addEventListener('mousemove', this.handleMouse);
        this.ref.addEventListener('mouseenter', this.handleMouseEnter);
        this.ref.addEventListener('mouseleave', this.handleMouseLeave);
    }
}

// Initialization script to apply the class to all relevant elements
document.addEventListener('DOMContentLoaded', () => {
    const cardElements = document.querySelectorAll('.tilted-card-container');
    cardElements.forEach(element => {
        new TiltedCardVanilla(element);
    });
});