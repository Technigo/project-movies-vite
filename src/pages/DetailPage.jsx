import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiKey } from "../config.json";
import arrow from "../assets/arrow.png";
import "./DetailPage.css";

export const DetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to load movie. Please check the url or try again later"
          );
        }
        return response.json();
      })
      .then((json) => {
        setMovie(json);
        console.log(json);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  return (
    (movie && (
      <section className="detail-page">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="backdrop"
        ></img>
        <div className="gradient"></div>
        <div className="go-back-container">
          <Link to="/" className="link">
            <img src={arrow} alt="Go back" className="arrow" />
          </Link>
        </div>
        <div className="summary">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="summary-poster"
          ></img>
          <h1 className="heading">
            <span className="title">{movie.title}</span>
            <span className="rating"><span>⭐️ </span>
              {Math.round(movie.vote_average * 10) / 10}
            </span>
          </h1>
          <p className="plot">{movie.overview}</p>
        </div>
      </section>
    )) ||
    (error && <div>{error}</div>)
  );
};
