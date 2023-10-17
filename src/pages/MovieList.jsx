import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
const POSTER_SIZE = "w342";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const api_key = '917200cae8c9f306c0e6719af5d42134';
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <Link key={movie.id} to={`/moviedetails/${movie.id}`}>
          <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} alt={movie.title || "Movie poster"} />
          <p>{movie.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;

