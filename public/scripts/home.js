$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();

    $(".home-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".home").offset().top
        }, 700);
    });

    $(".about-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".about").offset().top
        }, 700);
    });

    $(".projects-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".projects").offset().top+2
        }, 700);
    });

    $(".contacts-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contacts").offset().top+11
        }, 700);
    });

  });
  