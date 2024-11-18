import Lottie from "react-lottie";
import notFoundAnimation from "../../assets/animations/not-found.json";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  const defalutOptions = {
    loop: true,
    autoplay: true,
    animationData: notFoundAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundAnimationContainer}>
        <Lottie options={defalutOptions} height={400} width={400} />
      </div>
      <p className={styles.notFoundMessage}>Opps... Page not found</p>
    </div>
  );
};
