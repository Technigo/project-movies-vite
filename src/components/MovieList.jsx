//const key = "e185d0927f85272fbd0fd2526ecf0657";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e185d0927f85272fbd0fd2526ecf0657&language=en-US&page=1"
    )
      .then((response) => response.json)
      .then((movies) => setMovies(movies));
    console
      .log(movies)

      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movies">
      {movies.map((movie) => (
        <ul key={movie.title}>
          <li>
            <Link to={`movie/:${movie.titletoLowerCase().replace(/ /g, "-")}`}>
              {movie.title}
            </Link>
          </li>
        </ul>
      ))}
    </div>
      )}
    </>
  );
};
