
import { state, setTheme, setLanguage, onThemeChange, onLanguageChange, getTranslations } from './modules/state.js';
import { renderHero, SectionRenderer } from './modules/Renderer.js';
import { sectionsData } from './data/projects.js';

function renderApp() {
  const content = document.getElementById('content');
  if (!content) return;

  content.innerHTML = '';


  const heroElement = renderHero();
  content.appendChild(heroElement);

 
  const t = getTranslations();
  const sections = t.sections;

  sections.forEach((sectionData) => {
  
    const staticData = sectionsData.find(s => s.id === sectionData.id);
    const techs = staticData ? staticData.technologies : [];
    const items = staticData ? staticData.items : [];
    const element = SectionRenderer.renderSection(sectionData, techs, items);
    if (element) content.appendChild(element);
  });
}

function createControls() {
  const controls = document.createElement('div');
  controls.className = 'controls';

  // دکمه تغییر تم
  const themeBtn = document.createElement('button');
  themeBtn.className = 'control-btn';
  themeBtn.setAttribute('aria-label', 'Toggle theme');
  themeBtn.innerHTML = state.theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  themeBtn.addEventListener('click', () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    themeBtn.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });

  const langBtn = document.createElement('button');
  langBtn.className = 'control-btn';
  langBtn.setAttribute('aria-label', 'Toggle language');
  langBtn.innerHTML = state.language === 'fa' ? '🇬🇧 EN' : '🇮🇷 FA';
  langBtn.addEventListener('click', () => {
    const newLang = state.language === 'fa' ? 'en' : 'fa';
    setLanguage(newLang);
    langBtn.innerHTML = newLang === 'fa' ? '🇬🇧 EN' : '🇮🇷 FA';
    renderApp();
  });

  controls.appendChild(themeBtn);
  controls.appendChild(langBtn);

  const content = document.getElementById('content');
  if (content) {
    content.parentNode.insertBefore(controls, content);
  }
}

function init() {
  createControls();
  renderApp();

  onThemeChange((theme) => {
    const btn = document.querySelector('.control-btn:first-child');
    if (btn) btn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });

  onLanguageChange(() => {
    renderApp();
    const langBtn = document.querySelector('.control-btn:last-child');
    if (langBtn) langBtn.innerHTML = state.language === 'fa' ? '🇬🇧 EN' : '🇮🇷 FA';
  });
}

document.addEventListener('DOMContentLoaded', init);