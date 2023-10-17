import { Link } from 'react-router-dom';  //wrapping the entire movie card in a Link component so we'll be able to navigate to the movie details page when the movie poster is clicked
import { useState } from "react";
import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const [onMouse, setOnMouse] = useState(false);
  const { id, title, release_date, poster_path: poster } = movie;
  console.log(movie);
  return (
    <Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
    <div
      className={styles.card_wrapper}
      onMouseEnter={() => setOnMouse(true)}
      onMouseLeave={() => setOnMouse(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w780${poster}`}
        style={{ filter: onMouse ? "brightness(20%)" : "" }}
      />
      <div className={styles.inner_card}>
        <div className={styles.text_box} style={{ display: onMouse ? "block" : "none" }}>
          <h3>{title}</h3>
          <p>Released : {release_date}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default MovieCard;
