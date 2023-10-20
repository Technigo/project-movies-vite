// Importing necessary hooks and styles
import { Link, useParams } from "react-router-dom"; // Hook for accessing URL parameters
import { useEffect, useState } from "react"; // Hooks for managing state and side effects
import styles from "./MovieDetails.module.css"; // CSS module for styling

// Creating the MovieDetails component
const MovieDetails = () => {
    // Using the useParams hook to access the 'movieId' parameter from the URL
    const { movieId } = useParams();
    // Using the useState hook to create a state variable for storing movie details
    const [movieDetails, setMovieDetails] = useState();

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
                }
            } catch (error) {
                console.error(error);
            }
        }

        // Calling the asynchronous function
        getDetailsOnMount();
    }, [movieId]); // Dependency array ensures this effect runs when 'movieId' changes

    // Conditional rendering based on whether movie details have been loaded
    if (movieDetails === undefined) {
        return (
            <p>Loading</p>
        );
    }

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
                    src={`https://image.tmdb.org/t/p/w1280${movieDetails.poster_path}`}
                    alt={movieDetails.name}
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
