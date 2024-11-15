import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { MovieDetails } from "../components/MovieDetails";
import { useMovies } from "../Hook";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

const MovieInfoStyles = styled.div`
display: flex;
flex-direction: column;
  background-color: #1e1e1e;
  width: 100%;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  font-size: 24px;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  margin: 1rem;

  &:hover {
    & svg {
      margin-right: 1rem;
      font-size: 28px;
      transition: transform 0.2s ease-in-out;
  }

  & svg:hover {
    transform: scale(1.2);
  }
}`

export const MovieInfo = () => {
  const { movies, isLoading, error } = useMovies();
  const { id } = useParams();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const movie = movies.find((movie) => movie.id === parseInt(id))
  if (!movie) return <p>Film not found</p>;
  return (
    <>
      <MovieInfoStyles>
        <StyledLink to="/">
          <FontAwesomeIcon icon={faCircleArrowLeft} />
          Home
        </StyledLink>
        <MovieDetails movie={movie} />
      </MovieInfoStyles>
    </>
  );
};