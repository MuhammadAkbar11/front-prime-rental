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
					$(`${collapse}`).collapse('show');
					$(`${collapse}`).on('shown.bs.collapse', function (e) {
						el.setAttribute('data-status', 'true');
						el.classList.add('active');
						icon.className = 'fas fa-chevron-up';
					});

					// if (!navColl.classList.contains('show')) {
					// 	$(`${collapse}`).collapse('show');
					// 	el.setAttribute('data-status', 'true');
					// 	el.classList.add('active');
					// 	icon.className = 'fas fa-chevron-up';
					// }
				} else {
					$(`${collapse}`).collapse('hide');
					$(`${collapse}`).on('hidden.bs.collapse', function (e) {
						el.setAttribute('data-status', 'false');
						el.classList.remove('active');
						icon.className = 'fas fa-chevron-down';
					});
					// const navColl = document.querySelector(collapse);
					// if (navColl.classList.contains('show')) {
					// 	$(`${collapse}`).collapse('hide');
					//
					// }
				}
			}
		}
	}
};
