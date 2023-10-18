// Importing necessary styles and components
import "./movielist.css";
import { useState, useEffect } from "react";
import { Oval } from 'react-loader-spinner';
import { MovieListCard } from "../Components/MovieListCard";

// The main component for displaying a list of movies
export const MovieList = () => {

    // State variables to hold data and loading status
    const [imageConfig, setImageConfig] = useState(null);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);


    const api_key = "7d78ddbe7ada309152c07dd3e85ec306";

    // Fetching configuration data for the movie posters when component mounts
    useEffect(() => {
        const fetchConfiguration = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/configuration?api_key=${api_key}`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const json = await response.json();
                setImageConfig(json);
                console.log(json);
            } catch (error) {
                console.error("Error fetching configuration:", error);
            }
        };

        fetchConfiguration(); // Call the fetchConfiguration function
    }, []); // Empty dependency array means this effect runs once on component mount

    // Fetching movie data when component mounts
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const json = await response.json();
                setList(json.results);
                console.log(json.results);

            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies(); // Call the fetchMovies function
    }, []); // Empty dependency array means this effect runs once on component mount

    // Rendering the UI for the MovieList component
    return (
        <>
            <section className="movie-list-page">
                <div className="hero-section">
                    <h1>Movie Zone</h1>
                </div>

                <div className="movie-list">
                    {/* Mapping over the list of movies to create MovieListCard components */}
                    {list.map((movie) => (
                        <MovieListCard
                            key={movie.id}
                            movieTitle={movie.title}
                            releaseDate={movie.release_date}
                            movieId={movie.id}
                            moviePoster={movie.poster_path}
                        />
                    ))}
                </div>


                {loading && (
                    <div className="loader-container">
                        <Oval />
                    </div>
                )}

            </section>
        </>
    )
}


