//const key = "e185d0927f85272fbd0fd2526ecf0657";
//title.toLowerCase().replace(/ /g, "-")

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Movie.css";
import Lottie from "lottie-react";
import greenDots from "../assets/animations/greendots.json";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e185d0927f85272fbd0fd2526ecf0657&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);
        console.log(movies.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      fetchMovies();
    }, 1500);
  }, []);

  return (
    <>
      {loading && (
        <div className="loading">
          <Lottie
            animationData={greenDots}
            loop
            autoPlay
            style={{ width: 160, height: 160 }}
          />
        </div>
      )}
      {!loading && (
        <div className="movie-list">
          {movies.results.map((movie) => (
            <div className="each-movie" key={movie.id}>
              <Link to={`movie/:${movie.id}`}>
                <div id="overlay">
                  <div id="overlay-text">
                  <h1>{movie.title}</h1>
                  <h2>Released: {movie.release_date}</h2>
                  </div>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
