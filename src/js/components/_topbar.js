export const fixedTopbar = () => {
	window.addEventListener('scroll', () => {
		const navBar = document.querySelector('#navTop');

		const winPos = window.pageYOffset;
	});
};

let statusshowProfileDropdown = false;

export const dropDownNav = (e) => {
	console.log(e.target);

	if (statusshowProfileDropdown == false) {
		$('.profileDropDown').dropdown('show');

		statusshowProfileDropdown = true;
	} else {
		$('.profileDropDown').dropdown('hide');

		statusshowProfileDropdown = false;
	}
};
