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

  const navHTML = `
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

  // Inject nav into placeholder
  var container = document.getElementById('site-header');
  if (container) {
    container.innerHTML = navHTML;
  }

  // Attach events using event delegation on document — works regardless of injection timing
  document.addEventListener('click', function (e) {
    var toggle = e.target.closest('#navToggle');
    var mobileLink = e.target.closest('#navMobile a');
    var outsideNav = !e.target.closest('#nav');

    var mobile = document.getElementById('navMobile');
    var toggleBtn = document.getElementById('navToggle');

    if (toggle) {
      e.preventDefault();
      e.stopPropagation();
      if (mobile) mobile.classList.toggle('open');
      if (toggleBtn) toggleBtn.classList.toggle('open');
      return;
    }

    if (mobileLink) {
      if (mobile) mobile.classList.remove('open');
      if (toggleBtn) toggleBtn.classList.remove('open');
      return;
    }

    if (outsideNav) {
      if (mobile) mobile.classList.remove('open');
      if (toggleBtn) toggleBtn.classList.remove('open');
    }
  });

  // Scroll effect
  window.addEventListener('scroll', function () {
    var nav = document.getElementById('nav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  });

})();
