import { sliderBestCar } from './sections/_Home.BestCars';
import { loadTestimContent } from './sections/_Home.testim';
import { sidebar } from '../../components/_sidebar';
import { dropDownNav } from '../../components/_topbar';

const btnUserDropdownMenu = document.querySelector('#btnProfileDropDown');

const loadHomePage = () => {
	if (btnUserDropdownMenu) {
		btnUserDropdownMenu.addEventListener('click', dropDownNav);
	}

	sliderBestCar();
	loadTestimContent();
	sidebar();
};

export default loadHomePage;
