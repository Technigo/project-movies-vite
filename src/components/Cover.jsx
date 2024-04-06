import React, { useEffect, useState } from 'react';
import "./Cover.css"
import { Link} from "react-router-dom";

export const Cover = () => {
  const api_key = "b8e637d215af7c581df59754b1cd501e";
  const [coverImages, setCoverImages] = useState([]);
  const [movieIds, setMovieIds] = useState([]);

  const movieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

  useEffect(() => {
    fetch(movieUrl)
      .then(res => res.json())
      .then(json => {
        setMovieIds(json.results.map(movie=>movie.
        id));
        
        setCoverImages(json.results.map(movie => movie.poster_path));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [movieUrl]);

  return (
    <div className='coverContainer'>
      {coverImages.map((cover, index) => (
        <Link key={movieIds[index]} to={`/movies/${movieIds[index]}`}>
          <img src={`https://image.tmdb.org/t/p/w1280${cover}`} alt="poster" className='cover' />
        </Link>
        
        
      ))}
    </div>
  );
};
