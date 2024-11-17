import styled from "styled-components";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../App";

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 0;
  margin: 0;
  width: 100%;
`;

const MovieItem = styled.div`
  aspect-ratio: 2/3;
  line-height: 1;

  position: relative;
  margin: 0;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  h1,
  p {
    padding-left: 20px;
  }

  &:hover {
    opacity: 1;
  }
`;

export const MovieList = ({ movies }) => {
  return (
    <MovieContainer>
      {movies.map((movie) => (
        <Link to={`/movie/${movie.title}`} key={movie.id}>
          <MovieItem>
            <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
            <TextContainer>
              <h1>{movie.title}</h1>
              <p>Realeased: {movie.release_date}</p>
            </TextContainer>
          </MovieItem>
        </Link>
      ))}
    </MovieContainer>
  );
};
