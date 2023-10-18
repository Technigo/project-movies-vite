// Importing necessary hooks and styles
import { useEffect, useState } from "react"; // Hooks for managing state and side effects
import styles from "./Movies.module.css"; // CSS module for styling

// Creating the Movies component
const Movies = () => {
    // Using the useState hook to create a state variable for storing movies
    const [movies, setMovies] = useState([]);

    // Using the useEffect hook to perform an action when the component mounts
    useEffect(() => {
        // Defining an asynchronous function to fetch popular movies
        const getMoviesOnMount = async () => {
            // Sending a GET request to the popular movies API
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&language=en-US&page=1`);

            // Checking if the response is successful (status code 200)
            if (response.ok) {
                // Parsing the response data as JSON
                const data = await response.json();
                // Updating the state with the list of movies
                setMovies(data.results);
            }
        }

        // Calling the asynchronous function
        getMoviesOnMount();
    }, []); // Empty dependency array ensures this effect runs only on component mount

    // Rendering the number of movies in the state
    return (
        <p>{movies.length}</p>
    );
}

export default Movies;
