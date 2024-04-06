import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Movies.css";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiEnv = import.meta.env.VITE_OPENDB_KEY;
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`
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
        <div className="movies-container">
          <div className="movies-box">
            {movies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <div className="image-container">
                    <img
                      src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                      alt={`Picture from movie ${movie.title}`}
                    />
                    <div className="text-container-overlay">
                      <h2 className="movie-title">{movie.title}</h2>
                      <div className="release-date">
                        Released {movie.release_date}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )) ||
    (error && <div>{error}</div>)
  );
};
