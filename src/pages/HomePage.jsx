import { useEffect, useState } from 'react'
import { fetchData1 } from "../Utils/FetchData1"
import { FilmCard } from "../Components/FilmCard"
import { Link } from 'react-router-dom'
import "./HomePage.css"

export const HomePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchData1()
        setMovies(data.results)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchMovies()
  }, [])

  return (
    <div>
      <div className ="film-collection">
        {movies.map(movie => (
          <FilmCard 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
            poster={movie.poster_path}
          />
        ))}
      </div>
    </div>
  )
}
