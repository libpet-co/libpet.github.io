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



const transitionWord = document.querySelector("logo");
const transitionText = document.querySelectorAll(".path-stroke");
// for (let i = 0; i < transitionText.length; i++){
//   console.log(`Letter ${i} is ${transitionText[i].getTotalLength()}`);
// }

const seeTheMagicStagger = TweenMax.staggerTo(".path-stroke", 2, {'stroke-dashoffset': 0, ease:Back.easeOut}, 0.2);
let seeTheMagicScene = new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  duration: "100%",
  triggerHook: 0
})
.setPin("#pin1", {pushFollowers: false})
// .addIndicators()
.setTween(seeTheMagicStagger)
.addTo(controller);