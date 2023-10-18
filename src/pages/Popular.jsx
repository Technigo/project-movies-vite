import "./Popular.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Popular = () => {
  const [movies, setMovies] = useState([]);

  const api_key = "7c19dcf9d97858f9497be69f656c349b";
  // Get a list of movies ordered by popularity.
  const popularApi = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

  // Function to fetch data from the API.
  const fetchData = async () => {
    try {
      const response = await fetch(popularApi);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      console.log("Popular movies data:", data);
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  // useEffect hook to run fetchData on component mount.
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="popular-page">
      {movies.map((movie) => {
        return (
          <Link key={movie.id} to={`/detail/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
              className="popular-poster"
            />

            <div className="popular-card-info">
              <h1 className="title">{movie.title}</h1>
              <p className="release-date">Released {movie.release_date}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
