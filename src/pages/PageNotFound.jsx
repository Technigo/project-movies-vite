import Lottie from "lottie-react";
import error from "../assets/404.json";
import { useNavigate } from "react-router-dom";
import styles from "../styling/PageNotFound.module.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <Lottie className={styles.animation} animationData={error} loop={true} />
      <button
        className={styles.button}
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default PageNotFound;
