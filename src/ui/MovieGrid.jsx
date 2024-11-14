/* eslint-disable react/prop-types */

import styled from "styled-components"
import { MovieCard } from "../components/MovieCard" // Import MovieCard component

const MovieGridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
`;

export const MovieGrid = ({ movies }) => {
  return (
    <MovieGridContainer>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} /> // Pass movie prop to MovieCard
      ))}
    </MovieGridContainer>
  );
};

