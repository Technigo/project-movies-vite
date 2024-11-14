// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

export const MovieCard = ({ movie }) => {

  return (
    <div>

      <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <h4>{movie.release_date}</h4>
    </div>
  );
}
