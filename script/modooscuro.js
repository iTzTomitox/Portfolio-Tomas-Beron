// Ejecuta al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  const isDark = localStorage.getItem('dark-mode') === 'true';
  const checkbox = document.getElementById('dark-mode');

  if (isDark) {
    document.documentElement.classList.add('dark-mode');
    if (checkbox) checkbox.checked = true;
  }
});

// Escucha cambios en el checkbox
const checkbox = document.getElementById('dark-mode');
if (checkbox) {
  checkbox.addEventListener('change', () => {
    const isChecked = checkbox.checked;
    document.documentElement.classList.toggle('dark-mode', isChecked);
    localStorage.setItem('dark-mode', isChecked ? 'true' : 'false');
  });
}
