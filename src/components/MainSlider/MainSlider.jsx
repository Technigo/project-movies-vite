import { memo, useMemo } from "react";
import styles from "./MainSlider.module.css";
import { Slider } from "../Slider";
import { MovieCard } from "../MovieCard";

const MainSlider = memo(function MainSlider({ windowWidth, movies }) {
  const currentSliderImageWidth = useMemo(() => {
    return (windowWidth * 0.84) / 2;
  }, [windowWidth]);
  return (
    <div className={styles.slider_wrapper}>
      <Slider currentImageWidth={currentSliderImageWidth}>
        {movies.map((movie) => (
          <li className={styles.scroll_item} key={movie.title}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </Slider>
    </div>
  );
});

export default MainSlider;
