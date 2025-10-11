(function () {
  if (typeof ScrollTrigger !== 'undefined') {
    var appSection = document.querySelector('.trigger-app');
    if (appSection) {
      ScrollTrigger.create({
        trigger: '.trigger-app',
        start: 'top top',
        end: '+=8000',
        scrub: true,
        pin: '.app-container',
        animation: gsap
          .timeline()
          .to('.caption', { scale: 0 })
          .from('.cover-img-1', { x: innerWidth * -2, duration: 3 }, '-=2')
          .from('.img-2', { x: innerWidth * 2, duration: 1 })
          .from('.img-3', { x: innerWidth * 2, duration: 1 })
          .from('.img-4', { x: innerWidth * 2, duration: 1 })
          .set('.img-2', { opacity: '0', duration: 1 }, '<')
          .to('.img-3', { opacity: '0', duration: 1 }, '<')
          .set('.cover-img-1', { opacity: '0', duration: 1 }, '<')
          .to('.app-container-description', { opacity: '1' }),
      });
    }
  }

  if (typeof ScrollMagic !== 'undefined') {
    var magicText = document.querySelector('.magic-text-container');
    var magicSpans = magicText ? magicText.querySelectorAll('span') : [];
    if (magicSpans.length) {
      var controller = new ScrollMagic.Controller();
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.scroll-magic-container',
          start: 'top top',
          scrub: true,
          pin: true,
          end: 'bottom top',
        },
      });

      tl.staggerFromTo(
        '.magic-text-container span',
        0.5,
        {
          ease: Back.easeOut.config(1.7),
          opacity: 0,
          rotation: 180,
          y: -100,
        },
        {
          ease: Back.easeOut.config(1.7),
          opacity: 1,
          rotation: 360,
          y: 0,
        },
        0.1,
        '+=0',
        function () {
          console.log('tl2:end');
        }
      );
    }
  }
})();
