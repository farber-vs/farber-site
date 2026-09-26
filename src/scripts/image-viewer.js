// Progressive enhancement: without dialog support or JavaScript, each link opens the image file.
const viewer = document.querySelector('#image-viewer');
const imageLinks = [...document.querySelectorAll('[data-image-link]')];

if (viewer && typeof viewer.showModal === 'function') {
  const image = viewer.querySelector('[data-full-image]');
  const caption = viewer.querySelector('[data-image-caption]');
  const status = viewer.querySelector('[data-image-status]');
  const close = viewer.querySelector('[data-close-image]');
  const stage = viewer.querySelector('[data-image-stage]');
  let opener;
  let returnScroll = 0;

  image.addEventListener('load', () => {
    image.hidden = false;
    status.hidden = true;
  });
  image.addEventListener('error', () => {
    image.hidden = true;
    status.textContent = 'The image could not load. Close and try again.';
    status.hidden = false;
  });

  function openImage(link) {
    if (viewer.open) return;
    opener = link;
    returnScroll = window.scrollY;
    caption.textContent = link.dataset.imageCaption;
    image.hidden = true;
    image.alt = link.querySelector('img').alt;
    status.textContent = 'Loading image…';
    status.hidden = false;
    image.src = link.href;
    viewer.showModal();
    document.documentElement.classList.add('image-viewer-open');
    close.focus({ preventScroll: true });
  }

  imageLinks.forEach(link => {
    link.setAttribute('role', 'button');
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-controls', viewer.id);
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      openImage(link);
    });
    link.addEventListener('keydown', event => {
      if (event.key !== ' ') return;
      event.preventDefault();
      openImage(link);
    });
  });

  close.addEventListener('click', () => viewer.close());
  // Close only when the pointer starts and ends on empty backdrop, never after dragging off the photo.
  let backdropDown = false;
  const isBackdrop = target => target === viewer || target === stage;
  viewer.addEventListener('pointerdown', event => { backdropDown = isBackdrop(event.target); });
  viewer.addEventListener('click', event => {
    if (backdropDown && isBackdrop(event.target)) viewer.close();
    backdropDown = false;
  });
  viewer.addEventListener('close', () => {
    document.documentElement.classList.remove('image-viewer-open');
    opener?.focus({ preventScroll: true });
    window.scrollTo(0, returnScroll);
  });
  // Native Escape closes the modal. Browser history remains the category filter's history.
  window.addEventListener('popstate', () => { if (viewer.open) viewer.close(); });
  window.addEventListener('pagehide', () => { if (viewer.open) viewer.close(); });
}
