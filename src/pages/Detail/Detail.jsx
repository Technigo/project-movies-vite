import { useEffect, useState } from "react";
import styles from "./Detail.module.css";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzEwNDBiNT03yXIf4z6QEk8z4",
  },
};

function Detail() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        );
        const data = await response.json();
        setMovie(data.results[0]); //
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieDetails();
  }, []);

  return (
    <div className={styles.detail}>
      {!isLoading ? (
        movie ? (
          <div>
            <h1>{movie.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.overview}</p>
            {/* Render other movie details here */}
          </div>
        ) : (
          <p>No movie details available</p>
        )
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Detail;
