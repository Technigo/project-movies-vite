import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  return (
    /* Link to the moviesinfo-page for each movie */
    <Link to={`/movie/${id}`}>
      <article className="movie-card">
        {/* image-size should be w300 */}
        <img
          className="movie-card-image"
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />
        <div className="movie-card-info">
          <h1 className="title">{title}</h1>
          <p className="release-date">Released {release_date}</p>
        </div>
      </article>
    </Link>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
};
