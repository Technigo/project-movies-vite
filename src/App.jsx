import { MovieList } from "./components/MovieList";
import { Movie } from "./components/Movie";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
const imageSize = "w342";
export const IMAGE_URL = `https://image.tmdb.org/t/p/${imageSize}`;

const useGetMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return movies;
};

export const App = () => {
  const movies = useGetMovies();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:movieName" element={<Movie movies={movies} />} />
      </Routes>
    </BrowserRouter>
  );
};
