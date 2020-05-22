import './css/swiper.css';
import './scss/main.scss';
import loadHomePage from './js/pages/home/home.page';
import { detailPage } from './js/pages/detail/detail.page';

import image from './img/bg/bg-login.png';
import bgRegistrasi from './img/bg/bg-registrasi.png';
import { loginPage } from './js/pages/auth/login.page';
import { registrasiPage } from './js/pages/auth/registrasi.page';
import { loadAboutPage } from './js/pages/about/about.page';
import { loadListCars } from './js/pages/list-cars/list-cars.page';
import { preloader } from './js/components/_preloader';

// document.addEventListener('DOMContentLoaded', () => {

// });

const application = () => {
	loadHomePage();
	detailPage();
	loginPage(image);
	registrasiPage(bgRegistrasi);
	loadAboutPage();
	loadListCars();
};

document.onreadystatechange = function () {
	if (event.target.readyState === 'interactive') {
		preloader();
	} else if (document.readyState === 'complete') {
		application();
		setTimeout(() => {
			document.getElementById('preloader').style.display = 'none';
		}, 1000);
	}
};
