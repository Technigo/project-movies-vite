import { PropTypes } from "prop-types";
import "./Movie.css"

export const Movie = ({ movie }) => {
  const poster_url = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`;

  return (
    <div className="movie-card">
      <img
        src={poster_url}
        alt={`movie poster from the movie: ${movie.title}`}
      />
      <div className="movie-card-info">
        <h2 className="english-title">{movie.title}</h2>
        <h2 className="original-title">{movie.original_title}</h2>
        <p className="release">{movie.release_date}</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object,
};
