import { useParams, Link } from "react-router-dom"; // `useParams` to get route parameters, `Link` for navigation
import { useState, useEffect } from "react";
import { fetchMovieDetails } from "../api/movieApi";
import "./MoviePages.css";

export const MoviePages = () => {
  // Get the `id` parameter from the URL using `useParams`
  const { id } = useParams();
  // State to hold the fetched movie details
  const [movie, setMovie] = useState(null);

  // fetch the movie details when the component mounts or when `id` changes
  useEffect(() => {
    const loadMovie = async () => {
      try {
        const movieData = await fetchMovieDetails(id);
        // Update the state with the fetched movie details
        setMovie(movieData);
      } catch (error) {
        console.error("Error loading movie:", error);
      }
    };

    loadMovie();
  }, [id]);

  // Render a fallback if no movie data is available
  if (!movie) {
    return (
      <div className="error">
        Failed to load movie details. Please try again later.
      </div>
    );
  }

  return (
    <div className="movie-detail-page">
      <div className="back-nav">
        <Link to="/" className="back-button">
          <svg className="back-arrow" fill="none" stroke="currentColor">
            {/* SVG path for the back arrow icon */}
            <path d="M19 12H5M5 12L12 19M5 12L12 5" />
          </svg>
          Home
        </Link>
      </div>

      {/* Content wrapper for the poster and movie details */}
      <div className="content-wrapper">
        <div className="poster-frame">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} // Dynamically generate the image URL
            alt={movie?.title} // Use the movie title as `alt` text for accessibility
            className="movie-poster"
          />
        </div>

        <div className="movie-info">
          <div className="rating">⭐ {movie?.vote_average.toFixed(1)}</div>
          {/* Display the movie rating */}
          <h1>{movie?.title}</h1>
          {/* Display the movie title */}
          <p className="overview">{movie?.overview}</p>
          {/* Display the movie overview */}
        </div>
      </div>

      <div
        className="backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`, // Dynamically generate the background image URL
        }}
      />
    </div>
  );
};
