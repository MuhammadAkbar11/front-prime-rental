import { menuTriggerSidebar, menuTriggerSidebarMobile } from './menuBurger';

export const sidebar = () => {
	const btnTrigger = [...document.querySelectorAll('.menu-btn')];

	const btnTriggerMobile = document.querySelector('.btn--trigersidebar');

	// console.log(btn);

	if (btnTrigger) {
		btnTrigger.map((btn) => {
			btn.addEventListener('click', menuTriggerSidebar);
		});
	}

	if (btnTriggerMobile) {
		btnTriggerMobile.addEventListener('click', menuTriggerSidebarMobile);
	}

	// });
};
