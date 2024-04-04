import { Link, useParams } from "react-router-dom";
import styles from "../styling/BackHome.module.css";
import back from "../../public/back.svg";

const BackHome = () => {
  return (
    <Link to="/" className={styles.back}>
      <img src={back} alt="Go back to movies list"></img>
      Movies
    </Link>
  );
};

export default BackHome;
