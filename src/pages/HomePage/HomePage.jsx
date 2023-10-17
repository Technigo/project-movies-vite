import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import MovieCard from "../../components/MovieCard/MovieCard";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzEwNDBiNTAzY2M0MzViNDk0MjU0ODRiMDZlYTc1NSIsInN1YiI6IjY1MmQyODNlNjYxMWI0MDBlMjU1MDMxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nzGRkQ839_qWKFn7k3BsxmVqMmHl11yXIf4z6QEk8z4",
  },
};

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
        .then((response) => response.json())
        .then((response) => setMovies(response.results))
        .catch((err) => console.error(err))
        .finally(setIsLoading(false));
    }
    getMovies();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.main_inner}>
        {!isLoading ? (
          movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)
        ) : (
          <p>Loading</p>
        )}
      </div>
    </main>
  );
}

export default HomePage;
