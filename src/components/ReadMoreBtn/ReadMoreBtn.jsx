import styles from "./ReadMoreBtn.module.css";

function ReadMoreBtn() {
  return (
    <div className={styles.button}>
      <div className={styles.button_inner}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
}

export default ReadMoreBtn;
