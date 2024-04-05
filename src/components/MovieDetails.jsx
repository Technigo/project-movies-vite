import React from "react";
import "./MovieDetails.css";
import { Link } from "react-router-dom";

export const MovieDetails = ({
  title,
  rating,
  overview,
  backdrop,
  release_date,
  tagline,
  poster_path,
  genres,
  imdb,
}) => {
  return (
    <div>
      <img
        className="backdrop"
        src={`https://image.tmdb.org/t/p/w1280${backdrop}`}
        alt={title}
      />
      {/* <div className="movie-details-content"> */}
      <div className="movie-details-content">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        />
        <div className="movie-details-text">
          <p className="rating">⭐ {rating}</p>
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
          <a
            href={`https://www.imdb.com/title/${imdb}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="read-more-button">Read more</button>
          </a>
          <p className="release-date">Released {release_date}</p>
          <Link to={`/movie`}>
            <button className="back-button">Go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
