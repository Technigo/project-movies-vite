import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animation from "../assets/animations/loading.json";
import "./css/movielist.css";
import arrow from "/arrow.svg";

export const MovieUpcoming = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const fetchApi = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=e185d0927f85272fbd0fd2526ecf0657&language=en-US&page=2`
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
      fetchApi();
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
          <div className="back-button">
                <img src={arrow} 
            id="go-back" 
            onClick={() => 
            navigate(-1)} 
            alt="go back"/>
            <h4 onClick={() => navigate(-1)}>Movies</h4>
          </div>
          <div className="movie-list separate-list">
            {movies.results.map((movie) => (
              <Link
                to={`/movie/${movie.id}`}
                className="each-movie"
                key={movie.id}
              >
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
            ))}
          </div>
        </>
      )}
    </>
  );
};
