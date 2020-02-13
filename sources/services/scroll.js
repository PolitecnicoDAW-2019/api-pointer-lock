const scroll = (() => {
	const scout = document.getElementById('scout');
	const effects = () => {
		if (window.scrollY >= 1000) {
			scout.classList.add('animation-fadeInRight');
		}
	};

	document.addEventListener('scroll', effects);
})();
