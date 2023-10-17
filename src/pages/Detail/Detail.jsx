import React, { useEffect, useState } from "react";

const MovieDetail = ({ movieIds }) => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const details = [];

      for (const movieId of movieIds) {
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzEwNDBiNTAzY2M0MzViNDk0MjU0ODRiMDZlYTc1NSIsInN1YiI6IjY1MmQyODNlNjYxMWI0MDBlMjU1MDMxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nzGRkQ839_qWKFn7k3BsxmVqMmHl11yXIf4z6QEk8z4'
          }
        };

        try {
          const response = await fetch(apiUrl, options);
          if (response.ok) {
            const data = await response.json();
            details.push(data);
          }
        } catch (error) {
          console.error(error);
        }
      }

      setMovieDetails(details);
    };

    fetchMovieDetails();
  }, [movieIds]);

  return (
    <React.Fragment>
      <h1>Movie Details</h1>
      {movieDetails.length > 0 ? (
        movieDetails.map((movie, index) => (
          <div key={index}>
            <h2>{movie.title}</h2>
            <p>Overview: {movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
          </div>
        ))
      ) : (
        <p>Loading movie details...</p>
      )}
    </React.Fragment>
  );
};

export default MovieDetail;

