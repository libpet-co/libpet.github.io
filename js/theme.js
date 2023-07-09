window.onload = function() {


// let scene4 = new ScrollMagic.Scene({
//   duration: 1000,
//   triggerElement: '.transition-section',
//   triggerHook: 0.5
// })
// .addIndicators()
// .setTween(staggerTween)
// .addTo(controller)


// const opacityFancyTween = TweenMax.fromTo(text3, 0.5, {opacity: 1}, {opacity: 0});
// const opacityFancyScene = new ScrollMagic.Scene({
//   triggerElement: ".index-video",
//   triggerHook: 1,
//   duration: 200,
// })
// .setTween(opacityFancyTween)
// .addTo(controller);
/*
 */

const controller = new ScrollMagic.Controller();

/**
 * Text slide animation (See the Magic)
 */
const fancyText = document.querySelector(".mission .hero-text");
const strText = fancyText.textContent;
const splitText = strText.split("");
fancyText.textContent = "";
for (let i = 0; i < splitText.length; i++){
  fancyText.innerHTML += "<span>" + splitText[i] + "</span>";
//   const span = fancyText.querySelectorAll('span')[i];
//   span.classList.add('faded');
}

const aboutUsBtn = document.getElementById("about-button");
const staggerTween = TweenMax.staggerFromTo(".faded", 0.01, {opacity:0}, {opacity:1, ease:Back.easeOut}, 0.5);
let fancyScene = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: '.mission',
  triggerHook: 0.5
})
// .addIndicators()
.on('enter', function(e){
    for (let i = 0; i < splitText.length; i++){
        setTimeout(function(){
            const span = fancyText.querySelectorAll('span')[i];
            span.classList.add('faded');
        }, i * 25);
    }
    setTimeout(function(){
      aboutUsBtn.classList.add("appear");
    }, 2000);
})
.addTo(controller);

// let buttonFadeScene = new ScrollMagic.Scene({
//   duration: 1000,
//   triggerElement: '.mission',
//   triggerHook: 0.5
// })
// .on('leave', function(e){
//   aboutUsBtn.classList.remove('appear');
// })
// .setClassToggle('#about-button', 'appear')
// .addTo(controller);


    // const text = document.querySelector(".mission .hero-text");
    // const strText = text.textContent;
    // const splitText = strText.split("");
    // text.textContent = "";

    // for (let i = 0; i < splitText.length; i++){
    //     text.innerHTML += "<span>" + splitText[i] + "</span>";
    // }

    // let char = 0;
    // let timer = setInterval(onTick, 50);

    // function onTick(){
    //     const span = text.querySelectorAll('span')[char];
    //     span.classList.add('faded');
    //     char++;
    //     if (char === splitText.length){
    //         complete();
    //         return;
    //     }
    // }
    
    // function complete(){
    //     clearInterval(timer);
    //     timer = null;
    // }

};