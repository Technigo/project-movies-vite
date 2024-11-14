// MovieDetails.jsx
import styled from "styled-components"
import { MovieH1 } from "../ui/Typography"
import { OverviewText } from "../ui/Typography"

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 20px 30px;
  `

const DetailsImage = styled.img`
  width: 100%;
  margin: 0 auto; 
  border: solid white 2px;
  `
  
const Rating = styled.div`
  color: white;
  font-size: 1.2rem;

  `





export const MovieDetails = ({ poster_path, title, rating, overview }) => {
  return (
      <DetailsContainer>
        <DetailsImage
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={`Picture from movie ${title}`}
        />
        <MovieH1>{title}</MovieH1>
        <Rating>
        ⭐️ {Math.round(rating * 10) / 10}
        </Rating>
        <OverviewText>{overview}</OverviewText>
      </DetailsContainer>
  )
}