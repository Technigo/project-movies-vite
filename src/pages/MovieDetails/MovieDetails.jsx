import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { MovieCard } from "../MovieCard/MovieCard.jsx";

import styles from "./MovieDetails.module.css";

export const MovieDetails = () => {
  const { id } = useParams(null);
  const OurMovieDetailAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=003a2d9ebc845f57f76c3c02dbd08f13&language=en-US`;
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(OurMovieDetailAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setMovie(json);
        console.log("Updated movie state:", movie);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div
      className={styles.movieContainer}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
    >
      <p className={styles.homelink}>
        <NavLink to="/">
          <img
            className={styles.backArrow}
            src="/assets/arrow-icon-copy.png"
            alt="movie back arrow"
          />
          Movies
        </NavLink>
      </p>
      <MovieCard movie={movie} />
    </div>
  );
};
