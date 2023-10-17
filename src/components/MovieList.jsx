import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styling/movielist.css";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [listChoice, setListChoice] = useState("movie/upcoming");
  // fetch the upcoming movie list
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${listChoice}?api_key=86aa5020ba0683214eaaed8f53bcbb6f`
    )
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;
        console.log(results);
        setMovieList(results);
      })
      .catch((error) => console.error("Error fetching: ", error));
  }, [listChoice]);

  return (
    <div className="home-page-container">
      {movieList.map((movie, index) => {
        return (
          <Link key={index} to={`/movies/${movie.id}`}>
            <div className="movie-card">
              <div className="image-container">
                <img
                  src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  alt="movie image"
                  className="movie-poster"
                />
                <div className="overplay">
                  <h1>{movie.title}</h1>
                  <div className="description">
                    <p>Release {movie.release_date}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MovieList;
