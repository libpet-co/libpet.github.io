window.onload = function () {
  const controller = new ScrollMagic.Controller();

  /**
   * Text slide animation (See the Magic)
   */
  const fancyText = document.querySelector(".hero-text");
  const strText = fancyText.textContent;
  const splitText = strText.split("");
  fancyText.textContent = "";
  for (let i = 0; i < splitText.length; i++) {
    fancyText.innerHTML += "<span>" + splitText[i] + "</span>";
    //   const span = fancyText.querySelectorAll('span')[i];
    //   span.classList.add('faded');
  }

  const staggerTween = TweenMax.staggerFromTo(
    ".faded",
    0.01,
    { opacity: 0 },
    { opacity: 1, ease: Back.easeOut },
    0.5
  );
  let fancyScene = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: ".index-sl",
    triggerHook: 0.5,
  })
    // .addIndicators()
    .on("enter", function (e) {
      for (let i = 0; i < splitText.length; i++) {
        setTimeout(function () {
          const span = fancyText.querySelectorAll("span")[i];
          span.classList.add("faded");
        }, i * 50);
      }
    })
    .addTo(controller);
};
