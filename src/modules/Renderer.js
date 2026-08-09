
import { Gallery } from './Gallery.js';
import { getTranslations } from './state.js';
import { createExpandableText } from './TextExpander.js';

export function renderHero() {
  const t = getTranslations();
  const hero = t.hero;
  const ui = t.ui;

  const header = document.createElement('header');
  header.className = 'hero';

  const h1 = document.createElement('h1');
  h1.textContent = hero.title;
  header.appendChild(h1);

  const h2 = document.createElement('h2');
  h2.textContent = hero.subtitle;
  header.appendChild(h2);

  hero.paragraphs.forEach((text) => {
    const expandable = createExpandableText(text, 2, ui.seeMore, ui.seeLess);
    header.appendChild(expandable);
  });

  return header;
}

export const SectionRenderer = {
  createTitle(text) {
    const el = document.createElement('h2');
    el.textContent = text;
    return el;
  },

  createDescription(text, seeMoreLabel, seeLessLabel) {
    const expandable = createExpandableText(text, 2, seeMoreLabel, seeLessLabel);
    expandable.className = 'description expandable-text';
    return expandable;
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

    const gallery = Gallery.createGallery(items);
    if (gallery) {
      container.appendChild(gallery);
    }

    return container;
  },

  renderSection(sectionData) {
    const element = document.createElement('section');
    const ui = getTranslations().ui;

    if (sectionData.title) {
      element.appendChild(this.createTitle(sectionData.title));
    }

    if (sectionData.description) {
      const desc = this.createDescription(sectionData.description, ui.seeMore, ui.seeLess);
      element.appendChild(desc);
    }

    if (sectionData.technologies && sectionData.technologies.length > 0) {
      const techEl = this.createTechnologies(sectionData.technologies);
      if (techEl) element.appendChild(techEl);
    }

    if (sectionData.items && sectionData.items.length > 0) {
      const galleryEl = this.createGallerySection(sectionData.items);
      if (galleryEl) element.appendChild(galleryEl);
    }

    return element;
  }
};