// analytics.js

// This script will be used to integrate analytics functionality into the website.
// It will track user interactions and provide insights into user behavior.

(function() {
  // Load the analytics library (e.g., Google Analytics)
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  // Initialize the analytics library with your tracking ID
  ga('create', 'YOUR_TRACKING_ID', 'auto');

  // Send a pageview for the current page
  ga('send', 'pageview');

  // Function to track a specific event
  function trackEvent(category, action, label, value) {
    ga('send', 'event', category, action, label, value);
  }

  // Example usage: track clicks on navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      trackEvent('Navigation', 'click', link.getAttribute('href'));
    });
  });

  // Example usage: track form submissions or interactions with interactive examples
  // You can add more event listeners here based on the interactions you want to track

  // Make the trackEvent function available globally so it can be used elsewhere in the project
  window.trackEvent = trackEvent;

})();

// Replace 'YOUR_TRACKING_ID' with the actual tracking ID provided by your analytics service.
