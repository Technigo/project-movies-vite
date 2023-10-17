import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
const BACKDROP_SIZE = "w780";

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const api_key = '917200cae8c9f306c0e6719af5d42134';
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);

        // Set the background image of the body using the movie backdrop
        document.body.style.backgroundImage = `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${data.backdrop_path})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
      });

    // Cleanup - reset the background image when the component is unmounted
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, [id]);

  return (
    <>
      <nav>
        <ul className="app-ul">
          <li className="app-li">
            <NavLink to="/movielist">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
        <h1>{movie.title}</h1>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        <img src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`} alt={movie.title || "Movie poster"} />
        <p>{movie.overview}</p>
      </div>
    </>
  );
}

export default MovieDetails;





