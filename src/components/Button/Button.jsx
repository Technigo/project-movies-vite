import styles from "./Button.module.css";
function Button({ handleClick = null, buttonStyle = {}, children, type }) {
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      onClick={handleClick}
      style={buttonStyle}
    >
      {children}
    </button>
  );
}

export default Button;
