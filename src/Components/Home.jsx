import React, { useState, useEffect } from 'react';

export const Home = () => {
  const [data, setData] = useState(null);
  const apiKey = '0c1859339f764c871c4c8225088979ea';

  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
  .then(res => res.json())
  .then(data => setData(data))
  .catch(error => alert("Error fetching data:", error));
  }, [])

  if (!data) return <h4>Loading...</h4>
  
  
  return (
    <div>
    <ul>
      {data.results.map(movie => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
    </div>
  );
};
