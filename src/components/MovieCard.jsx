import { Link } from "react-router-dom";

export const MovieCard = ({ movies }) => {
  return (
    <div className="movieCardContainer">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
            alt={`${movie.title} poster`}
          />
          <Link to={`/movies/${movie.title.toLowerCase().replace(/ /g, "-")}`}>
            <h2>{movie.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};
