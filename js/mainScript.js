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
	const childDiv3 = document.querySelector('.mainSec4__content')

	
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
	} else if (스크롤이넘어간정도 < 2000) {
		$(childDiv2).stop().animate(
			{
				opacity: "1",
			}, 2000
		);
		$(childDiv3).stop().animate(
			{
				opacity: "0",
			}, 10
		);
	}else if (스크롤이넘어간정도 < 2400) {
		$(childDiv3).stop().animate(
			{
				opacity: "1",
			}, 2000
		);
	}

}

var slide = $(".slide>a");
var sno = 0;
var eno = slide.length - 1;

var num = 0;
var isNegativeNum = false;
let text = ['<h1>현재 홍보중<br>(이미지를 클릭하면 프공방으로 이동합니다)</h1>', '<h1>프로필 제출 링크로 이동</h1>', '<h1>많은 홍보 부탁드립니다.</h1>']

var slideText = $("slideText>.textbox");

//3초간 실행
var timer = setInterval("autoSlide()",3000);

function autoSlide(){
	$(slide[sno]).stop().animate({
		rotate: num+"deg",
		"margin-left": "-200vw"
	}, 1000,
	function(){
        //원래 위치로 (왼쪽), 대기조
        $(this).css({
			rotate: "0deg",
			"margin-left": "100vw"
		})
    });

	sno++;
	isNegativeNum = !isNegativeNum;
	if (isNegativeNum) {
		num= Math.random() *5
	} else {
		num= -Math.random() *5
	}
	
	
    if(sno > eno){
        sno = 0;
    }

	$(slide[sno]).stop().animate({
		rotate: num+"deg",
		"margin-left": "-30vw"
    }, 1000)
	const element = document.getElementById('textbox');
  	element.innerHTML = text[sno];
}

$(".slide>a").hover(
	function () {
		clearInterval(timer);
	},
	function () {
		timer = setInterval("autoSlide()",3000);
	}
);

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