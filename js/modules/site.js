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

      var glideOptions = {
        type: carousel.dataset.glideType || "carousel",
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
      };

      if (carousel.dataset.glidePerView) {
        var perView = parseInt(carousel.dataset.glidePerView, 10);
        if (!isNaN(perView)) {
          glideOptions.perView = perView;
        }
      }

      if (carousel.dataset.glideFocusAt) {
        glideOptions.focusAt = carousel.dataset.glideFocusAt;
      }

      if (carousel.dataset.glideGap) {
        var gapValue = parseInt(carousel.dataset.glideGap, 10);
        if (!isNaN(gapValue)) {
          glideOptions.gap = gapValue;
        }
      }

      if (carousel.dataset.glideBound === "true") {
        glideOptions.bound = true;
      }

      if (carousel.dataset.glidePeek) {
        var peekSetting = carousel.dataset.glidePeek.trim();
        var peekBefore = peekSetting;
        var peekAfter = peekSetting;

        if (peekSetting.includes(",")) {
          var parts = peekSetting.split(",");
          peekBefore = parts[0];
          peekAfter = parts[1];
        }

        var beforeValue = parseInt(peekBefore, 10);
        var afterValue = parseInt(peekAfter, 10);

        if (!isNaN(beforeValue) && !isNaN(afterValue)) {
          glideOptions.peek = {
            before: beforeValue,
            after: afterValue,
          };
        }
      }

      if ((carousel.dataset.glidePerView || carousel.dataset.glidePeek) && glideOptions.breakpoints) {
        Object.keys(glideOptions.breakpoints).forEach(function (key) {
          var bpConfig = glideOptions.breakpoints[key] || {};
          if (carousel.dataset.glidePerView) {
            bpConfig.perView = glideOptions.perView;
          }
          if (glideOptions.peek) {
            bpConfig.peek = { before: 0, after: 0 };
          }
          glideOptions.breakpoints[key] = bpConfig;
        });
      }

      if (carousel.dataset.glideRewind === "false") {
        glideOptions.rewind = false;
      }

      var glide = new Glide(carousel, glideOptions);

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

    function parseRatio(value) {
      if (!value) {
        return null;
      }

      var normalised = value.toString().toLowerCase().trim();
      if (normalised === "auto") {
        return null;
      }

      if (normalised.indexOf(":") !== -1) {
        var parts = normalised.split(":");
        var w = parseFloat(parts[0]);
        var h = parseFloat(parts[1]);
        if (w > 0 && h > 0) {
          return h / w;
        }
      }

      var numeric = parseFloat(normalised);
      if (!isNaN(numeric) && numeric > 0) {
        return numeric;
      }

      return null;
    }

    function findMedia(slide) {
      var media = slide.querySelector('img, picture img, video, iframe');
      if (!media) {
        var picture = slide.querySelector('picture');
        if (picture) {
          var img = picture.querySelector('img');
          if (img) {
            media = img;
          }
        }
      }
      return media;
    }

    function applyRatio() {
      containers.forEach(function (container) {
        var baseRatio = parseRatio(container.dataset.glideResize);
        var slides = container.querySelectorAll(".glide__slide");

        slides.forEach(function (slide) {
          var ratio = baseRatio;
          var media = findMedia(slide);

          if (media) {
            if (media.tagName === 'IMG') {
              if (!media.dataset.glideSizeBound) {
                media.addEventListener('load', applyRatio, { once: true });
                media.dataset.glideSizeBound = '1';
              }
              if (media.naturalWidth && media.naturalHeight) {
                ratio = media.naturalHeight / media.naturalWidth;
              }
              media.style.width = 'auto';
              media.style.height = '100%';
              media.style.maxWidth = '100%';
              media.style.maxHeight = '100%';
              media.style.objectFit = 'contain';
            } else if (media.tagName === 'VIDEO' || media.tagName === 'IFRAME') {
              media.style.width = '100%';
              media.style.height = '100%';
            }
          }

          if (!ratio) {
            ratio = 9 / 16;
          }

          var width = slide.getBoundingClientRect().width;
          if (!width && media) {
            width = media.getBoundingClientRect().width;
          }
          if (!width) {
            return;
          }

          var height = width * ratio;
          slide.style.height = height + 'px';
          slide.style.maxHeight = height + 'px';
          slide.style.display = 'flex';
          slide.style.alignItems = 'stretch';
          slide.style.justifyContent = 'center';
        });
      });
    }

    applyRatio();
    window.addEventListener('resize', applyRatio);
    window.addEventListener('load', applyRatio);
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
