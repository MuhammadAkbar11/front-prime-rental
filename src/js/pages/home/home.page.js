import { sliderBestCar } from './sections/_Home.BestCars';
import { service } from './sections/_Home.service';
import { loadFreeRentalSection } from './sections/_Home.freeRental';
import { loadAboutSection } from './sections/_Home.about';

const loadHomePage = () => {
	sliderBestCar();
	service();
	loadFreeRentalSection();
	loadAboutSection();
};

export default loadHomePage;
