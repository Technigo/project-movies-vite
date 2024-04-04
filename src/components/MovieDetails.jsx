import React from "react";
import "./MovieDetails.css";

export const MovieDetails = ({
  title,
  rating,
  overview,
  backdrop,
  release_date,
  tagline,
  poster_path,
  genres,
}) => {
  return (
    <div className="movie-details-page">
      <img src={`https://image.tmdb.org/t/p/w1280${backdrop}`} alt={title} />
      <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} />
      <div className="movie-details-info">
        <p>⭐ {rating}</p>
        <h2>{title}</h2>
        <h3>{tagline}</h3>
        <div className="movie-genre-list">
          <ul>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
        <p>{overview}</p>
        <p>{release_date}</p>
      </div>
    </div>
  );
};
