// src/modules/Renderer.js
import { Gallery } from './Gallery.js';

export function renderHero(data) {
  const header = document.createElement('header');
  header.className = 'hero';

  const h1 = document.createElement('h1');
  h1.textContent = data.title;
  header.appendChild(h1);

  const h2 = document.createElement('h2');
  h2.textContent = data.subtitle;
  header.appendChild(h2);

  data.paragraphs.forEach((text) => {
    const p = document.createElement('p');
    p.textContent = text;
    header.appendChild(p);
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
    const el = document.createElement('p');
    el.className = 'description';
    el.innerHTML = text;
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
    title.textContent = 'Gallery';
    container.appendChild(title);

    const gallery = Gallery.createGallery(items);
    if (gallery) {
      container.appendChild(gallery);
    }

    return container;
  },

  renderSection(section) {
    const element = document.createElement('section');

    if (section.title) {
      element.appendChild(this.createTitle(section.title));
    }

    if (section.description) {
      element.appendChild(this.createDescription(section.description));
    }

    if (section.technologies && section.technologies.length > 0) {
      const techEl = this.createTechnologies(section.technologies);
      if (techEl) element.appendChild(techEl);
    }

    if (section.items && section.items.length > 0) {
      const galleryEl = this.createGallerySection(section.items);
      if (galleryEl) element.appendChild(galleryEl);
    }

    return element;
  }
};