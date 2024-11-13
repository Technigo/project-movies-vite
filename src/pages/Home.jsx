import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
        );
        const json = await response.json();
        setMovies(json.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-container">
      <div className="title-container">
        
        
      </div>
      <div className="movie-boxes">
        {movies?.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="movie-box">
              <div className="hover-info">
                <h1 className="title">{movie.title}</h1>
                <h4 className="release-date">Released {movie.release_date}</h4>
              </div>
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
