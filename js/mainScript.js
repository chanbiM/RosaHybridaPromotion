function updateMenuButton() {
	$('.js-menu-button').find('.menu-icon').toggleClass('is-active');
}

$(document).ready(function () {

	$('.js-menu-button').click(function (e) {

		e.preventDefault();
		updateMenuButton();

	});

});


window.onscroll = () => {
	const parentDiv = document.querySelector('.wrapper');
	const viewportHeight = window.innerHeight;
	const fromViewportToParentHeight = parentDiv.getBoundingClientRect().top;
	const 스크롤이넘어간정도 = viewportHeight - fromViewportToParentHeight;
	const divHeight = parentDiv.clientHeight;
	var scrollRate = 스크롤이넘어간정도 / divHeight * 100;
	const childDiv1 = document.querySelector('#mainSec2__section');
	const childDiv2 = document.querySelector('.mainSec3__content');

	
	console.log(스크롤이넘어간정도);
	if (스크롤이넘어간정도 < 900) {
		$(childDiv1).stop().animate(
			{
				opacity: "0",
				bottom: "0"
			}, 10
		);
	} else if (스크롤이넘어간정도 < 1800) {
		//스타일 적용하는 부분
		$(childDiv1).stop().animate(
			{
				opacity: "1",
				bottom: "5%"
			}, 1500
		);
		$(childDiv2).stop().animate(
			{
				opacity: "0",
			}, 10
		);
	} else {
		$(childDiv2).stop().animate(
			{
				opacity: "1",
			}, 2000
		);
	}

}