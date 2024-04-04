import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import animation from '../assets/animations/loading.json'
import './css/movielist.css'

export const MovieClassics = () => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const fetchApi = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=e185d0927f85272fbd0fd2526ecf0657&language=en-US&page=2`
    )
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies)
        console.log(movies.results)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching movies:', error)
        setLoading(false)
      })
  }
  useEffect(() => {
    setTimeout(() => {
      fetchApi()
    }, 1500)
  }, [])

  return (
    <>
      {loading && (
        <div className="loading">
          <Lottie
            animationData={animation}
            loop
            autoPlay
            style={{ width: 250, height: 250 }}
          />
        </div>
      )}
      {!loading && (
        <>
          <div className="movie-list">
            {movies.results.map((movie) => (
              <Link
                to={`/movie/${movie.id}`}
                className="each-movie"
                key={movie.id}
              >
                <div id="overlay">
                  <div id="overlay-text">
                    <h1>{movie.title}</h1>
                    <h2>Released: {movie.release_date}</h2>
                  </div>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  )
}
