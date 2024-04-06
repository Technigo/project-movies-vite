import { useEffect, useState } from 'react'
import { FilmCard } from "../Components/FilmCard"
import "./HomePage.css"

export const HomePage = () => {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const API_KEY = "84d51ec61f17921d3880ccaddc60a0c3"
  const API_URL_TMDB = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`

  const fetchMovies = async (page) => {
    try {
      const response = await fetch(`${API_URL_TMDB}&page=${page}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setMovies(data.results)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
  fetchMovies(currentPage)
  }, [currentPage])


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
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} ... +1000</span>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    </div>
  )
}
