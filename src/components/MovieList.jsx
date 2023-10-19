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
        <ul key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-release-date">({movie.release_date})</p>
          </Link>
        </ul>
      ))}
    </div>
  );
};

{
  /* <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
</div


.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 10px;
  text-align: center;

.grid-item {
  background-color: #ddd;
  padding: 20px;
  border: 1px solid #888;
} */
}
