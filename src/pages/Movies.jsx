// Movies.jsx

import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import "./Movies.css";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const URL = "https://api.themoviedb.org/3/movie/popular?api_key=fd4c86caaf652cf07d8d4560d025a8f8&language=en-US&page=1";

  // Function to fetch movies
  const fetchMovies = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      console.log("Fetched data:", data);

      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect hook and call for fetchMovies function. ending with empty array to only make the API call once.
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <ul className="movies-container">
        {movies.map(movie => (
          <li key={movie.id} className="movie-item">
            <MovieCard
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              releaseDate={movie.release_date}
            />
          </li>
        ))}
      </ul>
    </>
  );
};