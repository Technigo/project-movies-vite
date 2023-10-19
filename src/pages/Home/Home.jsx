import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

export const Home = () => {
  //Our movie API key: 003a2d9ebc845f57f76c3c02dbd08f13

  const [movies, setMovies] = useState([]);
  const OurMovieAPI = `https://api.themoviedb.org/3/movie/popular?api_key=003a2d9ebc845f57f76c3c02dbd08f13&language=en-US&page=1`;

  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        const response = await fetch(OurMovieAPI);
        if (!response.ok) {
          throw new Error("Network Reponse Error");
        }
        const json = await response.json();
        setMovies(json);
        console.log(json);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchMoviesList();
  }, []);

  //This will show "Loading..." to the user while data is being fetched from the API.
  if (!movies || !movies.results) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.movielistContainer}>
        {movies &&
          movies.results &&
          movies.results.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <div className={styles.movielistBox}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                <div className={styles.movieText}>
                  <h1> {movie.title}</h1>
                  <p>Released: {movie.release_date}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
