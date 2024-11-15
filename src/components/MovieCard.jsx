// MovieCard.jsx

import styled from 'styled-components';
import { Link } from "react-router-dom";
import { MovieH2, MovieP } from '../ui/Typography.jsx'

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  height: 100%;
`

const MoviePoster = styled.img`
  object-fit: cover;
  display: block;
  width: 100%;
`

const MovieCardOverlay = styled.div`
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
`

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  return (
    <article>
      <Link to={`/movie/${id}`}>
        <ImageContainer>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={`Movie poster for ${title}`}
          />
          <MovieCardOverlay>
            <MovieH2>{title}</MovieH2>
            <MovieP>Released {release_date}</MovieP>
          </MovieCardOverlay>
        </ImageContainer>
      </Link>
    </article>
  );
};