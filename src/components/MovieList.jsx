import React, { useEffect, useState } from "react";

export const MovieList = () => {
    const [movies, setMovies] = useState(null);
    const apiKey = 'bc5cd60f55c078094358844a2b84851f'; // Directly hardcoded API key
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`; // API endpoint for popular movies

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Error fetching movies');
                }
                const result = await response.json();
                console.log(result); // Check if the data is coming in
                setMovies(result.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Popular Movies</h1>
            {movies ? (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            <h2>{movie.title}</h2>
                            <p>Release Date: {movie.release_date}</p>
                            <p>Rating: {movie.vote_average}/10</p>
                            {movie.poster_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    style={{ width: "200px" }}
                                />
                            ) : (
                                <p>No image available</p>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MovieList;