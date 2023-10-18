import "./movielist.css"
import { useState, useEffect } from "react";
import { Oval } from 'react-loader-spinner';
import { MovieListCard } from "../Components/MovieListCard";



export const MovieList = () => {

    const [imageConfig, setImageConfig] = useState(null);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);


    const api_key = "7d78ddbe7ada309152c07dd3e85ec306";

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

        fetchConfiguration();
    }, []);



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

        fetchMovies();

    }, []);



    return (
        <>
            <section className="movie-list-page">
                <div className="hero-section">
                    <h1>Popular movies</h1>
                </div>

                <div className="movie-list">
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
                <div className="loader-container">
                    <Oval />
                </div>
            </section>
        </>
    )
}
