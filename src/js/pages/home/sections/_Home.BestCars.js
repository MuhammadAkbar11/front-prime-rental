// const templatePath = '../../../../../templates/';
import Swiper from 'swiper';
import sliderContent from '../../../../../templates/Home_bestcars.slider.html';
import InjectHtml from '../../../InjectHTML';

export const sliderBestCar = () => {
	new InjectHtml('.best-cars', sliderContent).inject();
	// bestCarsSection.innerHTML = dataHtmlSlider;
	const swiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		slidesPerView: 1,
		spaceBetween: 10,
		// init: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper__nav-next',
			prevEl: '.swiper__nav-prev',
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 50,
			},
		},
	});
};
