import Swiper from 'swiper';
import testimContent from '../../../../../templates/Home_testim.html';
import InjectHtml from '../../../InjectHTML';

export const loadTestimContent = () => {
	new InjectHtml('.testimonial', testimContent).inject();

	new Swiper('.slider-testim', {
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
