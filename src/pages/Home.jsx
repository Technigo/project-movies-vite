import { useState, useEffect } from "react";
import { MovieList } from "../components/MovieList";
import { BASE_URL, API_KEY } from "../utils/apiConfig";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      <h1>Popular Movies</h1>
      <MovieList movies={movies} />
    </main>
  );
};
