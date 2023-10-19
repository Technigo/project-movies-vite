import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

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

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleBack}>Back to list</button>
      <h2>{movie.title}</h2>
      <h3>{movie.release_date}</h3>
      <h3>{movie.vote_average}</h3>
      <p>{movie.overview}</p>
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
      <img
        className="backdrop"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={`${movie.title} Backdrop`}
      />
    </div>
  );
};
