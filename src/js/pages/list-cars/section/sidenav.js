// import $ from 'jquery';
import 'bootstrap';

export const sidenavCollapse = () => {
	const navLink = [...document.querySelectorAll('#listcars-navlink')];

	navLink.map((link) => {
		link.addEventListener('click', showCollapse);
	});

	// $('#listcars-navlink').on('hidden.bs.collapse', function () {
	// 	// do something...
	// });
};

const showCollapse = (e) => {
	e.preventDefault();

	const elementid =
		e.target.id == 'listcars-navlink' ||
		e.target.parentNode.id == 'listcars-navlink';
	if (elementid) {
		const collapse = e.target.dataset.collapse; //|| e.target.parentNode.dataset.collapse;
		const icon = e.target.children[1];

		const navCollapase = [...document.querySelectorAll('.nav-collapse')];

		if (navCollapase.length > 0) {
			const el = e.target;
			const dataStatus = e.target.dataset.status;
			if ((el != undefined) & (dataStatus != undefined)) {
				if (dataStatus === 'false') {
					$(`${collapse}`).on('show.bs.collapse', function (e) {
						el.setAttribute('data-status', 'true');
						el.classList.add('active');
						icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
					});
					$(`${collapse}`).collapse('show');
				} else {
					$(`${collapse}`).on('hide.bs.collapse', function (e) {
						el.setAttribute('data-status', 'false');
						el.classList.remove('active');
						icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
					});
					$(`${collapse}`).collapse('hide');
				}
			}
		}
	}
};
