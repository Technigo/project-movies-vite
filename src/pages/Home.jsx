/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovies } from "../components/movies/MovieAPI"; // Import only fetchMovies
import "./Home.css";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    // Fetch popular movies when the component mounts
    fetchMovies(API_KEY)
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error('Failed to fetch movies:', error);
      });
  }, []); // Empty dependency array to fetch movies only once on component mount

  return (
    <div className="home-container">
      <ul className="movies-grid">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            {/* Make the movie title a clickable link */}
            <Link to={`/movies/${movie.id}`} className="movie-link">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=${API_KEY}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-details">
                <p className="movie-title">{movie.title}</p>
                <p className="release-date">{movie.release_date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
