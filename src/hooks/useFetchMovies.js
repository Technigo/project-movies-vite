import { useState, useEffect } from "react";
import { fetchMovies, searchMovies } from "../api/tmdb";

const useFetchMovies = (category, searchQuery) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        let data;
        if (searchQuery) {
          data = await searchMovies(searchQuery);
        } else {
          data = await fetchMovies(category);
        }
        setMovies(data.results);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [category, searchQuery]);

  return { movies, loading, error };
};

export default useFetchMovies;
