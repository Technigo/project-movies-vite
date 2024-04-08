import { useEffect, useState } from 'react';
import "./Cover.css"
import { Link} from "react-router-dom";

export const Cover = () => {
  const apiEnv = import.meta.env.VITE_OPENDB_KEY;
  const [coverImages, setCoverImages] = useState([]);
  const [movieIds, setMovieIds] = useState([]);
  const [movies, setMovies] = useState([]);

  const movieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`;

  useEffect(() => {
    fetch(movieUrl)
      .then(res => res.json())
      .then(json => {

        setMovies(json.results);

        setMovieIds(json.results.map(movie=>movie.id));
        
        setCoverImages(json.results.map(movie => movie.poster_path));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [movieUrl]);

  return (
    <div className='coverContainer'>


      {movies.map((movie, index)=>(
        <Link key={movieIds[index]} to={`/movies/${movieIds[index]}`}>
          <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt="poster" className='cover' />
          <div className='movieInfo'>
            <h1 className='movieTitle'>{movie.title}</h1>
            <p className='movieDate'>Released {movie.release_date}</p>
          </div>
        </Link>



      ))}
    </div>
  );
};
