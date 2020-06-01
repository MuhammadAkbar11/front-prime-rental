import { sidebar } from '../../components/_sidebar';
import { similarSlider } from './sections/similar-cars';
import { fixedTopbar } from '../../components/_topbar';

export const detailPage = () => {
	sidebar();
	similarSlider();
	fixedTopbar();
};
