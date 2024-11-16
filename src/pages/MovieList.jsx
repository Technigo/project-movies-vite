import "./MovieList.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoStar } from "react-icons/io5";

export const MovieList = ({movieCategory}) => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const movieListURL = `https://api.themoviedb.org/3/movie/${movieCategory}?api_key=${apiKey}&language=en-US&page=1`;
  const imageSecureBaseURL = `https://image.tmdb.org/t/p/`;

  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const fetchData = async () => {
    try {
      const res = await fetch(movieListURL);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setMovies(data.results);
      console.log(data.results);

    } catch (error) {
      console.log("Error is ", error);
    }
  };
  
  useEffect(() => {
    fetchData()
  }, [location, movieListURL]);

  return (
    <section className="movie-list">
      {movies.map((movie) => ( 
        <Link className="movie-list-card" key={movie.id} to={`/movie/${movie.id}`}>
          <img src={`${imageSecureBaseURL}w500${movie.poster_path}`} alt={movie.title} />

          <div className="movie-list-card-text-box">
            <div className="rating-box">
              <IoStar className="star-icon" />
              <p>{parseFloat(movie.vote_average).toFixed(1)}</p>
            </div>
            <h1 className="movie-list-title">{movie.title}</h1>
          </div>
        </Link>
       ))}
    </section>
  );
};
