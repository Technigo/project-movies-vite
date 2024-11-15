import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieInfo.css';

function MovieInfo({ imageBaseUrl }) {
  const { movieTitle } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieTitle.replace(/-/g, ' ')}&page=1`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.results && data.results.length > 0) {
          const movieId = data.results[0].id;
          return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`);
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
    return <div className="error-message"><p>{error}</p></div>;
  }

  if (!movie) {
    return <div className="loading-message"><p>Loading...</p></div>;
  }

  const posterUrl = movie.poster_path ? `${imageBaseUrl}w500${movie.poster_path}` : '/placeholder-poster.png';
  const backdropUrl = movie.backdrop_path ? `${imageBaseUrl}w1280${movie.backdrop_path}` : '/placeholder-backdrop.png';

  return (
    <div className="movie-info-page" style={{ backgroundImage: `url(${backdropUrl})` }}>
      <div className="movie-info-container">
        <div className="movie-poster">
          <img className="detail-poster" src={posterUrl} alt={`${movie.title} poster`} />
        </div>
        <div className="movie-details">
          <h2>{movie.title}</h2>
          <p><strong>Release Date:</strong> {movie.release_date || 'N/A'}</p>
          <p><strong>Overview:</strong> {movie.overview || 'No overview available.'}</p>
          <p><strong>Runtime:</strong> {movie.runtime ? `${movie.runtime} minutes` : 'N/A'}</p>
          <p><strong>Rating:</strong> {movie.vote_average ? `${movie.vote_average}/10` : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  imageBaseUrl: PropTypes.string.isRequired,
};

export default MovieInfo;
