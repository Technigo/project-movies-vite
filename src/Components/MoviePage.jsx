import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavBar } from './NavBar';
import './MoviePage.css';
import playIcon from '../assets/play.png';

export const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US&append_to_response=credits`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Movie Details:", data);
        setMovie(data);
      })
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [movieId, apiKey]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const topCast = movie.credits?.cast.slice(0, 3).map((actor) => actor.name).join(', ');
  const genres = movie.genres.map((genre) => genre.name).join(', ');
  const releaseYear = new Date(movie.release_date).getFullYear();
  const rating = movie.vote_average;

  return (
    <div 
      className="movie-page" 
      style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), black), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}
    >
      <NavBar />
      <div className="movie-info">
        <h1 className="movie-title">{movie.title}</h1>
        <p className="movie-details">
          {releaseYear} • {movie.runtime} mins • {genres}
        </p>
        <p className="movie-rating">Rating: {rating} / 10</p>
        <p className="movie-description">{movie.overview}</p>

        <div className="buttons">
          <button className="play-button">
            <img src={playIcon} alt="Play" className="button-icon" /> PLAY
          </button>
          <button className="trailer-button">
            TRAILER
          </button>
        </div>

        <div className="movie-extra-info">
          <p><strong>Cast:</strong> {topCast}</p>
          <p><strong>Genres:</strong> {genres}</p>
        </div>
      </div>
    </div>
  );
};
