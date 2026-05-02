// NowSpectrum — Shared Header Component

(function () {
  var path = window.location.pathname;
  var isInBlog = path.indexOf('/blog/') !== -1;
  var root = isInBlog ? '../' : '';

  function active(page) {
    if (page === 'home' && (path === '/' || path.slice(-1) === '/' || path.indexOf('index.html') !== -1)) return ' active';
    if (page === 'blog' && path.indexOf('blog') !== -1) return ' active';
    if (path.indexOf(page + '.html') !== -1) return ' active';
    return '';
  }

  var html = '<nav class="nav" id="nav">'
    + '<div class="nav-inner">'
    + '<a href="' + root + 'index.html" class="nav-logo"><img src="' + root + 'assets/horizontal-logo.svg" alt="NowSpectrum" class="logo-img"></a>'
    + '<ul class="nav-links">'
    + '<li><a href="' + root + 'index.html" class="nav-link' + active('home') + '">Home</a></li>'
    + '<li><a href="' + root + 'products.html" class="nav-link' + active('products') + '">Products</a></li>'
    + '<li><a href="' + root + 'services.html" class="nav-link' + active('services') + '">Services</a></li>'
    + '<li><a href="' + root + 'hire-a-consultant.html" class="nav-link' + active('hire-a-consultant') + '">Hire a Consultant</a></li>'
    + '<li><a href="' + root + 'find-a-job.html" class="nav-link' + active('find-a-job') + '">Find a Job</a></li>'
    + '<li><a href="' + root + 'blog.html" class="nav-link' + active('blog') + '">Blog</a></li>'
    + '<li><a href="' + root + 'about.html" class="nav-link' + active('about') + '">About</a></li>'
    + '<li><a href="' + root + 'contact.html" class="nav-link' + active('contact') + '">Contact</a></li>'
    + '</ul>'
    + '<a href="' + root + 'get-a-quote.html" class="btn btn-primary nav-cta">Get a Quote</a>'
    + '<button id="navToggle" class="nav-toggle" type="button" aria-label="Menu"><span></span><span></span><span></span></button>'
    + '</div>'
    + '<div id="navMobile" class="nav-mobile">'
    + '<a href="' + root + 'index.html" class="nav-link' + active('home') + '">Home</a>'
    + '<a href="' + root + 'products.html" class="nav-link' + active('products') + '">Products</a>'
    + '<a href="' + root + 'services.html" class="nav-link' + active('services') + '">Services</a>'
    + '<a href="' + root + 'hire-a-consultant.html" class="nav-link' + active('hire-a-consultant') + '">Hire a Consultant</a>'
    + '<a href="' + root + 'find-a-job.html" class="nav-link' + active('find-a-job') + '">Find a Job</a>'
    + '<a href="' + root + 'blog.html" class="nav-link' + active('blog') + '">Blog</a>'
    + '<a href="' + root + 'about.html" class="nav-link' + active('about') + '">About</a>'
    + '<a href="' + root + 'contact.html" class="nav-link' + active('contact') + '">Contact</a>'
    + '<a href="' + root + 'get-a-quote.html" class="btn btn-primary" style="margin-top:12px;display:block;text-align:center;">Get a Quote</a>'
    + '</div>'
    + '</nav>';

  // Inject nav
  var el = document.getElementById('site-header');
  if (el) el.innerHTML = html;

  // Use event delegation on document body — guaranteed to work after any injection
  // This fires on every click on the page and checks if it hit the toggle button
  document.body.addEventListener('click', function (e) {
    var clickedToggle = e.target.closest ? e.target.closest('#navToggle') : null;
    var clickedMobileLink = e.target.closest ? e.target.closest('#navMobile a') : null;
    var clickedInsideNav = e.target.closest ? e.target.closest('#nav') : null;

    var toggle = document.getElementById('navToggle');
    var mobile = document.getElementById('navMobile');

    if (!toggle || !mobile) return;

    if (clickedToggle) {
      e.stopPropagation();
      // Toggle both — this is the critical fix
      var isOpen = mobile.classList.contains('open');
      if (isOpen) {
        mobile.classList.remove('open');
        toggle.classList.remove('open');
      } else {
        mobile.classList.add('open');
        toggle.classList.add('open');
      }
      return;
    }

    if (clickedMobileLink) {
      mobile.classList.remove('open');
      toggle.classList.remove('open');
      return;
    }

    if (!clickedInsideNav) {
      mobile.classList.remove('open');
      toggle.classList.remove('open');
    }
  }, true); // useCapture: true — fires before anything else on the page

  // Scroll effect
  window.addEventListener('scroll', function () {
    var nav = document.getElementById('nav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  });

})();
