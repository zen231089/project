$(function() {
	// Hamburger
	$('.hamburger').click(function(event) {
		$(this).toggleClass('is-active');
		$('body').toggleClass('sidenav--open');
		$('.sidenav').toggleClass('sidenav--active');
		$('.overlay').toggleClass('sidenav--overlay');
	});

	// Search
	$('.nav__button').click(function(event) {
		$('.searchbar').toggleClass('searchbar--active');
	});

	// Overlay
	$('.overlay').click(function(event) {
		$('.hamburger').toggleClass('is-active');
		$('body').toggleClass('sidenav--open');
		$('.sidenav').toggleClass('sidenav--active');
		$('.overlay').toggleClass('sidenav--overlay');
	});
});
