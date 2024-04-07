import { useEffect, useState } from 'react';
import "./Cover.css"
import { Link} from "react-router-dom";

export const Cover = () => {
  const api_key = "b8e637d215af7c581df59754b1cd501e";
  const [coverImages, setCoverImages] = useState([]);
  const [movieIds, setMovieIds] = useState([]);
  const [movieTitles, setMovieTitles] = useState([]);
  const [movieDates, setMovieDates] = useState([]);
  
  const [movies, setMovies] = useState([]);

  const movieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

  useEffect(() => {
    fetch(movieUrl)
      .then(res => res.json())
      .then(json => {

        setMovies(json.results);

        setMovieIds(json.results.map(movie=>movie.id));
        
        setCoverImages(json.results.map(movie => movie.poster_path));

        setMovieTitles(json.results.map(movie => movie.original_title));

        setMovieDates(json.results.map(movie => movie.release_date));
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
