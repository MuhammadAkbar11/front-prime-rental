import './css/swiper.css';
import './scss/main.scss';
import loadHomePage from './js/pages/home/home.page';
import { detailPage } from './js/pages/detail/detail.page';

document.addEventListener('DOMContentLoaded', (event) => {
	loadHomePage();
	detailPage();
});
