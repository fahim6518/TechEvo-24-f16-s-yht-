document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to (replace with your event date)
    const countDownDate = new Date('Mar 5, 2024 00:00:00').getTime();

    // Update the countdown every 1 second
    const countdownTimer = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown timer
        document.getElementById('countdown-timer').innerHTML = `
            <div class="countdown-timer-item">
                <span>${days}</span>
                <p>Days</p>
            </div>
            <div class="countdown-timer-item">
                <span>${hours}</span>
                <p>Hours</p>
            </div>
            <div class="countdown-timer-item">
                <span>${minutes}</span>
                <p>Minutes</p>
            </div>
            <div class="countdown-timer-item">
                <span>${seconds}</span>
                <p>Seconds</p>
            </div>
        `;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById('countdown-timer').innerHTML = '<p>Event has started!</p>';
        }
    }, 1000);
});
