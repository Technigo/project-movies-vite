import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieCard.css";

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="card-container">
        <div className="card-text-container">
          <h3>{title}</h3>
          <p>{release_date}</p>
        </div>
        <div className="image-container">
          <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
        </div>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
}