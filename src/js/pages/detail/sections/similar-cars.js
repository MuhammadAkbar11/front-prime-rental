import Swiper from 'swiper';

export const similarSlider = () => {
	const similarSwiper = document.querySelector('.swiper-similar-cars');
	let loop = true;
	let loopFillGroupWithBlank = true;

	if (similarSwiper) {
		const itemValue = [...similarSwiper.querySelectorAll('.swiper-slide')];
		const swiperNav = [
			...similarSwiper.parentElement.querySelectorAll('.swiper__nav'),
		];

		if (itemValue.length < 2) {
			similarSwiper.classList.add('d-none');
			swiperNav.map((nav) => {
				nav.classList.add('d-none');
			});
		} else if (itemValue.length < 5) {
			similarSwiper.classList.add('d-md-none');
			swiperNav.map((nav) => {
				nav.classList.add('d-md-none');
			});
		}

		new Swiper('.swiper-similar-cars ', {
			direction: 'horizontal',
			loop: loop,
			loopFillGroupWithBlank: loopFillGroupWithBlank,
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
	}
};
