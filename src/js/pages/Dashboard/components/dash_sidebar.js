const dashboardToggle = [...document.querySelectorAll('.sidebar--toggle')];
const dashboardSidebar = document.querySelector('.dashboard--sidebar');

let statusShowSidebar = false;

const dashSidebar = () => {
	if (dashboardToggle) {
		dashboardToggle.map((toggle) => {
			toggle.addEventListener('click', showSidebar);
		});
	}
};

const showSidebar = (e) => {
	e.preventDefault();

	const windowStatusWidth = document.documentElement.clientWidth;

	if (dashboardSidebar) {
		if (statusShowSidebar == false) {
			if (windowStatusWidth < 768) {
				dashboardSidebar.classList.add('show');
			} else {
				replaceLogoText(statusShowSidebar);
				dashboardSidebar.classList.add('mini--sidebar');
			}
			changeIcon(statusShowSidebar, windowStatusWidth);

			statusShowSidebar = true;
		} else {
			if (windowStatusWidth < 768) {
				dashboardSidebar.classList.remove('show');
			} else {
				dashboardSidebar.classList.remove('mini--sidebar');
				replaceLogoText(statusShowSidebar);
			}

			changeIcon(statusShowSidebar, windowStatusWidth);

			statusShowSidebar = false;
		}
	}
};

const dashboardsidebarLogo = document.querySelector('.sidebar--logo');
const logoChild = document.querySelector('.sidebar--logo')
	? dashboardsidebarLogo.children[0]
	: false;

const oldLogoText = logoChild.textContent;

const replaceLogoText = (status, statusBreakpoints) => {
	if (dashboardsidebarLogo) {
		const newLogoText = [...oldLogoText][0];

		if (status == false) {
			logoChild.innerHTML = newLogoText;
		} else {
			logoChild.innerHTML = oldLogoText;
		}
	}
};

const changeIcon = (status, statusWidth) => {
	const dataIcon = dashboardToggle.map((toggle) => toggle.children[0]);

	dataIcon.map((icon) => {
		if (status == false) {
			if (statusWidth < 768) {
				icon.classList.replace('fa-toggle-off', 'fa-toggle-on');
			} else {
				icon.classList.replace('fa-toggle-on', 'fa-toggle-off');
			}
		} else {
			if (statusWidth < 768) {
				icon.classList.replace('fa-toggle-on', 'fa-toggle-off');
			} else {
				icon.classList.replace('fa-toggle-off', 'fa-toggle-on');
			}
		}
	});
};

// resize

export const minimizeDashboardSidebar = () => {
	if (dashboardSidebar) {
		if (dashboardSidebar.classList.contains('mini--sidebar')) {
			dashboardSidebar.classList.remove('mini--sidebar');
		}
	}

	if (dashboardToggle.length > 0) {
		dashboardToggle.map((toggle) => {
			toggle.children[0].className = 'fad fa-2x text-secondary fa-toggle-off';
		});
	}
};

export const _notMinimizeDasoboardSidebar = () => {
	if (dashboardToggle.length > 0) {
		dashboardToggle[0].children[0].className =
			'fad fa-2x text-secondary fa-toggle-on ';
		dashboardToggle[1].children[0].className = 'fad fa-2x  fa-toggle-on ';
	}

	if (dashboardSidebar) {
		if (dashboardSidebar.classList.contains('show')) {
			dashboardSidebar.classList.remove('show');
		}
	}

	if (dashboardsidebarLogo) {
		logoChild.innerHTML = oldLogoText;
	}
};

export default dashSidebar;
