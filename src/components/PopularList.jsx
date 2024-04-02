/*Route: /, component: PopularList

This route is responsible for the home page. 
It uses useEffect to run an API request to 
themoviedb.org and fetch popular films in the US, 
puts them into state using useState, and then renders 
them wrapped in a Link from react-router-dom to link 
to the detail page.


id, 
original_title, 
releasedate*/

import { useEffect, useState } from "react"
import "./PopularList.css"

const API_KEY = "2bd2e4cabf6e3176951e947b95e23dd9"
const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

export const PopularList = () => {
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

  if (!movies.results) {
    return <div>No movies available</div>
  }
  return (
    <div className="popular-list">
      {movies.results.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <p>
            Title: {movie.title} - Release date: {movie.release_date}
          </p>
        </div>
      ))}
    </div>
  )
}
