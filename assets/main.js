// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.hamburger');
  if (toggle && header) {
    toggle.addEventListener('click', () => {
      header.classList.toggle('nav-open');
    });
  }

  // Contact form (contact.html) — currently just shows a confirmation
  // message client-side. Wire this up to your real form backend
  // (e.g. Formspree, Netlify Forms, or your own endpoint) when ready.
  /* const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(e);
      const status = form.querySelector('.form-status');
      if (status) {
        status.textContent = 'Thanks! We\u2019ll be in touch soon.';
      }
      form.reset();
    });
  } */

    const myForm = document.getElementById('userForm');

    myForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      
      fetch('https://script.google.com/a/macros/owyheeip.com/s/AKfycbwD8fFKH2V5GP5Qi-Uq7rC5O37Fb1kE0JHgO-Haxu9eo7GTpqAcMEWmK5WZsVJjF9rNMA/exec', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if(data.result === 'success') {
          // ✅ THIS CLEARS THE FORM FIELDS
          myForm.reset(); 
          alert('Data sent and form wiped!');
        }
      })
      .catch(error => console.error('Error:', error));
});

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
