// import React from "react";

// export const Movie = ({ name, image }) => {
//   <div className="movie">
//     <img src={`/images/${image}`} alt="" />
//     <h3>{name}</h3>
//   </div>;
// };

// import React from "react";
// import { useParams } from "react-router-dom";

// export const ShowMovie = ({ movies }) => {
//   const { movieName } = useParams();
//   const selectedMovie = movies.find((movie) => movie.name === movieName);

//     const url =
//       "https://api.themoviedb.org/3/movie/popular?api_key=05ee03350103cd5d4cd268dcf88024c0&language=en-US&page=1";

//   if (!selectedMovie) {
//     // Hantera fallet när den valda filmen inte finns i din data
//     return <div>Filmen hittades inte</div>;
//   }

//   return (
//     <div className="show-movie">
//       <h1>{selectedMovie.name}</h1>
//       <p>Regissör: {selectedMovie.director}</p>
//       <p>År: {selectedMovie.year}</p>
//       {/* Lägg till fler detaljer om filmen här */}
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Movie = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=05ee03350103cd5d4cd268dcf88024c0&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovieData(data));
  }, [movieId]);

  if (!movieData) {
    return <div>Laddar...</div>;
  }

  const { backdrop_path, poster_path, title, overview, release_date } =
    movieData;

  return (
    <div className="show-movie">
      <h1>{title}</h1>
      <p>Release Date: {release_date}</p>
      <p>{overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt="Background"
      />
      <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt="Poster" />
    </div>
  );
};
