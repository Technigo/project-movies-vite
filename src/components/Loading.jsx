//import React from "react";
import styles from "./loading.module.css"; // Correctly import the styles object

const Loading = () => {
  return (
    <div className={styles["loading-container"]}>
      <div className={styles["loading-spinner"]}></div>
      <p className={styles["loading-text"]}>Loading...</p>
    </div>
  );
};

export default Loading;

/*import { useEffect, useState } from "react"; // Hooks for managing state and side effects
import styles from "../components/loading.module.css";

import Loading from "./Loading"; // Import your Loading component

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state ///

  useEffect(() => {
    const getMoviesOnMount = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${
            import.meta.env.VITE_MOVIE_API_KEY
          }&language=en-US&page=1`
        );

        if (response.ok) {
          const data = await response.json();
          setMovies(data.results);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Set loading state to false when data is loaded //
      }
    };

    getMoviesOnMount();
  }, []);

  return (
    <div className={styles.wrapper}>
      {isLoading ? ( // Check if data is still loading
        <Loading /> //
      ) : (
        movies.map((movie) => (
          <div
            key={movie.id}
            to={`/movies/${movie.id}`}
            className={styles.movieWrapper}>
            <div className={styles.movieCard}>
              <div className={styles.text}>
                <h2>{movie.title}</h2>
                <p>{`Released ${movie.release_date}`}</p>
              </div>
            </div>
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              alt="Movie poster"
            />
          </div>
        ))


        <div className={styles['loading-container']}>
            <div className={styles['loading-spinner']}></div>
            <p className={styles['loading-text']}>Loading...</p>
        
   
  

    </div>
  );

};


export default Movies;
*/
