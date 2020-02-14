(() => {
	const canvas = document.getElementById('canvas');
	const scoutX = document.getElementById('scoutX');
	const scoutY = document.getElementById('scoutY');
	const ctx = canvas.getContext('2d');
	const RADIUS = 10;
	let x = 250;
	let y = 150;

	const degToRad = degrees => {
		let result = (Math.PI / 180) * degrees;
		return result;
	};

	const canvasDraw = () => {
		ctx.fillStyle = '#000000';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = '#ffffff';
		ctx.beginPath();
		ctx.arc(x, y, RADIUS, 0, degToRad(360), true);
		ctx.fill();
	};

	const assignByBrowser = () => {
		canvas.requestPointerLock =
			canvas.requestPointerLock || canvas.mozRequestPointerLock;
		document.exitPointerLock =
			document.exitPointerLock || document.mozExitPointerLock;
	};

	const activateAPI = () => {
		canvas.onclick = () => {
			canvas.requestPointerLock();
		};
	};

	const lockChangeAlert = () => {
		if (
			document.pointerLockElement === canvas ||
			document.mozPointerLockElement === canvas
		) {
			document.addEventListener('mousemove', updatePosition);
		} else {
			document.removeEventListener('mousemove', updatePosition);
		}
	};

	const updatePosition = e => {
		x += e.movementX;
		y += e.movementY;

		if (x > canvas.width + RADIUS) {
			x = -RADIUS;
		}

		if (y > canvas.height + RADIUS) {
			y = -RADIUS;
		}

		if (x < -RADIUS) {
			x = canvas.width + RADIUS;
		}

		if (y < -RADIUS) {
			y = canvas.height + RADIUS;
		}

		canvasDraw();
		scoutX.textContent = x;
		scoutY.textContent = y;
	};

	const app = (() => {
		canvasDraw();
		assignByBrowser();
		activateAPI();
		document.addEventListener('pointerlockchange', lockChangeAlert);
		document.addEventListener('mozpointerlockchange', lockChangeAlert);
	})();
})();
