function timer(sec) {
	const startTime = Date.now() + (sec * 1000);

	let timerId = setTimeout(function tick() {
		let elapsedTime = startTime - Date.now();
		document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
		if (elapsedTime <= 0) {
			return finishHandler(new Date())
		}
		timerId = setTimeout(tick, 1); // (*)
	}, 1);
}

function finishHandler (time) {
	document.getElementById("result").innerHTML += `<div>${time}</div>`;
}

timer(2);