import { Link } from "react-router-dom";
import "./movielist.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-title">{movie.title}</div>
    </div>
  );
}

export default MovieCard;
