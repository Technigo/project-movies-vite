import styles from "./Error.module.css";

function Error({
  // eslint-disable-next-line react/prop-types
  message = "Oh, something went wrong! The page you are looking for do not exsit!",
}) {
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
