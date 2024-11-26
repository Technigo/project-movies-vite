/** 
 * This component fetches Christmas movies from the TMDB API using an API key stored in an environment variable (`VITE_REACT_APP_MOVIE_API_KEY`).
 * 
 * The API key is accessed via `import.meta.env` to avoid hardcoding it.
 * 
 * The component uses the `useState` hook to store the fetched movie list, and `useEffect` to perform the API call only once on component mount.
 * 
 * If the request is successful, the movie data is stored in the `movies` state and displayed via the `MovieList` component. Errors during the fetch are logged to the console.
 * 
 * */

import { useEffect, useState } from "react";
import MovieList from "../pages/MovieList";

export const ApiFetcherKey = () => {
  //useState to store all movies
  const [movies, setMovies] = useState([]);

  //useEffect hook to fetch popular movies when component mounts

  useEffect(() => {
    const apiKey = import.meta.env.VITE_REACT_APP_MOVIE_API_KEY;

    // Fetch C movies 

    const fetchMovies = async () => {
      try {
        // API Call to fetch popular movies data
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=Christmas&language=en-US&api_key=${apiKey}`
        );

        // Check if response is successful; throw an error if not
        if (!response.ok) {
          throw new Error("Response not ok!");
        }

        // Fetch JSON data and set it to the movies state
        const json = await response.json();

        // Sort movies by popularity in descending order
        
        const sortedMovies = json.results.sort((a, b) => b.popularity - a.popularity);
        
        // Set sorted movies to state
        setMovies(sortedMovies);

      } catch (error) {
      // Log any errors during fetching
        console.log("Error fetching data", error);
      }
    };

    fetchMovies();
  }, []); //Empty dependency array ( [] ) to ensure the fetch only runs once.

  // Return popular movies 

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default ApiFetcherKey;
