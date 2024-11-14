// MovieCard.jsx

// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMovieCard = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: opacity 0.3s ease;
  }

  &:hover img {
    opacity: 0.3; 
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Minska till 0.5 för mer transparens */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: left;
  opacity: 0;
  transition: opacity 0.3s ease;
  

  ${StyledMovieCard}:hover & {
    opacity: 1;
  }

  h3{
  
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-size: 25px;
    padding-left: 10px;
    margin: 0;
    
  }


   p{
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    padding-left: 10px;
    padding-bottom: 20px;
    
    
  }
`;



export const MovieCard = ({ movie }) => {
  return (
    <StyledMovieCard>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <Overlay>
        <h3>{movie.title}</h3>
        <p>Released: {movie.release_date}</p>
      </Overlay>
    </StyledMovieCard>
  );
};
