/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovies, fetchMovieDetails } from "./MovieAPI";
import "./MovieCard.css"

export const MovieCard = () => {
  const API_KEY = import.meta.env.VITE_API_KEY
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams(); // Get the movie ID from the route

  useEffect(() => {
    // Fetch popular movies when the component mounts
    fetchMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error('Failed to fetch movies:', error);
      });

    // Fetch movie details by ID
    if (id) {
      fetchMovieDetails(id)
        .then((data) => {
          setMovieDetails(data);
        })
        .catch((error) => {
          console.error('Failed to fetch movie details:', error);
        });
    }
  }, [id]); // Make sure to include id in the dependency array

  return (
    <div className="movie-card">
      {/* Render movies */}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className="movie-title">
            {movie.title}
          </li>
        ))}
      </ul>

      {/* Render movie details */}
      {movieDetails && (
        <div>
          <h1 className="movie-title">{movieDetails.title}</h1>
          {/* Render other movie details here, e.g., overview, release date */}
          <p className="movie-overview">{movieDetails.overview}</p>
          <p className="release-date">Release Date: {movieDetails.release_date}</p>
          {/* You can add more details as needed */}
        </div>
      )}

      {/* Render movie images (posters and backdrops) */}
      {movieDetails && (
        <div className="images-container">
          <h2 className="images-title">Images</h2>
          <div className="poster-container">
            <h3 className="poster-title">Movie Poster</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}?api_key=${API_KEY}`}
              alt={movieDetails.title}
              className="poster-image"
            />
          </div>
          <div className="backdrop-container">
            <h3 className="backdrop-title">Backdrop Image</h3>
            <img
              src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
              alt={movieDetails.title}
              className="backdrop-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};
