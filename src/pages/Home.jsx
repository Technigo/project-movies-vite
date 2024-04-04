import { Outlet } from "react-router-dom";
import styles from "../styling/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Popcorn Movie</h1>
      <Outlet />
    </div>
  );
};

export default Home;
