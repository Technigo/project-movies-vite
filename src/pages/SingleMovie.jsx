import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./singlemovie.css";
import { BackIcon } from "../Components/BackIcon";
import { Link } from 'react-router-dom';

// Your API key for accessing movie data
const API_KEY = "833874c10582aaa2144a7cb70148fbd3";

// Define the SingleMovie React component
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
                                <h1>
                                    {/* //Display the movie title and rating  */}
                                    {/* //In this part I injected the CSS in the code - I thought it would save me some time but it took longer with the design in the end - lesson learned. */}

                                    <span className="title" style={{ display: 'inline-block', textShadow: '1px 1px 1px rgb(77, 77, 77)' }}>{movie.title}</span>
                                    <span className="rating-number" style={{ backgroundColor: '#F2C94C', padding: '4px 9px', marginLeft: '10px', borderRadius: '5px' }}>
                                        {Math.round(movie.vote_average * 10) / 10}
                                    </span>
                                </h1>
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
};
