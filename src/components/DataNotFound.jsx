import Lottie from "lottie-react";
import errorPink from "../assets/error-pink.json";
import errorBlack from "../assets/error-black.json";
import styles from "../styling/DataNotFound.module.css";

const DataNotFound = ({ error, color }) => {
  return (
    <div className={styles.errorContainer}>
      <Lottie
        className={styles.animation}
        animationData={color === "pink" ? errorPink : errorBlack}
        loop={false}
      />
      <p
        style={{ color: `${color === "pink" ? "pink" : "black"}` }}
        className={styles.text}
      >
        {error}
      </p>
    </div>
  );
};

export default DataNotFound;
