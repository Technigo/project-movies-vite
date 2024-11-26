/* eslint-disable */

/* 
This is the MovieInfo component, which displays detailed information about a specific movie.
*
* It uses the `useParams` hook from React Router to extract the `movieId` parameter from the URL, fetches detailed movie information from an API, and displays the following details:

 * - Title
 * - Description (overview)
 * - Genre(s)
 * - Release date
 * - Rating
 */



import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieInfo = () => {
  const { movieId } = useParams(); // Get movie ID from URL params
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_REACT_APP_MOVIE_API_KEY;

    const fetchMovieDetails = async () => {
      try {
        // Fetch detailed movie data from TMDB API
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${apiKey}`
        );

        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }

        const data = await response.json(); /* Convert API response to JSON */
        setMovieDetails(data); // Set the movie details to state
      } catch (error) {
          console.log("Error fetching Happy thoughts:", error)
      } finally {
        setTimeout(() => {
          setLoading(false) /* Stop loading when posts are fetched after the delay. The delay is to better show the Loading state */
        }, 2000) // 2 seconds delay to show loading message
      }
    };

    fetchMovieDetails();
  }, []); // Only run once

  // Display loading state
  if (loading) return <p className="loading-message">Loading movie details...</p>;

  // Display movie details
  return (
    <div className="movie-info">
      <h3>Movie Details</h3>
      {movieDetails ? (
        <div>
          <h1>{movieDetails.title}</h1>
          <div>
          <div>
            <h3>Rating:</h3><p>{movieDetails.vote_average} / 10</p>
          </div>
            <h3>Description:</h3><p>{movieDetails.overview}</p>
          </div>
          <div>
            <h3>Genres:</h3><p>{movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
          <div>
            <h3>Release Date:</h3><p>{movieDetails.release_date}</p>
          </div>
        </div>
      ) : (
        <p>No details available for this movie.</p>
      )}
    </div>
  );
};

export default MovieInfo;
