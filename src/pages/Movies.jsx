// Movies.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieCard } from "../components/MovieCard"; // Assuming MovieCard is a default export
import "./Movies.css";

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const apiKey = import.meta.env.VITE_OPENDB_KEY; // Retrieve API key from environment variables

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                // Check if API key is available
                if (!apiKey) {
                    throw new Error("API key is missing! Please check your .env file.");
                }

                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
                );

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const data = await response.json();
                console.log("Fetched movies:", data);
                setMovies(data.results || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchMovies();
    }, [apiKey]);

    return (
        <div>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                        <MovieCard
                            id={movie.id}
                            title={movie.title}
                            release_date={movie.release_date}
                            poster_path={movie.poster_path}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

