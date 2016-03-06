
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
