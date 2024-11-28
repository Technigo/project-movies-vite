import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Movie.css";

export const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  //Where we get the info from the API to our movie site
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=05ee03350103cd5d4cd268dcf88024c0&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  //When the button is clicked, this function kicks in
  const handleBack = () => {
    navigate(-1);
  };

  //The information that will show about the selected movie
  return (
    <div
      className="movie-container"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="content-overlay">
        <div>
          <button className="button" onClick={handleBack}>
            Back to movies
          </button>
        </div>
        <div className="selected-movie-info">
          <div className="selected-movie-title">
            <h2>{movie.title}</h2>
          </div>
          <div className="selected-release-date">
            <h3>🗓 {movie.release_date}</h3>
          </div>
          <div className="rating">
            <h3>⭐️{movie.vote_average}</h3>
          </div>
          <div className="overview">
            <p>{movie.overview}</p>
          </div>
        </div>
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      </div>
    </div>
  );
};
