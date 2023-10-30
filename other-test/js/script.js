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
			$(this).parent().next().addClass('js-active');
		}
	});
	$(document).on('click', '.show-result', function(event) {
		$('.result').addClass('show');
		$('.test__card').addClass('hide');
		$('.test__swiper').slideUp();
	});
	$(document).on('click', '.result__btn', function(event) {
		$('.test__radiobuttons .test__radiobuttons-item').parent().next().removeClass('js-active');
		$('.test__radiobuttons .test__radiobuttons-item input').prop('checked', false);;
		$('.result').removeClass('show');
		$('.test__card').removeClass('hide');
		$('.test__swiper').slideDown();
		swiper.slideTo(0);
	});
});


const test__radiobuttons_itemA = ( $( ".test__radiobuttons-itemA input:checked" ).length);
const test__radiobuttons_itemB = ( $( ".test__radiobuttons-itemB input:checked" ).length);
const test__radiobuttons_itemC = ( $( ".test__radiobuttons-itemC input:checked" ).length);


if (test__radiobuttons_itemA > test__radiobuttons_itemB && test__radiobuttons_itemA > test__radiobuttons_itemC) {
	console.log('A наибольший');
	$('.result1').addClass('active');
	$('.result2').removeClass('active');
	$('.result3').removeClass('active');
} else if (test__radiobuttons_itemB > test__radiobuttons_itemA && test__radiobuttons_itemB > test__radiobuttons_itemC){
	console.log('B наибольший');
	$('.result2').addClass('active');
	$('.result1').removeClass('active');
	$('.result3').removeClass('active');
} else if (test__radiobuttons_itemC > test__radiobuttons_itemA && test__radiobuttons_itemC > test__radiobuttons_itemB){
	console.log('C наибольший');
	$('.result3').addClass('active');
	$('.result1').removeClass('active');
	$('.result2').removeClass('active');
}
$( "input" ).on( "click", function() {
	const test__radiobuttons_itemA = ( $( ".test__radiobuttons-itemA input:checked" ).length);
	const test__radiobuttons_itemB = ( $( ".test__radiobuttons-itemB input:checked" ).length);
	const test__radiobuttons_itemC = ( $( ".test__radiobuttons-itemC input:checked" ).length);
	

	if (test__radiobuttons_itemA > test__radiobuttons_itemB && test__radiobuttons_itemA > test__radiobuttons_itemC) {
		console.log('A наибольший');
		$('.result1').addClass('active');
		$('.result2').removeClass('active');
		$('.result3').removeClass('active');
	} else if (test__radiobuttons_itemB > test__radiobuttons_itemA && test__radiobuttons_itemB > test__radiobuttons_itemC){
		console.log('B наибольший');
		$('.result2').addClass('active');
		$('.result1').removeClass('active');
		$('.result3').removeClass('active');
	} else if (test__radiobuttons_itemC > test__radiobuttons_itemA && test__radiobuttons_itemC > test__radiobuttons_itemB){
		console.log('C наибольший');
		$('.result3').addClass('active');
		$('.result1').removeClass('active');
		$('.result2').removeClass('active');
	}
});

