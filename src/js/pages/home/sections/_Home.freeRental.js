import freeRentalContent from '../../../../../templates/Home_free.rental.html';
import InjectHtml from '../../../InjectHTML';

export const loadFreeRentalSection = () => {
	new InjectHtml('.free-rental', freeRentalContent).inject();
};
