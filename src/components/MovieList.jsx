import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPopularMovies } from "../api";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchPopularMovies();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img
              srcSet={`
              https://image.tmdb.org/t/p/w300${movie.poster_path} 300w,
              https://image.tmdb.org/t/p/w780${movie.poster_path} 780w,
              https://image.tmdb.org/t/p/w1280${movie.poster_path} 1280w
              `}
              sizes="(max-width: 768px) 300px, (max-width: 1024px) 780px, 1280px"
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
