/* eslint-disable react/prop-types */
import { styled } from "styled-components";

export const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const altText = movie.title ? `Poster of ${movie.title}` : "Movie poster";

  return (
    <MovieCardWrapper>
      <MoviePoster src={posterUrl} alt={altText} />
      <MovieTitle>{movie.title}</MovieTitle>
    </MovieCardWrapper>
  );
};

// Styled Components for MovieCard
const MovieCardWrapper = styled.div`
  position: relative;
  z-index: 10;  /* Ensures the content is on top of the background */
  width: 100%;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    background: black ;

  }

`;

const MoviePoster = styled.img`
  width: 100%; /* Make sure the image fills the container */
  height: auto; 
  object-fit: cover; 
  transition: transform 0.3s ease; 

`;

const MovieTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7); /* Dark background for the title */
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  opacity: 0; /* Title is hidden by default */
  transition: opacity 0.3s ease;

  ${MovieCardWrapper}:hover & {
    opacity: 1; /* Title becomes visible on hover */
  }
`;

