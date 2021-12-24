//Navbar scroll behavior
$(document).ready(function() {

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 60) {
            //clearHeader
            $(".navbar").addClass("bg-light");
        } else {
            $(".navbar").removeClass("bg-light");
        }
    });
});
//Preloader 
$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 500;

    function hidePreloader() {
        var preloader = $('.preloader');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});