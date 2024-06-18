import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPopularMovies } from "../../api";
import styles from "./MovieList.module.css";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [imageSize, setImageSize] = useState("w300");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchPopularMovies();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const updateImageSize = () => {
      if (window.innerWidth > 1499) {
        setImageSize("original");
      } else if (window.innerWidth > 1023) {
        setImageSize("w1280");
      } else {
        setImageSize("w780");
      }
    };

    window.addEventListener("resize", updateImageSize);
    updateImageSize();

    return () => {
      window.removeEventListener("resize", updateImageSize);
    };
  }, []);

  return (
    <div className={styles.movieListContainer}>
      {movies.map((movie) => (
        <div key={movie.id} className={styles.movieItem}>
          <Link to={`/movies/${movie.id}-${slugify(movie.title)}`}>
            <img
              className={styles.movieItemImage}
              srcSet={`
                https://image.tmdb.org/t/p/w300${movie.poster_path} 300w,
                https://image.tmdb.org/t/p/w780${movie.poster_path} 780w,
                https://image.tmdb.org/t/p/w1280${movie.poster_path} 1280w,
                https://image.tmdb.org/t/p/original${movie.poster_path} 1920w
              `}
              sizes="(max-width: 768px) 300px,
                     (max-width: 1024px) 780px,
                     (max-width: 1920px) 1280px,
                     1920px"
              src={`https://image.tmdb.org/t/p/${imageSize}${movie.poster_path}`}
              alt={movie.title}
            />
            <div className={styles.movieOverlay}>
              <h3 className={styles.movieOverlayTitle}>{movie.title}</h3>
              <p className={styles.movieOverlayReleaseDate}>
                Released {movie.release_date}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

// slugify function
// e.g. Dune part 2 -> dune-part-2
function slugify(input) {
  if (!input) return "";
  // make lower case and trim
  var slug = input.toLowerCase().trim();
  // remove accents from charaters
  slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  // replace invalid chars with spaces
  slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim();
  // replace multiple spaces or hyphens with a single hyphen
  slug = slug.replace(/[\s-]+/g, "-");
  return slug;
}
