import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          {movie.title}
        </Link>
      ))}
    </div>
  );
}

export default MovieList;

