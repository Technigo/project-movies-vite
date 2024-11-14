/* eslint-disable react/prop-types */
import { styled } from "styled-components";

export const MovieCard = ({ movie }) => {
  return (
    <MovieCardWrapper>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieTitle>{movie.title}</MovieTitle>
    </MovieCardWrapper>
  );
};

// Styled Components for MovieCard
const MovieCardWrapper = styled.div`
  position: relative;
  width: 400px; /* Fixed width */
  height: 600px; /* Fixed height */
  overflow: hidden;
  border-radius: 8px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    background: black ;
    
  }
`;

const MoviePoster = styled.img`
  width: 100%; /* Make sure the image fills the container */
  height: 100%; /* Make sure the image fills the container */
  object-fit: cover; /* Ensure the aspect ratio is preserved */
  transition: transform 0.3s ease; /* Smooth zoom-in effect */

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

