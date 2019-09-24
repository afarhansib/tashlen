console.log("Hai Dunia!");

// Listen for orientation changes
window.addEventListener("orientationchange", function() {
	if (window.matchMedia("(orientation: portrait)").matches) {
		// document.querySelector("#gantiOrientasi");
		alert('tolong putar layar anda');
	}
	console.log(screen.orientation);
}, false);