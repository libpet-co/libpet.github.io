/*!
 * */
!function(t){"use strict";t("a.page-scroll").bind("click",function(a){var o=t(this);t("html, body").stop().animate({scrollTop:t(o.attr("href")).offset().top-50},1250,"easeInOutExpo"),a.preventDefault()}),t("body").scrollspy({target:".navbar-fixed-top",offset:100}),t(".navbar-collapse ul li a").click(function(){t(".navbar-toggle:visible").click()}),t("#mainNav").affix({offset:{top:50}})}(jQuery);


function setLowVolume() {
    var myAudio = document.getElementById("audio1");
    myAudio.volume = 0.4; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}

let headings = gsap.utils.toArray(".spacer-h1");

headings.forEach(function (element, index) {
  gsap.to(element, {
    backgroundImage: "linear-gradient(45deg, #000 0%, #fff 200%, #323232 400%)",
    duration: 2,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top 75%",
      end: "top top",
      scrub: true,
      markers: false
    }
  });
});

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('.first-h1');

const section = document.querySelector('.intro-section');
const end = section.querySelector('h1');

//ScrollMagic
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 7000,
  triggerElement: intro,
  triggerHook: 0
})
//.addIndicators()
.setPin(intro)
.addTo(controller);

const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

const text2 = section.querySelector('.intro-section-text');

const textAnim2 = TweenMax.fromTo(text2, 3, {opacity: 0}, {opacity: 1});

let scene3 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: section,
  triggerHook: -5000
})
.setPin(section)
//.addIndicators()
.setTween(textAnim2)
.addTo(controller)

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e =>{
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
}, 33.3);
