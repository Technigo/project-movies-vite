import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../components/MovieDetails.css";

// API key - take this away?
const API_KEY = "ff5630b14afe9dae44f59f03ba4182dc";
console.log("Using API Key:", API_KEY);

export const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from URL
  const [movieInfo, setMovieInfo] = useState(); // State to store movie details

  useEffect(() => {
    const movieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

    console.log("Fetch data from URL: Hello", movieURL); // Check constructed URL

    fetch(movieURL)
      .then(response => response.json())
      .then(data => setMovieInfo(data)) //store the movie data in state
  }, [id]); // Re-runs if id changes

  //Look up if I need this?
  if (!movieInfo) return <div>Loading...</div>;

  return (
    <div className="movie-details-container">
        {/* //Backdrop image */}
        <img 
        src={`https://image.tmdb.org/t/p/w1280${movieInfo.backdrop_path}`} 
        alt={`${movieInfo.title} Backdrop`} 
        className="movie-backdrop"
      />
      <div className="movie-content">
        {/* Poster image */}
        <img 
        src={`https://image.tmdb.org/t/p/w342${movieInfo.poster_path}`} 
        alt={`${movieInfo.title} Poster`} 
        className="movie-image"
        />
        <div className="movie-info">
          <h1>{movieInfo.title}</h1>
            <p>IMDb: {movieInfo.vote_average.toFixed(1)}</p>
            <p>Released: {movieInfo.release_date}</p>
            <p>Genres: {movieInfo.genres?.map(genre => genre.name).join(', ')}</p>
            <p>{movieInfo.overview}</p>
        </div>
      </div>
    </div>
  );
};
