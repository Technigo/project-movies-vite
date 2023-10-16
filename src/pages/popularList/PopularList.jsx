// POPULAR MOVIES: https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1
// IMAGE URL FINDER: https://api.themoviedb.org/3/configuration?api_key={api_key}  FOR EXAMPLE: https://image.tmdb.org/t/p/w1280/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg

const API_KEY = "8310ae58e125eac683c38e74d6f6a3aa";
const URL_START = "https://api.themoviedb.org/3/movie/";

const popularMovies = `${URL_START}popular?api_key=${API_KEY}&language=en-US&page=1`;
console.log(popularMovies);

// TODO: This route is responsible for the home page. It uses useEffect to run an API request to themoviedb.org and fetch popular films in the US, puts them into state using useState, and then renders them wrapped in a Link from react-router-dom to link to the detail page.
