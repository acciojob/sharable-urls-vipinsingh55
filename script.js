// your code here
document.addEventListener('DOMContentLoaded', () => {
    // Function to update the URL in the h3 element
    function updateURL() {
        // Get the values from the input fields
        const name = document.getElementById('name').value.trim();
        const year = document.getElementById('year').value.trim();
        
        // Base URL
        const baseURL = 'https://localhost:8080/';
        let queryString = '';
        
        // Construct the query string
        if (name) {
            queryString += `name=${encodeURIComponent(name)}`;
        }
        if (year) {
            if (queryString) {
                queryString += '&';
            }
            queryString += `year=${encodeURIComponent(year)}`;
        }
        
        // Construct the full URL
        const fullURL = queryString ? `${baseURL}?${queryString}` : baseURL;
        
        // Update the h3 element with the new URL
        document.getElementById('url').textContent = fullURL;
    }

    // Attach the event listener to the submit button
    document.getElementById('button').addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        updateURL(); // Update the URL in the h3 element
    });
});
