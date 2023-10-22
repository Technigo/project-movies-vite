import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../../index.css'

export const Details = () => { 
  const [movie, setMovie] = useState({});
  const apiKey = 'aea11e511c691453635b1da985972186';
  const { id } = useParams();

  // Fetches the details of a specific movie using the movie's id and the API key
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(error => alert("Error fetching data:" + error));
  }, [id]);

  // Converting the movie's audience score to an integer, so the decimals could be rounded later with the toFixed method
  let voteAverage = parseFloat(movie.vote_average)

  return (
    <div className="movie-details" style={{backgroundImage: `url(http://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}>
      <div className="info-container">
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="details-container">
          <h2>{movie.title} ⭐ {voteAverage.toFixed(1)}</h2>
          <p>Released: {movie.release_date}</p>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;