import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
const BACKDROP_SIZE = "w780";

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const api_key = '917200cae8c9f306c0e6719af5d42134';
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  const backdropImageUrl = movie.backdrop_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}` : "";

  return (
    <div>
      {movie.backdrop_path && <img src={backdropImageUrl} alt={movie.title || "Movie backdrop"} />}
      <h1>{movie.title}</h1>
      {/* You can display other movie details here as needed. */}
    </div>
  );
}

export default MovieDetails;


