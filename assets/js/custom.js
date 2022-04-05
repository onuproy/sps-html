jQuery(document).ready(function () {

	jQuery(function () {
		jQuery("#tabs").tabs();
	});

	jQuery(function () {
		jQuery("#tabs_2").tabs();
	});


	// Hero owlCarousel
	jQuery('.tabs_owl_slider_area').owlCarousel({
		loop: true,
		margin: 24,
		nav: false,
		autoplay: false,
		dots: false,
		smartSpeed: 4000,
		responsive: {
			0: {
				items: 1,
				stagePadding: 20,
			},
			576: {
				items: 1,
				stagePadding: 77,
			},
			1199: {
				items: 1,
				stagePadding: 101,
			}
		}
	});
	// Hero owlCarousel
	jQuery('.tabs_owl_slider_area_2').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		autoplay: false,
		dots: false,
		items: 1,
	});
	// Hero owlCarousel
	jQuery('.tabs_owl_slider_area_3').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		autoplay: false,
		dots: false,
		items: 1,
	});
	// Hero owlCarousel
	jQuery('.tabs_owl_slider_area_4').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		autoplay: false,
		dots: false,
		items: 1,
	});


	// Categoris owlCarousel
	jQuery('.product_items_area_1').owlCarousel({
		loop: true,
		margin: 20,
		nav: true,
		autoplay: false,
		navText: ['<img src="assets/images/icon/Layer_2.png">', '<img src="assets/images/icon/Layer_3.png">'],
		dots: false,
		responsive: {
			0: {
				items: 2,
			},
			576: {
				items: 2,

			},
			768: {
				items: 3,
			},
			1200: {
				items: 4,
			}
		}
	});






	//Dropdown menu 
	jQuery('.country_dropdown').click(function () {
		jQuery('.country_dropdown span').toggleClass('active_arrow');
		return false;
	});
	jQuery('.country_dropdown ul li').click(function () {
		jQuery('.country_dropdown span').removeClass('active_arrow');
		return false;

	});







});