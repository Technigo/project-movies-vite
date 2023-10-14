import React, { useState, useEffect } from 'react';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          {/* Display movie details */}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
