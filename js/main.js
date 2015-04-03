$(document).ready(function(){

$('body').hide().fadeIn(1100);




$('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutQuart');
        event.preventDefault();
    });

// $('nav').hide();



$(window).scroll(function() {
    if ($(".navbar").offset().top > 300) {
        $(".navbar-fixed-top").addClass("top-nav-appear");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-appear");
    }
});






















});