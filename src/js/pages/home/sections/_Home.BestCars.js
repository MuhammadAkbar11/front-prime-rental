// const templatePath = '../../../../../templates/';
import Swiper from 'swiper';
import sliderContent from '../../../../../templates/section_home/Home_bestcars.slider.html';
import InjectHtml from '../../../InjectHTML';

export const sliderBestCar = () => {
	new InjectHtml('.best-cars', sliderContent).inject();
	console.log('ok');
	// bestCarsSection.innerHTML = dataHtmlSlider;
	new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		loopFillGroupWithBlank: true,
		slidesPerView: 1,
		centeredSlides: true,
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
				slidesPerView: 4,
				spaceBetween: 20,
			},
		},
	});
};
