import { useMemo, useState } from "react";

import styles from "./Horizontal.module.css";
import { Link } from "react-router-dom";
import { ReadMoreBtn } from "../ReadMoreBtn";

function HorizontalCard({ movie, genres }) {
  const [onMouse, setOnMouse] = useState(false);

  const { title = null, name = null, backdrop_path: poster, id } = movie;
  const genre = useMemo(
    () =>
      genres.find((obj) => {
        return obj.id === movie.genre_ids[0];
      }),
    [genres, movie.genre_ids]
  );

  return (
    <>
      <div className={styles.card_outer}>
        <Link to={`/movies/${id}`}>
          <div
            className={styles.card_wrapper}
            onMouseEnter={() => setOnMouse(true)}
            onMouseLeave={() => setOnMouse(false)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w780${poster}`}
              style={{ filter: onMouse ? "brightness(60%)" : "" }}
              loading="lazy"
            />
            <div className={styles.button_box} style={{ display: onMouse ? "block" : "none" }}>
              <ReadMoreBtn />
            </div>
          </div>
        </Link>
        <div className={styles.description}>
          <p className={styles.genre}>{genre ? genre.name : ""}&nbsp;</p>
          <p className={styles.title}>{title ? title : name}</p>
        </div>
      </div>
    </>
  );
}

export default HorizontalCard;
