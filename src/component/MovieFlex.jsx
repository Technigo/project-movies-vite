import React, { useEffect, useState } from "react";
import PopularMoviesData from "./MovieData";
import styled from "styled-components";
import { H2, P} from "../ui/Typography";



const FlexMovies = styled.section `
    display: flex;
    flex-wrap: wrap;
`;

const FlexA = styled.a `
    width: 100%;
    position: relative;
    color: #fff;
    text-decoration: none;
    

    @media (min-width: 768px) {
        width: 33%;
    }
`;

const FlexImg = styled.img `
    width: 100%;
    height: auto;
`;

const FlexImgDetails = styled.article `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    opacity: 0; /* Hide the text */
    transition: opacity 0.3s ease;
    transition: filter 0.3s ease; 

    &:hover {
        opacity: 1; /* Show the icons when hovering over the image */
        cursor: pointer;
        filter: brightness(50%); /* Darkens the image when hovered */
        cursor: pointer;
    }
`;



const MovieFlex = ({ moviesData }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
        const data = await PopularMoviesData();
        if (data && data.results) {
            setMovies(data.results);
        }
        };
        getMovies();
    }, []);

    return (
        <FlexMovies>
        {movies.map((movie) =>
            <FlexA key={movie.id} href={`https://www.themoviedb.org/movie/${movie.id}`}>
                <FlexImg src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <FlexImgDetails>
                    <H2>{movie.title}</H2>
                    <P>{movie.release_date}</P>
                </FlexImgDetails>
            </FlexA>
        )};
        </FlexMovies>
      );
};
/* {album.images?.[0]?.url} */



export default MovieFlex;