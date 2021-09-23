$(document).ready(function(){
  $(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
          $('.self_intro').animate({opacity:'1'},2000,)
          $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            onStep: function(from, to, percent) {
              $(this.el).find('.percent').text(Math.round(percent));
            }
          });
        }
    });
});
    

  // hide #back-top first
$("a.up").hide();
 
// fade in #back-top
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('a.up').fadeIn('slow');
        } else {
            $('a.up').fadeOut('slow');
        }
    });
});

  $('.dw_arrow').click(function(){

    var offset = $('h2.main_h2').offset();

    $('html').animate({scrollTop : 1070}, 400);

  });

  $('.mc_arrow').click(function(){

    var offset = $('h2.myc_h2').offset();

    $('html').animate({scrollTop : 2310}, 400);

  });

  $('.up').click(function(){

    var offset = $('body').offset();

    $('html').animate({scrollTop : 0}, 400);

  });

  $('.nav_About').click(function(){

    var offset = $('h2.main_h2').offset();

    $('html').animate({scrollTop : 1070}, 400);

  });

  $('.nav_Content').click(function(){

    var offset = $('h2.myc_h2').offset();

    $('html').animate({scrollTop : 2310}, 400);

  });

  $('.nav_Contact').click(function(){

    var offset = $('#footer').offset();

    $('html').animate({scrollTop : 5310}, 400);

  });

  $(".c1").click(function(){ 
    $("#popup1").fadeIn();
    $('body').css("overflow", "hidden");
  }); 
  $(".dark").click(function(){ 
    $("#popup1").fadeOut();
    $('body').css("overflow", "scroll");
  });

  $(".c2").click(function(){ 
    $("#popup2").fadeIn(); 
    $('body').css("overflow", "hidden");
  }); 
  $(".dark").click(function(){ 
    $("#popup2").fadeOut(); 
    $('body').css("overflow", "scroll");
  });

  $(".c3").click(function(){ 
    $("#popup3").fadeIn(); 
    $('body').css("overflow", "hidden");
  }); 
  $(".dark").click(function(){ 
    $("#popup3").fadeOut(); 
    $('body').css("overflow", "scroll");
  });

  $(".c4").click(function(){ 
    $("#popup4").fadeIn(); 
    $('body').css("overflow", "hidden");
  }); 
  $(".dark").click(function(){ 
    $("#popup4").fadeOut(); 
    $('body').css("overflow", "scroll");
  });

  $(".c5").click(function(){ 
    $("#popup5").fadeIn(); 
    $('body').css("overflow", "hidden");
  }); 
  $(".dark").click(function(){ 
    $("#popup5").fadeOut(); 
    $('body').css("overflow", "scroll");
  });

  $(".c6").click(function(){ 
    $("#popup6").fadeIn(); 
    $('body').css("overflow", "hidden");
  }); 
  $(".dark").click(function(){ 
    $("#popup6").fadeOut(); 
    $('body').css("overflow", "scroll");
  });
});