
let instance = null;

function createLightbox() {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');

  const image = document.createElement('img');
  image.alt = '';
  overlay.appendChild(image);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('show')) close();
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

export const Lightbox = { open, close };