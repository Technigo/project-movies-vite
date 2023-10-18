import styles from "./HeroCarousel.module.css";
import { useMemo } from "react";
import { Slider } from "../Slider";

function HeroCarousel({ images, windowWidth }) {
  const currentHeroImageWidth = useMemo(() => {
    return windowWidth * 0.84 + 30;
  }, [windowWidth]);

  return (
    <>
      <div className={styles.carousel_outer}>
        <Slider currentImageWidth={currentHeroImageWidth}>
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
        </Slider>
      </div>
    </>
  );
}

export default HeroCarousel;
