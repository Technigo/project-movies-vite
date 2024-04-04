import styles from "./Button.module.css";
function Button({ handleClick = null, buttonStyle = {}, type }) {
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      onClick={handleClick}
      style={buttonStyle}
    >
      <img src="/arrow.png" />
    </button>
  );
}

export default Button;
