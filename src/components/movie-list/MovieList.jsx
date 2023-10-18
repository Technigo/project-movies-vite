import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/MovieCard";

import "./movielist.css";

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const envAPIKey = import.meta.env.VITE_API_KEY;

  const API = async () => {
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${envAPIKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieList(response.results);
        setLoading(!loading);
        console.log(movieList);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    API();
  }, []);

  return (
    <div>
      <div className="movie-grid">
        {loading ? (
          <>Loading...</>
        ) : (
          movieList.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              release={movie.release_date}
              image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
              id={movie.id}
            />
          ))
        )}
      </div>
    </div>
  );
};
