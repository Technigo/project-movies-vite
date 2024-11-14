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
      <ul>
        {popularMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}; 

// Note to self, why can't I use this line of code instead since it's the homepage
{/* <Link to="/"</Link> */}