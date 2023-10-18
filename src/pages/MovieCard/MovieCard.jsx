import styles from "./MovieCard.module.css";

export const MovieCard = ({ movie }) => {
  const voteAverage = movie.vote_average;
  const overView = movie.overview;

  const backgroundURL = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;

  //this url works as the path to the image, not sure how to get it into the inline css styling????

  console.log(`this is in the background:`, backgroundURL);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.testing}>
          Hola! 💃🏽 Testing in the MovieCard/MovieCard.jsx!{" "}
        </p>

        <p className={styles.vote}>⭐ {voteAverage.toFixed(1)}</p>
        <p>Title: {movie.title}</p>
        <p className={styles.overView}>{overView}</p>
      </div>
    </div>
  );
};
