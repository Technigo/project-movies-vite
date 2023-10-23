// Importing CSS module for styling
import styles from "./Error.module.css";

// Creating the Error component
const Error = ({
    message = "Oh, something went wrong! The page you are looking for do not exist!",
}) => {
    return (
        <div className={styles.errorPage}>
            {/* Rendering an error message */}
            <h3>{message} </h3>
        </div>
    );
}

// Exporting the Error component to be used elsewhere in the application
export default Error;
