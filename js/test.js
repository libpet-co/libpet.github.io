$('.page').each(function(i,e){
    $(this).click(function(event){
      var x = event.pageX;
      var y = event.pageY;
      
      var nextItem = i + 1;
      if (nextItem >= $('.page').length){
        nextItem = 0;
      }
      
      $('.page:eq('+ nextItem +')').css('z-index', parseInt($(this).css('z-index')) + 1);
      $('.page:eq('+ nextItem +')').css('clip-path', 'circle(0% at '+ x +'px '+ y +'px)');
      
      anime({
        targets: $('.page')[nextItem],
        update: function(anim) {
          $('.page:eq('+ nextItem +')').css('clip-path', 'circle('+ (anim.progress*2) +'% at '+ x +'px '+ y +'px)');
        }
      });
    });
  });