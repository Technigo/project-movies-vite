//This component fetch a list of of each movies from the website
import React, { useEffect, useState } from "react";
import styled from "styled-components";

//Styled components

const MovieContainer = styled.main`
    padding: 20px;
    background-color: #000;
    color: white;
    min-height: 100vh;
`;

const MovieTitle = styled.h1`
    text-align: center;
    font-size: 36px;
    margin-bottom: 20px;
`;

const MovieListStyled = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 20px;
    list-style: none;
    padding: 0;
`;

const MovieItem = styled.li`
    background-color: #1c1c1e;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &:focus-within {
        outline: 2px solid #FFD700;
        outline-offset: 4px;
    }
`;

const MovieImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
`;

const FallbackText = styled.p`
    font-size: 14px;
    color: #b0b0b0;
`;

const MovieHeading = styled.h2`
    font-size: 18px;
    margin: 10px 0;
`;


//MovieList API 
export const MovieList = () => {
    const [movies, setMovies] = useState(null);
    const apiKey = 'bc5cd60f55c078094358844a2b84851f'; // API 
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`; // API

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Error fetching movies');
                }
                const result = await response.json();
                setMovies(result.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);

    return (


        <MovieContainer>
            <MovieTitle>Popular Movies</MovieTitle>
            {movies ? (
                <MovieListStyled role="list">
                    {movies.map((movie) => (
                        <MovieItem key={movie.id} role="listitem">
                            <MovieHeading>{movie.title}</MovieHeading>
                            <p>Release Date: {movie.release_date}</p>
                            <p>Rating: {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}/10</p>
                            {movie.poster_path ? (
                                <MovieImage
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={`Poster of the movie ${movie.title}`} />
                            ) : (
                                <FallbackText>No image available</FallbackText>
                            )}
                        </MovieItem>
                    ))}
                </MovieListStyled>
            ) : (
                <p>Loading...</p>
            )}
        </MovieContainer>
    );
};

export default MovieList;
