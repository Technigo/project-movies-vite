import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import backButton from "../assets/backButton.png";
import "./MovieDetails.css";

export const MovieDetails = () => {
  const { id } = useParams(); //Get id from URL
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=443eaf63934ffe55e1c1d35c6ebf46e8&language=en-US`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load movies. Please check the url.");
        }
        return res.json();
      })
      .then((res) => {
        setMovie(res);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  return (
    (movie && (
      <div className="movie-container">
        <Link to="/">
          <img src={backButton} alt="Link to go back" />
        </Link>
        <div className="movie-details">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={`Picture from movie ${movie.title}`}
            className="details-image"
          />
          <h1 className="movie-title">{movie.title}</h1>
          <div className="rating">
            ⭐️ {Math.round(movie.vote_average * 10) / 10}
          </div>
          <div className="movie-overview">{movie.overview}</div>
        </div>
      </div>
    )) ||
    (error && <ErrorPage />)
  );
};
