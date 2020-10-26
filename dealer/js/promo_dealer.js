$(function() {
	// Slick Init for event location
	$('.location__grid').slick({
		dots: false,
		prevArrow: false,
    	nextArrow: false,
		infinite: false,
		speed: 300,
		slidesToShow: 2,
		mobileFirst: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 425,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 375,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 320,
			settings: {
				slidesToShow: 2,
			}
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});

	// Slick Init for Recommended
	$('.recommended__grid').slick({
		dots: false,
		prevArrow: false,
    	nextArrow: false,
		infinite: false,
		speed: 300,
		slidesToShow: 2,
		mobileFirst: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 425,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 375,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 320,
			settings: {
				slidesToShow: 2,
			}
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});
});
