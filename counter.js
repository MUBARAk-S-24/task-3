function setCountdown() {
	// Get the event date and time from the input field
	var eventDate = document.getElementById("event-date").value;
	
	// Convert the event date to a Unix timestamp in seconds
	var eventTimestamp = new Date(eventDate).getTime() / 1000;

	// Start the countdown timer
	setInterval(function() {
		// Get the current Unix timestamp in seconds
		var currentTimestamp = Math.floor(Date.now() / 1000);

		// Calculate the remaining time in seconds
		var remainingTime = eventTimestamp - currentTimestamp;

		// If the event has already passed, show a message
		if (remainingTime <= 0) {
			document.getElementById("countdown").innerHTML = "The event has already passed.";
			return;
		}

		// Calculate the remaining time in days, hours, minutes, and seconds
		var days = Math.floor(remainingTime / (60 * 60 * 24));
		var hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
		var minutes = Math.floor((remainingTime % (60 * 60)) / 60);
		var seconds = remainingTime % 60;

		// Build the countdown timer text
		var countdownText = "";
		if (days > 0) {
			countdownText += days + "d ";
		}
		if (hours > 0) {
			countdownText += hours + "h ";
		}
		if (minutes > 0) {
			countdownText += minutes + "m ";
		}
		if (seconds > 0) {
			countdownText += seconds + "s";
		}

		// Update the countdown timer text in the HTML
		document.getElementById("countdown").innerHTML = countdownText;
	}, 1000);
}
