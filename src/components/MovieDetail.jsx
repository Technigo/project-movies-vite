import styles from "../styling/MovieDetail.module.css";

const MovieDetail = ({ bgImage, poster, rate, descr, name }) => {
  return (
    <div
      className={styles.movie}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.details}>
        <img className={styles.poster} src={poster} alt={name} />
        <div className={styles.texts}>
          <h2>
            <span className={styles.title}>{name}</span>
            <span className={styles.rating}>{rate.toFixed(1)}</span>
          </h2>
          <p>{descr}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
