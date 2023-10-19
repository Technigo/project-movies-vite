import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import starIcon from '../assets/star.svg';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
const POSTER_SIZE = "w342";
const BACKDROP_SIZE = "w780";

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const api_key = '917200cae8c9f306c0e6719af5d42134';
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        document.body.style.backgroundImage = `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${data.backdrop_path})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
      });

    return () => {
      document.body.style.backgroundImage = '';
    };
  }, [id]);

  return (
    <>
      <nav>
        <ul className="app-ul">
          <li className="app-li">
            <NavLink className="movies-btn" to="/movielist">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <img className="movie-poster" src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} alt={movie.title || "Movie poster"} />
        <div className="text-content">
        <div className="title-rating-wrapper">
            <h1>{movie.title}</h1>
            <div className="rating-box">
        <img className="star-icon" src={starIcon} alt="Star Rating" />
        <span className="rating-value">{parseFloat(movie.vote_average).toFixed(1)}</span>
            </div>
        </div>
        <p>{movie.overview}</p>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;






