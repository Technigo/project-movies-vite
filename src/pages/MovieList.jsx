import { PropTypes } from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import "./MovieList.css";

export const MovieList = ({ movieCategory }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const location = useLocation();

  const apiKey = "76898be6bb8657c4eadeb40367146dec";
  const movieListUrl = `https://api.themoviedb.org/3/movie/${movieCategory}?api_key=${apiKey}&language=en-US&page=1`;

  const imageBaseUrl = "http://image.tmdb.org/t/p/";

  const fetchMovieList = () => {
    fetch(movieListUrl)
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchMovieList();
  }, [location]);

  return (
    <section className="movie-list">
      {popularMovies.map((movie) => (
        <Link className="movie-list-card" key={movie.id} to={`/movie/${movie.id}`}>
          <img src={`${imageBaseUrl}w342${movie.poster_path}`} alt={movie.title} />

          <div className="movie-list-card-text-box">
            <div className="rating-box">
              <IoStar className="star-icon" />
              <p>{parseFloat(movie.vote_average).toFixed(1)}</p>
            </div>
            <h1>{movie.title}</h1>
          </div>
        </Link>
      ))}
    </section>
  );
};

MovieList.propTypes = {
  movieCategory: PropTypes.string,
};
