// MovieInfo.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MovieDetails } from "../components/MovieDetails";
import "./MovieInfo.css";


export const MovieInfo = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const apiKey = import.meta.env.VITE_OPENDB_KEY;

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`

                );
                console.log("API Key:", apiKey);


                if (!response.ok) {
                    throw new Error("Failed to fetch movie details");
                }

                const data = await response.json();
                console.log("Fetched Movie Details:", data); // Check if poster_path is present
                setMovie(data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
                setError("Failed to load movie details.");
            }
        };

        fetchMovieDetails();
    }, [id, apiKey]);

    if (error) return <div>{error}</div>; // Show error message if there's an error
    if (!movie) return <div>Loading...</div>; // Show loading state if movie data is not yet fetched

    return (
        <div>
            <MovieDetails movie={movie} /> {/* Pass movie data to MovieDetails component */}
        </div>
    );
};
