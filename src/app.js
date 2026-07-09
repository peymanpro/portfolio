// src/app.js
import { heroData } from '../data/heroData.js';
import { sections } from '../data/projects.js';
import { renderHero, SectionRenderer } from './modules/Renderer.js';

function init() {
  const content = document.getElementById('content');
  if (!content) {
    console.error('Main content element (#content) not found.');
    return;
  }

  const heroElement = renderHero(heroData);
  const oldHero = document.querySelector('.hero');
  if (oldHero) {
    oldHero.replaceWith(heroElement);
  } else {
    content.parentNode.insertBefore(heroElement, content);
  }

  content.innerHTML = '';

  sections.forEach((section) => {
    const element = SectionRenderer.renderSection(section);
    if (element) {
      content.appendChild(element);
    }
  });
}

document.addEventListener('DOMContentLoaded', init);