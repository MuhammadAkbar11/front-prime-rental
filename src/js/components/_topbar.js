export const fixedTopbar = () => {
	window.addEventListener('scroll', () => {
		const navBar = document.querySelector('#navTop');

		const winPos = window.pageYOffset;
	});
};

export const dropDownNav = (e) => {
	e.preventDefault();

	$('.profileDropDown').dropdown('toggle');
};
