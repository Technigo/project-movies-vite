import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./css/Movie.css";
import animation from "../assets/animations/loading.json";
import star from "/star.svg";
import arrow from "/arrow.svg";

export const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();

  const fetchApi = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e185d0927f85272fbd0fd2526ecf0657&language=en-US`
    )
      .then((response) => response.json())
      .then((movie) => {
        console.log("response:", movie);
        if (movie.success === false) {
          navigate("*");
        }
        setMovie(movie);
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
        <div className="movie-component">
          <div className="back-button" onClick={() => 
            navigate(-1)}>
            <img src={arrow} 
            id="go-back"  
            alt="go back"/>
            <h4>Movies</h4>
          </div>
          <div className="movie-information">
            <img
              src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
              id="poster"
              alt={movie.title}
            />
            <div className="details">
              <div className="movie-heading">
                <h1 className="movie-title">{movie.title}</h1>
                <div className="movie-rating">
                  <span>
                    <img className="movie-star" src={star} alt="rating star"/>
                    {Math.round(movie.vote_average * 10) / 10}
                  </span>
                </div>
              </div>
              <p>{movie.overview}</p>
              <p>{movie.runtime} min</p>
              <div className="genres">
                {movie.genres.map((genre, index) => (
                  <h3 key={index}>{genre.name}</h3>
                ))}
              </div>
            </div>
          </div>

          <div className="movie-gradient"></div>
          <img
            src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            id="backdrop"
            alt={movie.title}
          />
        </div>
      )}
    </>
  );
};
