// script.js

// Get the current page URL
var currentPageUrl = window.location.href;

// Get all the navigation links
var navLinks = document.querySelectorAll('nav ul li a');

// Loop through each navigation link
navLinks.forEach(function(link) {
    // Check if the link's href matches the current page URL
    if (link.href === currentPageUrl) {
        // Add a class to highlight the current link
        link.classList.add('active');
    }
});

document.getElementById('hotelForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Basic validation (for demonstration; in a real scenario, more thorough validation would be necessary)
    var guestName = document.getElementById('guestName').value;
    if (guestName.trim() === '') {
        alert('Please enter the guest name.');
        return;
    }

    // If more validation passes, proceed to submit the form data
    // For demonstration, we'll just log to the console
    console.log("Form Submitted Successfully!");
    alert('Form Submitted Successfully!');
});
