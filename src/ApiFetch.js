// These functions fetches data from api

// API key
const apiEnv = import.meta.env.VITE_API_KEY;
const URL =  `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`

// Fetches all popular movies
// export const fetchMovies = async () => {  
//     const response = await fetch(URL);
//   if (!response.ok) {
//     throw new Error('Failed to fetch movies');
//   }
//   return await response.json();
// };

//Fetches movie details which will be displayed in The MovieProfile
// export const fetchMovieDetails = async (id) => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${apiEnv}&language=en-US`
//   );
//   if (!response.ok) {
//     throw new Error('Failed to fetch movie details');
//   }
//   return await response.json();
// };