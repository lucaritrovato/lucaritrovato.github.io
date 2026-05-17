/* ════════════════════════════════════════
   script.js — Luca Ritrovato CV
   UI logic. Translations live in i18n.js.
════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.navbar-links a');
  const sections = document.querySelectorAll('section[id]');
  const animated = document.querySelectorAll('[data-animate]');


  /* ── INITIAL LANGUAGE ── */
  const savedLang = localStorage.getItem('lr-cv-lang');
  const initialLang = savedLang === 'en' ? 'en' : 'it';
  if (typeof window.applyLanguage === 'function') {
    window.applyLanguage(initialLang);
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang-btn');
      if (typeof window.applyLanguage === 'function') {
        window.applyLanguage(lang);
      }
      localStorage.setItem('lr-cv-lang', lang);
    });
  });


  /* ── NAVBAR: solid on scroll ── */
  const handleNavbarScroll = () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();


  /* ── ACTIVE NAV LINK on scroll ── */
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    });
  }, {
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0,
  });

  sections.forEach(section => navObserver.observe(section));


  /* ── SECTION FADE-IN on scroll ── */
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animated.forEach(el => fadeObserver.observe(el));


  /* ── SMOOTH SCROLL for nav links ── */
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId.startsWith('#')) return;
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });


  /* ── TYPEWRITER — hero name (only first time per session) ── */
  const heroNameEl = document.getElementById('hero-name');
  if (heroNameEl) {
    const lang = document.documentElement.dataset.lang || 'it';
    const heroNames = (window.HERO_NAMES && window.HERO_NAMES[lang]) || ['Luca', 'Ritrovato'];
    const alreadyShown = sessionStorage.getItem('lr-cv-typed');

    if (alreadyShown) {
      heroNameEl.innerHTML = heroNames.join('<br/>');
    } else {
      sessionStorage.setItem('lr-cv-typed', '1');
      let lineIdx = 0, charIdx = 0;
      const cursor = document.createElement('span');
      cursor.className = 'typewriter-cursor';
      heroNameEl.appendChild(cursor);

      function type() {
        if (lineIdx >= heroNames.length) {
          setTimeout(() => cursor.remove(), 2000);
          return;
        }
        const line = heroNames[lineIdx];
        if (charIdx < line.length) {
          cursor.insertAdjacentText('beforebegin', line[charIdx]);
          charIdx++;
          setTimeout(type, 90);
        } else {
          lineIdx++;
          charIdx = 0;
          if (lineIdx < heroNames.length) {
            cursor.insertAdjacentHTML('beforebegin', '<br/>');
            setTimeout(type, 300);
          } else {
            setTimeout(() => cursor.remove(), 1800);
          }
        }
      }
      setTimeout(type, 500);
    }
  }

});