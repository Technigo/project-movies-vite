import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

export const Movie = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=b4648009c1cb0a7e8f565388d787eb75&language=en-US&page=1"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setMovieList(json.results);
    } catch (error) {
      alert("Error fetching data: " + error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie-wrapper">
      <h1>🍿 Popular movies 🍿</h1>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>

            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>Released: {movie.release_date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
