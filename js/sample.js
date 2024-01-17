// Set the expiration date (replace with your desired date and time)
const expirationDate = new Date('2024-02-01T00:00:00');

// Function to update the countdown
function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = expirationDate - currentDate;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById('countdown').innerHTML = 'Offer Expired';
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();
