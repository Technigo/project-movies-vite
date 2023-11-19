//API key: db09d9e6205d4ff413df728dd90904bb
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=db09d9e6205d4ff413df728dd90904bb&language=en-US&page=1"
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className="titel">Our movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/MovieDetail/${movie.id}`}
            className="movie-card"
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <p>Relesed: {movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
