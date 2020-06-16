export const fixedTopbar = () => {
	window.addEventListener('scroll', () => {
		const navBar = document.querySelector('#navTop');

		const winPos = window.pageYOffset;

		// if (winPos >= 100) {
		// 	if (navBar) {
		// 		navBar.classList.add('fixed--menu');
		// 	}
		// }
	});
};

export const dropDownNav = (e) => {
	e.preventDefault();

	$('.profileDropDown').dropdown('toggle');
};
