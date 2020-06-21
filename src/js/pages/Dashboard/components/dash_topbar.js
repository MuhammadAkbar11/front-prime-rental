const navbarAva = document.querySelector('#navbarAva');

export const dashTopbar = () => {
	if (navbarAva) {
		navbarAva.addEventListener('click', showDropdownProfile);
	}
};

let statusShowDropdown = false;

const showDropdownProfile = (e) => {
	e.preventDefault();

	const angleIconDown = document.querySelector('#navbar-account-icon');

	if (statusShowDropdown == false) {
		$('.navbar-dropdownProfile').dropdown('show');
		angleIconDown.classList.replace('fa-angle-down', 'fa-angle-up');

		statusShowDropdown = true;
	} else {
		$('.navbar-dropdownProfile').dropdown('hide');
		angleIconDown.classList.replace('fa-angle-up', 'fa-angle-down');
		statusShowDropdown = false;
	}
};
