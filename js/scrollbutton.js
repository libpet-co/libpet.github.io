$(function () {
    var pagePositon = 0,
        sectionsSeclector = 'section',
        $scrollItems = $(sectionsSeclector),
        offsetTolorence = 30,
        pageMaxPosition = $scrollItems.length - 1;

    $scrollItems.each(function (index, ele) { $(ele).attr("debog", index).data("pos", index); });

    $(window).bind('scroll', upPos);

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

    function upPos() {
        var fromTop = $(this).scrollTop();
        var $cur = null;
        $scrollItems.each(function (index, ele) {
            if ($(ele).offset().top < fromTop + offsetTolorence) $cur = $(ele);
        });
        if ($cur != null && pagePositon != $cur.data('pos')) {
            pagePositon = $cur.data('pos');
            $('#scroll-button').show();
        }
    }



});
