import React from "react"; 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PopularMoviesList.css";

// Popular Movies URL link and API key 
const MOVIES_URL = "https://api.themoviedb.org/3/movie/popular?api_key=ff5630b14afe9dae44f59f03ba4182dc&language=en-US&page=1";

export const PopularMoviesList = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {

    fetch(MOVIES_URL)
      .then((response) => response.json())
      .then((data) => {
        setPopularMovies(data.results);
      })
    }, []);

  return (
    <div className="movie-list-container">
      {popularMovies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            {/* Poster Image */}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.title}</h3>
              <span className="movie-release-date">{movie.release_date}</span>
          </Link>
        ))}
    </div>
  );
}; 
