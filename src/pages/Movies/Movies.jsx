// Importing necessary hooks and styles
import { useEffect, useState } from "react"; // Hooks for managing state and side effects
import styles from "./Movies.module.css"; // CSS module for styling
import { Link } from "react-router-dom"; // Hook for creating links
import Loading from "../../components/loading/Loading"; // Loading component for displaying loading state
import Error from "../../components/error/Error"; // Error component for displaying error state

// Creating the Movies component
const Movies = () => {
    // Using the useState hook to create a state variable for storing movies
    const [movies, setMovies] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Using the useEffect hook to perform an action when the component mounts
    useEffect(() => {
        // Defining an asynchronous function to fetch popular movies
        const getMoviesOnMount = async () => {
            try {
                // Sending a GET request to the popular movies API
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&language=en-US&page=1`);

                // Checking if the response is successful (status code 200)
                if (response.ok) {
                    // Parsing the response data as JSON
                    const data = await response.json();
                    // Updating the state with the list of movies
                    setMovies(data.results);
                } else {
                    setHasError(true)
                }
            } catch {
                setHasError(true)
            } finally {
                setIsLoading(false);
            }
        }

        // Calling the asynchronous function
        getMoviesOnMount();
    }, []); // Empty dependency array ensures this effect runs only on component mount

    if (isLoading === true) {
        return <Loading />;
    }

    if (hasError === true) {
        return <Error message="Uh oh! Could not load movies because of an unknown error. Try refreshing the page to see if the error persists." />;
    }

    return (
        <div className={styles.wrapper}>
            {movies.map(movie => (
                <Link
                    key={movie.id}
                    to={`/movies/${movie.id}`}
                    className={styles.movieWrapper}
                >
                    <div className={styles.movieCard}>
                        <div className={styles.text}>
                            <h2>{movie.title}</h2>
                            <p>{`Released ${movie.release_date}`}</p>
                        </div>
                    </div>
                    <img
                        className={styles.poster}
                        src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                        alt="Movie poster"
                    />
                </Link>
            ))}
        </div>
    );
}

export default Movies;
