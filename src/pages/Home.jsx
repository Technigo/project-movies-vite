import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const movieURL =
    "https://api.themoviedb.org/3/movie/popular?api_key=e58923a817ec3772f69470b86e481a40&language=en-US&page=1";

  useEffect(() => {
    const fetchMovies = () => {
      fetch(movieURL)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setMovies(json.results);
        });
    };

    fetchMovies();
  }, []);

  return (
    <div className="home-container">
      <div className="movie-boxes">
        {movies.map((movie) => (
          <div className="movie-box" key={movie.id}>
            <div className="hover-info">
              <h1 className="title">{movie.title}</h1>
              <h4 className="release-date">Released {movie.release_date}</h4>
            </div>
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                alt="poster"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
