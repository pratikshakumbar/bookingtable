document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    const request = document.getElementById('request').value;

    // Display confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.classList.remove('hidden');
    confirmationMessage.innerHTML = `
        <strong>Booking Confirmation:</strong><br>
        Name: ${name}<br>
        Date: ${date}<br>
        Time: ${time}<br>
        Guests: ${guests}<br>
        Special Request: ${request || 'None'}
    `;

    // Clear form fields
    document.getElementById('bookingForm').reset();
});
