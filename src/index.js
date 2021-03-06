import './css/swiper.css';
import './scss/main.scss';
import loadHomePage from './js/pages/home/home.page';
import { detailPage } from './js/pages/detail/detail.page';

import { loadAboutPage } from './js/pages/about/about.page';
import { loadListCars } from './js/pages/list-cars/list-cars.page';
import { preloader } from './js/components/_preloader';
import transactions from './js/pages/transactions/transaction';
import Dashboard from './js/pages/Dashboard/main.dashboard';
import Noty from 'noty';

const application = () => {
	loadHomePage();
	detailPage();
	loadAboutPage();
	loadListCars();
	transactions();
	new Dashboard().renderLayouts();

	$('.profile--toggle').dropdown();
};

const body = document.querySelector('body');

document.onreadystatechange = function () {
	if (event.target.readyState === 'interactive') {
		preloader();
	} else if (document.readyState === 'complete') {
		application();
		setTimeout(() => {
			body.classList.remove('hide');
			const preloader = document.getElementById('preloader');

			body.removeChild(preloader);
		}, 1000);
	}
};
