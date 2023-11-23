const apiKey = 'YOUR_API_KEY';
const movieTitle = 'Inception';
const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieTitle)}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log('Movie data:', data);
        // Process the data here
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
