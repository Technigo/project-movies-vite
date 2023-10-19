import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=05ee03350103cd5d4cd268dcf88024c0&language=en-US&page=1";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies: {error.message}</p>;

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
              {movie.title} ({movie.release_date})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
