import { showPickUpAddress } from '../../components/_forms';

const withDriverRadio = [...document.querySelectorAll('[name=with_driver]')];

export const formRental = () => {
	if (withDriverRadio) {
		withDriverRadio.map((radio) => {
			radio.addEventListener('click', showPickUpAddress);
		});
	}
};
