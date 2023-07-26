$(document).ready(function () {

	$('.js-menu-button').click(function (e) {

		e.preventDefault();
		updateMenuButton();

	});

});

function updateMenuButton() {
	$('.js-menu-button').find('.menu-icon').toggleClass('is-active');
}

var isClick = 0;
$(".hamMenu").click(
	function () {
		if (isClick==0) {
			$(".menuBox").stop().fadeIn('slow');
			isClick = 1;
		} else {
			$(".menuBox").stop().fadeOut('fast');
			isClick = 0;
		}
	}
);