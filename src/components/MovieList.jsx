import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MovieList.css";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=05ee03350103cd5d4cd268dcf88024c0&language=en-US&page=1"
    )
      .then((response) => response.json())
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
    <div className="movie-list-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <Link to={`/movie/${movie.id}`} className="movie-link">
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
            <div className="movie-details">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-release-date">Released: {movie.release_date}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}