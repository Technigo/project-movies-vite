import React from "react";

export const MovieDetails = ({
  title,
  rating,
  overview,
  backdrop,
  release_date,
  tagline,
}) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w1280${backdrop}`} alt={title} />
      <p>⭐ {rating}</p>
      <h2>{title}</h2>
      <h3>{tagline}</h3>
      <p>{overview}</p>
      <p>{release_date}</p>
    </div>
  );
};
