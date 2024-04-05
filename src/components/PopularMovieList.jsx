import { useEffect, useState } from "react";
import "./PopularMovieList.css";

export const PopularMovieList = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const popularMovieUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=76898be6bb8657c4eadeb40367146dec&language=en-US&page=1";

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
  console.log(popularMovies);
  return (
    <section className="movie-list">
      {popularMovies.map((movie) => (
        <a className="movie-card" key={movie.id}>
          <img src={`${imageBaseUrl}w342${movie.poster_path}`} alt={movie.title} />
          <div className="movie-card-text-box">
            <h1>{movie.title}</h1>
            <p>Released {movie.release_date}</p>
          </div>
        </a>
      ))}
    </section>
  );
};
