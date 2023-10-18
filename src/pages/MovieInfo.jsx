/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './MovieInfo.css';

const API_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'c7a06bec29a13534747337c34c5c6147';

export const MovieInfo = ({ movie_id = "550" }) => {  // Default movie ID set to 550 for testing
  console.log("MovieInfo component rendered");
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    console.log("Fetching movie details...");
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${API_URL}${movie_id}?api_key=${API_KEY}&language=en-US`);
        const data = await response.json();

        console.log('Fetched movie data', data);

        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    
    fetchMovieDetails();
  }, [movie_id]);

  return (
    <div className="movie-info">
      {movieDetails ? (
        <>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
          {/* You can display more details here */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
