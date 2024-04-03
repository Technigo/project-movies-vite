import { Link } from "react-router-dom";
import "./MovieCard.css";

export const MovieCard = ({ movies }) => {
  return (
    <div className="movieCardContainer">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
            alt={`${movie.original_title} poster`}
          />
          <Link
            to={`/movies/${movie.original_title
              .toLowerCase()
              .replace(/ /g, "-")}`}
          >
            <h2>{movie.original_title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};
