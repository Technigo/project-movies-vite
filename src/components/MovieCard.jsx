// MovieCard.jsx

import { Link } from "react-router-dom";
import "./MovieCard.css"

export const MovieCard = ({ id, poster, title, releaseDate }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`} className="movie-card-link">
        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
        <div className="movie-overlay">
          <h1 className="movie-title">{title}</h1>
          <p className="movie-release-date">Released {releaseDate}</p>
        </div>
      </Link>
    </div>
  );
};