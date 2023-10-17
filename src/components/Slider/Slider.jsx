import { MovieCard } from "../MovieCard";
import styles from "./Slider.module.css";
function Slider({ movies }) {
  return (
    <div className={styles.slider_outer}>
      <ul className={styles.slider_inner}>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.title} />
        ))}
      </ul>
    </div>
  );
}

export default Slider;
