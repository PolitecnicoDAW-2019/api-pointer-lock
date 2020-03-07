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

		ctx.save();
		ctx.beginPath();
		ctx.moveTo(147.0, 91.0);
		ctx.bezierCurveTo(147.0, 92.4, 145.9, 93.5, 144.5, 93.5);
		ctx.lineTo(90.0, 93.5);
		ctx.bezierCurveTo(88.6, 93.5, 87.5, 92.4, 87.5, 91.0);
		ctx.lineTo(87.5, 0.0);
		ctx.lineTo(92.5, 0.0);
		ctx.lineTo(92.5, 88.5);
		ctx.lineTo(144.5, 88.5);
		ctx.bezierCurveTo(145.9, 88.5, 147.0, 89.6, 147.0, 91.0);
		ctx.closePath();
		ctx.fillStyle = '#ffffff';
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(164.5, 0.0);
		ctx.lineTo(164.5, 42.5);
		ctx.bezierCurveTo(164.5, 43.9, 163.4, 45.0, 162.0, 45.0);
		ctx.bezierCurveTo(160.6, 45.0, 159.5, 43.9, 159.5, 42.5);
		ctx.lineTo(159.5, 0.0);
		ctx.lineTo(164.5, 0.0);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(131.0, 256.5);
		ctx.lineTo(131.0, 346.0);
		ctx.bezierCurveTo(131.0, 347.4, 129.9, 348.5, 128.5, 348.5);
		ctx.bezierCurveTo(127.1, 348.5, 126.0, 347.4, 126.0, 346.0);
		ctx.lineTo(126.0, 259.0);
		ctx.lineTo(65.0, 259.0);
		ctx.bezierCurveTo(63.6, 259.0, 62.5, 257.9, 62.5, 256.5);
		ctx.lineTo(62.5, 187.5);
		ctx.lineTo(0.0, 187.5);
		ctx.lineTo(0.0, 182.5);
		ctx.lineTo(65.0, 182.5);
		ctx.bezierCurveTo(66.4, 182.5, 67.5, 183.6, 67.5, 185.0);
		ctx.lineTo(67.5, 254.0);
		ctx.lineTo(128.5, 254.0);
		ctx.bezierCurveTo(129.9, 254.0, 131.0, 255.1, 131.0, 256.5);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(61.5, 445.0);
		ctx.bezierCurveTo(60.1, 445.0, 59.0, 443.9, 59.0, 442.5);
		ctx.lineTo(59.0, 355.0);
		ctx.bezierCurveTo(59.0, 353.6, 60.1, 352.5, 61.5, 352.5);
		ctx.bezierCurveTo(62.9, 352.5, 64.0, 353.6, 64.0, 355.0);
		ctx.lineTo(64.0, 442.5);
		ctx.bezierCurveTo(64.0, 443.9, 62.9, 445.0, 61.5, 445.0);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(227.5, 406.0);
		ctx.lineTo(61.5, 406.0);
		ctx.bezierCurveTo(60.1, 406.0, 59.0, 404.9, 59.0, 403.5);
		ctx.bezierCurveTo(59.0, 402.1, 60.1, 401.0, 61.5, 401.0);
		ctx.lineTo(227.5, 401.0);
		ctx.bezierCurveTo(228.9, 401.0, 230.0, 402.1, 230.0, 403.5);
		ctx.bezierCurveTo(230.0, 404.9, 228.9, 406.0, 227.5, 406.0);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(399.5, 346.0);
		ctx.lineTo(399.5, 469.0);
		ctx.bezierCurveTo(399.5, 470.4, 398.4, 471.5, 397.0, 471.5);
		ctx.lineTo(177.5, 471.5);
		ctx.lineTo(177.5, 500.0);
		ctx.lineTo(172.5, 500.0);
		ctx.lineTo(172.5, 469.0);
		ctx.bezierCurveTo(172.5, 467.6, 173.6, 466.5, 175.0, 466.5);
		ctx.lineTo(394.5, 466.5);
		ctx.lineTo(394.5, 346.0);
		ctx.bezierCurveTo(394.5, 345.6, 394.6, 345.3, 394.7, 345.0);
		ctx.bezierCurveTo(395.1, 344.1, 396.0, 343.5, 397.0, 343.5);
		ctx.bezierCurveTo(398.0, 343.5, 398.9, 344.1, 399.3, 345.0);
		ctx.bezierCurveTo(399.4, 345.3, 399.5, 345.6, 399.5, 346.0);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(501.0, 350.0);
		ctx.lineTo(286.0, 350.0);
		ctx.bezierCurveTo(284.6, 350.0, 283.5, 348.9, 283.5, 347.5);
		ctx.bezierCurveTo(283.5, 346.1, 284.6, 345.0, 286.0, 345.0);
		ctx.lineTo(501.0, 345.0);
		ctx.bezierCurveTo(502.4, 345.0, 503.5, 346.1, 503.5, 347.5);
		ctx.bezierCurveTo(503.5, 348.9, 502.4, 350.0, 501.0, 350.0);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(214.0, 357.5);
		ctx.bezierCurveTo(212.6, 357.5, 211.5, 356.4, 211.5, 355.0);
		ctx.lineTo(211.5, 211.0);
		ctx.bezierCurveTo(211.5, 209.6, 212.6, 208.5, 214.0, 208.5);
		ctx.lineTo(299.0, 208.5);
		ctx.lineTo(299.0, 127.5);
		ctx.bezierCurveTo(299.0, 126.1, 300.1, 125.0, 301.5, 125.0);
		ctx.lineTo(400.0, 125.0);
		ctx.bezierCurveTo(401.4, 125.0, 402.5, 126.1, 402.5, 127.5);
		ctx.lineTo(402.5, 288.5);
		ctx.bezierCurveTo(402.5, 289.9, 401.4, 291.0, 400.0, 291.0);
		ctx.lineTo(312.5, 291.0);
		ctx.bezierCurveTo(311.1, 291.0, 310.0, 289.9, 310.0, 288.5);
		ctx.bezierCurveTo(310.0, 287.1, 311.1, 286.0, 312.5, 286.0);
		ctx.lineTo(397.5, 286.0);
		ctx.lineTo(397.5, 130.0);
		ctx.lineTo(304.0, 130.0);
		ctx.lineTo(304.0, 211.0);
		ctx.bezierCurveTo(304.0, 212.4, 302.9, 213.5, 301.5, 213.5);
		ctx.lineTo(216.5, 213.5);
		ctx.lineTo(216.5, 355.0);
		ctx.bezierCurveTo(216.5, 356.4, 215.4, 357.5, 214.0, 357.5);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(375.0, 0.0);
		ctx.lineTo(375.0, 36.5);
		ctx.bezierCurveTo(375.0, 37.9, 373.9, 39.0, 372.5, 39.0);
		ctx.lineTo(271.5, 39.0);
		ctx.lineTo(271.5, 66.0);
		ctx.bezierCurveTo(271.5, 67.4, 270.4, 68.5, 269.0, 68.5);
		ctx.bezierCurveTo(267.6, 68.5, 266.5, 67.4, 266.5, 66.0);
		ctx.lineTo(266.5, 36.5);
		ctx.bezierCurveTo(266.5, 35.1, 267.6, 34.0, 269.0, 34.0);
		ctx.lineTo(370.0, 34.0);
		ctx.lineTo(370.0, 0.0);
		ctx.lineTo(375.0, 0.0);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(479.0, 187.5);
		ctx.bezierCurveTo(477.6, 187.5, 476.5, 186.4, 476.5, 185.0);
		ctx.lineTo(476.5, 130.0);
		ctx.lineTo(400.0, 130.0);
		ctx.bezierCurveTo(398.6, 130.0, 397.5, 128.9, 397.5, 127.5);
		ctx.bezierCurveTo(397.5, 126.1, 398.6, 125.0, 400.0, 125.0);
		ctx.lineTo(479.0, 125.0);
		ctx.bezierCurveTo(480.4, 125.0, 481.5, 126.1, 481.5, 127.5);
		ctx.lineTo(481.5, 185.0);
		ctx.bezierCurveTo(481.5, 186.4, 480.4, 187.5, 479.0, 187.5);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(550.0, 336.0);
		ctx.bezierCurveTo(548.6, 336.0, 547.5, 334.9, 547.5, 333.5);
		ctx.lineTo(547.5, 289.5);
		ctx.lineTo(479.0, 289.5);
		ctx.bezierCurveTo(477.6, 289.5, 476.5, 288.4, 476.5, 287.0);
		ctx.lineTo(476.5, 225.5);
		ctx.bezierCurveTo(476.5, 224.1, 477.6, 223.0, 479.0, 223.0);
		ctx.bezierCurveTo(480.4, 223.0, 481.5, 224.1, 481.5, 225.5);
		ctx.lineTo(481.5, 284.5);
		ctx.lineTo(550.0, 284.5);
		ctx.bezierCurveTo(551.4, 284.5, 552.5, 285.6, 552.5, 287.0);
		ctx.lineTo(552.5, 333.5);
		ctx.bezierCurveTo(552.5, 334.9, 551.4, 336.0, 550.0, 336.0);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(750.5, 282.0);
		ctx.bezierCurveTo(750.5, 283.4, 749.4, 284.5, 748.0, 284.5);
		ctx.lineTo(687.5, 284.5);
		ctx.bezierCurveTo(686.1, 284.5, 685.0, 283.4, 685.0, 282.0);
		ctx.lineTo(685.0, 215.5);
		ctx.lineTo(587.5, 215.5);
		ctx.bezierCurveTo(586.1, 215.5, 585.0, 214.4, 585.0, 213.0);
		ctx.lineTo(585.0, 136.0);
		ctx.bezierCurveTo(585.0, 134.6, 586.1, 133.5, 587.5, 133.5);
		ctx.lineTo(719.0, 133.5);
		ctx.lineTo(719.0, 32.5);
		ctx.lineTo(680.0, 32.5);
		ctx.lineTo(680.0, 71.5);
		ctx.bezierCurveTo(680.0, 72.9, 678.9, 74.0, 677.5, 74.0);
		ctx.lineTo(557.5, 74.0);
		ctx.bezierCurveTo(556.1, 74.0, 555.0, 72.9, 555.0, 71.5);
		ctx.lineTo(555.0, 0.0);
		ctx.lineTo(560.0, 0.0);
		ctx.lineTo(560.0, 69.0);
		ctx.lineTo(675.0, 69.0);
		ctx.lineTo(675.0, 30.0);
		ctx.bezierCurveTo(675.0, 28.6, 676.1, 27.5, 677.5, 27.5);
		ctx.lineTo(721.5, 27.5);
		ctx.bezierCurveTo(722.9, 27.5, 724.0, 28.6, 724.0, 30.0);
		ctx.lineTo(724.0, 136.0);
		ctx.bezierCurveTo(724.0, 137.4, 722.9, 138.5, 721.5, 138.5);
		ctx.lineTo(590.0, 138.5);
		ctx.lineTo(590.0, 210.5);
		ctx.lineTo(687.5, 210.5);
		ctx.bezierCurveTo(688.9, 210.5, 690.0, 211.6, 690.0, 213.0);
		ctx.lineTo(690.0, 279.5);
		ctx.lineTo(748.0, 279.5);
		ctx.bezierCurveTo(749.4, 279.5, 750.5, 280.6, 750.5, 282.0);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(633.5, 307.5);
		ctx.lineTo(633.5, 423.0);
		ctx.bezierCurveTo(633.5, 424.4, 632.4, 425.5, 631.0, 425.5);
		ctx.lineTo(528.5, 425.5);
		ctx.lineTo(528.5, 500.0);
		ctx.lineTo(523.5, 500.0);
		ctx.lineTo(523.5, 423.0);
		ctx.bezierCurveTo(523.5, 421.6, 524.6, 420.5, 526.0, 420.5);
		ctx.lineTo(628.5, 420.5);
		ctx.lineTo(628.5, 307.5);
		ctx.bezierCurveTo(628.5, 306.1, 629.6, 305.0, 631.0, 305.0);
		ctx.bezierCurveTo(632.4, 305.0, 633.5, 306.1, 633.5, 307.5);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(800.0, 396.3);
		ctx.lineTo(800.0, 401.3);
		ctx.lineTo(717.5, 401.3);
		ctx.bezierCurveTo(716.1, 401.3, 715.0, 400.1, 715.0, 398.8);
		ctx.bezierCurveTo(715.0, 397.4, 716.1, 396.3, 717.5, 396.3);
		ctx.lineTo(800.0, 396.3);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
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
