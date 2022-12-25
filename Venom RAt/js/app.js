(function ($) {
	"use strict";
	$('a.js-scroll-trigger:not([href="#"])').click(function (s) {
		s.preventDefault();
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				window.smoothScroll(target.offset().top - 40, 800)
			}
		}
	});
	$('.js-scroll-trigger').click(function () {
		$('.navbar-collapse').collapse('hide');
	});
	var navbarCollapse = function () {
		if ($("#menu").offset().top > 100) {
			$("#menu").addClass("navbar-shrink");
		} else {
			$("#menu").removeClass("navbar-shrink");
		}
	};
	navbarCollapse();
	$(window).scroll(navbarCollapse);
})(jQuery);
AOS.init({once:true});