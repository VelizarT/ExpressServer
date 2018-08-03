$(document).ready(function(){

    $(".home-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".home").offset().top
        }, 700);
    });

    $(".about-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".about").offset().top
        }, 300);
    });

    $(".projects-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".projects").offset().top+2
        }, 300);
    });

    $(".skills-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".skills").offset().top+2
        }, 300);
    });

    $(".contacts-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contacts").offset().top
        }, 300);
    });

    $(".menu-trigger").click(function() {
        $('#sidenav-custom').show();
    });

    $("section").click(function() {
            $('#sidenav-custom').hide();
    });

  });
  
