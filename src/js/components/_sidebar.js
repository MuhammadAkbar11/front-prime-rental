import { menuTriggerSidebar, menuTriggerSidebarMobile } from './menuBurger';

export const sidebar = () => {
	const btnTrigger = document.querySelector('.menu-btn');

	const btnTriggerMobile = document.querySelector('.btn--trigersidebar');

	// btnTrigger.map((btn) => {
	// console.log(btn);
	btnTrigger.addEventListener('click', menuTriggerSidebar);

	btnTriggerMobile.addEventListener('click', menuTriggerSidebarMobile);

	// });
};
