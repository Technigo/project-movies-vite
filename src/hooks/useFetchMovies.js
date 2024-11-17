import { useState, useEffect } from "react";
import { fetchMovies, searchMovies } from "../api/tmdb";

const useFetchMovies = (category, searchQuery, page = 1) => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        let data;
        if (searchQuery) {
          data = await searchMovies(searchQuery, page);
        } else {
          data = await fetchMovies(category, page);
        }
        setMovies(data.results);

        // Cap totalPages at 500 according to documentation
        const maxTotalPages = Math.min(data.total_pages, 500);
        setTotalPages(maxTotalPages);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [category, searchQuery, page]);

  return { movies, totalPages, loading, error };
};

export default useFetchMovies;
