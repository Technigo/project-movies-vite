import React from "react";

export const MovieCard = ({ title, rating, poster_path }) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
      <h3>{title}</h3>
      <p>⭐ {rating.toFixed(1)}</p>
    </div>
  );
};
