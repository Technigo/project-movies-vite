import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PopularList.css";

const PopularList = ({ movies }) => {
  const openDBKey = import.meta.env.VITE_OPENDB_KEY;

  return (
    <div className="popular-list">
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-link">
          <div className="film-card">
            <div className="film-img">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="film-card-text-wrap">
              <h2 className="title">{movie.title}</h2>
              <p className="movie-release-date">Release Date: {movie.release_date}</p>
              <p className="overview">{movie.overview}</p>
              <p className="api-key">API Key: {openDBKey}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

PopularList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PopularList;
