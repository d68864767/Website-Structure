// main.js

document.addEventListener('DOMContentLoaded', (event) => {
    // Code to run after the document is fully loaded

    const navLinks = document.querySelectorAll('nav a');
    const quickLinks = document.querySelectorAll('.quick-links a');

    // Function to handle navigation click events
    function handleNavLinkClick(event) {
        event.preventDefault();
        const targetPage = event.target.getAttribute('href');
        window.location.href = targetPage;
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });

    // Add click event listeners to quick links
    quickLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });

    // Additional JavaScript functionality can be added below as needed
});

// This is a placeholder for any additional functionality that may be required
// for the interactive examples or other dynamic features of the website.
// For example, if there are interactive code snippets, you might add event
// listeners and handlers here to process and display the output of the code.

// Placeholder for interactive example functionality
// function runInteractiveExample(exampleId) {
//     // Code to execute the interactive example
//     console.log('Running interactive example:', exampleId);
// }

// You can also add any additional helper functions or event listeners as needed.
