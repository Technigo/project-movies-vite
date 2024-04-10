import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

export const MovieCard = ({ id, title, rating, poster_path }) => {
  return (
    <Link to={`/movie/${id}`}>
      {" "}
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
          alt={title}
        />
        <div className="movie-card-info">
          <h2>{title}</h2>
          <p className="rating">⭐ {Math.round(rating * 10) / 10}</p>
        </div>
      </div>
    </Link>
  );
};
