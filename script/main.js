// Tema, menú móvil, animaciones de entrada y video diferido.
(function () {
  const root = document.documentElement;

  // Tema claro / oscuro (el valor inicial lo aplica el script del <head>)
  document.querySelectorAll('.theme-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = root.dataset.theme === 'light' ? 'dark' : 'light';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  });

  // Menú móvil
  const nav = document.querySelector('.nav');
  const menuBtn = document.querySelector('.nav__menu-btn');
  if (nav && menuBtn) {
    const setOpen = (open) => {
      nav.classList.toggle('is-open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
    };
    menuBtn.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
    nav.querySelectorAll('.nav__links a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('click', (e) => { if (!nav.contains(e.target)) setOpen(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  }

  // Animaciones al entrar en pantalla
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('is-in'));
  }

  // YouTube: carga el iframe recién cuando se hace clic
  document.querySelectorAll('.video[data-youtube]').forEach((el) => {
    el.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + el.dataset.youtube + '?autoplay=1';
      iframe.title = el.getAttribute('aria-label') || 'Video de YouTube';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      el.replaceChildren(iframe);
    }, { once: true });
  });

  // Año actual en el pie
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
