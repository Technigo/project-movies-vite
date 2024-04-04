import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
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
      <div className="movieContainer">
        <Link to="/" className="back">
          Go back
        </Link>
        <div className="movieDetails">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={`Picture from movie ${movie.title}`}
          />
          <h1 className="movieTitle">{movie.title}</h1>
          <div className="vote">⭐️ {movie.vote_average}</div>
          <div className="movieOverview">{movie.overview}</div>
        </div>
      </div>
    )) ||
    (error && <ErrorPage />)
  );
};
