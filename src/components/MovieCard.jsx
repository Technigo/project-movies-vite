import { Link } from "react-router-dom";

export const MovieCard = ({ movies }) => {
  return (
    <div className="movie-card-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <div className="movie-card-image-container">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
              alt={`${movie.title} poster`}
              className="movie-card-image"
            />
          </div>
          <Link to={`/movies/${movie.title.toLowerCase().replace(/ /g, "-")}`}>
            <h2 className="movie-card-title">{movie.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};
