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
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      if (status) {
        status.textContent = 'Thanks! We\u2019ll be in touch soon.';
      }
      form.reset();
    });
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
