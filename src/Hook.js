import { useState, useEffect } from 'react';
import { fetchMoviesByGenre } from './api';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMoviesByGenre();
        setMovies(data.results);
      } catch (err) {
        setError("Error to load the movie");
      } finally {
        setIsLoading(false);
      }
    };
    loadMovies();
  }, []);

  return { movies, isLoading, error };
};



