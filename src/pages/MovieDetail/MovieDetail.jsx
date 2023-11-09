import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";


export const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();
  const apiKey = "d14980dd8df22d55a4bf4592f082a8c6";
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
  
  const imageUrl = `https://image.tmdb.org/t/p/`;
  const imageBig = "w1280";
  const fullImage = imageUrl + imageBig;
  // const rating = parseFloat(movieDetails.vote_average).toFixed(1);
  // console.log(rating);

  const fetchMovieDetails = () => {
    fetch(url)
    .then((res) => res.json()) 
    .then((data) => {
      if(data) {
        setMovieDetails(data);
        setIsLoading(false)
      } else {
        throw new Error("Couldn't contact the API")
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }
  

  useEffect(() => {
    fetchMovieDetails()
  },[])
  

  console.log(movieDetails)

  return (
    <>
    {isLoading ?
    <p>Page loading...</p>:
    <section>
    <div className="movie-info">
      <Link to="/">Back</Link>
      <h1>{movieDetails.title}</h1>
        <div className="wrapper-movie-info">
          <span className="rating"><img src="../../src/assets/star-icon.svg" alt="star icon" /><p>{parseFloat(movieDetails.vote_average).toFixed(1)}</p></span>
          <span className="time"><img src="../../src/assets/clock-icon.svg" alt="star icon" /><p>{movieDetails.runtime}</p></span>
          <span className="time"><img src="../../src/assets/calendar-icon.svg" alt="star icon" /><p>{movieDetails.release_date}</p></span>
        </div>
      <p>{movieDetails.overview}</p>
      <a href={movieDetails.homepage}>Learn More</a>
    </div>

    <div className="movie-img">
      <img src={fullImage + movieDetails.backdrop_path}></img>
    </div>

  </section>
}
  </>
  )
};
