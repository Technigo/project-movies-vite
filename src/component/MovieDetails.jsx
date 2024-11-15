import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { fetchMovieById, PopularMoviesData } from "./MovieData";

const Background = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
`;

const Poster = styled.img`
  width: 300px;
  border-radius: 10px;
`;

const Details = styled.div`
  color: white;
  max-width: 600px;
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
`;

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      const getMovie = async () => {
        const data = await fetchMovieById(id);
        setMovie(data);
      };
      getMovie();
    }, [id]);
  
    if (!movie) return <p>Loading...</p>;
  
    return (
      <Background style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
        <BackButton to="/">← Movies</BackButton>
        <Content>
          <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />  
        <Details>
          <h2>{movie.title}</h2>
          <p>⭐ {movie.vote_average}</p>
          <p>{movie.overview}</p>
        </Details>
      </Content>
    </Background>
  );
};

export default MovieDetails;
