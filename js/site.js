/**
 * Shared site-wide scripts.
 * - Handles collapsing the navbar on link click.
 * - Initialises the Swiper carousel when present.
 */
(function ($) {
  "use strict";

  if (!$) {
    return;
  }

  $(function () {
    $(".navbar-nav .nav-link").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
  });
})(window.jQuery);

(function () {
  if (typeof Swiper === "undefined") {
    return;
  }

  var slider = document.querySelector(".slide-content");
  if (!slider) {
    return;
  }

  new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
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
        slidesPerView: 3,
      },
    },
  });
})();
