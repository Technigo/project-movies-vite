import { useState,useEffect } from "react"
import { Link } from "react-router-dom";

export const MoviesList = () => {
  const apiEnv = import.meta.env.VITE_MOVIE_KEY
  const URL =
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1"`
    const [movies, setMovies] = useState([])

  const fetchMovies = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {fetchMovies()}, [])

  return (
    <div className="start-page">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link to={`movies/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={`Poster of ${movie.title}`}
              className="title-image"
            />
          </Link>
          <div className="title-info">
            <h1>{movie.title}</h1>
            <p >{movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
