import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const apiKey = 'bc5cd60f55c078094358844a2b84851f';
const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

// Styled-components
const SkipLink = styled.a`
    position: absolute;
    top: -40px;
    left: 0;
    background: #333;
    color: white;
    padding: 8px 15px;
    z-index: 100;
    text-decoration: none;

    &:focus {
        top: 0;
    }
`;

const Container = styled.main`
    background-color: black;
    min-height: 100vh;
    padding: 20px;
    color: white;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Lora', serif;
    font-size: 36px;
    color: white;
    text-transform: uppercase;


    @media (max-width: 768px) {
        font-size: 40px; 
    }

    @media (max-width: 480px) {
        font-size: 24px; 
    }
`;

const MovieList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 20px;
    padding: 0;
    list-style-type: none;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr); /* 3 columns on tablets */
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); /* 2 columns on small tablet
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr; /* 1 column on mobile */
    }
`;

const MovieItem = styled.li`
    background-color: #CF0A0A;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    img {
        width: 100%; /* Adjust width to fit container*/
        height: auto;
        border-radius: 8px;
        object-fit: cover;
    }

    &:focus-within {
        outline: 2px solid #FFD700; //become yellow when pressed to make it more clear for the user
        outline-offset: 4px;
    }

    @media (min-width: 768px) {
        background-color: white; /* Change background for larger screens to white*/
        color: black; 
    }
`;

const MovieLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:focus {
        outline: 2px solid #FFD700; //become yellow when pressed to make it more clear for the user
        outline-offset: 4px;
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
        <>
            <SkipLink href="#main-content">Skip to main content</SkipLink>
            <Container id="main-content">
                <Title>Le Cinema</Title>
                <MovieList>
                    {movies.map(movie => (
                        <MovieItem key={movie.id}>
                            <MovieLink to={`/movie/${movie.id}`} aria-label={`View details about ${movie.title}`}>
                                <img
                                    src={
                                        movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                                            : "https://via.placeholder.com/150x225?text=No+Image"
                                    }
                                    alt={
                                        movie.poster_path
                                            ? `Poster of the movie ${movie.title}`
                                            : "Placeholder for missing movie poster"
                                    }
                                />
                            </MovieLink>
                        </MovieItem>
                    ))}
                </MovieList>
            </Container>
        </>
    );
};
