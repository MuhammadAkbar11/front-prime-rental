import { sliderBestCar } from './sections/_Home.BestCars';
import { service } from './sections/_Home.service';
import { loadFreeRentalSection } from './sections/_Home.freeRental';
import { loadAboutSection } from './sections/_Home.about';
import { loadTestimContent } from './sections/_Home.testim';
import { footer } from '../../components/_footer';
import { loadDataSidebar } from '../../components/_sidebar';

const loadHomePage = () => {
	sliderBestCar();
	loadDataSidebar();
	service();
	loadFreeRentalSection();
	loadAboutSection();
	loadTestimContent();
	footer();
};

export default loadHomePage;
