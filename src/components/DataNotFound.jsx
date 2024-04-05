import Lottie from "lottie-react";
import dataError from "../assets/error.json";
import styles from "../styling/DataNotFound.module.css";

const DataNotFound = ({ error }) => {
  return (
    <div className={styles.errorContainer}>
      <Lottie
        className={styles.animation}
        animationData={dataError}
        loop={false}
      />
      <p className={styles.text}>{error}</p>
    </div>
  );
};

export default DataNotFound;
