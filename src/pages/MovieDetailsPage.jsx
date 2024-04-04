import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetails } from "../components/MovieDetails";

export const MovieDetailsPage = () => {
  const { id } = useParams(); // Get id from URL params
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id) return; // Ensure id is valid before making the API call
      const API_KEY = "227355c25b5984172934aa93f25e5d05";
      const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

      try {
        const response = await fetch(movieDetailsUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      {movieDetails ? (
        <div className="movie-details-page">
          <MovieDetails
            rating={movieDetails.vote_average}
            title={movieDetails.title}
            overview={movieDetails.overview}
            backdrop={movieDetails.backdrop_path}
            release_date={movieDetails.release_date}
            tagline={movieDetails.tagline}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
