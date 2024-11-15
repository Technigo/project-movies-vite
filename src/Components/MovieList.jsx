import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import './MovieList.css';
import playIcon from '../assets/play.png';
import arrowIcon from '../assets/arrow.png';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Movies:", data.results);
        setMovies(data.results);
      })
      .catch((error) => console.error('Error fetching movies:', error));
  }, [apiKey]);
  
  console.log("API Key:", apiKey);

  const featuredMovie = movies[0];

  return (
    <div 
      className="movie-list" 
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, black 100%), url(https://image.tmdb.org/t/p/w1280${featuredMovie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <NavBar />
      <div className="featured-movie">
        <h1 className="movie-title">{featuredMovie?.title}</h1>
        <p className="movie-overview">{featuredMovie?.overview}</p>
        <div className="buttons">
            <button className="watch-button">
                Watch Now <img src={playIcon} alt="Play Icon" className="button-icon" />
            </button>
            <Link to={`/movies/${featuredMovie?.id}`} className="details-button">
                Details <img src={arrowIcon} alt="Arrow Icon" className="button-icon" />
            </Link>
        </div>
      </div>
      <div className="movie-thumbnails">
        <h2>Latest releases</h2>
        <div className="movies">
          {movies.map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-thumbnail">
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
                className="thumbnail-image"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
