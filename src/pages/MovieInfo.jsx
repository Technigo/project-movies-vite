/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieInfo.css';

const API_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'c7a06bec29a13534747337c34c5c6147';

export const MovieInfo = () => {  // Default movie ID set to 550 for testing
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${API_URL}${movieId}?api_key=${API_KEY}&language=en-US`);

        const data = await response.json();

        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div 
    className="movie-info" 
    style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movieDetails?.backdrop_path})`
    }}
    
  >
    {movieDetails ? (
      <div className='movie-info-container'>
        <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt="Movie poster" />
        <div className='movie-details'>
          <div className='movie-title'>
            <h2>{movieDetails.title}</h2>
            <div className='rating'>
              <span className='star-icon'>⭐️</span>
              <span>{Number(movieDetails.vote_average).toFixed(1)}</span>
            </div>
          </div>
          <div className='movie-disciption'>
          <p>{movieDetails.overview}</p>
          </div>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>

);
    };