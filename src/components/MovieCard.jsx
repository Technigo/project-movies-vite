import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./MovieCard.css";

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  return (
    <Link to={`/movie/${id}`}>
      <article className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />

        <div className="overlay">
          <h2>{title}</h2>
          <p>Released {release_date}</p>
        </div>
      </article>
    </Link>
  );
};

// Add prop validation
MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
};
