
import { createGallery } from './Gallery.js';
import { getTranslations } from './state.js';


function createExpandableDescription(text, maxLines = 2) {
  const container = document.createElement('div');
  container.className = 'desc-wrapper';

  const p = document.createElement('p');
  p.className = 'description expandable';
  p.innerHTML = text; 
  container.appendChild(p);

  
  const toggle = document.createElement('span');
  toggle.className = 'toggle-desc';
  toggle.setAttribute('role', 'button');
  toggle.setAttribute('tabindex', '0');
  toggle.setAttribute('aria-expanded', 'false');

  const icon = document.createElement('i');
  icon.className = 'fas fa-chevron-down';
  toggle.appendChild(icon);

  const label = document.createElement('span');
  label.className = 'toggle-label';
  const t = getTranslations().ui;
  label.textContent = t.showMore;
  toggle.appendChild(label);

  container.appendChild(toggle);

  let expanded = false;

  function toggleExpand() {
    expanded = !expanded;
    p.classList.toggle('expanded', expanded);
    const t = getTranslations().ui;
    label.textContent = expanded ? t.showLess : t.showMore;
    icon.className = expanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
    toggle.setAttribute('aria-expanded', expanded);
  }

  toggle.addEventListener('click', toggleExpand);
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExpand();
    }
  });

  requestAnimationFrame(() => {
    const lineHeight = parseFloat(getComputedStyle(p).lineHeight) || 24;
    const maxHeight = lineHeight * maxLines;
    if (p.scrollHeight <= maxHeight + 2) {
      toggle.style.display = 'none';
    }
  });

  return container;
}

export function renderHero() {
  const t = getTranslations().hero;
  const header = document.createElement('header');
  header.className = 'hero';

  const h1 = document.createElement('h1');
  h1.textContent = t.title;
  header.appendChild(h1);

  const h2 = document.createElement('h2');
  h2.textContent = t.subtitle;
  header.appendChild(h2);

  t.paragraphs.forEach((text) => {
    const wrapper = createExpandableDescription(text, 2);
    wrapper.querySelector('.description').style.maxWidth = '700px';
    wrapper.querySelector('.description').style.margin = '0 auto';
    header.appendChild(wrapper);
  });

  return header;
}

export const SectionRenderer = {
  createTitle(text) {
    const el = document.createElement('h2');
    el.textContent = text;
    return el;
  },

  createDescription(text) {
    return createExpandableDescription(text, 2);
  },

  createTechnologies(techs) {
    if (!techs || techs.length === 0) return null;

    const container = document.createElement('div');

    const title = document.createElement('h3');
    title.className = 'sub-title';
    title.textContent = getTranslations().ui.technologies;
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
    title.textContent = getTranslations().ui.gallery;
    container.appendChild(title);

    const gallery = createGallery(items);
    if (gallery) {
      container.appendChild(gallery);
    }

    return container;
  },

  renderSection(sectionData, techs, items) {
    const element = document.createElement('section');

    if (sectionData.title) {
      element.appendChild(this.createTitle(sectionData.title));
    }

    if (sectionData.description) {
      const descWrapper = this.createDescription(sectionData.description);
      element.appendChild(descWrapper);
    }

    if (techs && techs.length > 0) {
      const techEl = this.createTechnologies(techs);
      if (techEl) element.appendChild(techEl);
    }

    if (items && items.length > 0) {
      const galleryEl = this.createGallerySection(items);
      if (galleryEl) element.appendChild(galleryEl);
    }

    return element;
  }
};