/*Route: /, component: PopularList
This route is responsible for the home page. 
It uses useEffect to run an API request to 
themoviedb.org and fetch popular films in the US, 
puts them into state using useState, and then renders 
them wrapped in a Link from react-router-dom to link 
to the detail page.*/

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./MovieList.css"

const API_KEY = "2bd2e4cabf6e3176951e947b95e23dd9"
const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = () => {
      fetch(BASE_URL)
        .then((response) => {
          if (!response.ok) {
            if (response.status === 404) {
              throw new Error("Movie not found")
            } else {
              throw new Error("Failed fetching movies")
            }
          }
          return response.json()
        })
        .then((json) => {
          setMovies(json.results)
        })
        .catch((error) => console.error("Error fetching movies:", error))
    }

    fetchMovies()
  }, [])

  console.log("Movies:", movies)

  if (!movies.length) {
    return <div>No movies available</div>
  }
  return (
    <div className="popular-list">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <div className="movie-card">
            <div className="hover-text">
              <h1 className="title">{movie.title}</h1>
              <p className="release-date">Released {movie.release_date}</p>
            </div>
            <div className="poster">
              <img
                className="poster-img"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`Movie poster for ${movie.title}`}></img>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
