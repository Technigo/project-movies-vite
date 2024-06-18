import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../api";
import styles from "./MovieDetails.module.css";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSize, setImageSize] = useState("w780");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        /* e.g. 123456-dune-part-2 => [123456, dune, part, 2] => 123456 (as a 0 in index) */
        const movieIdWithoutSlug = movieId.split("-")[0];
        const data = await fetchMovieDetails(movieIdWithoutSlug);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [movieId]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1499) {
      setImageSize("original");
    } else if (windowWidth > 1023) {
      setImageSize("w1280");
    } else {
      setImageSize("w780");
    }
  }, [windowWidth]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.movieDetails}>
      {/* 映画の詳細コンテンツ */}
      <div className={styles.detailsContainer}>
        {/* ポスター画像 */}
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/${imageSize}${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={styles.details}>
          <div className={styles.movieHeading}>
            <h2 className={styles.title}>{movie.title}</h2>
            <div className={styles.rating}>⭐ {movie.vote_average}</div>
          </div>

          <p className={styles.releaseDate}>
            Release Date: {new Date(movie.release_date).toLocaleDateString()}
          </p>
          <p className={styles.description}>{movie.overview}</p>
          <div className={styles.genres}>
            {movie.genres.map((genre) => (
              <span key={genre.id} className={styles.genre}>
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/${imageSize}${movie.backdrop_path})`,
        }}
      />
    </div>
  );
};
