const formPickUpAddress = document.getElementById('form-pickup-address');
const formPickUpAddressInput = document.querySelector('[name=pickup_address]');

export const showPickUpAddress = (e) => {
	// e.preventDefault();
	const element = e.target;

	if (element.checked == true) {
		element.id;

		if (element.id == 'use_driver') {
			if (formPickUpAddress) {
				formPickUpAddress.classList.remove('hide');
				formPickUpAddress.classList.add('show');
			}
		} else {
			if (formPickUpAddress) {
				formPickUpAddress.classList.remove('show');
				formPickUpAddress.classList.add('hide');
				if (formPickUpAddressInput) {
					formPickUpAddressInput.value = '';
				}
			}
		}
	}
};
