$(function() {
	// Slick Init for Header
	$('.header').slick({
		dots: true,
		prevArrow: false,
    	nextArrow: false,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 320,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});
});
