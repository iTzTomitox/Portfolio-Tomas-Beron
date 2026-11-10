// Envío del formulario de contacto con FormSubmit (gratis, sin backend).
// Sin JavaScript, el formulario se envía igual por su atributo action.
const form = document.querySelector('#contact-form');

if (form) {
  const status = form.querySelector('.form__status');
  const button = form.querySelector('button[type="submit"]');
  const label = button.textContent;
  const endpoint = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    button.disabled = true;
    button.textContent = form.dataset.sending;
    status.className = 'form__status';
    status.textContent = '';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === 'false') throw new Error(data.message || res.status);
      form.reset();
      status.classList.add('is-ok');
      status.textContent = form.dataset.ok;
    } catch (err) {
      status.classList.add('is-error');
      status.textContent = form.dataset.error;
    } finally {
      button.disabled = false;
      button.textContent = label;
    }
  });
}
