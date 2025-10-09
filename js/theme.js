window.onload = function () {
  const hero = document.querySelector(".hero-text");
  if (!hero || !hero.textContent) {
    return;
  }

  const controller = new ScrollMagic.Controller();

  const strText = hero.textContent;
  const splitText = strText.split("");
  hero.textContent = "";
  splitText.forEach(function (char) {
    hero.innerHTML += '<span>' + char + '</span>';
  });

  TweenMax.staggerFromTo(
    '.faded',
    0.01,
    { opacity: 0 },
    { opacity: 1, ease: Back.easeOut },
    0.5
  );

  new ScrollMagic.Scene({
    duration: 500,
    triggerElement: '.index-sl',
    triggerHook: 0.5,
  })
    .on('enter', function () {
      hero.querySelectorAll('span').forEach(function (span, index) {
        setTimeout(function () {
          span.classList.add('faded');
        }, index * 75);
      });
    })
    .addTo(controller);
};
