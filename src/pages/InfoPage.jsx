import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const apiKey = 'bc5cd60f55c078094358844a2b84851f'; // our API

// Styled Component

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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #000000;
    min-height: 100vh;
`;

const HomeButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    margin-bottom: 20px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    border: solid 3px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: 2px solid #FFD700; //become yellow when pressed to make it more clear for the user
        outline-offset: 4px;
    }
`;

const Card = styled.div`
    background-color: #1c1c1e;
    border-radius: 10px;
    overflow: hidden;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const MovieImage = styled.img`
    width: 100%;
    display: block;
    border-bottom: 1px solid #ccc;
`;

const InfoSection = styled.div`
    padding: 20px;
    color: white;
`;

const Title = styled.h1`
    font-size: 28px;
    margin: 0;
    text-align: center;
    line-height: 1.5;
`;

const Rating = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin: 10px 0;

    span {
        margin-left: 8px;
    }
`;

const Overview = styled.p`
    font-size: 16px;
    line-height: 1.5;
    margin-top: 10px;
    color: #e0e0e0;
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
        <>
            <SkipLink href="#main-content">Skip to main content</SkipLink>
            <Container id="main-content">
                <Link to="/">
                    <HomeButton aria-label="Go back to homepage">Home</HomeButton>
                </Link>
                <Card>
                    <MovieImage
                        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                        alt={`Poster and description of movie ${movieDetails.title}`}
                    />
                    <InfoSection>
                        <Title>{movieDetails.title}</Title>
                        <Rating>
                            <FaStar color="#FFD700" size={18} />
                            <span>{movieDetails.vote_average ? movieDetails.vote_average.toFixed(1) : 'N/A'}</span>
                        </Rating>
                        <Overview>{movieDetails.overview}</Overview>
                    </InfoSection>
                </Card>
            </Container>
        </>
    );
};
