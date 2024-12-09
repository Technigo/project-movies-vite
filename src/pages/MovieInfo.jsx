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
      <div
        className="movie-info-background"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`,
        }}
      ></div>
      <div className="overlay">
        {movieDetails ? (
          <div className="content-wrapper">
            <div className="poster-frame">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.title}
                className="movie-poster"
              />
            </div>
            <div className="movie-details">
              <p>
                <strong>Rating:</strong>  ⭐  {movieDetails.vote_average.toFixed(1)} / 10
              </p>
              <h1>{movieDetails.title}</h1>
              <div>
                <p>{movieDetails.overview}</p>
              </div>
              <div className="movie-details-inline">
                <p>
                  <strong>Genres:</strong>{" "}
                  {movieDetails.genres
                    ? movieDetails.genres.map((genre) => genre.name).join(", ")
                    : "No genres available"}
                </p>
                <p>
                  <strong>Release date:</strong> {movieDetails.release_date}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>No details available for this movie.</p>
        )}
      </div>
    </div>
  );
}
export default MovieInfo;
