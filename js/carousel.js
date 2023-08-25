(function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        onInitialized: function(event) {
          $(event.target).find('video').each(function(){
            this.pause();
          });
          var currentVideo = $(event.target).find('.owl-item.active video')[0];
          if(currentVideo){
            currentVideo.currentTime = 0;
            currentVideo.play();
          }
          currentVideo.onended = function(){
            $(event.target).trigger('next.owl.carousel');
          };
  
          var progressCircles = $(".center svg").get(0);
          // var progressContents = $(".autoplay-progress span").get(0);
          currentVideo.ontimeupdate = function(){
            var progress = currentVideo.currentTime / currentVideo.duration;
            progressCircles.style.setProperty("--progress", progress);
          }
  
          var playing = true;
          var btn = $(".center #play-control-btn").get(0);
  
          $(btn).click(function() {
            // toggle the value of the 'playing' variable
            if(playing){
              $(btn).removeClass("playing");
              currentVideo.pause();
              console.log(playing);
            }
            
            if (!playing){
              $(btn).addClass("playing");
              currentVideo.play();
              console.log(playing);
            }
            playing = !playing;
  
          });
  
        },
        onTranslated: function(event) {
          var btn = $(".center #play-control-btn").get(0);

          $(event.target).find('video').each(function(){
            this.pause();
          });
          var currentVideo = $(event.target).find('.owl-item.active video')[0];
          if(currentVideo){
            currentVideo.currentTime = 0;
            currentVideo.play();
            $(btn).addClass("playing");
          }
          currentVideo.onended = function(){
            $(event.target).trigger('next.owl.carousel');
          };    
  
          var progressCircles = $(".center svg").get(0);
          // var progressContents = $(".autoplay-progress span").get(0);
          currentVideo.ontimeupdate = function(){
            var progress = currentVideo.currentTime / currentVideo.duration;
            progressCircles.style.setProperty("--progress", progress);
          }
  
          var playing = true;
  
          $(btn).click(function() {
            // toggle the value of the 'playing' variable
            if(playing){
              $(btn).removeClass("playing");
              currentVideo.pause();
              console.log(playing);
            }
            
            if (!playing){
              $(btn).addClass("playing");
              currentVideo.play();
              console.log(playing);
            }
            playing = !playing;
  
          });
        },
        loop: true,
        center: true,
        margin: -20,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1.1,
            nav: true
          },
          680: {
            items: 1.1,
            nav: true,
          },
          1000: {
            items: 1.5,
            nav: true
          }
        }
      });
      var owlIndex, count;
      $(document).on('click', '.owl-item', function() {
        owlIndex = $(this).index();
        count = document.querySelectorAll(".owl-item.active").length;
        $('.owl-stage-outer').trigger('to.owl.carousel', owlIndex - count);
      });  
      
    };
  
    (function ($) {
      $(window).on('load', function(){
        carousels();
        alert("Loaded");
      })
      // carousels();
    })(jQuery);
  })();