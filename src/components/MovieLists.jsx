import { MovieCard } from "./MovieCard";
import { HeaderGenre } from "../ui/Typography";
import { useMovies } from "../../src/Hook";
import "./MovieLists.css";

export const MovieList = () => {
  const { moviesByGenres, genres, loading, error } = useMovies();

  if (loading) return <p>Loading genres...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="movie-list">
      {genres.length > 0 ? (
        genres.map((genre) => (
          <section key={genre.id} className="genre-section">
            <HeaderGenre>{genre.name}</HeaderGenre>
            <div className="movie-list">
              <MovieCard genreId={genre.id} movies={moviesByGenres[genre.id]} />
            </div>
          </section>
        ))
      ) : (
        <p>No genres available.</p>
      )}
    </div>
  );
};