import { useState, useEffect } from 'react';
import { fetchMoviesByGenre, fetchGenres } from '../api';
import { MovieCard } from './MovieCard';
import "./MovieLists.css"

export const MovieList = () => {
  const [moviesByGenres, setMoviesByGenres] = useState({});
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const selectedGenreIds = [28, 12, 35, 18]; // Beispiel-IDs für Action, Abenteuer, Komödie und Drama

  // Fetch genres on mount
  useEffect(() => {
    const getGenres = async () => {
      try {
        const data = await fetchGenres();

        const filteredGenres = data.genres.filter(genre =>
          selectedGenreIds.includes(genre.id)
        );
        setGenres(filteredGenres);
      } catch (error) {
        setError('Fehler beim Abrufen der Genres');
        console.error('Fehler beim Abrufen der Genres:', error);
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
          console.error(`Fehler beim Abrufen der Filme für Genre ${genre.name}:`, error);
        }
      }
      setMoviesByGenres(movies);
    };

    if (genres.length > 0) {
      getMoviesByGenre();
    }
  }, [genres]); // Dependency array includes `genres`, which is correct

  if (loading) return <p>Loading genres...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='movie-list'>
      {genres.length > 0 ? (
        genres.map((genre) => (
          <section key={genre.id} className="genre-section">
            <h2>{genre.name}</h2>
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
