import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Pages/SingleMovie.css";
import { BackIcon } from "../components/Icon/BackIcon";
import { Link } from 'react-router-dom';

// Your API key for accessing movie data
const API_KEY = "76e3c2b7ced1315dc3c5a14d30d8b12f";

export const SingleMovie = () => {
    // State variable to store movie data
    const [movie, setMovie] = useState(null);

    // Get the 'id' parameter from the URL using useParams
    const { id } = useParams();

    // Use the useEffect hook to fetch movie data when 'id' changes
    useEffect(() => {
        // Fetch movie data from TMDb API using the 'id' and API key
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then((res) => res.json()) // Convert the response to JSON format
            .then((json) => {
                setMovie(json); // Update the 'movie' state with the fetched data
                console.log("data is", json);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, [id]); // Re-run this effect whenever 'id' changes

    // Function to convert vote average to stars
    const getStars = (rating) => {
        const roundedRating = Math.round(rating * 10) / 10; // Round to one decimal place
        return `⭐${roundedRating}`;
    };

    return (
        <div className="single-movie">
            {/* Link back to the home page */}
            <Link to="/" className="backLink" aria-label="button back to home page">
                <BackIcon /> Movies
            </Link>

            {/* Conditional rendering: If 'movie' data is available, display it */}
            {movie ? (
                <>
                    <div className="back-drop">
                        {/* Display a backdrop image related to the movie */}
                        <div className="background-image">
                            <img
                                src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                                alt={movie.title}
                            />
                        </div>
                    </div>
                    <div className="movie-info">
                        <div className="movie-poster-container">
                            {/* Display the movie poster */}
                            <img
                                src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </div>
                        <div className="movie-info-text">
                            <div className="movie-info-heading">
                                {/* Display the movie title with rating */}
                                <h2>{movie.title} {getStars(movie.vote_average)}</h2>
                            </div>
                            <div className="movie-info-subtext">
                                {/* Display the movie overview */}
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                // If 'movie' data is not available yet, display a loading message
                <p>Loading...</p>
            )}
        </div>
    );
}