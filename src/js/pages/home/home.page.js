import { sliderBestCar } from './sections/_Home.BestCars';
import { service } from './sections/_Home.service';
import { loadFreeRentalSection } from './sections/_Home.freeRental';
import { loadAboutSection } from './sections/_Home.about';
import { loadTestimContent } from './sections/_Home.testim';

const loadHomePage = () => {
	sliderBestCar();
	service();
	loadFreeRentalSection();
	loadAboutSection();
	loadTestimContent();
};

export default loadHomePage;
