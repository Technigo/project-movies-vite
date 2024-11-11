import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "./Movie.css"

export const Movie = () => {
  const [movie, setMovie] = useState([])
  const { movieId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => setMovie(data))
    .catch(error => console.error("Error fetching data", error))
  }, [movieId])

  const returnButton = () => {
    navigate("/")
  }

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
      }}
    >
      <div>
        <button className="return-button" onClick={returnButton}>
        ⪡ Movies
        </button>
      </div>
      <div className="movie-container">  
        <img
          className="poster-image"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <h3>⭐️{Math.round(movie.vote_average * 10) / 10}</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}