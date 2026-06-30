/* ── Footer year ── */
document.getElementById('footer-year').textContent = new Date().getFullYear();

/* ── Typing animation ── */
(function () {
  const el = document.getElementById('typed-output');
  if (!el) return;

  // Respect prefers-reduced-motion: skip straight to final text
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = 'cat profile.txt';
    return;
  }

  const phrases = ['whoami', 'ls projects/', 'cat profile.txt'];
  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;
  const TYPING_SPEED  = 95;
  const DELETE_SPEED  = 55;
  const PAUSE_END     = 1200;
  const PAUSE_BETWEEN = 350;

  function tick() {
    const current = phrases[phraseIdx];

    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);

      if (charIdx === current.length) {
        // On the last phrase, stop permanently
        if (phraseIdx === phrases.length - 1) return;
        deleting = true;
        setTimeout(tick, PAUSE_END);
        return;
      }
      setTimeout(tick, TYPING_SPEED);
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);

      if (charIdx === 0) {
        deleting = false;
        phraseIdx++;
        setTimeout(tick, PAUSE_BETWEEN);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  // Small initial delay so fonts have time to load
  setTimeout(tick, 600);
}());

/* ── Hamburger menu ── */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open', !expanded);
  });

  // Close on any nav link click
  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
      toggle.focus();
    }
  });
}());

/* ── Active nav link on scroll ── */
(function () {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const setActive = id => {
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
    });
  };

  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach(s => obs.observe(s));
}());
