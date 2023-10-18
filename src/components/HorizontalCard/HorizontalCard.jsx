import { useState, memo } from "react";
import styles from "./Horizontal.module.css";
import { Link } from "react-router-dom";

const HorizontalCard = memo(function HorizontalCard({ movie, genres }) {
  const [onMouse, setOnMouse] = useState(false);
  const genre = genres.find((obj) => obj.id === movie.genre_ids[0]);
  const { title = null, name = null, backdrop_path: poster, id } = movie;
  return (
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
        </div>
      </Link>
      <div className={styles.description}>
        <p className={styles.genre}>{genre ? genres.name : ""}&nbsp;</p>
        <p className={styles.title}>{title ? title : name}</p>
      </div>
    </div>
  );
});

export default HorizontalCard;
