const controller = new ScrollMagic.Controller();

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