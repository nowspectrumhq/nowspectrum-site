// NowSpectrum — Shared Header Component

(function () {
  const path = window.location.pathname;
  const isInBlog = path.includes('/blog/');
  const root = isInBlog ? '../' : '';

  function active(page) {
    if (page === 'home' && (path === '/' || path.endsWith('/') || path.endsWith('index.html'))) return ' active';
    if (page === 'blog' && path.includes('blog')) return ' active';
    if (path.includes(page + '.html')) return ' active';
    return '';
  }

  const nav = `
<nav class="nav" id="nav">
  <div class="nav-inner">
    <a href="${root}index.html" class="nav-logo">
      <img src="${root}assets/horizontal-logo.svg" alt="NowSpectrum" class="logo-img">
    </a>
    <ul class="nav-links">
      <li><a href="${root}index.html" class="nav-link${active('home')}">Home</a></li>
      <li><a href="${root}products.html" class="nav-link${active('products')}">Products</a></li>
      <li><a href="${root}services.html" class="nav-link${active('services')}">Services</a></li>
      <li><a href="${root}hire-a-consultant.html" class="nav-link${active('hire-a-consultant')}">Hire a Consultant</a></li>
      <li><a href="${root}find-a-job.html" class="nav-link${active('find-a-job')}">Find a Job</a></li>
      <li><a href="${root}blog.html" class="nav-link${active('blog')}">Blog</a></li>
      <li><a href="${root}about.html" class="nav-link${active('about')}">About</a></li>
      <li><a href="${root}contact.html" class="nav-link${active('contact')}">Contact</a></li>
    </ul>
    <a href="${root}get-a-quote.html" class="btn btn-primary nav-cta">Get a Quote</a>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav-mobile" id="navMobile">
    <a href="${root}index.html" class="nav-link${active('home')}">Home</a>
    <a href="${root}products.html" class="nav-link${active('products')}">Products</a>
    <a href="${root}services.html" class="nav-link${active('services')}">Services</a>
    <a href="${root}hire-a-consultant.html" class="nav-link${active('hire-a-consultant')}">Hire a Consultant</a>
    <a href="${root}find-a-job.html" class="nav-link${active('find-a-job')}">Find a Job</a>
    <a href="${root}blog.html" class="nav-link${active('blog')}">Blog</a>
    <a href="${root}about.html" class="nav-link${active('about')}">About</a>
    <a href="${root}contact.html" class="nav-link${active('contact')}">Contact</a>
    <a href="${root}get-a-quote.html" class="btn btn-primary">Get a Quote</a>
  </div>
</nav>`;

  // Inject nav
  const container = document.getElementById('site-header');
  if (container) container.outerHTML = nav;

  // Wait for DOM then attach events
  function initNav() {
    const navEl = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    const mobile = document.getElementById('navMobile');

    if (!toggle || !mobile) return;

    // Mobile toggle
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      mobile.classList.toggle('open');
      toggle.classList.toggle('open');
    });

    // Close when a link is clicked
    mobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobile.classList.remove('open');
        toggle.classList.remove('open');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!navEl.contains(e.target)) {
        mobile.classList.remove('open');
        toggle.classList.remove('open');
      }
    });

    // Scroll effect
    window.addEventListener('scroll', function () {
      navEl.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }

})();
