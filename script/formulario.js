// Envío del formulario de contacto con EmailJS.
const form = document.querySelector('#contact-form');

if (form) {
  const status = form.querySelector('.form__status');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append('service_id', 'service_8xhkjyf');
    formData.append('template_id', 'template_jg6mq2b');
    formData.append('user_id', 'QcosC0SXinEk-FNmm');

    button.disabled = true;
    button.textContent = 'Enviando…';
    status.className = 'form__status';
    status.textContent = '';

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        body: formData
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      status.classList.add('is-ok');
      status.textContent = '¡Gracias! Tu mensaje se envió correctamente. Te respondo a la brevedad.';
    } catch (err) {
      status.classList.add('is-error');
      status.textContent = 'No se pudo enviar el mensaje. Probá de nuevo o escribime a wikipediatomitob@gmail.com.';
    } finally {
      button.disabled = false;
      button.textContent = 'Enviar mensaje';
    }
  });
}
