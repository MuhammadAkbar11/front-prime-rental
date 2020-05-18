import Swiper from 'swiper';

export const loadTestimContent = () => {
	new Swiper('.slider-testim', {
		slidesPerView: 1,
		spaceBetween: 20,
		lazy: true,
		loop: true,
		autoHeight: true,
		effect: 'flip',
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper__nav-next',
			prevEl: '.swiper__nav-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + ' bg-secondary p-1 "></span>';
			},
		},
	});
};
