// NowSpectrum — Main JS

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const mobile = document.getElementById('navMobile');
toggle?.addEventListener('click', () => {
  mobile?.classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-mobile .nav-link, .nav-mobile .btn').forEach(link => {
  link.addEventListener('click', () => mobile?.classList.remove('open'));
});
