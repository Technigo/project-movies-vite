import { MovieCard } from "./MovieCard";

export const MovieLibrary = ({ movies }) => {
  return (
    <div className="libraryContainer">
      {movies && <MovieCard movies={movies} />}
    </div>
  );
};
