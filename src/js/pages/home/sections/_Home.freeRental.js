import freeRentalContent from '../../../../../templates/section_home/Home_free.rental.html';
import InjectHtml from '../../../InjectHTML';

export const loadFreeRentalSection = () => {
	new InjectHtml('.free-rental', freeRentalContent).inject();
};
