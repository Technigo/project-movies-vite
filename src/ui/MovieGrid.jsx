/* eslint-disable react/prop-types */

import styled from "styled-components"
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MovieCard } from "../components/MovieCard" // Import MovieCard component

const MovieGridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px;


  /* Media query for tablets (3 posters per row) */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Media query for mobile (2 posters per row) */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MovieGrid = ({ movies }) => {
  return (
    <MovieGridContainer>
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} style={{ textDecoration: "none" }}>
          <MovieCard movie={movie} /> {/* Pass movie prop to MovieCard */}
        </Link>
      ))}
    </MovieGridContainer>
  );
};

