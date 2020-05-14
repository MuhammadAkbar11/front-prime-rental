import serviceContent from '../../../../../templates/Home_service.html';
import InjectHtml from '../../../InjectHTML';

export const service = () => {
	new InjectHtml('.service', serviceContent).inject();
};
