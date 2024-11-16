import styled from "styled-components"

const DetailsWrapper = styled.div`

`;

const DetailsContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 50px;
`;

const DetailedTextContainer = styled.div `
  margin-left: 20px;
  max-width: 400px;
  color: white;
`;

const Rating = styled.div `
  color: #000;
  font-weight: 500;
  background: #fff;
  padding: 0 5px;
  text-shadow: none;
  display: inline-block;
`;

const MovieDetailsPoster = styled.img`
  border: 5px solid #fff;
`;

const H1 = styled.h1`
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  color: white;
`;

export const MovieDetails = ({ title, poster_path, overview, rating }) => {
//   console.log(movie)
// const { title, poster_path, overview } = movie;

  return (
    <DetailsWrapper>
      <DetailsContainer>
        <MovieDetailsPoster
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={`Movie poster for ${title}`}
        />
        <DetailedTextContainer>
          <H1>
            <span>{title}</span>
            <span><Rating>⭐️ {Math.round(rating * 10) / 10}</Rating></span>
          </H1>
          <div>
            <p>{overview}</p>
          </div>
          </DetailedTextContainer>
      </DetailsContainer>
    </DetailsWrapper>
  )
}
