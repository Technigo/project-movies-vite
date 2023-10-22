import styles from "./Error.module.css";

const Error = ({
    message = "Oh, something went wrong! The page you are looking for do not exist!",
}) => {
    return (
        <div className={styles.errorPage}>
            <h3>{message} </h3>
        </div>
    );
}

export default Error;