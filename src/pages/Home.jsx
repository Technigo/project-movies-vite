import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard"

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiEnv = import.meta.env.VITE_API_KEY;

    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error("Network response not ok")
        }
        const json = await response.json();
        setMovies(json.results);
      } catch (error) {
        console.error("Error fetching data", error)
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title.length > 20
            ? `${movie.title.slice(0, 20)}...` : movie.title
          }
          release_date={movie.release_date}
          poster_path={movie.poster_path}
        />
      ))}
    </>
  )
}