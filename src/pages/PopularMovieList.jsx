import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PopularMovieList.css";

export const PopularMovieList = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const apiKey = "76898be6bb8657c4eadeb40367146dec";
  const popularMovieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  const imageBaseUrl = "http://image.tmdb.org/t/p/";

  const fetchPopularMovies = () => {
    fetch(popularMovieUrl)
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <section className="movie-list">
      {popularMovies.map((movie) => (
        <Link className="movie-list-card" key={movie.id} to={`/movie/${movie.id}`}>
          <img src={`${imageBaseUrl}w342${movie.poster_path}`} alt={movie.title} />
          <div className="movie-list-card-text-box">
            <p>⭐️ {movie.vote_average}</p>
            <h1>{movie.title}</h1>
          </div>
        </Link>
      ))}
    </section>
  );
};
