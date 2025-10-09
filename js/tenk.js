ScrollTrigger.create({
  trigger: '.trigger-app',
  start: 'top top',
  end: '+=8000',
  scrub: true,
  pin: ".app-container",
  animation:
    gsap.timeline()
    .to(".caption", {scale: 0})
    .from(".cover-img-1", {x: innerWidth * -2, duration: 3}, "-=2")
    .from(".img-2", {x: innerWidth * 2, duration: 1})
    .from(".img-3", {x: innerWidth * 2, duration: 1})
    .from(".img-4", {x: innerWidth * 2, duration: 1})
    .set(".img-2", {opacity: '0', duration: 1}, "<")
    .to(".img-3", {opacity: '0', duration: 1}, "<")
    .set(".cover-img-1", {opacity: '0', duration: 1}, "<")
    .to(".app-container-description", {opacity: '1'})

})
