
  window.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo-tomix');

    // 1. Verifica si estaba en modo oscuro y lo aplica
    const isDarkSaved = localStorage.getItem('dark-mode') === 'true';
    if (isDarkSaved) {
      document.documentElement.classList.add('dark-mode');
    }

    // 2. Al hacer click en el logo, activa/desactiva modo oscuro y lo guarda
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que salte por el href="#"
        const isNowDark = document.documentElement.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', isNowDark ? 'true' : 'false');
      });
    }
  });

