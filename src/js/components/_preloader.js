import anime from 'animejs/lib/anime.es.js';

export const preloader = () => {
	const textWrapper = document.querySelector('.text-loader .letters');
	textWrapper.innerHTML = textWrapper.textContent.replace(
		/\S/g,
		"<span class='letter'>$&</span>"
	);

	anime
		.timeline({ loop: true })
		.add({
			targets: '.letter',
			translateY: ['2.1em', 0],

			translateZ: 0,
			duration: 750,
			direction: 'alternate',
			delay: (el, i) => 50 * i,
		})
		.add({
			targets: '.text-loader',
			opacity: 0,
			duration: 500,
			easing: 'easeInOutExpo',
			direction: 'alternate',
			delay: 0,
		});
};
