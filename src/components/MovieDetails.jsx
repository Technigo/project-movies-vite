// MovieDetails.jsx 

import styled from "styled-components"
import { MovieH1, OverviewText } from "../ui/Typography"

const MovieDetailsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 30px;

  @media (min-width: 650px) {
    flex-direction: row;
    max-width: 100%;
    margin: 300px 60px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 300px 80px;
    max-width: 80%;
    margin-right: auto;
    justify-content: flex-start;
  }
`

const DetailsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 20px 0;

  @media (min-width: 650px) {
    margin: 0 0 0 25px;
    justify-content: flex-end;
    align-self: flex-end;
  }
`

const DetailsImage = styled.img`
  width: 100%;
  margin: 0 auto; 
  border: solid white 1px;

  @media (min-width: 650px) {
    max-width: 330px;
  }
`

const Rating = styled.div`
  color: white;
  font-size: 1.2rem;
`

export const MovieDetails = ({ poster_path, title, rating, overview }) => {
  return (
    <MovieDetailsWrapper>
      <DetailsContainer>
        <DetailsImage
          src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
          alt={`Movie poster for ${title}`}
        />
        <DetailsTextContainer>
          <MovieH1>{title}</MovieH1>
          <Rating>⭐️ {Math.round(rating * 10) / 10}</Rating>
          <OverviewText>{overview}</OverviewText>
        </DetailsTextContainer>
      </DetailsContainer>
    </MovieDetailsWrapper>
  );
};