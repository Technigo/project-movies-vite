// Home.jsx
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { MovieCard } from "../components/MovieCard";

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiEnv = import.meta.env.VITE_OPENDB_KEY;

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load movies. Please try again later.");
        }
        return response.json();
      })
      .then((json) => {
        setMovies(json.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <MoviesGrid>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title.length > 20 ? `${movie.title.slice(0, 20)}...` : movie.title}
          release_date={movie.release_date}
          poster_path={movie.poster_path}
        />
      ))}
    </MoviesGrid>
  );
};