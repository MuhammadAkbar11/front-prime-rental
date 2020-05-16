import serviceContent from '../../../../../templates/section_home/Home_service.html';
import InjectHtml from '../../../InjectHTML';

export const service = () => {
	new InjectHtml('.service', serviceContent).inject();
};
