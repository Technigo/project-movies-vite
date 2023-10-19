import styles from "./HeroCarousel.module.css";
import { useMemo } from "react";
import { Slider } from "../Slider";

function HeroCarousel({ movies, windowWidth }) {
  const currentHeroImageWidth = useMemo(() => {
    return windowWidth * 0.84 + 30;
  }, [windowWidth]);

  return (
    <>
      <div className={styles.carousel_outer}>
        <Slider currentImageWidth={currentHeroImageWidth}>
          {movies.map((movie) => (
            <>
              <li
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                }}
                className={styles.hero_image}
                key={movie.id}
              >
                <div className={styles.inner_image_box}>
                  <h2>{movie.title ? movie.title : movie.name}</h2>
                  <p>{`${movie.overview.split(" ").slice(0, 30).join(" ")} ...`}</p>
                </div>
              </li>
            </>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default HeroCarousel;
