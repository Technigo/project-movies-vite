import Lottie from "react-lottie"
import notFoundAnimation from "../../assets/animations/not-found.json"
import styles from "./NotFound.module.css"

export const NotFound = () => {
  const defalutOptions = {
    loop: true,
    autoplay: true,
    animation: notFoundAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <div className={StyleSheet.animationContainer}>
      <Lottie options={defalutOptions} />
      <p className={styles.notFoundMessage}>Page not found</p>
    </div>
  );
}