// This component renders responsive grid layout of MovieCard components.
// It adjusts the number of columns based on screen size and accepts a list of movies as props.
import PropTypes from "prop-types";
import styled from "styled-components";
import { MovieCard } from "./MovieCard";

// Styled component for the movie list container
const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  background-color: black;

  @media (min-width: 370px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const MovieList = ({ movies }) => {
  return (
    <StyledMovieList>
      {movies.map(({ id, title, release_date, poster_path }) => (
        <MovieCard
          key={id}
          id={id}
          title={title}
          release_date={release_date}
          poster_path={poster_path}
        />
      ))}
    </StyledMovieList>
  );
};

// Prop validation
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
