import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import backButton from "../assets/backButton.png";
import "./MovieDetails.css";

export const MovieDetails = () => {
  const { id } = useParams();
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
        <div
          className="background-image"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 50%, rgb(0, 0, 0.8) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Link to="/" className="back-button-link">
            <img src={backButton} alt="Link to go back" className="icon" />
            <p className="back-button-text">Movies</p>
          </Link>
          <div className="movie-details-container">
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={`Picture from movie ${movie.title}`}
              className="details-image"
            />
            <div className="movie-details">
              <h1 className="movie-title-details">
                {movie.title}
                <div className="rating">
                  ⭐️ {Math.round(movie.vote_average * 10) / 10}
                </div>
              </h1>
              <div className="movie-overview">{movie.overview}</div>
            </div>
          </div>
        </div>
      </div>
    )) ||
    (error && <ErrorPage />)
  );
};
