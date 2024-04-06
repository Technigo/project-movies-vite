import styles from "../styling/MovieDetail.module.css";
import LoadImage from "./LoadImage";
import PropTypes from "prop-types";

const MovieDetail = ({ bgImage, poster, rate, descr, name }) => {
  return (
    <div
      className={styles.movie}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.details}>
        <LoadImage className={styles.poster} src={poster} alt={name} />
        <div className={styles.texts}>
          <p>
            <span className={styles.title}>{name}</span>
            <span className={styles.rating}>⭐ {rate.toFixed(1)}</span>
          </p>
          <p>{descr}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

MovieDetail.propTypes = {
  bgImage: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  descr: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
