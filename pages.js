(function () {
  var navBurger = document.getElementById('navBurger');
  var navEl = document.querySelector('.nav');
  if (navBurger && navEl) {
    navBurger.addEventListener('click', function () {
      var open = navEl.classList.toggle('is-open');
      navBurger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

(function () {
  var revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!revealEls.length) return;
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(function (el) { observer.observe(el); });
})();

(function () {
  var galleryItems = document.querySelectorAll('.page-gallery-item');
  if (!galleryItems.length) return;

  var lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<button class="lightbox-close" aria-label="Fermer">&times;</button><img alt="">';
  document.body.appendChild(lightbox);
  var lightboxImg = lightbox.querySelector('img');

  function open(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('is-open');
  }
  function close() {
    lightbox.classList.remove('is-open');
  }

  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var img = item.querySelector('img');
      if (img) open(img.src, img.alt);
    });
  });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
