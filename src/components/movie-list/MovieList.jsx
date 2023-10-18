import { useEffect, useState } from "react";

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const envAPIKey = import.meta.env.VITE_API_KEY;
  console.log(envAPIKey);

  const singleMovieAPICall = (movie_id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${envAPIKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

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
        {loading ? console.log("loading...") : console.log(movieList)}
      </div>
    </div>
  );
};
