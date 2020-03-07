class PointerLock {
	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;
	private scoutX: HTMLElement;
	private scoutY: HTMLElement;
	private RADIUS: number;
	private x: number;
	private y: number;

	constructor() {
		this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
		this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
		this.scoutX = document.getElementById('scoutX') as HTMLElement;
		this.scoutY = document.getElementById('scoutY') as HTMLElement;
		this.x = 250 as number;
		this.y = 150 as number;
		this.RADIUS = 10 as number;

		this.activateAPI();
		this.canvasDraw();
		document.addEventListener('pointerlockchange', this.lockChangeAlert);
	}

	public activateAPI(): void {
		this.canvas.onclick = () => {
			this.canvas.requestPointerLock();
		};
	}

	public canvasDraw(): void {
		this.context.fillStyle = '#000000';
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.fillStyle = '#ffffff';
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.RADIUS, 0, this.degToRad(360), true);
		this.context.fill();

		this.context.save();
		this.context.beginPath();
		this.context.moveTo(147.0, 91.0);
		this.context.bezierCurveTo(147.0, 92.4, 145.9, 93.5, 144.5, 93.5);
		this.context.lineTo(90.0, 93.5);
		this.context.bezierCurveTo(88.6, 93.5, 87.5, 92.4, 87.5, 91.0);
		this.context.lineTo(87.5, 0.0);
		this.context.lineTo(92.5, 0.0);
		this.context.lineTo(92.5, 88.5);
		this.context.lineTo(144.5, 88.5);
		this.context.bezierCurveTo(145.9, 88.5, 147.0, 89.6, 147.0, 91.0);
		this.context.closePath();
		this.context.fillStyle = '#ffffff';
		this.context.fill();

		this.context.beginPath();
		this.context.moveTo(164.5, 0.0);
		this.context.lineTo(164.5, 42.5);
		this.context.bezierCurveTo(164.5, 43.9, 163.4, 45.0, 162.0, 45.0);
		this.context.bezierCurveTo(160.6, 45.0, 159.5, 43.9, 159.5, 42.5);
		this.context.lineTo(159.5, 0.0);
		this.context.lineTo(164.5, 0.0);
		this.context.closePath();
		this.context.fill();

		this.context.beginPath();
		this.context.moveTo(131.0, 256.5);
		this.context.lineTo(131.0, 346.0);
		this.context.bezierCurveTo(131.0, 347.4, 129.9, 348.5, 128.5, 348.5);
		this.context.bezierCurveTo(127.1, 348.5, 126.0, 347.4, 126.0, 346.0);
		this.context.lineTo(126.0, 259.0);
		this.context.lineTo(65.0, 259.0);
		this.context.bezierCurveTo(63.6, 259.0, 62.5, 257.9, 62.5, 256.5);
		this.context.lineTo(62.5, 187.5);
		this.context.lineTo(0.0, 187.5);
		this.context.lineTo(0.0, 182.5);
		this.context.lineTo(65.0, 182.5);
		this.context.bezierCurveTo(66.4, 182.5, 67.5, 183.6, 67.5, 185.0);
		this.context.lineTo(67.5, 254.0);
		this.context.lineTo(128.5, 254.0);
		this.context.bezierCurveTo(129.9, 254.0, 131.0, 255.1, 131.0, 256.5);
		this.context.closePath();
		this.context.fill();

		this.context.beginPath();
		this.context.moveTo(61.5, 445.0);
		this.context.bezierCurveTo(60.1, 445.0, 59.0, 443.9, 59.0, 442.5);
		this.context.lineTo(59.0, 355.0);
		this.context.bezierCurveTo(59.0, 353.6, 60.1, 352.5, 61.5, 352.5);
		this.context.bezierCurveTo(62.9, 352.5, 64.0, 353.6, 64.0, 355.0);
		this.context.lineTo(64.0, 442.5);
		this.context.bezierCurveTo(64.0, 443.9, 62.9, 445.0, 61.5, 445.0);
		this.context.closePath();
		this.context.fill();

		this.context.beginPath();
		this.context.moveTo(227.5, 406.0);
		this.context.lineTo(61.5, 406.0);
		this.context.bezierCurveTo(60.1, 406.0, 59.0, 404.9, 59.0, 403.5);
		this.context.bezierCurveTo(59.0, 402.1, 60.1, 401.0, 61.5, 401.0);
		this.context.lineTo(227.5, 401.0);
		this.context.bezierCurveTo(228.9, 401.0, 230.0, 402.1, 230.0, 403.5);
		this.context.bezierCurveTo(230.0, 404.9, 228.9, 406.0, 227.5, 406.0);
		this.context.closePath();
		this.context.fill();

		this.context.beginPath();
		this.context.moveTo(399.5, 346.0);
		this.context.lineTo(399.5, 469.0);
		this.context.bezierCurveTo(399.5, 470.4, 398.4, 471.5, 397.0, 471.5);
		this.context.lineTo(177.5, 471.5);
		this.context.lineTo(177.5, 500.0);
		this.context.lineTo(172.5, 500.0);
		this.context.lineTo(172.5, 469.0);
		this.context.bezierCurveTo(172.5, 467.6, 173.6, 466.5, 175.0, 466.5);
		this.context.lineTo(394.5, 466.5);
		this.context.lineTo(394.5, 346.0);
		this.context.bezierCurveTo(394.5, 345.6, 394.6, 345.3, 394.7, 345.0);
		this.context.bezierCurveTo(395.1, 344.1, 396.0, 343.5, 397.0, 343.5);
		this.context.bezierCurveTo(398.0, 343.5, 398.9, 344.1, 399.3, 345.0);
		this.context.bezierCurveTo(399.4, 345.3, 399.5, 345.6, 399.5, 346.0);
		this.context.closePath();
		this.context.fill();

		this.context.beginPath();
		this.context.moveTo(501.0, 350.0);
		this.context.lineTo(286.0, 350.0);
		this.context.bezierCurveTo(284.6, 350.0, 283.5, 348.9, 283.5, 347.5);
		this.context.bezierCurveTo(283.5, 346.1, 284.6, 345.0, 286.0, 345.0);
		this.context.lineTo(501.0, 345.0);
		this.context.bezierCurveTo(502.4, 345.0, 503.5, 346.1, 503.5, 347.5);
		this.context.bezierCurveTo(503.5, 348.9, 502.4, 350.0, 501.0, 350.0);
		this.context.closePath();
		this.context.fill();

		this.context.beginPath();
		this.context.moveTo(214.0, 357.5);
		this.context.bezierCurveTo(212.6, 357.5, 211.5, 356.4, 211.5, 355.0);
		this.context.lineTo(211.5, 211.0);
		this.context.bezierCurveTo(211.5, 209.6, 212.6, 208.5, 214.0, 208.5);
		this.context.lineTo(299.0, 208.5);
		this.context.lineTo(299.0, 127.5);
		this.context.bezierCurveTo(299.0, 126.1, 300.1, 125.0, 301.5, 125.0);
		this.context.lineTo(400.0, 125.0);
		this.context.bezierCurveTo(401.4, 125.0, 402.5, 126.1, 402.5, 127.5);
		this.context.lineTo(402.5, 288.5);
		this.context.bezierCurveTo(402.5, 289.9, 401.4, 291.0, 400.0, 291.0);
		this.context.lineTo(312.5, 291.0);
		this.context.bezierCurveTo(311.1, 291.0, 310.0, 289.9, 310.0, 288.5);
		this.context.bezierCurveTo(310.0, 287.1, 311.1, 286.0, 312.5, 286.0);
		this.context.lineTo(397.5, 286.0);
		this.context.lineTo(397.5, 130.0);
		this.context.lineTo(304.0, 130.0);
		this.context.lineTo(304.0, 211.0);
		this.context.bezierCurveTo(304.0, 212.4, 302.9, 213.5, 301.5, 213.5);
		this.context.lineTo(216.5, 213.5);
		this.context.lineTo(216.5, 355.0);
		this.context.bezierCurveTo(216.5, 356.4, 215.4, 357.5, 214.0, 357.5);
		this.context.closePath();
		this.context.fill();

		this.context.beginPath();
		this.context.moveTo(375.0, 0.0);
		this.context.lineTo(375.0, 36.5);
		this.context.bezierCurveTo(375.0, 37.9, 373.9, 39.0, 372.5, 39.0);
		this.context.lineTo(271.5, 39.0);
		this.context.lineTo(271.5, 66.0);
		this.context.bezierCurveTo(271.5, 67.4, 270.4, 68.5, 269.0, 68.5);
		this.context.bezierCurveTo(267.6, 68.5, 266.5, 67.4, 266.5, 66.0);
		this.context.lineTo(266.5, 36.5);
		this.context.bezierCurveTo(266.5, 35.1, 267.6, 34.0, 269.0, 34.0);
		this.context.lineTo(370.0, 34.0);
		this.context.lineTo(370.0, 0.0);
		this.context.lineTo(375.0, 0.0);
		this.context.closePath();
		this.context.fill();

		this.context.beginPath();
		this.context.moveTo(479.0, 187.5);
		this.context.bezierCurveTo(477.6, 187.5, 476.5, 186.4, 476.5, 185.0);
		this.context.lineTo(476.5, 130.0);
		this.context.lineTo(400.0, 130.0);
		this.context.bezierCurveTo(398.6, 130.0, 397.5, 128.9, 397.5, 127.5);
		this.context.bezierCurveTo(397.5, 126.1, 398.6, 125.0, 400.0, 125.0);
		this.context.lineTo(479.0, 125.0);
		this.context.bezierCurveTo(480.4, 125.0, 481.5, 126.1, 481.5, 127.5);
		this.context.lineTo(481.5, 185.0);
		this.context.bezierCurveTo(481.5, 186.4, 480.4, 187.5, 479.0, 187.5);
		this.context.closePath();
		this.context.fill();

		this.context.beginPath();
		this.context.moveTo(550.0, 336.0);
		this.context.bezierCurveTo(548.6, 336.0, 547.5, 334.9, 547.5, 333.5);
		this.context.lineTo(547.5, 289.5);
		this.context.lineTo(479.0, 289.5);
		this.context.bezierCurveTo(477.6, 289.5, 476.5, 288.4, 476.5, 287.0);
		this.context.lineTo(476.5, 225.5);
		this.context.bezierCurveTo(476.5, 224.1, 477.6, 223.0, 479.0, 223.0);
		this.context.bezierCurveTo(480.4, 223.0, 481.5, 224.1, 481.5, 225.5);
		this.context.lineTo(481.5, 284.5);
		this.context.lineTo(550.0, 284.5);
		this.context.bezierCurveTo(551.4, 284.5, 552.5, 285.6, 552.5, 287.0);
		this.context.lineTo(552.5, 333.5);
		this.context.bezierCurveTo(552.5, 334.9, 551.4, 336.0, 550.0, 336.0);
		this.context.closePath();
		this.context.fill();

		this.context.beginPath();
		this.context.moveTo(750.5, 282.0);
		this.context.bezierCurveTo(750.5, 283.4, 749.4, 284.5, 748.0, 284.5);
		this.context.lineTo(687.5, 284.5);
		this.context.bezierCurveTo(686.1, 284.5, 685.0, 283.4, 685.0, 282.0);
		this.context.lineTo(685.0, 215.5);
		this.context.lineTo(587.5, 215.5);
		this.context.bezierCurveTo(586.1, 215.5, 585.0, 214.4, 585.0, 213.0);
		this.context.lineTo(585.0, 136.0);
		this.context.bezierCurveTo(585.0, 134.6, 586.1, 133.5, 587.5, 133.5);
		this.context.lineTo(719.0, 133.5);
		this.context.lineTo(719.0, 32.5);
		this.context.lineTo(680.0, 32.5);
		this.context.lineTo(680.0, 71.5);
		this.context.bezierCurveTo(680.0, 72.9, 678.9, 74.0, 677.5, 74.0);
		this.context.lineTo(557.5, 74.0);
		this.context.bezierCurveTo(556.1, 74.0, 555.0, 72.9, 555.0, 71.5);
		this.context.lineTo(555.0, 0.0);
		this.context.lineTo(560.0, 0.0);
		this.context.lineTo(560.0, 69.0);
		this.context.lineTo(675.0, 69.0);
		this.context.lineTo(675.0, 30.0);
		this.context.bezierCurveTo(675.0, 28.6, 676.1, 27.5, 677.5, 27.5);
		this.context.lineTo(721.5, 27.5);
		this.context.bezierCurveTo(722.9, 27.5, 724.0, 28.6, 724.0, 30.0);
		this.context.lineTo(724.0, 136.0);
		this.context.bezierCurveTo(724.0, 137.4, 722.9, 138.5, 721.5, 138.5);
		this.context.lineTo(590.0, 138.5);
		this.context.lineTo(590.0, 210.5);
		this.context.lineTo(687.5, 210.5);
		this.context.bezierCurveTo(688.9, 210.5, 690.0, 211.6, 690.0, 213.0);
		this.context.lineTo(690.0, 279.5);
		this.context.lineTo(748.0, 279.5);
		this.context.bezierCurveTo(749.4, 279.5, 750.5, 280.6, 750.5, 282.0);
		this.context.closePath();
		this.context.fill();

		this.context.beginPath();
		this.context.moveTo(633.5, 307.5);
		this.context.lineTo(633.5, 423.0);
		this.context.bezierCurveTo(633.5, 424.4, 632.4, 425.5, 631.0, 425.5);
		this.context.lineTo(528.5, 425.5);
		this.context.lineTo(528.5, 500.0);
		this.context.lineTo(523.5, 500.0);
		this.context.lineTo(523.5, 423.0);
		this.context.bezierCurveTo(523.5, 421.6, 524.6, 420.5, 526.0, 420.5);
		this.context.lineTo(628.5, 420.5);
		this.context.lineTo(628.5, 307.5);
		this.context.bezierCurveTo(628.5, 306.1, 629.6, 305.0, 631.0, 305.0);
		this.context.bezierCurveTo(632.4, 305.0, 633.5, 306.1, 633.5, 307.5);
		this.context.closePath();
		this.context.fill();

		this.context.beginPath();
		this.context.moveTo(800.0, 396.3);
		this.context.lineTo(800.0, 401.3);
		this.context.lineTo(717.5, 401.3);
		this.context.bezierCurveTo(716.1, 401.3, 715.0, 400.1, 715.0, 398.8);
		this.context.bezierCurveTo(715.0, 397.4, 716.1, 396.3, 717.5, 396.3);
		this.context.lineTo(800.0, 396.3);
		this.context.closePath();
		this.context.fill();
		this.context.restore();
	}

	private degToRad(degrees: number): number {
		return (Math.PI / 180) * degrees;
	}

	private lockChangeAlert(): void {
		document.pointerLockElement === this.canvas
			? document.addEventListener('mousemove', this.updatePosition)
			: document.removeEventListener('mousemove', this.updatePosition);
	}

	private updatePosition(event: any): void {
		this.x += event.movementX;
		this.y += event.movementY;

		if (this.x > this.canvas.width + this.RADIUS) this.x = -this.RADIUS;
		if (this.y > this.canvas.height + this.RADIUS) this.y = -this.RADIUS;
		if (this.x < -this.RADIUS) this.x = this.canvas.width + this.RADIUS;
		if (this.y < -this.RADIUS) this.y = this.canvas.height + this.RADIUS;

		this.scoutX.textContent = String(this.x);
		this.scoutY.textContent = String(this.y);
	}
}

new PointerLock();
