import React from "react";
import "./MovieDetails.css";
import { Link } from "react-router-dom";
import arrowIcon from "../assets/arrow-icon.png";

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
      <div className="movie-details-content">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        />
        <div className="movie-details-text">
          <p className="rating">⭐ {Math.round(rating * 10) / 10}</p>
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
          <p className="release-date">Released {release_date}</p>
          <div className="buttons">
            <a
              href={`https://www.imdb.com/title/${imdb}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="read-more-button">Read more</button>
            </a>
            <div className="back-button">
              <Link to={`/movie`}>
                <img src={arrowIcon} alt="Go back" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
