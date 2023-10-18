import styles from "./MovieCard.module.css";

export const MovieCard = ({ movie }) => {
  const voteAverage = movie.vote_average;
  const overView = movie.overview;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.vote}> </p>
        <p>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
          {movie.title}&nbsp;&nbsp;
          <span style={{ backgroundColor: "white", color: "black" }}>
            ⭐{voteAverage.toFixed(1)}&nbsp;
          </span>
        </p>
        <p className={styles.overView}>{overView}</p>
      </div>
    </div>
  );
};
