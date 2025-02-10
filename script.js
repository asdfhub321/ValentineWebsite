// Handle "Yes" button click
const yesButton = document.getElementById('yesButton');
const responseText = document.getElementById('responseText');
const noButton = document.getElementById('noButton');

// Animation and shrinking behavior for "No" button
noButton.addEventListener('mouseover', function() {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    const randomSize = Math.floor(Math.random() * 50) + 30;

    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    noButton.style.transform = `scale(${randomSize / 100})`;
});

// When "Yes" is clicked, show a message and submit the form
yesButton.addEventListener('click', function(e) {
    e.preventDefault();  // Prevent the form from submitting immediately

    // Show a thank you message
    responseText.textContent = "Thank you for saying Yes! 💖";

    // Hide the "Yes" button after click
    yesButton.style.display = 'none';

    // Submit the form to Formspree
    const form = document.getElementById('responseForm');
    form.submit();
});
