const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();

// Terminal typing animation
(function () {
  const output = document.getElementById('typed-output');
  if (!output) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    output.textContent = 'cat profile.txt';
    return;
  }

  const phrases = ['whoami', 'ls projects/', 'cat profile.txt'];
  let phraseIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  function tick() {
    const phrase = phrases[phraseIndex];

    if (!deleting) {
      characterIndex += 1;
      output.textContent = phrase.slice(0, characterIndex);
      if (characterIndex === phrase.length) {
        if (phraseIndex === phrases.length - 1) return;
        deleting = true;
        setTimeout(tick, 1200);
        return;
      }
      setTimeout(tick, 95);
      return;
    }

    characterIndex -= 1;
    output.textContent = phrase.slice(0, characterIndex);
    if (characterIndex === 0) {
      deleting = false;
      phraseIndex += 1;
      setTimeout(tick, 350);
      return;
    }
    setTimeout(tick, 55);
  }

  setTimeout(tick, 600);
}());

// Mobile navigation
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open', !expanded);
  });

  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('open')) {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
      toggle.focus();
    }
  });
}());

// Highlight the current section in the navigation
(function () {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  if (!sections.length || !links.length || !('IntersectionObserver' in window)) return;

  const setActive = id => links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}());
