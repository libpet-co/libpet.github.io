var swiper = new Swiper(".slide-content", {
  slidesPerView: 1.8,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 1.8,
    },
  },
});
