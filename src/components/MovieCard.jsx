import { Link } from "react-router-dom";
import styled from "styled-components";
import { CardH1, P } from "../ui/Typography";

const PosterContainer = styled.div`
  position: relative;
  cursor: pointer;
  height: 100%;
`;

const MovieCardPoster = styled.img`
  object-fit: cover;
  display: block;
  width: 100%;
`;

const MovieCardText = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;  
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 15px;
  color: white;
  
  &:hover {
    opacity: 1;
  }
`;

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  return (
    <>
      <Link to={`/movie/${id}`}>
        <PosterContainer>
          <MovieCardPoster
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={`Movie poster for ${title}`}
          />
          <MovieCardText>
            <CardH1>{title}</CardH1>
            <P>Released {release_date}</P>
          </MovieCardText>
        </PosterContainer>
      </Link>
    </>
  );
};