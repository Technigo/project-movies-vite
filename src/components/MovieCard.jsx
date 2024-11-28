import { Link } from "react-router-dom";
import "./MovieCard.css";

export const MovieCard = ({ id, title, releaseDate, posterPath }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="movie-card">
        <div className="overlay">
          <h1>{title}</h1>
          <p>Released {releaseDate}</p>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt={title}
        ></img>
      </div>
    </Link>
  );
};
