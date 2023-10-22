/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMovies, fetchMovieDetails } from "../components/movies/MovieAPI"

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch popular movies when the component mounts
    fetchMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error('Failed to fetch movies:', error);
      });
  }, []);

  return (
    <div>
      <h1>List of most popular movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {/* Make the movie title a clickable link */}
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

