const form = document.querySelector('.form-container > form')

form.addEventListener('submit', e => {
  e.preventDefault()

  const formData = new FormData(form)
  formData.append('service_id', 'service_8xhkjyf');
  formData.append('template_id', 'template_jg6mq2b');
  formData.append('user_id', 'QcosC0SXinEk-FNmm');

  fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
    method: 'POST',
    body: formData
  }).then(res => {
    alert('Email enviado exitosamente!')
    form[0].value = ''
    form[1].value = ''
    form[2].value = ''
  }).catch(err => {
    alert('Oops... Something went wrong...')
  })
})