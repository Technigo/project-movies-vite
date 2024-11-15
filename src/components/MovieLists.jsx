import { useState, useEffect } from 'react';
import { fetchMoviesByGenre, fetchGenres } from '../api';
import { MovieCard } from './MovieCard';
import { HeaderTwo } from '../ui/Typography';
import "./MovieLists.css"

export const MovieList = () => {
  const [moviesByGenres, setMoviesByGenres] = useState({});
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const selectedGenreIds = [28, 878, 10751, 18, 14, 16];

  useEffect(() => {
    const getGenres = async () => {
      try {
        const data = await fetchGenres();

        const filteredGenres = data.genres.filter(genre =>
          selectedGenreIds.includes(genre.id)
        );
        setGenres(filteredGenres);
      } catch (error) {
        setError('error to get the genres');
        console.error('error to get the genres:', error);
      } finally {
        setLoading(false);
      }
    };
    getGenres();
  }, []); // No dependencies because this only runs once on mount

  // Fetch movies by genre when genres are available
  useEffect(() => {
    const getMoviesByGenre = async () => {
      const movies = {};
      for (const genre of genres) {
        try {
          const data = await fetchMoviesByGenre(genre.id);
          movies[genre.id] = data.results;
        } catch (error) {
          console.error(`error to get the movie for the genre ${genre.name}:`, error);
        }
      }
      setMoviesByGenres(movies);
    };

    if (genres.length > 0) {
      getMoviesByGenre();
    }
  }, [genres]);

  if (loading) return <p>Loading genres...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='movie-list'>
      {genres.length > 0 ? (
        genres.map((genre) => (
          <section key={genre.id} className="genre-section">
            <HeaderTwo>{genre.name}</HeaderTwo>
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
