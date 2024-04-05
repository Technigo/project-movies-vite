import { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Loadingspinner } from "../../components/LoadingSpinner/Loadingspinner";
import "./MoviesList.css";

export const MoviesList = () => {
  // Get api-key(apiEnv) from .env file
  const apiEnv = import.meta.env.VITE_OPENDB_KEY;
  // API endpoint to fetch list of movie
  const movieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`;

  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        // Sen Get request to movieUrl and await the response
        const response = await fetch(movieUrl);
        if (!response.ok) {
          // If error is detected, throw an error
          throw new Error(
            "Failed to fetch movies. Check the url or try again later"
          );
        }
        // If all is good, store the JSON-data in the data-variable
        const data = await response.json();
        console.log("Fetched movieslist:", data.results);
        // Update movies-state with results from the data
        setMoviesList(data.results);
        // After delay of 500 milliseconds, set setLoading to false
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchMoviesList();
  }, [movieUrl]);
  return loading ? (
    <Loadingspinner />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="movieslist-container">
      {/* Map through list of movies and render each movie with props */}
      {moviesList.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          release_date={movie.release_date}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
        />
      ))}
    </div>
  );
};
