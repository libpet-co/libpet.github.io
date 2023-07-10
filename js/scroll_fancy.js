let text = [...document.querySelectorAll('.musya h1')];
let spans = [];

text.forEach(paragraph => {
    let htmlString = '';
    let pArray = paragraph.textContent.split('');
    for(let i = 0; i < pArray.length; i++){
        htmlString += `<span>${pArray[i]}</span>`;
    }
    paragraph.innerHTML = htmlString;
})

spans = [...document.querySelectorAll('span')];

function revealSpans() {
    for(let i = 0; i < spans.length; i++){
        if(spans[i].parentElement.getBoundingClientRect().top < window.innerHeight / 100 * 93){
            let {left, top}  = spans[i].getBoundingClientRect();
            top = top - (window.innerHeight * 0.99);
            let opacityValue = 1 - ((top * .004) + (left * .002)) < 0.0 ? 0.0 : 1 - ((top * .004) + (left * .002)).toFixed(5);
            opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(5);
            spans[i].style.opacity = opacityValue;
        }
    }
}

window.addEventListener('scroll', () => {
    revealSpans();
})
revealSpans();

gsap.registerPlugin(ScrollTrigger);
gsap.set(".slide-1", { opacity: 1});

function animationOne() {
    const animationOne = gsap.timeline({
        scrollTrigger: {
          trigger: "#cont_anim",
          start: "top top",
          scrub: true,
          pin: true,
          end: "bottom+=3000px",
          markers: true,
        }
      });
    animationOne
    .to(".slide-1", { opacity: 0, xPercent: 20})
    .to(".slide-2", { opacity: 1, xPercent: 20})
    .to(".slide-2", {opacity: 1, xPercent: 20})
    .to(".slide-2", { opacity: 0, xPercent: 40 })
    .to(".slide-3", { opacity: 1 });
    return animationOne;
}

function animationTwo() {
    const animationTwo = gsap.timeline({
        scrollTrigger: {
            trigger: "#cont_anim_2",
            start: "top top",
            scrub: true,
            pin: true,
            end: "bottom+=3000px",
            markers: true
        }
      });
    animationTwo
    // .to(".slide-x1", { opacity: 0})
    .to(".slide-x2", { opacity: 1, xPercent: 20})
    .to(".slide-x2", {opacity: 0, xPercent: 40})
    .to(".slide-x3", { opacity: 1})
    .to(".slide-x3", { opacity: 0})
    .to(".slide-x4", { opacity: 1, xPercent: 20})
    .to(".slide-x4", { opacity: 0, xPercent: 40})
    .to(".slide-x5", { opacity: 1, xPercent: 20})
    .to(".slide-x5", { opacity: 0, xPercent: 40})
    .to(".slide-x6", { opacity: 1, xPercent: 20});
    return animationTwo;
}

// let tl = gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: "#cont_anim",
//       start: "top top",
//       scrub: true,
//       pin: true,
//       end: "bottom+=3000px",
//       markers: true,
//       paused: true
//     }
//   })
//   .to(".slide-1", { opacity: 0, xPercent: 20})
//   .to(".slide-2", { opacity: 1, xPercent: 20})
//   .to(".slide-2", {opacity: 1, xPercent: 20})
//   .to(".slide-2", { opacity: 0, xPercent: 40 })
//   .to(".slide-3", { opacity: 1 });

const master = gsap.timeline();
master.add(animationOne());
master.add(animationTwo(), '+=1');

//   let tl_2 = gsap.timeline({
//         scrollTrigger: {
//         trigger: "#cont_anim_2",
//         start: "top 5%",
//         scrub: true,
//         pin: true,
//         end: "bottom+=3000px",
//         markers: true,
//         paused: true
//         }
//     });

//     tl_2
//     .to(".slide-x1", { opacity: 0})
//     .to(".slide-x2", { opacity: 1})
//     .to(".slide-x2", {opacity: 0})
//     .to(".slide-x3", { opacity: 1})
//     .to(".slide-x3", { opacity: 0})
//     .to(".slide-2-4", { opacity: 1 })
//     .to(".slide-2-4", { opacity: 0 });


  