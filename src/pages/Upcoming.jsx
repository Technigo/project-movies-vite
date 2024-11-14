import { useEffect, useState } from 'react';
import { MovieGrid } from "../ui/MovieGrid"; // Use MovieGrid for displaying the movies in a grid

export const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiEnv = import.meta.env.VITE_TMDB_KEY;

    // Get today's date
    const today = new Date();
    const startDate = today.toISOString().split('T')[0]; // Current date (yyyy-mm-dd)

    // Calculate date 30 days from today
    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 30);
    const maxDate = endDate.toISOString().split('T')[0]; // Date 30 days from now


    const fetchUpcomingMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiEnv}&language=se-SE&page=1&region=SE&release_date.gte=${startDate}&release_date.lte=${maxDate}`);
        const data = await response.json();
        console.log("Upcoming Movies API Response:", data);
        // Filter out movies with no poster image
        const filteredMovies = data.results.filter(movie => movie.poster_path && movie.poster_path !== '');
        setMovies(filteredMovies);
      } catch (error) {
        setError('Failed to fetch upcoming movies');
      }
    };


    fetchUpcomingMovies();
  }, []);

  return (
    <div className="upcoming-movies">
      {error && <p>{error}</p>}

      {/* Pass the movies array to MovieGrid */}
      <MovieGrid movies={movies} />
    </div>
  );
};
