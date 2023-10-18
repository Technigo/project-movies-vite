import { memo, useMemo } from "react";
import styles from "./MainSlider.module.css";
import { Slider } from "../Slider";
import { MovieCard } from "../MovieCard";
import HorizontalCard from "../HorizontalCard/HorizontalCard";

const MainSlider = memo(function MainSlider({
  windowWidth,
  movies,
  title,
  horizontal = true,
  genres = null,
}) {
  console.log(genres);
  const currentSliderImageWidth = useMemo(() => {
    return (windowWidth * 0.84) / 2;
  }, [windowWidth]);
  return (
    <div className={styles.slider_wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <Slider currentImageWidth={currentSliderImageWidth}>
        {movies.map((movie) => (
          <li className={styles.scroll_item} key={movie.title}>
            {horizontal ? (
              <HorizontalCard movie={movie} genres={genres} />
            ) : (
              <MovieCard movie={movie} />
            )}
          </li>
        ))}
      </Slider>
    </div>
  );
});

export default MainSlider;
