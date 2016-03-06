$(document).ready(function() {
  $(".fade-in, .fade-in-first").css("opacity", 0);
  $(".fade-in-first").animate({'opacity':'1'},1000);
});


$(function() {
    $(window).scroll( function(){


        $('.fade-in').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            bottom_of_window = bottom_of_window + 0;

            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1000);

            }
        });

    });
  });

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function(){
  if ($(window).width() > 1020) {
    $(".top").css("opacity", 1 - $(window).scrollTop() / 500);
  }
  else {
    $(".top").css("opacity", 1 - $(window).scrollTop() / 1000);
  }
});
