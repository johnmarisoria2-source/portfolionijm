/* ══════════════════════════════════════════
   JOHN MARI SORIA — PORTFOLIO SCRIPTS
   script.js
   ══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── 1. NAVBAR: scroll effect + active link ── */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', function () {
    // Scrolled class
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active nav link based on current section
    let current = '';
    sections.forEach(function (sec) {
      var top = sec.offsetTop - 100;
      if (window.scrollY >= top) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
  /* ── 3. MOBILE NAV TOGGLE ── */
  var toggleBtn  = document.getElementById('navToggle');
  var navLinksEl = document.getElementById('navLinks');

  toggleBtn.addEventListener('click', function () {
    navLinksEl.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinksEl.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinksEl.classList.remove('open');
    });
  });


  /* ── 4. REVEAL ON SCROLL (IntersectionObserver) ── */
  var revealEls = document.querySelectorAll('.reveal');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        // Stagger delay per sibling index
        var siblings = entry.target.parentElement.querySelectorAll('.reveal');
        var idx = Array.from(siblings).indexOf(entry.target);
        var delay = idx * 80;
        setTimeout(function () {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(function (el) {
    observer.observe(el);
  });


  /* ── 5. SKILL BARS ANIMATE ── */
  var skillFills = document.querySelectorAll('.skill-fill');

  var skillObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillFills.forEach(function (fill) {
    skillObserver.observe(fill);
  });


  /* ── 6. ACTIVITY FILTER ── */
  var filterBtns   = document.querySelectorAll('.filter-btn');
  var activityCards = document.querySelectorAll('.activity-card');
  var countEl      = document.getElementById('activityCount');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Update active button
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var filter = btn.getAttribute('data-filter');
      var visible = 0;

      activityCards.forEach(function (card) {
        var tags = card.getAttribute('data-tags') || '';

        if (filter === 'all' || tags.indexOf(filter) !== -1) {
          card.classList.remove('hidden');
          visible++;
        } else {
          card.classList.add('hidden');
        }
      });

      // Update count label
      countEl.textContent = visible + (visible === 1 ? ' project' : ' projects');
    });
  });


  /* ── 7. SMOOTH SCROLL for all anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = document.getElementById('navbar').offsetHeight;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

});