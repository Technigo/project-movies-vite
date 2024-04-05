import { MovieCard } from "./MovieCard";
import "../styling/MovieLibrary.css";

export const MovieLibrary = ({ movies }) => {
  return (
    <div className="library-container">
      {movies && <MovieCard movies={movies} />}
    </div>
  );
};
