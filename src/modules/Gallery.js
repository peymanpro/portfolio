
import { Lightbox } from './Lightbox.js';

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
  gallery.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
      e.preventDefault();
      const amount = e.deltaX || e.deltaY;
      gallery.scrollBy({ left: amount, behavior: 'smooth' });
    }
  }, { passive: false });

  gallery.addEventListener('wheel', (e) => {
    if (e.shiftKey) {
      e.preventDefault();
      gallery.scrollBy({ left: e.deltaY, behavior: 'smooth' });
    }
  }, { passive: false });
}

function createGallery(items) {
  if (!items || items.length === 0) return null;

  const wrapper = document.createElement('div');
  wrapper.className = 'gallery-wrapper';

  const leftBtn = document.createElement('button');
  leftBtn.className = 'gallery-button left hidden';
  leftBtn.innerHTML = '&#10094;';
  leftBtn.setAttribute('aria-label', 'Previous slide');

  const gallery = document.createElement('div');
  gallery.className = 'gallery';
  gallery.setAttribute('role', 'region');
  gallery.setAttribute('aria-label', 'Project gallery');

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

    img.addEventListener('click', () => {
      Lightbox.open(item.image, item.title || '');
    });

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

  const rightBtn = document.createElement('button');
  rightBtn.className = 'gallery-button right';
  rightBtn.innerHTML = '&#10095;';
  rightBtn.setAttribute('aria-label', 'Next slide');

  leftBtn.addEventListener('click', () => {
    scrollGallery(gallery, 'left');
  });

  rightBtn.addEventListener('click', () => {
    scrollGallery(gallery, 'right');
  });

  const scrollHandler = () => {
    updateButtons(gallery, leftBtn, rightBtn);
  };

  gallery.addEventListener('scroll', scrollHandler);

  requestAnimationFrame(() => {
    updateButtons(gallery, leftBtn, rightBtn);
  });

  const resizeObserver = new ResizeObserver(() => {
    updateButtons(gallery, leftBtn, rightBtn);
  });
  resizeObserver.observe(gallery);

  setupWheelScroll(gallery);

  wrapper.appendChild(leftBtn);
  wrapper.appendChild(gallery);
  wrapper.appendChild(rightBtn);

  wrapper._gallery = gallery;
  wrapper._resizeObserver = resizeObserver;

  return wrapper;
}

export const Gallery = { createGallery };