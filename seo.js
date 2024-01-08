// seo.js
// This script is responsible for handling the SEO (Search Engine Optimization) aspects of the website.

// Function to update meta tags dynamically
function updateMetaTags(title, description, keywords) {
  const metaTitle = document.querySelector('title');
  const metaDescription = document.querySelector('meta[name="description"]');
  const metaKeywords = document.querySelector('meta[name="keywords"]');

  metaTitle.textContent = title;
  metaDescription.setAttribute('content', description);
  metaKeywords.setAttribute('content', keywords);
}

// Function to set SEO properties based on the current page
function setSEOTags() {
  const path = window.location.pathname;
  const page = path.split('/').pop();

  switch (page) {
    case 'index.html':
      updateMetaTags(
        'Programming Education Website - Home',
        'Welcome to the Programming Education Website, your comprehensive resource for learning programming, software development, and computer science concepts.',
        'programming, education, software, development, computer science'
      );
      break;
    case 'software.html':
      updateMetaTags(
        'Software - Programming Education Website',
        'Explore different types of software, including operating systems, application software, and content management systems.',
        'software, operating systems, applications, CMS'
      );
      break;
    case 'programming_languages.html':
      updateMetaTags(
        'Programming Languages - Programming Education Website',
        'Learn about various programming languages such as Java, Python, C++, and JavaScript.',
        'programming languages, Java, Python, C++, JavaScript'
      );
      break;
    // Add cases for other pages as needed
    default:
      updateMetaTags(
        'Programming Education Website',
        'Learn programming, software development, and computer science concepts with our educational resources.',
        'programming, education, software, development, computer science'
      );
  }
}

// Call the function to set SEO tags when the script loads
document.addEventListener('DOMContentLoaded', setSEOTags);

// Export the functions if this script is used in a module system
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    updateMetaTags,
    setSEOTags
  };
}
