;(() => {
  'use strict';

  class App {
    constructor() {
      this.Init();
    };

    Init() {
      this.heroHeight();
      this.toggleMobileNav();
    };

    heroHeight() {
      const headerHeight = document.getElementById('header').offsetHeight;
      const hero = document.getElementById('hero');
      const heroContainer = document.getElementById('hero-container');
      const height = `calc(100vh - ${headerHeight}px)`;

      hero.style.height = height;
      heroContainer.style.height = height;
    };

    toggleMobileNav() {
      const burger = document.getElementById('burger');
      const nav = document.getElementById('nav');

      burger.addEventListener('click', e => {
        e.preventDefault();
        nav.classList.toggle('active');
      });
    };
  };

  new App();
})();