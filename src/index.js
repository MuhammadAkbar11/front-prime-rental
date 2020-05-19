import './css/swiper.css';
import './scss/main.scss';
import loadHomePage from './js/pages/home/home.page';
import { detailPage } from './js/pages/detail/detail.page';

import image from './img/bg/bg-login.png';
import { loginPage } from './js/pages/login/login.page';

document.addEventListener('DOMContentLoaded', (event) => {
	loadHomePage();
	detailPage();
	loginPage(image);
});
