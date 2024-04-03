import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import "./css/Movie.css"

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e185d0927f85272fbd0fd2526ecf0657&language=en-US&page=1"
    )
      .then ((response) => response.json())
      .then ((movies) => {
        setMovies(movies)
        console.log(movies.results)
        setLoading(false)
      })
      .catch ((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
    {loading && (
      <div className="loading">
        Loading
      </div>
      )}
      {!loading && (
        <div className="movies">
          {movies.results.map((movie) => (
            <div className="each-movie" key={movie.id}>
            <Link to={`movie/:${movie.title.toLowerCase().replace(/ /g, "-")}`}>
              <div id="first-info">
              {movie.title}
              {movie.release_date}
              </div>
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
            </Link>
            </div>
      ))}
    </div>
      )}
    </>
  );
};

