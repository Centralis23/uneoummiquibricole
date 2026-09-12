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
