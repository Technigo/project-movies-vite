/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.key}`}>
      <img
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="info">
        <h1>{movie.title}</h1>
        <p>Released on: {movie.date}</p>
      </div>
    </Link>
  );
};
