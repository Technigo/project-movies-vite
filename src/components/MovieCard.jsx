import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieCard.css";
import { HeaderTwo } from "../ui/Typography";

export const MovieCard = ({ genreId, movies }) => {
  if (!movies || movies.length === 0) {
    return <p>No movies found for this genre.</p>;
  }
  const filteredMovies = genreId ? movies.filter(movie => movie.genre_ids.includes(genreId)) : movies;

  return (
    <>
      {filteredMovies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <section className="card-container">
            <div className="card-text-container">
              <HeaderTwo>{movie.title}</HeaderTwo>
            </div>
            <div className="image-container">
              <img
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          </section>
        </Link>
      ))}
    </>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  genreId: PropTypes.number.isRequired,
  movies: PropTypes.array.isRequired,
};