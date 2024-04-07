import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import "../components/MovieDetail.css"

export const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState("")

  const fetchSingleMovie = () => {
    const apiEnv = import.meta.env.VITE_MOVIE_KEY;
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiEnv}&language=en-US`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovie(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const fixRating = () => {
     return Math.round(movie.vote_average*10) / 10
  }
  
  useEffect (() => {
    fetchSingleMovie()
  },[]
  )

  return (
    <div
      className="background"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), 
        url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
    >
      <div>
        <Link className="goBackLink" to="/">
          <p className="hand">👈</p><p>Movies</p> 
        </Link>
      </div>
      <div className="grid-content">
        <img
          className="small-image"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt=""
        />
        <div className="movie-content">
          <h1 className="title">{movie.title}</h1>
          <p className="rating">⭐{fixRating()}</p>
          <p className="description">{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}
