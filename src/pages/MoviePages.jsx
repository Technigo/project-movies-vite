import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import arrow from "./assets/arrow.png";
import "./MoviePages.css";

export const MoviePages = () => {
  const [movieInfo, setMovieInfo] = useState();
  const movie_id = useParams().movieID;
  const movieURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=e58923a817ec3772f69470b86e481a40&language=en-US`;

  useEffect(() => {
    const fetchMovieInfo = () => {
      fetch(movieURL)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setMovieInfo(json);
        });
    };

    fetchMovieInfo();
  }, [movieURL]);

  if (!movieInfo) {
    return <div>Loading...</div>;
  }

  let ratingRound = movieInfo.vote_average.toFixed(1);

  return (
    <div className="info-container">
      <div className="home-button">
        <Link className="home" to="/">
          <img className="icon" src={arrow}></img> Home
        </Link>
      </div>
      <div
        className="info-backdrop"
        style={{
          "--img": `url(https://image.tmdb.org/t/p/w1280${movieInfo.backdrop_path}), linear-gradient(#000000, #ffffff)`,
        }}
        alt="backdrop"
      ></div>
      <div className="movie-info-box">
        <img
          className="info-poster"
          src={`https://image.tmdb.org/t/p/w342${movieInfo.poster_path}`}
          alt="poster"
        ></img>
        <div className="movie-info">
          <h2 className="info-rating">⭐ {ratingRound}</h2>
          <h1 className="info-title">{movieInfo.title}</h1>
          <h3 className="info-overview">{movieInfo.overview}</h3>
        </div>
      </div>
    </div>
  );
};
export default MoviePages;
