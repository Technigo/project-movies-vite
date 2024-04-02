/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Poster } from "../components/Poster";

export const Card = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Poster poster_path={movie.poster_path} title={movie.title} />
      <div className="info">
        <h1>{movie.title}</h1>
        <p>Released on: {movie.release_date}</p>
      </div>
    </Link>
  );
};
