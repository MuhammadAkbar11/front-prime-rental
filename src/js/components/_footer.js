import InjectHtml from '../InjectHTML';
import footerContent from '../../../templates/components/footer.html';

export const footer = () => {
	new InjectHtml('.footer', footerContent).inject();
};
