import { sliderBestCar } from './sections/_Home.BestCars';
import { loadTestimContent } from './sections/_Home.testim';
import { sidebar } from '../../components/_sidebar';
const loadHomePage = () => {
	sliderBestCar();
	loadTestimContent();
	sidebar();
};

export default loadHomePage;
