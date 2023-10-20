import "./Popular.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Popular = () => {
  // State to hold the list of popular movies.
  const [movies, setMovies] = useState([]);

  // Get the API key from environment variables.
  const api_key = import.meta.env.VITE_OPENDB_KEY;

  // API endpoint to fetch a list of popular movies.
  const popularApi = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

  // Function to fetch data from the API.
  const fetchData = async () => {
    try {
      // Send a GET request to the 'popularApi' URL and await the response.
      const response = await fetch(popularApi);
      // Check if the response indicates an error (HTTP status codes outside the 200-299 range).
      if (!response.ok) {
        // If an error is detected, throw an error to be caught in the catch block.
        throw new Error("Failed to fetch movies");
      }
      // Parse the response body as JSON and store it in the 'data' variable.
      const data = await response.json();
      // Log the fetched data to the console for debugging purposes.
      console.log("Popular movies data:", data);
      // Update the 'movies' state with the 'results' property from the fetched data.
      setMovies(data.results);
    } catch (error) {
      // If an error occurs during the try block (e.g., network error or API issues),
      // log the error to the console for debugging and troubleshooting.
      console.error("Error fetching data", error);
    }
  };

  // useEffect hook to run fetchData on component mount.
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="popular-page">
      {/* Map through the list of movies and render each movie as a Link to its detail page. */}
      {movies.map((movie) => {
        return (
          <Link key={movie.id} to={`/detail/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
              className="popular-poster"
            />
            <div className="popular-card-info">
              <h1 className="title">{movie.title}</h1>
              <p className="release-date">Released {movie.release_date}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
