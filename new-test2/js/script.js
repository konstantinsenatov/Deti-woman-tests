var swiper = new Swiper(".test__swiper", {
	navigation: {
		nextEl: ".test__btn-next",
		prevEl: ".test__btn-prev",
	},
	spaceBetween: 50,
	effect: 'fade',
	allowTouchMove: false,
});

$(document).ready(function() {
	$( ".test__radiobuttons .test__radiobuttons-item" ).on( "click", function() {
		if ($(this).children().first().prop('checked', true)) {
			$(this).parent().parent().children('.test__btn-next').addClass('js-active');
			$(this).parent().addClass('disable-class');
			$(this).parent().parent().children('.test__results').slideDown(300);
		}
	});
	
	$( ".test__radiobuttons .test__radiobuttons-itemA" ).on( "click", function() {
		if ($(this).children().first().prop('checked', true)) {
			$(this).parent().parent().children('.test__results').children('.test__result').removeClass('js-active');
			$(this).parent().parent().children('.test__results').children('.test__resultA').addClass('js-active');
		}
	});
	
	$( ".test__radiobuttons .test__radiobuttons-itemB" ).on( "click", function() {
		if ($(this).children().first().prop('checked', true)) {
			$(this).parent().parent().children('.test__results').children('.test__result').removeClass('js-active');
			$(this).parent().parent().children('.test__results').children('.test__resultB').addClass('js-active');
		}
	});
	
	$( ".test__radiobuttons .test__radiobuttons-itemC" ).on( "click", function() {
		if ($(this).children().first().prop('checked', true)) {
			$(this).parent().parent().children('.test__results').children('.test__result').removeClass('js-active');
			$(this).parent().parent().children('.test__results').children('.test__resultC').addClass('js-active');
		}
	});
	
	$(document).on('click', '.show-result', function(event) {
		$('.result').addClass('show');
		$('.test__card').addClass('hide');
		$('.test__swiper').slideUp();
	});
	$(document).on('click', '.test__reset', function(event) {
		$('.test__radiobuttons .test__radiobuttons-item').parent().next().removeClass('js-active');
		$('.test__radiobuttons .test__radiobuttons-item input').prop('checked', false);;
		$('.test__btn-next').removeClass('js-active');
		$('.test__radiobuttons').removeClass('disable-class');
		$('.result').removeClass('show');
		$('.test__card').removeClass('hide');
		$('.test__swiper').slideDown();
		$('.test__results').slideUp(300);
		swiper.slideTo(0);
	});
});
