// search.js

// Assuming a simple client-side search functionality that filters visible content
// based on the search query entered by the user.

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input'); // Assuming there's an input with id 'search-input'
    const searchButton = document.getElementById('search-button'); // Assuming there's a button with id 'search-button'
    const contentSections = document.querySelectorAll('.content-section'); // Assuming each main section has a class 'content-section'

    // Function to handle search
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();

        contentSections.forEach(section => {
            // Assuming each section has a data attribute 'data-keywords' that includes keywords for search
            const keywords = section.getAttribute('data-keywords').toLowerCase();
            if (keywords.includes(searchTerm)) {
                section.style.display = ''; // Show the section if it matches the search term
            } else {
                section.style.display = 'none'; // Hide the section if it does not match the search term
            }
        });
    }

    // Add click event listener to search button
    searchButton.addEventListener('click', handleSearch);

    // Add keyup event listener to search input for real-time filtering
    searchInput.addEventListener('keyup', handleSearch);
});
