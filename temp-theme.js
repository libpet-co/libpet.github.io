/*!
!function(t){"use strict";t("a.page-scroll").bind("click",function(a){var o=t(this);t("html, body").stop().animate({scrollTop:t(o.attr("href")).offset().top-50},1250,"easeInOutExpo"),a.preventDefault()}),t("body").scrollspy({target:".navbar-fixed-top",offset:100}),t(".navbar-collapse ul li a").click(function(){t(".navbar-toggle:visible").click()}),t("#mainNav").affix({offset:{top:50}})}(jQuery);

 * */



var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function setLowVolume() {
    var myAudio = document.getElementById("audio1");
    myAudio.volume = 0.4; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}

let headings = gsap.utils.toArray(".spacer-h1");

headings.forEach(function (element, index) {
  gsap.to(element, {
    backgroundImage: "linear-gradient(45deg, #000 0%, #fff 100%, #323232 200%)",
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
  duration: 2000,
  triggerElement: '.nav-container',
  triggerHook: 0
})
.setPin(intro)
.addTo(controller);

const textAnim = TweenMax.fromTo(text, 2, 
  {
    opacity: 1,
    display: "inline",
  }, 
  {
    opacity: 0,
    scale: "3",
    onComplete: function() {
      text.style.display = "none";
    }
  });
let textscene = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro,
  triggerHook: 0,
})
.setTween(textAnim)
.addTo(controller);

scene.on("enter", function () {
  text.style.display = "inline";
});
scene.on("leave", function () {
  text.style.display = "none";
});

const shadow = intro.querySelector('.shadow');
const shadowAnim = TweenMax.fromTo(shadow, 2,
  {
    opacity: 0.3,
  },
  {
    opacity: 1,
  });
let shadowScene = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro,
  triggerHook: 0,
})
.setTween(shadowAnim)
.addTo(controller);

const text2 = document.querySelector('.intro-section-text');
const textAnim2 = TweenMax.fromTo(text2, 2, {opacity: 0}, {opacity: 1});
let scene3 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: '.intro-section',
  triggerHook: 0
})
.setPin(section)
.setTween(textAnim2)
.addTo(controller)

/**
 * Text slide animation (See the Magic)
 */
const fancyText = document.querySelector(".fancy");
const strText = fancyText.textContent;
const splitText = strText.split("");
fancyText.textContent = "";

for (let i = 0; i < splitText.length; i++){
  fancyText.innerHTML += "<span>" + splitText[i] + "</span>";
  const span = fancyText.querySelectorAll('span')[i];
  span.classList.add('faded');
}

const text3 = document.querySelector('.fancy');
const staggerTween = TweenMax.staggerFromTo(".faded", 2, {opacity:0}, {opacity:1, ease:Back.easeOut}, 0.5);
let scene4 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: '.transition-section',
  triggerHook: 0.5
})
.setPin('.transition-section')
.setTween(staggerTween)
.addTo(controller)


const opacityFancyTween = TweenMax.fromTo(text3, 0.5, {opacity: 1}, {opacity: 0});
const opacityFancyScene = new ScrollMagic.Scene({
  triggerElement: ".index-video",
  triggerHook: 1,
  duration: 200,
})
.addIndicators()
.setTween(opacityFancyTween)
.addTo(controller);
/*
 */

/*
///video 1 Scene animation
*/
var video_1 = document.getElementById('video-1'); 
let video1Scene = new ScrollMagic.Scene({
  triggerElement: ".index-video",
  triggerHook: 0,
  duration: 3000,
})
.setPin(".index-video")
.on("enter", function (event) {
  video_1.play();
})
.on("leave", function (event) {
  video_1.pause();
  event.target.trigger("end");
})
.addTo(controller);



const opacityTween = TweenMax.fromTo(video_1, 0.5, {opacity: 0}, {opacity: 1});
const opacityScene = new ScrollMagic.Scene({
  triggerElement: ".index-video",
  triggerHook: 0.5,
  duration: 100,
})
.setTween(opacityTween)
.addTo(controller);
/**
 */


//Video Animation
let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on("update", e =>{
  scrollpos = e.scrollPos / 1000;
});


/*
setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(roundToTwo(scrollpos), roundToTwo(delay));
  if (roundToTwo(delay)==roundToTwo(scrollpos)){
    video.pause();
  }  
  video.currentTime = delay;
}, 33.3);

function roundToTwo(num) {
  return +(Math.round(num + "e+2")  + "e-2");
}
*/

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}