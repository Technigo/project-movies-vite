import React, { useState, useEffect } from 'react';

export const Title = () => {
  const [movieArray, setMovieArray] = useState([]);
  

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b8e637d215af7c581df59754b1cd501e&language=en-US&page=1')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setMovieArray(json.results);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='titleContainer'>
      {movieArray.map((movie, index) => (
        <h1 key={index}>{movie.original_title}</h1>
      ))}
    </div>
  );
};

