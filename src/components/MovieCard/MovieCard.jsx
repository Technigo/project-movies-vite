import { useState } from "react";
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import { ReadMoreBtn } from "../ReadMoreBtn";
function MovieCard({ movie }) {
  const [onMouse, setOnMouse] = useState(false);
  const { title, release_date, poster_path: poster, id } = movie;

  return (
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
        <div className={styles.inner_card}>
          <div className={styles.text_box} style={{ display: onMouse ? "block" : "none" }}>
            <h3>{title}</h3>
            <p>Released : {release_date}</p>
            <div className={styles.button_box}>
              <ReadMoreBtn />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
