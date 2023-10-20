import { useMemo } from "react";
import styles from "./MainSlider.module.css";
import { Slider } from "../Slider";
import { MovieCard } from "../MovieCard";
import HorizontalCard from "../HorizontalCard/HorizontalCard";

function MainSlider({ windowWidth, movies, title, horizontal = true }) {
  const currentSliderImageWidth = useMemo(() => {
    return (windowWidth * 0.84) / 2;
  }, [windowWidth]);

  return (
    <>
      <div className={styles.slider_wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <Slider currentImageWidth={currentSliderImageWidth}>
          {movies.map((movie) => (
            <li className={styles.scroll_item} key={movie.id}>
              {horizontal ? <HorizontalCard movie={movie} /> : <MovieCard movie={movie} />}
            </li>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default MainSlider;
