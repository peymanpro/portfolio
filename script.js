// ==========================================
// Data Import (global from data/projects.js)
// ==========================================

// The 'sections' array is expected to be defined in data/projects.js
// and loaded before this script.

// ==========================================
// Lightbox Module
// ==========================================

const Lightbox = (() => {
    let instance = null;

    function createLightbox() {
        const overlay = document.createElement('div');
        overlay.className = 'lightbox';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');

        const image = document.createElement('img');
        image.alt = '';
        overlay.appendChild(image);

        // Click outside image closes lightbox
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                close();
            }
        });

        // ESC key closes lightbox
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('show')) {
                close();
            }
        });

        return overlay;
    }

    function getInstance() {
        if (!instance) {
            instance = createLightbox();
            document.body.appendChild(instance);
        }
        return instance;
    }

    function open(src, alt) {
        const overlay = getInstance();
        const img = overlay.querySelector('img');
        img.src = src;
        img.alt = alt || '';
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        const overlay = getInstance();
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    return { open, close };
})();

// ==========================================
// Gallery Module
// ==========================================

const Gallery = (() => {
    // Calculate card width + gap dynamically
    function getCardWidth(gallery) {
        const card = gallery.querySelector('article');
        if (!card) return 420 + 24;
        const style = getComputedStyle(card);
        const marginRight = parseFloat(style.marginRight) || 0;
        return card.offsetWidth + marginRight;
    }

    function scrollGallery(gallery, direction) {
        const cardWidth = getCardWidth(gallery);
        const amount = direction === 'left' ? -cardWidth : cardWidth;
        gallery.scrollBy({ left: amount, behavior: 'smooth' });
    }

    function updateButtons(gallery, leftBtn, rightBtn) {
        const { scrollLeft, clientWidth, scrollWidth } = gallery;
        const threshold = 2;

        if (scrollLeft <= threshold) {
            leftBtn.classList.add('hidden');
        } else {
            leftBtn.classList.remove('hidden');
        }

        if (scrollLeft + clientWidth >= scrollWidth - threshold) {
            rightBtn.classList.add('hidden');
        } else {
            rightBtn.classList.remove('hidden');
        }
    }

    function setupWheelScroll(gallery) {
        let isWheeling = false;

        gallery.addEventListener('wheel', (e) => {
            // Only handle horizontal wheel events or if shift is held
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
                e.preventDefault();
                const amount = e.deltaX || e.deltaY;
                gallery.scrollBy({ left: amount, behavior: 'smooth' });
            }
        }, { passive: false });

        // Also support mouse wheel with shift key for vertical scroll
        gallery.addEventListener('wheel', (e) => {
            if (e.shiftKey) {
                e.preventDefault();
                gallery.scrollBy({ left: e.deltaY, behavior: 'smooth' });
            }
        }, { passive: false });
    }

    function createGallery(items) {
        if (!items || items.length === 0) return null;

        // Wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'gallery-wrapper';

        // Left button
        const leftBtn = document.createElement('button');
        leftBtn.className = 'gallery-button left hidden';
        leftBtn.innerHTML = '&#10094;';
        leftBtn.setAttribute('aria-label', 'Previous slide');

        // Gallery container
        const gallery = document.createElement('div');
        gallery.className = 'gallery';
        gallery.setAttribute('role', 'region');
        gallery.setAttribute('aria-label', 'Project gallery');

        // Items
        items.forEach((item) => {
            const article = document.createElement('article');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.title || '';
            img.loading = 'lazy';
            img.dataset.full = item.image;
            img.setAttribute('role', 'button');
            img.setAttribute('tabindex', '0');
            img.setAttribute('aria-label', `View ${item.title || 'image'} fullscreen`);

            // Click to open lightbox
            img.addEventListener('click', () => {
                Lightbox.open(item.image, item.title || '');
            });

            // Keyboard support for lightbox
            img.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    Lightbox.open(item.image, item.title || '');
                }
            });

            const caption = document.createElement('p');
            caption.className = 'image-title';
            caption.textContent = item.title || '';

            article.appendChild(img);
            article.appendChild(caption);
            gallery.appendChild(article);
        });

        // Right button
        const rightBtn = document.createElement('button');
        rightBtn.className = 'gallery-button right';
        rightBtn.innerHTML = '&#10095;';
        rightBtn.setAttribute('aria-label', 'Next slide');

        // Button click handlers
        leftBtn.addEventListener('click', () => {
            scrollGallery(gallery, 'left');
        });

        rightBtn.addEventListener('click', () => {
            scrollGallery(gallery, 'right');
        });

        // Scroll handler to update buttons
        const scrollHandler = () => {
            updateButtons(gallery, leftBtn, rightBtn);
        };

        gallery.addEventListener('scroll', scrollHandler);

        // Initial button state after render
        // Use requestAnimationFrame to ensure layout is complete
        requestAnimationFrame(() => {
            updateButtons(gallery, leftBtn, rightBtn);
        });

        // Also update on resize
        const resizeObserver = new ResizeObserver(() => {
            updateButtons(gallery, leftBtn, rightBtn);
        });
        resizeObserver.observe(gallery);

        // Setup wheel scrolling
        setupWheelScroll(gallery);

        // Assemble
        wrapper.appendChild(leftBtn);
        wrapper.appendChild(gallery);
        wrapper.appendChild(rightBtn);

        // Store reference to gallery for cleanup if needed
        wrapper._gallery = gallery;
        wrapper._resizeObserver = resizeObserver;

        return wrapper;
    }

    return { createGallery };
})();

// ==========================================
// Section Renderer
// ==========================================

const SectionRenderer = {
    createTitle(text) {
        const el = document.createElement('h2');
        el.textContent = text;
        return el;
    },

    createDescription(text) {
        const el = document.createElement('p');
        el.className = 'description';
        el.textContent = text;
        return el;
    },

    createTechnologies(techs) {
        if (!techs || techs.length === 0) return null;

        const container = document.createElement('div');

        const title = document.createElement('h3');
        title.className = 'sub-title';
        title.textContent = 'Technologies';
        container.appendChild(title);

        const list = document.createElement('div');
        list.className = 'technologies';

        techs.forEach((tech) => {
            const badge = document.createElement('span');
            badge.className = 'technology';
            badge.textContent = tech;
            list.appendChild(badge);
        });

        container.appendChild(list);
        return container;
    },

    createGallerySection(items) {
        if (!items || items.length === 0) return null;

        const container = document.createElement('div');

        const title = document.createElement('h3');
        title.className = 'sub-title';
        title.textContent = 'Project Gallery';
        container.appendChild(title);

        const gallery = Gallery.createGallery(items);
        if (gallery) {
            container.appendChild(gallery);
        }

        return container;
    },

    renderSection(section) {
        const element = document.createElement('section');

        // Title
        if (section.title) {
            element.appendChild(this.createTitle(section.title));
        }

        // Description
        if (section.description) {
            element.appendChild(this.createDescription(section.description));
        }

        // Technologies
        if (section.technologies && section.technologies.length > 0) {
            const techEl = this.createTechnologies(section.technologies);
            if (techEl) element.appendChild(techEl);
        }

        // Gallery
        if (section.items && section.items.length > 0) {
            const galleryEl = this.createGallerySection(section.items);
            if (galleryEl) element.appendChild(galleryEl);
        }

        return element;
    }
};

// ==========================================
// Main
// ==========================================

(function init() {
    const content = document.getElementById('content');
    if (!content) {
        console.error('Main content element (#content) not found.');
        return;
    }

    if (typeof sections === 'undefined' || !Array.isArray(sections)) {
        console.error('Data not found: "sections" must be defined as an array in data/projects.js');
        return;
    }

    // Clear any existing content (in case of re-render)
    content.innerHTML = '';

    // Render each section
    sections.forEach((section) => {
        const element = SectionRenderer.renderSection(section);
        if (element) {
            content.appendChild(element);
        }
    });
})();