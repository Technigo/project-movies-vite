import React from "react"; 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PopularMoviesList.css";

// API key - take this away?
const API_KEY = "ff5630b14afe9dae44f59f03ba4182dc";
// Popular Movies URL link - take this away?
const BASE_URL = "https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1";
// Popular Movies URL link and API key 
const MOVIES_URL = "https://api.themoviedb.org/3/movie/popular?api_key=ff5630b14afe9dae44f59f03ba4182dc&language=en-US&page=1";

export const PopularMoviesList = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {

    fetch(MOVIES_URL)
      .then((response) => response.json())
      .then((data) => {
        // REMOVE CONSOLE LOG LATER
        console.log("Fetched movies data:", data);
        setPopularMovies(data.results);
      })
    }, []);

  return (
    <div className="movie-list-container">
      {popularMovies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link to={`/movie/${movie.id}`}>
              {/* Poster Image */}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Adjust size as needed
              alt={`${movie.title} Poster`}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.title}</h3>
          </Link>
        </div>
        ))}
    </div>
  );
}; 
