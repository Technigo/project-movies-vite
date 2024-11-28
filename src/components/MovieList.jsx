import { useEffect, useState, } from "react";
import { MovieItem } from "./MovieItem";
import { Link } from "react-router-dom";
import "./MovieList.css"



export const MovieList = () => {
  const [data, setData] = useState([])
  const api_key = "7a6dc3dad2658fff3044692170b4b00a";
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setData(data.results))
      .catch(error => console.error('Error fetching data:', error))
  }, []);
 console.log(data)
return (
    <div className="movie-list">
      {data.map(movie => (
  <Link to={`/movie/${movie.id}`} key={movie.id}>
          <MovieItem
      name={movie.title}
      photo={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      releaseDate={movie.release_date}
    />
  </Link>
))}
    </div>
  );
}

