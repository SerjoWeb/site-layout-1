;(() => {
  'use strict';

  class App {
    constructor() {
      this.Init();
    };

    Init() {
      this.heroHeight();
    };

    heroHeight() {
      const headerHeight = document.getElementById('header').offsetHeight;
      const hero = document.getElementById('hero');
      const heroContainer = document.getElementById('hero-container');
      const height = `calc(100vh - ${headerHeight}px)`;

      hero.style.height = height;
      heroContainer.style.height = height;
    };
  };

  new App();
})();