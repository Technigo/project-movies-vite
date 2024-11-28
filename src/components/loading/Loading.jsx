// Importing CSS module for styling
import styles from "./Loading.module.css";

// Creating the Loading component
const Loading = () => {
    return (
        <div className={styles.container}>
            {/* Rendering a loading spinner */}
            <div className={styles.spinner}></div>
        </div>
    );
}

// Exporting the Loading component to be used elsewhere in the application
export default Loading;
