// MovieCard.jsx

import { Link } from "react-router-dom";

export const MovieCard = ({ id, poster }) => {
  return (
    <Link to={`/movie/${id}`}>
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="movie poster" />
    </Link>
  );
};