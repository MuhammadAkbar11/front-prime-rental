import Swiper from 'swiper';

export const sliderOurTeams = () => {
	new Swiper('.swiper--ourteams', {
		slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 60,
		// slidesPerGroup: 3,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.next-button',
			prevEl: '.prev-button',
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			902: {
				slidesPerView: 3,
				spaceBetween: 25,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});
};
