// NowSpectrum — Main JS

// Mobile nav toggle — runs after full page load
window.addEventListener('load', function () {
  var toggle = document.getElementById('navToggle');
  var mobile = document.getElementById('navMobile');
  var nav = document.getElementById('nav');

  if (toggle && mobile) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      mobile.classList.toggle('open');
      toggle.classList.toggle('open');
    });

    // Close when any link inside mobile nav is clicked
    var links = mobile.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        mobile.classList.remove('open');
        toggle.classList.remove('open');
      });
    }

    // Close when clicking outside nav
    document.addEventListener('click', function (e) {
      if (nav && !nav.contains(e.target)) {
        mobile.classList.remove('open');
        toggle.classList.remove('open');
      }
    });
  }

  // Nav scroll effect
  window.addEventListener('scroll', function () {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  });
});
