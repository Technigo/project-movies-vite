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
                // src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                // alt={movie.title}
                srcSet={`
                  https://image.tmdb.org/t/p/w185/${movie.poster_path} 185w,
                  https://image.tmdb.org/t/p/w342/${movie.poster_path} 342w,
                `}
                sizes="(max-width: 1023px) 185px, (min-width: 1024px) 342px"
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} // Fallback for browsers without srcset support
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
  id: PropTypes.number,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  genreId: PropTypes.number,
  movies: PropTypes.array,
};