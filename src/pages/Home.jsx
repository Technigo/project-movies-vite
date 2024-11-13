import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../Hook';

export const Home = () => {
  const { movies, isLoading, error } = useMovies();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </>
  );
};