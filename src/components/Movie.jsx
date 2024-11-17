import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IMAGE_URL } from "../App";
import { Link } from "react-router-dom";
import BackButton from "../assets/back-button.svg?react";
import StarIcon from "../assets/star.svg?react";

const MovieContainer = styled.div`
  position: relative;
  align-items: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  color: white;
  padding: 20px;
  overflow: hidden;
`;

const Poster = styled.img`
  width: 300px;
  border: 1px solid white;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  max-width: 500px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  align-self: flex-start;
  justify-self: flex-start;
`;

const Button = styled(BackButton)`
  padding: inherit;
  width: 24px;
  height: 24px;
  filter: invert(1);
  margin: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const VoteAverage = styled.span`
  margin-left: 10px;
  margin-top: 0;
  font-weight: bold;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  color: white;
  gap: 4px;
`;

export const Movie = ({ movies }) => {
  const { movieName } = useParams();

  const movie = movies.find((movie) => movie.title === movieName);

  return (
    <MovieContainer
      backgroundImage={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
    >
      <ButtonWrapper>
        <Link to="/">
          <Button alt="Back" />
        </Link>
      </ButtonWrapper>
      <Poster src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
      <TextContainer>
        <TitleContainer>
          <h2>{movie.title}</h2>

          <VoteAverage>
            <StarIcon size={24} />
            {movie.vote_average.toFixed(1)}
          </VoteAverage>
        </TitleContainer>
        <p>{movie.overview}</p>
      </TextContainer>
    </MovieContainer>
  );
};
