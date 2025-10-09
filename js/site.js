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

(function () {
  function setupLanguageDropdown() {
    var dropdowns = Array.from(document.querySelectorAll(".dropdown"));
    if (!dropdowns.length) {
      return;
    }

    dropdowns.forEach(function (dropdown) {
      var button = dropdown.querySelector(".dropbtn");
      var menu = dropdown.querySelector(".dropdown-content");

      if (!button || !menu) {
        return;
      }

      button.addEventListener("click", function (event) {
        event.preventDefault();
        dropdowns.forEach(function (other) {
          if (other === dropdown) {
            return;
          }
          var otherMenu = other.querySelector(".dropdown-content");
          if (otherMenu) {
            otherMenu.classList.remove("show");
          }
        });
        menu.classList.toggle("show");
      });
    });

    document.addEventListener("click", function (event) {
      dropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
          var menu = dropdown.querySelector(".dropdown-content");
          if (menu) {
            menu.classList.remove("show");
          }
        }
      });
    });
  }

  function initResponsiveText() {
    var elements = Array.from(
      document.querySelectorAll("[data-text-small]")
    );
    if (!elements.length) {
      return;
    }

    var entries = elements.map(function (el) {
      if (!el.dataset.textLarge) {
        el.dataset.textLarge = el.innerHTML.trim();
      }

      var breakpoint = parseInt(el.dataset.breakpoint || "568", 10);
      return { element: el, breakpoint: breakpoint };
    });

    function applyResponsiveCopy() {
      var width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      entries.forEach(function (entry) {
        var el = entry.element;
        var breakpoint = entry.breakpoint;
        var small = el.dataset.textSmall;
        var large = el.dataset.textLarge;

        if (!small) {
          return;
        }

        if (width < breakpoint) {
          if (el.innerHTML !== small) {
            el.innerHTML = small;
          }
        } else if (large && el.innerHTML !== large) {
          el.innerHTML = large;
        }
      });
    }

    applyResponsiveCopy();
    window.addEventListener("resize", applyResponsiveCopy);
  }

  function initHeaderLazyLoad() {
    var headers = Array.from(
      document.querySelectorAll(".header-container[data-bgimage]")
    );
    if (!headers.length) {
      return;
    }

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var target = entry.target;
              target.style.backgroundImage =
                "url('" + target.dataset.bgimage + "')";
              observer.unobserve(target);
            }
          });
        },
        { rootMargin: "250px" }
      );

      headers.forEach(function (header) {
        observer.observe(header);
      });
    } else {
      headers.forEach(function (header) {
        header.style.backgroundImage =
          "url('" + header.dataset.bgimage + "')";
      });
    }
  }

  function initGlideCarousels() {
    if (typeof Glide === "undefined") {
      return;
    }

    var carousels = Array.from(
      document.querySelectorAll(".images.glide")
    );

    if (!carousels.length) {
      return;
    }

    carousels.forEach(function (carousel) {
      if (carousel.dataset.glideInitialized) {
        return;
      }

      var glide = new Glide(carousel, {
        type: "carousel",
        perView: 2,
        focusAt: "center",
        gap: 40,
        breakpoints: {
          1200: {
            perView: 2,
            gap: 20,
          },
          800: {
            perView: 1,
          },
        },
      });

      glide.mount();
      carousel.dataset.glideInitialized = "true";
    });
  }

  function initGlideAspect() {
    var containers = Array.from(
      document.querySelectorAll("[data-glide-resize]")
    );

    if (!containers.length) {
      return;
    }

    function applyRatio() {
      containers.forEach(function (container) {
        var ratio = container.dataset.glideResize || "16:9";
        var parts = ratio.split(":");
        var widthRatio = parseFloat(parts[0]) || 16;
        var heightRatio = parseFloat(parts[1]) || 9;
        var slides = container.querySelectorAll(".glide__slide");

        slides.forEach(function (slide) {
          var width = slide.offsetWidth;
          if (!width) {
            return;
          }
          var height = (width * heightRatio) / widthRatio;
          slide.style.height = height + "px";
        });
      });
    }

    applyRatio();
    window.addEventListener("resize", applyRatio);
  }

  function initAOS() {
    if (window.AOS && typeof window.AOS.init === "function") {
      window.AOS.init();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupLanguageDropdown();
    initResponsiveText();
    initHeaderLazyLoad();
    initGlideCarousels();
    initGlideAspect();
    initAOS();
  });
})();
