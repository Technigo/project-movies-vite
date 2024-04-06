import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { apiKey } from "../config.json";
import "./PopularMovies.css";

// const API_KEY = "83ae1909d9454a12587fc31178454612";

export const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to load movies. Please check the url or try again later"
          );
        }
        return response.json();
      })
      .then((json) => {
        setMovies(json.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    (movies.length && (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    )) ||
    (error && <div>{error}</div>)
  );
};
