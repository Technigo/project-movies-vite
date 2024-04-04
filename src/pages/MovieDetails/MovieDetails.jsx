// Importing necessary hooks and styles
import { Link, useParams } from "react-router-dom"; // Hooks for accessing URL parameters and creating links
import { useEffect, useState } from "react"; // Hooks for managing state and side effects
import styles from "./MovieDetails.module.css"; // CSS module for styling
import Loading from "../../components/loading/Loading"; // Loading component for displaying loading state
import Error from "../../components/error/Error"; // Error component for displaying error state

// Creating the MovieDetails component
const MovieDetails = () => {
    // Using the useParams hook to access the 'movieId' parameter from the URL
    const { movieId } = useParams();
    // Using the useState hook to create state variables for movie details, error flag, and loading flag
    const [movieDetails, setMovieDetails] = useState();
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Using the useEffect hook to perform an action when the component mounts or when 'movieId' changes
    useEffect(() => {
        // Defining an asynchronous function to fetch movie details
        const getDetailsOnMount = async () => {
            try {
                // Sending a GET request to the movie details API
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&language=en-US`);

                // Checking if the response is successful (status code 200)
                if (response.ok) {
                    // Parsing the response data as JSON
                    const data = await response.json();
                    // Updating the state with the movie details
                    setMovieDetails(data);
                } else {
                    // Setting an error flag if response is not ok
                    setHasError(true);
                }
            } catch {
                // Setting an error flag if an error occurs during the fetch
                setHasError(true);
            } finally {
                // Setting loading flag to false after fetch completes (whether successful or not)
                setIsLoading(false);
            }
        }

        // Calling the asynchronous function
        getDetailsOnMount();
    }, [movieId]); // Dependency array ensures this effect runs when 'movieId' changes

    // Conditional rendering based on loading state
    if (isLoading === true) {
        return <Loading />;
    }

    // Conditional rendering based on error state
    if (hasError === true) {
        return <Error message="Uh oh! Could not load movie because of an unknown error. Try refreshing the page to see if the error persists." />;
    }

    // Rendering movie details if loading and error states are false
    return (
        <div
            className={styles.background}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}")`
            }}
        >
            <Link
                to={`/`}
                className={styles.backlink}
            >
                ⇦ Movies
            </Link>

            <div className={styles.summary}>
                <img className={styles.poster}
                    src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
                    alt={`Poster for ${movieDetails.title}`}
                />
                <div className={styles.text}>
                    <h1 className={styles.title}>{movieDetails.original_title}</h1>
                    <h2 className={styles.rating}>{`⭐ ${movieDetails.vote_average.toFixed(1)}`}</h2>
                    <p>{movieDetails.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
