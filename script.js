const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();

// Language switcher — Portuguese is the default language.
(function () {
  const languageToggle = document.getElementById('language-toggle');
  if (!languageToggle) return;

  const translations = {
    'pt-BR': {
      title: 'Beatriz Cavalcanti · Desenvolvedora Full Stack',
      metaDescription: 'Beatriz Cavalcanti — Desenvolvedora Full Stack. Estudante de Análise e Desenvolvimento de Sistemas na FIAP.',
      'nav.ariaLabel': 'Navegação principal',
      'nav.brandAria': 'Ir para o topo',
      'nav.toggle': 'Alternar menu de navegação',
      'nav.about': 'sobre',
      'nav.stack': 'tecnologias',
      'nav.projects': 'projetos',
      'nav.contact': 'contato',
      'hero.ariaLabel': 'Introdução',
      'hero.title': 'Desenvolvedora Full Stack',
      'hero.statusAria': 'Status atual',
      'hero.status': 'disponível para oportunidades',
      'hero.readoutAria': 'Resumo profissional',
      'hero.readoutProfile': 'perfil',
      'hero.readoutFocus': 'foco',
      'hero.readoutStatus': 'status',
      'sections.about': 'sobre',
      'sections.stack': 'tecnologias',
      'sections.projects': 'projetos',
      'sections.contact': 'contato',
      'about.introBefore': 'Desenvolvedora Full Stack em transição de carreira — atualmente cursando ',
      'about.degree': 'Análise e Desenvolvimento de Sistemas — FIAP',
      'about.introAfter': '.',
      'about.description': 'Construo projetos do zero: interfaces responsivas, serviços de backend e as camadas de analytics entre eles. Tenho experiência em produção com landing pages publicadas de ponta a ponta, configuração do Google Tag Manager e acompanhamento de conversões no Google Ads.',
      'about.languages': 'idiomas',
      'about.portuguese': 'Português',
      'about.native': 'Nativo',
      'about.english': 'Inglês',
      'about.advanced': 'Avançado — Cambridge FCE',
      'about.spanish': 'Espanhol',
      'about.intermediate': 'Intermediário — SIELE',
      'stack.tools': 'ferramentas',
      'projects.academic': 'Acadêmico',
      'projects.production': 'Produção',
      'projects.live': '[ Ao vivo ]',
      'projects.agrosat.description': 'Plataforma de alertas climáticos para agricultores familiares. Reúne dados de satélite e clima para enviar alertas sobre eventos extremos. Desenvolvida em colaboração no programa Global Solution da FIAP.',
      'projects.foodrescue.description': 'MVP colaborativo para Android desenvolvido na FIAP para conectar excedentes de alimentos a pessoas e instituições, combinando fluxos de resgate de alimentos com métricas de impacto ESG.',
      'projects.moneasy.description': 'Projeto de finanças pessoais desenvolvido em etapas na FIAP. Reúne um protótipo responsivo, modelagem de banco Oracle e um backend em Java 17 com operações CRUD via JDBC.',
      'projects.inProgress': 'Em desenvolvimento',
      'projects.devlog.description': 'API REST em desenvolvimento para organizar projetos, tecnologias e atualizações do portfólio, com autenticação e persistência de dados.',
      'projects.comingSoon': '[ Em breve ]',
      'projects.oasj.description': 'Três landing pages de produção construídas do zero e publicadas na Hostgator. A configuração inclui Google Tag Manager e acompanhamento de conversões no Google Ads.',
      'contact.intro': 'Aberta a colaborações, estágios e novas oportunidades.',
      'footer.builtWith': 'feito com HTML, CSS & JS',
      'language.switchToEnglish': 'Mudar idioma para inglês'
    },
    en: {
      title: 'Beatriz Cavalcanti · Full Stack Developer',
      metaDescription: 'Beatriz Cavalcanti — Full Stack Developer. ADS student at FIAP building interfaces, backends, and everything in between.',
      'nav.ariaLabel': 'Main navigation',
      'nav.brandAria': 'Go to top',
      'nav.toggle': 'Toggle navigation menu',
      'nav.about': 'about',
      'nav.stack': 'stack',
      'nav.projects': 'projects',
      'nav.contact': 'contact',
      'hero.ariaLabel': 'Introduction',
      'hero.title': 'Full Stack Developer',
      'hero.statusAria': 'Current status',
      'hero.status': 'open to opportunities',
      'hero.readoutAria': 'Professional summary',
      'hero.readoutProfile': 'profile',
      'hero.readoutFocus': 'focus',
      'hero.readoutStatus': 'status',
      'sections.about': 'about',
      'sections.stack': 'stack',
      'sections.projects': 'projects',
      'sections.contact': 'contact',
      'about.introBefore': 'Full Stack Developer in career transition — currently studying ',
      'about.degree': 'Systems Analysis and Development — FIAP',
      'about.introAfter': '.',
      'about.description': 'I build from the ground up: responsive interfaces, backend services, and the analytics layers in between. Production experience with landing pages deployed end-to-end, Google Tag Manager configuration, and Google Ads conversion tracking.',
      'about.languages': 'languages',
      'about.portuguese': 'Portuguese',
      'about.native': 'Native',
      'about.english': 'English',
      'about.advanced': 'Advanced — Cambridge FCE',
      'about.spanish': 'Spanish',
      'about.intermediate': 'Intermediate — SIELE',
      'stack.tools': 'tools',
      'projects.academic': 'Academic',
      'projects.production': 'Production',
      'projects.live': '[ Live ]',
      "projects.agrosat.description": "Climate alert platform for family farmers. Aggregates satellite and weather data to send timely alerts about extreme events. Built in collaboration as part of FIAP's Global Solution program.",
      'projects.foodrescue.description': 'Collaborative Android MVP developed at FIAP to connect surplus food with people and institutions, combining food rescue flows with ESG impact metrics.',
      'projects.moneasy.description': 'Personal finance project developed in stages at FIAP. Brings together a responsive prototype, Oracle database modeling, and a Java 17 backend with JDBC CRUD operations.',
      'projects.inProgress': 'In progress',
      'projects.devlog.description': 'REST API in progress to organize projects, technologies, and portfolio updates, with authentication and data persistence.',
      'projects.comingSoon': '[ Coming soon ]',
      'projects.oasj.description': 'Three production landing pages built from scratch and deployed on Hostgator. Full setup includes Google Tag Manager and Google Ads conversion tracking.',
      'contact.intro': 'Open to collaborations, internships, and new opportunities.',
      'footer.builtWith': 'built with HTML, CSS & JS',
      'language.switchToPortuguese': 'Change language to Portuguese'
    }
  };

  let currentLanguage = 'pt-BR';

  function applyLanguage(language) {
    const copy = translations[language];
    if (!copy) return;

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = copy[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
      const value = copy[element.dataset.i18nAriaLabel];
      if (value !== undefined) element.setAttribute('aria-label', value);
    });

    document.documentElement.lang = language;
    document.title = copy.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', copy.metaDescription);

    currentLanguage = language;
    languageToggle.setAttribute('aria-pressed', String(language === 'en'));
    languageToggle.setAttribute('aria-label', language === 'pt-BR' ? copy['language.switchToEnglish'] : copy['language.switchToPortuguese']);
    languageToggle.querySelectorAll('.language-option').forEach(option => {
      option.classList.toggle('is-active', option.dataset.language === language);
    });
  }

  languageToggle.addEventListener('click', () => {
    applyLanguage(currentLanguage === 'pt-BR' ? 'en' : 'pt-BR');
  });

  applyLanguage('pt-BR');
}());

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
