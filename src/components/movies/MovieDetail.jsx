/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "./MovieAPI";
import "./MovieDetail.css";

export const MovieDetail = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id, API_KEY)
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error('Failed to fetch movie details:', error);
      });
  }, [id]);

  return (
    <div>
      {movieDetails ? (
        <div className="detail-page">
          <div className="background-poster">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}?api_key=${API_KEY}`}
              alt={movieDetails.title}
            />
            <div className="summary">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}?api_key=${API_KEY}`}
                alt={movieDetails.title}
                className="poster-image"
              />
              <div className="details">
                <h1 className="movie-title">
                  {movieDetails.title}
                  <span role="img" aria-label="rating">
                    ⭐ {movieDetails.vote_average}
                  </span>
                </h1>
                <p className="release-date">Release Date: {movieDetails.release_date}</p>
                <p className="movie-overview">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};