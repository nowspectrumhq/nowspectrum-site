// NowSpectrum — Shared Footer Component

(function () {
  const isInBlog = window.location.pathname.includes('/blog/');
  const root = isInBlog ? '../' : '';

  const html = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col footer-brand">
        <img src="${root}assets/horizontal-logo.svg" alt="NowSpectrum" class="footer-logo">
        <p class="footer-tagline">ServiceNow knowledge built by developers, for developers. Practical guides, cheat sheets, and reference packs.</p>
        <div class="footer-socials">
          <a href="https://x.com/nowspectrumhq" target="_blank" class="social-link" aria-label="X / Twitter">𝕏</a>
          <a href="https://linkedin.com/company/nowspectrum" target="_blank" class="social-link" aria-label="LinkedIn">in</a>
          <a href="https://youtube.com/@nowspectrum" target="_blank" class="social-link" aria-label="YouTube">▶</a>
          <a href="https://instagram.com/nowspectrumhq" target="_blank" class="social-link" aria-label="Instagram">ig</a>
          <a href="https://tiktok.com/@nowspectrumhq" target="_blank" class="social-link" aria-label="TikTok">tt</a>
        </div>
      </div>
      <div class="footer-col">
        <h4 class="footer-heading">Products</h4>
        <ul class="footer-links">
          <li><a href="https://store.nowspectrum.com/l/pro-tips" target="_blank">Pro Tips & Tricks</a></li>
          <li><a href="https://store.nowspectrum.com/l/integration-guide" target="_blank">Integrations Guide</a></li>
          <li><a href="https://store.nowspectrum.com/l/nowassist-guide" target="_blank">Now Assist Guide</a></li>
          <li><a href="https://store.nowspectrum.com/l/interview-prep-kit" target="_blank">Interview Prep Kit</a></li>
          <li><a href="https://store.nowspectrum.com" target="_blank">All Products →</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 class="footer-heading">Resources</h4>
        <ul class="footer-links">
          <li><a href="${root}blog.html">Blog</a></li>
          <li><a href="https://nowspectrum.beehiiv.com/subscribe" target="_blank">Newsletter</a></li>
          <li><a href="${root}services.html">Services</a></li>
          <li><a href="${root}about.html">About</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 class="footer-heading">Connect</h4>
        <ul class="footer-links">
          <li><a href="mailto:nowspectrumhq@gmail.com">Email Us</a></li>
          <li><a href="${root}contact.html">Contact Form</a></li>
          <li><a href="https://nowspectrum.beehiiv.com/subscribe" target="_blank">Subscribe to Newsletter</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 NowSpectrum. All rights reserved.</p>
      <p>Built for ServiceNow professionals.</p>
    </div>
  </div>
</footer>`;

  const container = document.getElementById('site-footer');
  if (container) {
    container.innerHTML = html;
    container.style.display = 'contents';
  }
})();
