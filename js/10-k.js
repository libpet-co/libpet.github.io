// Get a reference to the image element
const image = document.getElementById("intro-background-image");

// Check the viewport width when the page loads and on window resize
function checkViewportWidth() {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  // If the viewport width is smaller than 600 pixels, set a new image src
  if (viewportWidth < 425) {
    image.src = "img/background-xl.png";
    image.alt = "";
  } else {
    // Otherwise, set the original image src
    image.src = "img/background-1.png";
    image.alt = "";
  }
}

// Call the function when the page loads and on window resize
window.addEventListener("load", checkViewportWidth);
window.addEventListener("resize", checkViewportWidth);

const controller = new ScrollMagic.Controller();

/**
 * Text slide animation (See the Magic)
 */
// const fancyText = document.querySelector(".fancy");
// const strText = fancyText.textContent;
// const splitText = strText.split("");
// fancyText.textContent = "";

// for (let i = 0; i < splitText.length; i++){
//   fancyText.innerHTML += "<span>" + splitText[i] + "</span>";
//   const span = fancyText.querySelectorAll('span')[i];
//   span.classList.add('faded');
// }

// const staggerTween = TweenMax.staggerFromTo(".faded", 0.01, {opacity:0}, {opacity:1, ease:Back.easeOut}, 0.5);
// let fancyScene = new ScrollMagic.Scene({
//   duration: 500,
//   triggerElement: '.transition-section',
//   triggerHook: 0.5
// })
// .addIndicators()
// .setPin('.pin-transition')
// .setTween(staggerTween)
// .addTo(controller);


  //video slider //

  const btns = document.querySelectorAll(".nav-btn");
  const slides = document.querySelectorAll(".video-slide");

  var slideNav = function(manual){
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
  }

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      slideNav(i);
    });
  });

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-magic-container",
    start: "top top",
    scrub: true,
    pin: true,
    end: "bottom top",
    // markers: true,
  }
});
tl2.staggerFromTo(
    '.magic-text-container span', .5, {
        ease: Back.easeOut.config(1.7),
        opacity: 0,
        rotation: 180,
        y: -100
    }, {
        ease: Back.easeOut.config(1.7),
        opacity: 1,
        rotation: 360,
        y: 0
    }, .1, '+=0', () => {
        console.log('tl2:end')
    }
)