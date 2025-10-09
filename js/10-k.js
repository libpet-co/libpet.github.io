const controller = new ScrollMagic.Controller();

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-magic-container",
    start: "top top",
    scrub: true,
    pin: true,
    end: "bottom top",
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
