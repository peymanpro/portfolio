
import { translations } from './translations.js';

const STORAGE_KEYS = {
  theme: 'peyman-theme',
  language: 'peyman-language'
};

export const state = {
  theme: localStorage.getItem(STORAGE_KEYS.theme) || 'light',
  language: localStorage.getItem(STORAGE_KEYS.language) || 'fa',
  listeners: {
    theme: [],
    language: []
  }
};

function save(key, value) {
  localStorage.setItem(key, value);
}

export function setTheme(theme) {
  if (theme === state.theme) return;
  state.theme = theme;
  save(STORAGE_KEYS.theme, theme);
  document.documentElement.setAttribute('data-theme', theme);
  state.listeners.theme.forEach(fn => fn(theme));
}

export function setLanguage(lang) {
  if (lang === state.language) return;
  state.language = lang;
  save(STORAGE_KEYS.language, lang);
  document.documentElement.setAttribute('lang', lang === 'fa' ? 'fa' : 'en');
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  state.listeners.language.forEach(fn => fn(lang));
}

export function onThemeChange(fn) {
  state.listeners.theme.push(fn);
}

export function onLanguageChange(fn) {
  state.listeners.language.push(fn);
}

export function getTranslations() {
  return translations[state.language] || translations.fa;
}

document.documentElement.setAttribute('data-theme', state.theme);
document.documentElement.setAttribute('lang', state.language === 'fa' ? 'fa' : 'en');
document.documentElement.dir = state.language === 'fa' ? 'rtl' : 'ltr';