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

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}

const menu = document.querySelector('.nav-links');
const menuButton = document.querySelector('.hamburger-menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Cerrar el menú cuando se hace clic en un enlace del menú
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.classList.remove('open');
  }
});

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const body = document.querySelector('body');
  
  navLinks.classList.toggle('open');
  
  body.classList.toggle('menu-open');
}
