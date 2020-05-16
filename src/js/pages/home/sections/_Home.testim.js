import Swiper from 'swiper';
import testimContent from '../../../../../templates/section_home/Home_testim.html';
import InjectHtml from '../../../InjectHTML';

export const loadTestimContent = () => {
	new InjectHtml('.testimonial', testimContent).inject();

	new Swiper('.slider-testim', {
		spaceBetween: 30,
		loop: true,
		loopFillGroupWithBlank: true,
		slidesPerView: 1,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		// slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
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
