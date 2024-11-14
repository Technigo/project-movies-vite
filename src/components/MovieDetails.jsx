import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      {movieDetails && (
        <>
          <img src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`} alt={movieDetails.title} />
          <img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt={movieDetails.title} />
          <h1>{movieDetails.title}</h1>
          <p>Rating: {movieDetails.vote_average}</p>
          <p>{movieDetails.overview}</p>
        </>
      )}
    </div>
  );
};
