import React from "react";

export const MovieCard = ({ title, rating }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>⭐ {rating.toFixed(1)}</p>
    </div>
  );
};
