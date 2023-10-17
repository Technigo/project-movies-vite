import styles from "./HeroCarousel.module.css";
import { useState, useRef, useMemo } from "react";
import { Button } from "../../components/Button";

function HeroCarousel({ images, windowWidth }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef();
  const currentHeroImageWidth = useMemo(() => {
    return windowWidth * 0.84 + 30;
  }, [windowWidth]);
  function handleClickToLeft() {
    if (currentIndex >= 0) setCurrentIndex((prevIndex) => prevIndex - 1);
    carouselRef.current.scrollLeft -= currentHeroImageWidth;
  }
  function handleClickToRight() {
    if (currentIndex > images.length) setCurrentIndex((prevIndex) => prevIndex + 1);
    carouselRef.current.scrollLeft += currentHeroImageWidth;
  }
  console.log(currentIndex);
  return (
    <>
      <div className={styles.carousel_outer}>
        <Button type="right-click" handleClick={handleClickToRight}>
          <img src="/arrow.png" />
        </Button>

        {currentIndex <= images.length && (
          <Button type="left-click" handleClick={handleClickToLeft}>
            <img src="/arrow.png" />
          </Button>
        )}

        <ul className={styles.carousel} ref={carouselRef}>
          {images.map((image) => (
            <>
              <li
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${image})`,
                }}
                className={styles.hero_image}
              />
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HeroCarousel;
