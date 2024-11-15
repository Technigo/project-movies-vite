import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { VscArrowCircleLeft } from "react-icons/vsc";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ backdropPath }) => `
    linear-gradient(rgba(0, 0, 0, 0) 30%, rgb(0, 0, 0) 100%),
    url(https://image.tmdb.org/t/p/w1280${backdropPath})
  `};
  background-size: cover;
  background-position: center;
  z-index: -1; 
`;

const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  z-index: 1; 
  color: white;

  img {
    border: 5px solid #fff;
    width: 200px;
}
`;

const StyledTextSection = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;


const StyledIcon = styled(VscArrowCircleLeft)`
  font-size: 40px; 
  color: #ffffff;
`;

export const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a9688995501f820a9db8ba62f99394af&language=en-US`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching movie details');
        }
        return response.json();
      })
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [id]);

  return (
    <>
      {movieDetails && (
        <>
          {/* Bakgrundsbild */}
          <Background backdropPath={movieDetails.backdrop_path} />

          {/* Innehåll */}
          <StyledMovieDetails>
            <p>
              <Link to="/">
                <StyledIcon />
              </Link>
            </p>
            <img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt={movieDetails.title} />
            <StyledTextSection>
              <h1>{movieDetails.title}</h1>
              <p>⭐ {movieDetails.vote_average}</p>
              <p>{movieDetails.overview}</p>
            </StyledTextSection>
          </StyledMovieDetails>
        </>
      )}
    </>
  );
};
