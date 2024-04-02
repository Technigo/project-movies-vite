<<<<<<< HEAD
//const key = "e185d0927f85272fbd0fd2526ecf0657";
//import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";

export const Movie = () => {
    return(
        <div>
            <h2>Movie component</h2>
        </div>
    )
}
=======
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Movie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();

  const fetchApi = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e185d0927f85272fbd0fd2526ecf0657&language=en-US`
    )
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);
        setMovie(movie);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <div>{movie.vote_average}</div>
      <p>{movie.overview}</p>
    </div>
  );
};
>>>>>>> fc6a210ae8e160212840bee6e1a4a4d86f5a9b3b
