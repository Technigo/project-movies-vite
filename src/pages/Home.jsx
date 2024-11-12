import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Home.css';

function Home({ imageBaseUrl }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=663174ddae0ba161daf7f8e43a1250ce&language=en-US&page=1')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data.results)) {
          setMovies(data.results);
        } else {
          throw new Error("Data fetched does not contain a 'results' array");
        }
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setError('Failed to load movies. Please try again later.');
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="home-container">
      <h1 className="home-heading">Popular Movies</h1>
      <ul className="home-container">
        {movies.map((movie, index) => (
          <li key={index} className="movie-item">
            <Link to={`/movie/${encodeURIComponent(movie.title.toLowerCase().replace(/\s+/g, '-'))}`}>
              <div className="movie-poster">
                <img src={`${imageBaseUrl}w185${movie.poster_path}`} alt={`${movie.title} poster`} />
              </div>
              <div className="movie-title">{movie.title} ({movie.release_date.split('-')[0]})</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Home.propTypes = {
  imageBaseUrl: PropTypes.string.isRequired,
};

export default Home;
