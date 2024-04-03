import { PropTypes } from "prop-types";
import "./Movie.css"

export const Movie = ({ movie }) => {
  const poster_url = `https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`;

  return (
    <div className="movie-card">
      <img
        src={poster_url}
        alt={`movie poster from the movie: ${movie.title}`}
      />
      <div className="movie-card-info">
        <h1>{movie.title}</h1>
        <h2>{movie.original_title}</h2>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object,
};
