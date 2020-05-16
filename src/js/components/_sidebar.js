import dataSidebar from '../../../templates/components/sidebar.html';

import InjectHtml from '../InjectHTML';
import { menuTriggerSidebar, menuTriggerSidebarMobile } from './menuBurger';

export const loadDataSidebar = () => {
	new InjectHtml('.sidebar', dataSidebar).inject();

	const sidebar = document.querySelector('.sidebar');
	const btnTrigger = document.querySelector('.menu-btn');

	const btnTriggerMobile = document.querySelector('.btn--trigersidebar');

	// btnTrigger.map((btn) => {
	// console.log(btn);
	btnTrigger.addEventListener('click', menuTriggerSidebar);

	btnTriggerMobile.addEventListener('click', menuTriggerSidebarMobile);

	// });
};
