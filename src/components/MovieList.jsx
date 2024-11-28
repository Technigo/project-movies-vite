import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/movielist.css";
import Lottie from "lottie-react";
import animation from "../assets/animations/loading.json";
import { Carousel } from "./carousel.jsx";
import { Menu } from "./Menu.jsx";
import logo from "/cine-movies.svg"


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
            animationData={animation}
            loop
            autoPlay
            style={{ width: 250, height: 250 }}
          />
        </div>
      )}
      {!loading && (
        <>

          <header>
          <img src={logo} alt="logo of cine movies" id="logo"/>
            <Carousel />
            <Menu />
          </header>
          <div className="movie-list">
            {movies.results.map((movie) => (
              <div className="each-movie" key={movie.id}>
                <Link to={`movie/${movie.id}`}>
                  <div id="overlay">
                    <div id="overlay-text">
                      <h1>{movie.title}</h1>
                      
                    </div>
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
