import { MovieCard } from "../MovieCard";
import { Button } from "../Button";
import { useRef, useMemo, useState } from "react";
import styles from "./Slider.module.css";
function Slider({ movies, windowWidth }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef();
  const currentHeroImageWidth = useMemo(() => {
    return (windowWidth * 0.84) / 2;
  }, [windowWidth]);

  function handleClickToLeft() {
    if (currentIndex >= 0) setCurrentIndex((prevIndex) => prevIndex - 1);
    carouselRef.current.scrollLeft -= currentHeroImageWidth;
  }

  function handleClickToRight() {
    if (currentIndex > movies.length) setCurrentIndex((prevIndex) => prevIndex + 1);
    carouselRef.current.scrollLeft += currentHeroImageWidth;
  }

  return (
    <div className={styles.slider_outer}>
      <Button type="right-click" handleClick={handleClickToRight}>
        <img src="/arrow.png" />
      </Button>

      {currentIndex <= movies.length && (
        <Button type="left-click" handleClick={handleClickToLeft}>
          <img src="/arrow.png" />
        </Button>
      )}
      <ul className={styles.slider_inner} ref={carouselRef}>
        {movies.map((movie) => (
          <li className={styles.scroll_item} key={movie.title}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Slider;
