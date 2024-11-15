import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const apiKey = 'bc5cd60f55c078094358844a2b84851f';
const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

// Styled-components
const Container = styled.div`
    background-color: black;
    min-height: 100vh;
    padding: 20px;
    color: white;
`;

const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Lora', serif; /* Apply the Lora font */
    font-size: 36px; /* Optional */
    color: white;
    text-transform: uppercase;
`;




const MovieList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0;
    list-style-type: none;
`;

const MovieItem = styled.li`
    background-color: #CF0A0A;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    img {
        width: 150px;
        height: 225px;
        border-radius: 8px;
        object-fit: cover;
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
        <Container>
            <Title>Le Cinema</Title> {/* Title centered */}
            <MovieList>
                {movies.map(movie => (
                    <MovieItem key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={movie.title}
                                width="150"
                                height="225"
                            />
                        </Link>
                    </MovieItem>
                ))}
            </MovieList>
        </Container>
    );
};
