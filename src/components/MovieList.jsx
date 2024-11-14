// MovieList.jsx

import React, { useEffect, useState } from 'react';
import { MovieCard } from './MovieCards';
import styled from 'styled-components';


const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
 

`;

export const MovieList = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=a9688995501f820a9db8ba62f99394af&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching movies:', error));

  }, []);

  return (
    <StyledMovieList>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </StyledMovieList>
  );
};