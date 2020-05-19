export const loginPage = (img) => {
	let bgLogin = document.querySelector('.login-cover');

	if (bgLogin) {
		bgLogin.style.background = `
        linear-gradient(163deg, rgba(34,38,76,0.9220063025210083) 100%, rgba(61,66,108,0) 100%),
        url(${img}) center top`;
	}
};
