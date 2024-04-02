import React from "react";

export const MovieCard = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>⭐ {movie.vote_average.toFixed(1)}</p>
        </div>
      ))}
    </div>
  );
};
