import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./popular.css";

export const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6420add5c0a9b0e0b9462a92916c3187&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
      });
  }, []);

  return (
    <div className="popular-section">

      {movies.map((movie) => (

        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <div className="image-box-popular">
            <img
              className="poster-image-popular"
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />


            <div className="popular-text-wrapper">

              <h1 className="popular-movie-title">{movie.title}</h1>
              <p className="popular-movie-released">Released {movie.release_date}</p>

            </div></div>
        </Link>
      ))}

    </div>
  );
};
