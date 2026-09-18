(() => {
  'use strict';

  const menuButton = document.querySelector('[data-mobile-menu-button]');
  const menu = document.querySelector('[data-site-nav]');

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });

    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menu.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation menu');
      }
    });
  }

  document.querySelectorAll('img:not([loading])').forEach((image) => {
    if (!image.closest('[data-critical-image]')) {
      image.loading = 'lazy';
      image.decoding = 'async';
    }
  });
})();
