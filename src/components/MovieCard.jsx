// MovieCard.jsx
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { MovieH2 } from '../ui/Typography.jsx'
import { MovieP } from '../ui/Typography.jsx'

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  height: 100%;
  &:hover {
    opacity: 1;
    }
`

const MoviePoster = styled.img`
object-fit:cover;
display:block;
width: 100%;
`

const MovieCardOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;  
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: opacity 0.3s ease;
  box-sizing: border-box;
  color: white;
  padding: 15px;
  &:hover {
    opacity: 1;
    }
`

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  return (
    // Link to navigate to the movie's detail page using the movie ID
    // <Link to={`/movie/${id}`}>
      <article className="movie-card">
        {/* Display the movie's poster image */}
       
        <Link to={`/movie/${id}`}>
          <ImageContainer>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt={`Picture from movie ${title}`}
              />
        
          {/* Container for the movie's title and release date */}
          <MovieCardOverlay>
            <MovieH2>{title}</MovieH2> {/* Display the movie title */}
            <MovieP>Released {release_date}</MovieP> {/* Display the release date */}
          </MovieCardOverlay>
          </ImageContainer>
        </Link>
      </article>
    // </Link>
  );
};