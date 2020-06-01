import Swiper from 'swiper';

export const similarSlider = () => {
	new Swiper('.similar-cars ', {
		direction: 'horizontal',
		loop: true,
		loopFillGroupWithBlank: true,
		slidesPerView: 1,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		spaceBetween: 20,
		// init: false,
		navigation: {
			nextEl: '.swiper__nav-next',
			prevEl: '.swiper__nav-prev',
		},
		breakpoints: {
			580: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1140: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
	});
};
