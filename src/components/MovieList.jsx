import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(({ id, title, release_date, poster_path }) => (
        <MovieCard
          key={id}
          id={id}
          title={title}
          release_date={release_date}
          poster_path={poster_path}
        />
      ))}
    </div>
  );
};
