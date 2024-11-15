import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { H2, P } from "../ui/Typography";
import { PopularMoviesData } from "./MovieData";



const FlexMovies = styled.section `
    display: flex;
    flex-wrap: wrap;
`;

const FlexA = styled(Link)`
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
    background-color: #000000bf;
    opacity: 0; /* Hide the text/background */
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1; 
        cursor: pointer;
    }
`;



const MovieFlex = () => {
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
          <FlexA key={movie.id} to={`/movie/${movie.id}`}>
            <FlexImg src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <FlexImgDetails>
                <H2>{movie.title}</H2>
                <P>{movie.release_date}</P>
            </FlexImgDetails>
          </FlexA>
        )}
      </FlexMovies>
    );
  };
  
  export default MovieFlex;