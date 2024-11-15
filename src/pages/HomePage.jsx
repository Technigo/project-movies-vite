import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const apiKey = 'bc5cd60f55c078094358844a2b84851f';
const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

// Styled-components
const MovieList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Deux colonnes */
    gap: 20px; /* Espace entre les éléments */
    padding: 0;
    list-style-type: none;
`;

const MovieItem = styled.li`
    background-color: #f8f8f8;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h2 {
        font-size: 16px;
        margin: 10px 0;
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
    }
`;

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
            <MovieList>
                {movies.map(movie => (
                    <MovieItem key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <h2>{movie.title}</h2>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                        </Link>
                    </MovieItem>
                ))}
            </MovieList>
        </div>
    );
};
