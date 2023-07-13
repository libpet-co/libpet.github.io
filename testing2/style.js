// gsap.timeline({
//     scrollTrigger: {
//       trigger: "scroll-magic-container",
//       start: "center center",
//       end: "bottom top",
//       scrub: true,
//       markers: true,
//       pin: true
//     }
// })
// .to(".text", {scale: 0})
// .from(".box1", {x: innerWidth * -1})
// .from(".box2", {x: innerWidth * 1})
// .from(".box3", {x: innerWidth * 1})
// .from(".box4", {x: innerWidth * 1});

// const t = gsap.timeline();

// t.to(".text", {scale: 0})
// t.from(".cover-img-1", {x: innerWidth * -1, duration: 3});
// t.from(".img-2", {x: innerWidth * 1, duration: 3});
// t.from(".img-3", {x: innerWidth * 1, duration: 3});
// t.from(".img-4", {x: innerWidth * 1, duration: 3});

ScrollTrigger.create({
  trigger: '.app-container',
  start: 'top top',
  end: '+=2000',
  scrub: true,
  markers: true,
  pin: true,
  animation:
    gsap.timeline()
    .to(".text", {scale: 0})
    .from(".cover-img-1", {x: innerWidth * -2, duration: 3})
    .from(".img-2", {x: innerWidth * 2, duration: 3})
    .from(".img-3", {x: innerWidth * 2, duration: 3})
    .from(".img-4", {x: innerWidth * 2, duration: 3})
})
