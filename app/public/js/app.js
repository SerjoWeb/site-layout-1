;(() => {
  'use strict';

  class App {
    constructor() {
      this.Init();
    };

    Init() {
      this.heroHeight();
      this.imageCarouselBg();
      this.imageSlider();
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

    imageCarouselBg() {
      const slides= [
        'public/img/bg.jpg',
        'public/img/bg1.jpg',
        'public/img/bg2.jpg'
      ];

      const hero = document.getElementById('hero');

      const infinityLoop = () => {
        for (let i = 0, sl = slides.length; i < sl; i++) {
          setTimeout(k => {
            if (i >= 0) {
              hero.style.backgroundImage = `url(${slides[k]})`;
            }
  
            if (i === 2) {
              setTimeout(() => {
                  infinityLoop();
              }, 10000);
            }
          }, i * 10000, i);
        }
      };

      infinityLoop();
    };

    imageSlider() {
      this.imageSliderHandler(
        document.getElementById('slide-1'),
        document.getElementById('prev-1'),
        document.getElementById('next-1')
      );

      this.imageSliderHandler(
        document.getElementById('slide-2'),
        document.getElementById('prev-2'),
        document.getElementById('next-2')
      );

      this.imageSliderHandler(
        document.getElementById('slide-3'),
        document.getElementById('prev-3'),
        document.getElementById('next-3')
      );
    };

    imageSliderHandler(slider, prev, next) {
      const slides= [
        slider.getAttribute('src'),
        'public/img/camera1.jpg',
        'public/img/camera2.jpg'
      ];

      prev.addEventListener('click', e => {
        e.preventDefault();

        const currentSlideNext = next.getAttribute('data-slide');
        const currentSlidePrev = prev.getAttribute('data-slide');

        if (Number(currentSlidePrev) === 0) {
          return;
        }
        
        if (Number(currentSlidePrev) > 0) {
          prev.setAttribute('data-slide', (Number(currentSlidePrev) - 1));
          next.setAttribute('data-slide', (Number(currentSlideNext) - 1));
          slider.setAttribute('src', slides[Number(currentSlidePrev) - 1]);
        }
      });

      next.addEventListener('click', e => {
        e.preventDefault();

        const currentSlideNext = next.getAttribute('data-slide');
        const currentSlidePrev = prev.getAttribute('data-slide');

        if (Number(currentSlideNext) === slides.length) {
          return;
        }
        
        if (Number(currentSlideNext) < slides.length) {
          prev.setAttribute('data-slide', (Number(currentSlidePrev) + 1));
          next.setAttribute('data-slide', (Number(currentSlideNext) + 1));
          slider.setAttribute('src', slides[Number(currentSlideNext)]);
        }
      });
    };
  };

  new App();
})();