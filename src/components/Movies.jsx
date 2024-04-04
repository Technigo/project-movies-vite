import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Movies.css";

const api_key = "443eaf63934ffe55e1c1d35c6ebf46e8";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load movies. Please check the url.");
        }
        return res.json();
      })
      .then((json) => {
        setMovies(json.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    (movies && (
      <div>
        <h1>Popular Movies</h1>
        <div className="movies">
          {movies.map((movie) => (
            <div className="movie" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <h2 className="movie-title">{movie.title}</h2>
                <div className="release-date">
                  Released {movie.release_date}
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                  alt={`Picture from movie ${movie.title}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    )) ||
    (error && <div>{error}</div>)
  );
};
