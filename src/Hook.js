import { useState, useEffect } from "react";
import { fetchMoviesByGenre, fetchGenres } from "../src/api";

export const useMovies = () => {
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
        setError("Error fetching genres");
        console.error("Error fetching genres:", error);
      } finally {
        setLoading(false);
      }
    };
    getGenres();
  }, []);

  useEffect(() => {
    const getMoviesByGenre = async () => {
      const movies = {};
      for (const genre of genres) {
        try {
          const data = await fetchMoviesByGenre(genre.id);
          movies[genre.id] = data.results;
        } catch (error) {
          console.error(`Error fetching movies for genre ${genre.name}:`, error);
        }
      }
      setMoviesByGenres(movies);
    };

    if (genres.length > 0) {
      getMoviesByGenre();
    }
  }, [genres]);

  const getMovieById = (id) => {
    for (const genreId in moviesByGenres) {
      if (moviesByGenres[genreId]) {
        const movie = moviesByGenres[genreId].find((movie) => movie.id === id);
        if (movie) {
          return movie;
        }
      }
    }
    return null;
  };

  return { moviesByGenres, genres, loading, error, getMovieById };
};
