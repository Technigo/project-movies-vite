import { useEffect, useState } from "react";
import { MovieGrid } from "../ui/MovieGrid"; // Use MovieGrid for displaying the movies in a grid


export const NowPlaying = () => {
  const [nowPlayingMovies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track the loading status of the app

  useEffect(() => {
    const apiEnv = import.meta.env.VITE_TMDB_KEY;

    const fetchNowPlayingMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiEnv}&language=en-SE&page=1&region=SE`);
        const data = await response.json();
        setMovies(data.results);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNowPlayingMovies();
  }, []);

  return (
    <div className="now-playing">
      {isLoading && <h1>Loading...</h1>} {/* Show loading message while data is being fetched */}
      {!isLoading && (
        <div className="movie-list">
          <MovieGrid movies={nowPlayingMovies} origin="now-playing" />
        </div>
      )}
    </div>
  );
};