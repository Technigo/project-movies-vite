import { BrowserRouter } from "react-router-dom";
import { RouteList } from "./RouteList";
import { useState, useEffect } from "react";
import "../styling/MainPage.css";

export const MainPage = () => {
  const [movies, setMovies] = useState(null);

  const apiEnv = import.meta.env.VITE_OPENDB_KEY;

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`;

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
    <BrowserRouter>
      <main className="main">
        <RouteList movies={movies} />
      </main>
    </BrowserRouter>
  );
};
