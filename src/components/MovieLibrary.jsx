import { useState } from "react";
import { MovieCard } from "./MovieCard";
import { useEffect } from "react";

export const MovieLibrary = () => {
  const [movies, setMovies] = useState(null);
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=555122904f9aa5a9df5e76f87cb061f7&language=en-US&page=1";

  const fetchMovies = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching movies", error));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="libraryContainer">
      {movies && <MovieCard movies={movies} />}
    </div>
  );
};
