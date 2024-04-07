import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

export const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  const apiEnv = "b4648009c1cb0a7e8f565388d787eb75";
  // const apiEnv = import.meta.env.VITE_OPENDB_KEY;
  const API = `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`;
  const getMovie = useCallback(async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setMovieList(json.results);
    } catch (error) {
      alert("Failed fetching movies - make some 🍿 and try again" + error);
    }
  }, [API]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div className="movie-wrapper">
      <h1>🍿 Popular movies 🍿</h1>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>

            <div className="movie-info">
              <h2 className="title">{movie.title}</h2>
              <p className="released">
                Released: {movie.release_date.split("-").reverse().join("/")}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
