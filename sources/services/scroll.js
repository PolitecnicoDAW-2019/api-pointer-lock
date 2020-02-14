const scroll = (() => {
	const scout = document.getElementById('scout');
	const effects = () => {
		if (window.scrollY >= 730) {
			scout.classList.add('animation-fadeInRight');
		}
	};

	document.addEventListener('scroll', effects);
})();
