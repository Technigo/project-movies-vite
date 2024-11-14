import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const apiKey = 'bc5cd60f55c078094358844a2b84851f';
const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

export const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(popularMoviesUrl);
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Movie Catalog</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        {/* Link to the InfoPage with the movie's ID */}
                        <Link to={`/movie/${movie.id}`}>
                            <h2>{movie.title}</h2>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
