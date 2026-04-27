// NowSpectrum — Shared Header Component
// Usage: <div id="site-header"></div> then this script auto-injects

(function () {
  const isInBlog = window.location.pathname.includes('/blog/');
  const root = isInBlog ? '../' : '';

  // Determine active page
  const path = window.location.pathname;
  function isActive(page) {
    if (page === 'index' && (path === '/' || path.endsWith('index.html'))) return ' active';
    if (page === 'blog' && path.includes('blog')) return ' active';
    if (path.includes(page + '.html')) return ' active';
    return '';
  }

  const html = `
<nav class="nav" id="nav">
  <div class="nav-inner">
    <a href="${root}index.html" class="nav-logo">
      <img src="${root}assets/horizontal-logo.svg" alt="NowSpectrum" class="logo-img">
    </a>
    <ul class="nav-links">
      <li><a href="${root}index.html" class="nav-link${isActive('index')}">Home</a></li>
      <li><a href="${root}products.html" class="nav-link${isActive('products')}">Products</a></li>
      <li><a href="${root}services.html" class="nav-link${isActive('services')}">Services</a></li>
      <li><a href="${root}blog.html" class="nav-link${isActive('blog')}">Blog</a></li>
      <li><a href="${root}about.html" class="nav-link${isActive('about')}">About</a></li>
      <li><a href="${root}contact.html" class="nav-link${isActive('contact')}">Contact</a></li>
    </ul>
    <a href="https://store.nowspectrum.com" target="_blank" class="btn btn-primary nav-cta">Browse Products</a>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav-mobile" id="navMobile">
    <a href="${root}index.html" class="nav-link${isActive('index')}">Home</a>
    <a href="${root}products.html" class="nav-link${isActive('products')}">Products</a>
    <a href="${root}services.html" class="nav-link${isActive('services')}">Services</a>
    <a href="${root}blog.html" class="nav-link${isActive('blog')}">Blog</a>
    <a href="${root}about.html" class="nav-link${isActive('about')}">About</a>
    <a href="${root}contact.html" class="nav-link${isActive('contact')}">Contact</a>
    <a href="https://store.nowspectrum.com" target="_blank" class="btn btn-primary">Browse Products</a>
  </div>
</nav>`;

  const container = document.getElementById('site-header');
  if (container) {
    container.innerHTML = html;
    container.style.display = 'contents';
  }

  // Nav scroll effect
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  toggle?.addEventListener('click', () => mobile?.classList.toggle('open'));
  document.querySelectorAll('.nav-mobile .nav-link, .nav-mobile .btn').forEach(link => {
    link.addEventListener('click', () => mobile?.classList.remove('open'));
  });
})();
