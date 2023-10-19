import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./popular.css";

//Creating the 'Popular' component. This component will display a list of popular movies fetched from API
export const Popular = () => {
  const [movies, setMovies] = useState([]);

const apiEnv = import.meta.env.VITE_OPENDB_KEY;

  //'useEffect' hook to fetch list of popular movies when the component is mounted.
useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
      });
  }, []);

  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=6420add5c0a9b0e0b9462a92916c3187&language=en-US&page=1"
  //   )
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setMovies(json.results);
  //     });
  // }, []);

  //Return JSC code to render the popular movies. Movies are mapped using the .map() function 
  //to generate a list of '<Link>' elements that link to individual movie pages.
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
