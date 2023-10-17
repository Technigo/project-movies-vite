import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MovieCard = () => {

  const [movieData, setMovieData] = useState([])
  const api_key = "7a6dc3dad2658fff3044692170b4b00a";
  const  {movie_id} = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=en-US`)
      .then(response => response.json())
      .then(data => setMovieData(data.results))
      .catch(error => console.error('Error fetching data:', error))
  }, [movie_id]);
  console.log(movieData)
  
  return (
    <div>MovieCard</div>
  )
}
