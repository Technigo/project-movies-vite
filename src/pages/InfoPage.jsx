import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const apiKey = 'bc5cd60f55c078094358844a2b84851f';

// Styled component for the movie image
const MovieImage = styled.img`
    max-width: 300px;
    width: 100%;
    height: auto;
    border-radius: 8px;
    display: block;
    margin: 0 auto;
`;

export const InfoPage = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
            try {
                const response = await fetch(movieDetailsUrl);
                const data = await response.json();
                setMovieDetails(data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        if (movieId) {
            fetchMovieDetails();
        }
    }, [movieId]);

    if (!movieDetails) return <p>Loading movie details...</p>;

    return (
        <div>
            <Link to="/">
                <button style={{ marginBottom: "20px", padding: "10px 20px", fontSize: "16px" }}>
                    Home
                </button>
            </Link>

            <h1>{movieDetails.title}</h1>
            <p>{movieDetails.overview}</p>
            <p>Release Date: {movieDetails.release_date}</p>
            <p>Runtime: {movieDetails.runtime} minutes</p>
            <p>Rating: {movieDetails.vote_average}/10</p>
            <MovieImage src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
        </div>
    );
};
