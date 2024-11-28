import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import styles from "./Error.module.css";

function Error({ message = "Sorry, something went wrong!!" }) {
  return (
    <>
      <section className={styles.error_page}>
        <div className={styles.error_box}>
          <h3>💥 {message} 💥</h3>
        </div>
      </section>
    </>
  );
}

export default Error;
