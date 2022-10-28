
!function(t){
    "use strict";
    t("a.page-scroll").bind("click",function(a){
        var o=t(this);t("html, body").stop().animate({
            scrollTop:t(o.attr("href")).offset().top-50},
        1250,
        "easeInOutExpo"),
        a.preventDefault()}),
        t("body").scrollspy({
            target:".navbar-fixed-top",
            offset:100}),
        t(".navbar-collapse ul li a").click(function(){
            t(".navbar-toggle:visible").click()}),
        t("#mainNav").affix({offset:{top:50}});

        $(".carousel .owl-carousel").owlCarousel({
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            smartSpeed: 10,
            dots: false,
            loop: true,
            nav : false,
        });

    var myImg = document.querySelector(".img");
    var currHeight = myImg.clientHeight;
    var element = document.querySelector(".carousel");
    element.style.height = currHeight;



}(jQuery);


