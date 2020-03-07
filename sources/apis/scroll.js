const scroll = (() => {
	const scout = document.getElementById('scout');
	const roller = document.getElementById('roller');
	const effects = () => {
		if (window.scrollY >= 730) {
			scout.classList.add('animation-fadeInRight');
			roller.classList.add('display-none');
		} else {
			roller.classList.remove('display-none');
		}
	};

	document.addEventListener('scroll', effects);
})();
