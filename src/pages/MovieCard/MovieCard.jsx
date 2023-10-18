import styles from "./MovieCard.module.css";

export const MovieCard = ({ movie }) => {
  const voteAverage = movie.vote_average;
  const overView = movie.overview;

  return (
    <div className={styles.card}>
      <p className={styles.testing}>
        Hola! 💃🏽 Testing in the MovieCard/MovieCard.jsx!{" "}
      </p>

      <p className={styles.vote}>⭐ {voteAverage.toFixed(1)}</p>

      {/*just pasted in a star, but its not as pretty as the one technigo uses*/}
      {/*added the toFixed to make it to one decimal point.*/}
      <p>Title: {movie.title}</p>
      <p className={styles.overView}>{overView}</p>
    </div>
  );
};
