$(document).ready(function(){
    var windowsize = $(window).width();
    var subTitleAditionalSpace = 0;

    if(windowsize < 600) {
        subTitleAditionalSpace = 53;
    }

    $(".home-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".home").offset().top - subTitleAditionalSpace
        }, 700);
    });

    $(".about-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".about").offset().top - subTitleAditionalSpace
        }, 300);
    });

    $(".projects-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".projects").offset().top - subTitleAditionalSpace
        }, 300);
    });

    $(".skills-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".skills").offset().top - subTitleAditionalSpace
        }, 300);
    });

    $(".contacts-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contacts").offset().top - subTitleAditionalSpace
        }, 300);
    });

    // $(".email-btn").click(function() {
    //     window.open('http://stackoverflow.com', '_blank');
    // });

    // $(".linkedin-btn").click(function() {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $(".contacts").offset().top - subTitleAditionalSpace
    //     }, 300);
    // });

    // $(".github-btn").click(function() {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $(".contacts").offset().top - subTitleAditionalSpace
    //     }, 300);
    // });

    $(".menu-trigger").click(function() {
        $('#sidenav-custom').removeClass('hide-on-small-only');
    });

    $("section").click(function() {
        if(windowsize < 600) {
            $('#sidenav-custom').addClass('hide-on-small-only');
        }
    });

  });
  
