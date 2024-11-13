import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './MoviePages.css';

export const MoviePages = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="movie-detail-page">
      <div className="back-nav">
        <Link to="/" className="back-button">
          <svg 
            className="back-arrow"
            //width="20" 
            //height="20" 
            //viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            //strokeWidth="2" 
            //strokeLinecap="round" 
            //strokeLinejoin="round"
          >
            <path d="M19 12H5M5 12L12 19M5 12L12 5" />
          </svg>
          Home
        </Link>
      </div>

      <div className="content-wrapper">
        <div className="poster-frame">
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.title}
            className="movie-poster"
          />
        </div>
        
        <div className="movie-info">
          <div className="rating">⭐ {movie?.vote_average.toFixed(1)}</div>
          <h1>{movie?.title}</h1>
          <p className="overview">{movie?.overview}</p>
        </div>
      </div>

      <div 
        className="backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`
        }}
      />
    </div>
  );
};
