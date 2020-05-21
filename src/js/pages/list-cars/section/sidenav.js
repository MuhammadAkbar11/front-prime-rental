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

		const el = e.target;
		const dataStatus = e.target.dataset.status;
		if ((el != undefined) & (dataStatus != undefined)) {
			$(`${collapse}`).collapse('toggle');
			if (dataStatus === 'false') {
				icon.className = 'fas fa-chevron-up';
				el.setAttribute('data-status', 'true');
				el.classList.add('active');
			} else {
				icon.className = 'fas fa-chevron-down';
				el.setAttribute('data-status', 'false');
				el.classList.remove('active');
			}
		}
	}
};
