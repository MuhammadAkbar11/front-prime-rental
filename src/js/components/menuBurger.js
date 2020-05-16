let openSidebar = false;
const sidebar = document.querySelector('.sidebar');
const menuBurger = document.querySelector('.menu-btn__burger');
const burgerParent = document.querySelector('.menu-btn');

export const menuTriggerSidebar = (e) => {
	e.preventDefault();

	if (!openSidebar) {
		sidebar.classList.add('show');
		// menuBurger.map((burger) => {
		menuBurger.classList.add('open');
		// });
		burgerParent.classList.add('open');
		openSidebar = true;
	} else {
		sidebar.classList.remove('show');
		// menuBurger.map((burger) => {
		menuBurger.classList.remove('open');
		// });
		burgerParent.classList.remove('open');
		openSidebar = false;
	}
};

export const menuTriggerSidebarMobile = (e) => {
	e.preventDefault();

	if (!openSidebar) {
		sidebar.classList.add('show');
		// menuBurger.map((burger) => {
		menuBurger.classList.add('open');
		// });
		burgerParent.classList.add('open');
		openSidebar = true;
	} else {
		sidebar.classList.remove('show');
		// menuBurger.map((burger) => {
		menuBurger.classList.remove('open');
		// });
		burgerParent.classList.remove('open');
		openSidebar = false;
	}
};
