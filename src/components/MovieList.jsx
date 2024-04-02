import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'

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
      .catch ((err) => {
        console.error("Error fetching movies:", err);
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
          {movies.results.map((movie, index) => (
           <ul key={index}>
            <li>
            <Link to={`movie/:${movie.title.toLowerCase().replace(/ /g, "-")}`}>
              {movie.title}
            </Link>
          </li>
        </ul>
      ))}
    </div>
      )}
    </>
  );
};

