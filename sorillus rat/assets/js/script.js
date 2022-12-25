$(function () {
    "use strict";

    /*navbar expand*/
    function navScroll() {
        const $navMenu = $('.nav-menu');
        if ($(window).scrollTop() > 50) {
            $navMenu.addClass('is-scrolling');
        } else {
            $navMenu.removeClass("is-scrolling");
        }
    }

    navScroll();
    $(window).on('scroll', function () {
        navScroll();
    });

});

function disableSpace(event) {
    if (event.which === 32) {
        event.preventDefault();
        return false;
    }
}