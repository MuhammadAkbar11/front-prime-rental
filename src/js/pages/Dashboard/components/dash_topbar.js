// const navbarAva = document.querySelector('#navbarAva');
const angleIconDown = document.querySelector('#navbar-account-icon');
export const dashTopbar = () => {
	$('.dashboard-profile--toggle').dropdown();
	$('.dashboard-profile--toggle').on('shown.bs.dropdown', function (e) {
		console.log(e);
		console.log(angleIconDown);
	});
	// if (navbarAva) {
	// 	navbarAva.addEventListener('click', showDropdownProfile);
	// }
};

// let statusShowDropdown = false;

// const showDropdownProfile = (e) => {
// 	// e.preventDefault();

// 	const angleIconDown = document.querySelector('#navbar-account-icon');

// 	if (statusShowDropdown == false) {
// 		$('.navbar-dropdownProfile').dropdown('show');
// 		angleIconDown.classList.replace('fa-angle-down', 'fa-angle-up');

// 		statusShowDropdown = true;
// 	} else {
// 		$('.navbar-dropdownProfile').dropdown('hide');
// 		angleIconDown.classList.replace('fa-angle-up', 'fa-angle-down');
// 		statusShowDropdown = false;
// 	}
// };
