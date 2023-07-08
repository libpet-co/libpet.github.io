$(function () {
    var pagePositon = 0,
        sectionsSeclector = 'section',
        $scrollItems = $(sectionsSeclector),
        offsetTolorence = 30,
        pageMaxPosition = $scrollItems.length - 1;

    //Map the sections:
    $scrollItems.each(function (index, ele) { $(ele).attr("debog", index).data("pos", index); });

    // Bind to scroll
    $(window).bind('scroll', upPos);

    //Move on click:
    $('#scroll-button a').click(function (e) {
        if (pagePositon + 1 <= pageMaxPosition) {
            pagePositon++;
            $('html, body').stop().animate({
                scrollTop: $scrollItems.eq(pagePositon).offset().top
            }, 300);
        } else if (pagePositon == pageMaxPosition) {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });
            $('#scroll-button').hide();
        }
    });

    //Update position func:
    function upPos() {
        var fromTop = $(this).scrollTop();
        var $cur = null;
        $scrollItems.each(function (index, ele) {
            if ($(ele).offset().top < fromTop + offsetTolorence) $cur = $(ele);
        });
        //console.log($cur.data('pos'));
        if ($cur != null && pagePositon != $cur.data('pos')) {
            pagePositon = $cur.data('pos');
            $('#scroll-button').show();
        }
    }

    // //hide the scrollbutton with it at the bottom(footer)
    // var scrollbutton = document.getElementById('scrollbutton');
    // var footer = document.querySelector('.footer');
    // var prevScrollpos = window.pageYOffset;

    // window.onscroll = function () {
    //     var currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollPos) {
    //         // Show the scroll button if the page is not scrolled to the bottom
    //         scrollbutton.classList.remove('hidden');
    //     } else {
    //         // Hide the scroll button if the page is scrolled to the bottom
    //         if (currentScrollPos + window.innerHeight >= footer.offsetTop) {
    //             scrollbutton.classList.add('hidden');
    //         }
    //     }
    //     prevScrollpos = currentScrollPos;
    // };

});