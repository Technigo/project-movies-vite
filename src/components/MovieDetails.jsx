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
  homepage,
}) => {
  return (
    <div className="movie-details-page">
      <img
        className="backdrop"
        src={`https://image.tmdb.org/t/p/w1280${backdrop}`}
        alt={title}
      />
      <div className="movie-details-info">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        />
        <p>⭐ {rating}</p>
        <h2>{title}</h2>
        <h3>{tagline}</h3>
        <div className="movie-genre-list">
          <ul>
            {genres.map((genre) => (
              <li key={genre.id}>/ {genre.name}</li>
            ))}
          </ul>
        </div>
        <p>{overview}</p>
        <a href={homepage} target="_blank" rel="noopener noreferrer">
          <button>Read more</button>
        </a>
        <p className="release-date">Released {release_date}</p>
      </div>
    </div>
  );
};
