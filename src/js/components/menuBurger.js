let openSidebar = false;
const sidebar = document.querySelector('.sidebar');
const menuBurger = [...document.querySelectorAll('.menu-btn__burger')];
const burgerParent = [...document.querySelectorAll('.menu-btn')];

export const menuTriggerSidebar = (e) => {
	e.preventDefault();

	if (!openSidebar) {
		sidebar.classList.add('show');
		if (menuBurger) {
			menuBurger.map((menu) => {
				menu.classList.add('open');
			});
		}
		if (burgerParent) {
			burgerParent.map((menu) => {
				menu.classList.add('open');
			});
		}
		openSidebar = true;
	} else {
		sidebar.classList.remove('show');
		if (menuBurger) {
			menuBurger.map((menu) => {
				menu.classList.remove('open');
			});
		}
		if (burgerParent) {
			burgerParent.map((menu) => {
				menu.classList.remove('open');
			});
		}
		openSidebar = false;
	}
};

export const menuTriggerSidebarMobile = (e) => {
	e.preventDefault();

	if (!openSidebar) {
		sidebar ? sidebar.classList.add('show') : false;
		// menuBurger.map((burger) => {
		// menuBurger ? menuBurger.classList.add('open') : false;
		if (menuBurger) {
			menuBurger.map((menu) => {
				menu.classList.add('open');
			});
		}
		if (burgerParent) {
			burgerParent.map((menu) => {
				menu.classList.add('open');
			});
		}

		// });
		// burgerParent ? burgerParent.classList.add('open') : false;
		openSidebar = true;
	} else {
		sidebar ? sidebar.classList.remove('show') : false;
		if (menuBurger) {
			menuBurger.map((menu) => {
				menu.classList.remove('open');
			});
		}
		if (burgerParent) {
			burgerParent.map((menu) => {
				menu.classList.remove('open');
			});
		}
		openSidebar = false;
	}
};
