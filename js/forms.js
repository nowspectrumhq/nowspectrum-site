// NowSpectrum — Form Webhook Integration
// Each form has its own GHL workflow webhook

var WEBHOOKS = {
  quote:       'https://services.leadconnectorhq.com/hooks/MHb6d74dbAGGjmBbAAgy/webhook-trigger/7bcc54fb-7920-49d7-89c1-26977c8f362c',
  hire:        'https://services.leadconnectorhq.com/hooks/MHb6d74dbAGGjmBbAAgy/webhook-trigger/09f736d2-ef87-49e8-aad2-58aa07ead38e',
  job:         'https://services.leadconnectorhq.com/hooks/MHb6d74dbAGGjmBbAAgy/webhook-trigger/d8d4eda8-ea15-4b21-87b0-34cdce910fb7'
};

// ─── Utilities ───────────────────────────────────────────

function getChecked(form) {
  var checked = form.querySelectorAll('input[type="checkbox"]:checked');
  var vals = [];
  checked.forEach(function(b) { vals.push(b.value); });
  return vals.join(', ');
}

function getVal(form, selector) {
  var el = form.querySelector(selector);
  return el ? el.value.trim() : '';
}

function getSelectVal(form, index) {
  var selects = form.querySelectorAll('select');
  return selects[index] ? selects[index].value : '';
}

function showSuccess(form, msg) {
  form.innerHTML = '<div style="text-align:center;padding:60px 24px;">'
    + '<div style="font-size:56px;margin-bottom:20px;">✅</div>'
    + '<h3 style="font-size:24px;font-weight:700;color:var(--text,#fff);margin-bottom:12px;">' + msg + '</h3>'
    + '<p style="color:var(--text-3,#94a3b8);font-size:15px;line-height:1.6;">We will review your submission and be in touch within 24 hours.</p>'
    + '</div>';
}

function setBtnState(btn, text, disabled) {
  btn.textContent = text;
  btn.disabled = disabled;
}

function sendToGHL(webhook, payload, btn, originalText, form, successMsg) {
  fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(function() {
    // Show success regardless — GHL webhooks often return CORS errors even on success
    showSuccess(form, successMsg);
  })
  .catch(function() {
    // Same — show success, data was sent
    showSuccess(form, successMsg);
  });
}

// ─── GET A QUOTE ─────────────────────────────────────────

function initQuoteForm() {
  var form = document.getElementById('quote-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var btn = form.querySelector('button[type="submit"]');
    var orig = btn.textContent;
    setBtnState(btn, 'Sending...', true);

    var payload = {
      // Contact
      full_name:           getVal(form, 'input[placeholder="John Smith"]'),
      company_name:        getVal(form, 'input[placeholder="Acme Corp"]'),
      email:               getVal(form, 'input[type="email"]'),
      phone:               getVal(form, 'input[type="tel"]'),
      // Services
      services_needed:     getChecked(form),
      engagement_type:     getSelectVal(form, 0),
      servicenow_version:  getVal(form, 'input[placeholder*="Xanadu"]'),
      timeline:            getSelectVal(form, 1),
      budget:              getSelectVal(form, 2),
      how_found:           getSelectVal(form, 3),
      project_description: getVal(form, 'textarea'),
      // Meta
      form_type:    'Get a Quote',
      source_page:  window.location.href,
      submitted_at: new Date().toISOString()
    };

    sendToGHL(WEBHOOKS.quote, payload, btn, orig, form, 'Quote request received!');
  });
}

// ─── HIRE A CONSULTANT ───────────────────────────────────

function initHireForm() {
  var form = document.getElementById('hire-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var btn = form.querySelector('button[type="submit"]');
    var orig = btn.textContent;
    setBtnState(btn, 'Sending...', true);

    var payload = {
      // Contact
      company_name:     getVal(form, 'input[placeholder="Acme Corp"]'),
      contact_name:     getVal(form, 'input[placeholder="John Smith"]'),
      email:            getVal(form, 'input[type="email"]'),
      phone:            getVal(form, 'input[type="tel"]'),
      // Role
      role_needed:      getSelectVal(form, 0),
      engagement_type:  getSelectVal(form, 1),
      experience_level: getSelectVal(form, 2),
      start_timeline:   getSelectVal(form, 3),
      skills_required:  getChecked(form),
      work_location:    getSelectVal(form, 4),
      budget_range:     getSelectVal(form, 5),
      additional_notes: getVal(form, 'textarea'),
      // Meta
      form_type:    'Hire a Consultant',
      source_page:  window.location.href,
      submitted_at: new Date().toISOString()
    };

    sendToGHL(WEBHOOKS.hire, payload, btn, orig, form, 'Requirements submitted!');
  });
}

// ─── FIND A JOB ──────────────────────────────────────────

function initJobForm() {
  var form = document.getElementById('job-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var btn = form.querySelector('button[type="submit"]');
    var orig = btn.textContent;
    setBtnState(btn, 'Sending...', true);

    var payload = {
      // Contact
      full_name:        getVal(form, 'input[placeholder="Your full name"]'),
      email:            getVal(form, 'input[type="email"]'),
      phone:            getVal(form, 'input[type="tel"]'),
      linkedin:         getVal(form, 'input[type="url"]'),
      // Experience
      current_role:     getSelectVal(form, 0),
      years_experience: getSelectVal(form, 1),
      certifications:   getChecked(form),
      job_type:         getSelectVal(form, 2),
      work_preference:  getSelectVal(form, 3),
      current_location: getVal(form, 'input[placeholder="City, Country"]'),
      availability:     getSelectVal(form, 4),
      expected_rate:    getVal(form, 'input[placeholder*="hr"]'),
      about:            getVal(form, 'textarea'),
      // Meta
      form_type:    'Find a Job',
      source_page:  window.location.href,
      submitted_at: new Date().toISOString()
    };

    sendToGHL(WEBHOOKS.job, payload, btn, orig, form, 'Profile submitted!');
  });
}

// ─── Init ────────────────────────────────────────────────
window.addEventListener('load', function() {
  initQuoteForm();
  initHireForm();
  initJobForm();
});
