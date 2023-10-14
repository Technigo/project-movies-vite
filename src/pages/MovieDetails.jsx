import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key={api_key}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  return (
    <div>
      {/* Display movie details */}
    </div>
  );
}

export default MovieDetails;
