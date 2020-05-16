import aboutContent from '../../../../../templates/section_home/Home_about.html';
import InjectHtml from '../../../InjectHTML';

export const loadAboutSection = () => {
	new InjectHtml('.about', aboutContent).inject();
};
