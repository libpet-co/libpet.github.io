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

// const progressCircles = document.querySelectorAll(".autoplay-progress svg");
// const progressContents = document.querySelectorAll(".autoplay-progress span");

// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 7000,
//     disableOnInteraction: false
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
//   on: {
//     autoplayTimeLeft(s, time, progress) {
//       progressCircles.forEach(circle => {
//         circle.style.setProperty("--progress", 1 - progress);
//       });
//       progressContents.forEach(content => {
//         content.textContent = `${Math.ceil(time / 1000)}`;
//       });
//     }
//   }
// });

// const progressCircles = document.querySelectorAll(".autoplay-progress svg");
// const progressContents = document.querySelectorAll(".autoplay-progress span");

// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 10000,
//     disableOnInteraction: false
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
//   on: {
//     autoplayTimeLeft(s, time, progress) {
//       progressCircles.forEach(circle => {
//         circle.style.setProperty("--progress", 1 - progress);
//       });
//       progressContents.forEach(content => {
//         content.textContent = `${Math.ceil(time / 1000)}`;
//       });
//     }
//   }
// });


const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const texts = [
  "",
  "See",
  "The",
  "Magic",
  "See The Magic",
  "",
];

const morphTime = 0.5;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  if (textIndex <= 9) {
    // Stop the animation if textIndex is equal to 5
    requestAnimationFrame(animate);
  }

  if (textIndex === 10) {
    const testimonialsElement = document.querySelector('.gtco-testimonials');
    if (testimonialsElement) {
      const offsetTop = testimonialsElement.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetTop, behavior: 'auto' });
    }
  }

  console.log(textIndex);
  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }

      doMorph();
  } else {
      doCooldown();
  }


}

let transitionOneScene = new ScrollMagic.Scene({
  triggerElement: '#trigger1',
  triggerHook: 0,
  duration: '100%',
  indent: 200
})
.on('enter', function(e){

  if (textIndex <= 6 && textIndex > 0) {
    animate();
  }
})
.addIndicators()
.setPin('#pin1')
.addTo(controller);

// var pinIntroScene2 = new ScrollMagic.Scene({
//   triggerElement: '#trigger1',
//   triggerHook: 0.4
// })
// .setPin('#pin1', {pushFollowers: false})
// .addTo(controller);


// animate();
