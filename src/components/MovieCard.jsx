import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;

  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={posterUrl} alt={title} />
      </Link>

      <h2>{title}</h2>
      <p>Release Date: {release_date}</p>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
};
