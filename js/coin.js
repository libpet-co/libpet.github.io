jQuery(document).ready(function($){

  $('.left').on('mouseenter', function(){
    $('#coin').removeClass();
    setTimeout(function(){
      $('#coin').addClass('heads');
      console.log("Left Heads");
    }, 100);
  });
  $('.right-transparent').on('mouseenter', function(){
    $('#coin').removeClass();
    setTimeout(function(){
      $('#coin').addClass('tails');
      console.log("Right Tails");
    }, 100);
  });
});