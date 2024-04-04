import React, { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

export const MoviesPage = () => {
  const API_KEY = "227355c25b5984172934aa93f25e5d05";
  const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(moviesUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        console.log("Fetched movies:", data.results);
        setMoviesList(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [moviesUrl]);

  return (
    <div className="movie-card-container">
      {moviesList.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          rating={movie.vote_average}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
};
