import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieInfo.css';

function MovieInfo({ imageBaseUrl }) {
  const { movieTitle } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=601b98638927e2475c56c65de89c8c9c&language=en-US&query=${movieTitle.replace(/-/g, ' ')}&page=1`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.results && data.results.length > 0) {
          const movieId = data.results[0].id;
          return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=601b98638927e2475c56c65de89c8c9c&language=en-US`);
        } else {
          throw new Error('Movie not found!');
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.error('Error fetching movie:', error);
        setError('Failed to load movie details. Please try again later.');
      });
  }, [movieTitle]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>Loading...</p>;
  }

  const posterUrl = `${imageBaseUrl}w500${movie.poster_path}`;
  const backdropUrl = `${imageBaseUrl}w1280${movie.backdrop_path}`;

  return (
    <div className="movie-info-container">
      <div className="movie-poster">
        <img src={posterUrl} alt={`${movie.title} poster`} />
      </div>
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <img className="movie-backdrop" src={backdropUrl} alt={`${movie.title} backdrop`} />
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
        <p><strong>Rating:</strong> {movie.vote_average}/10</p>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  imageBaseUrl: PropTypes.string.isRequired,
};

export default MovieInfo;
