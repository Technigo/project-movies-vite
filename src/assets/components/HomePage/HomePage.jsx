import { useEffect, useState } from 'react'
import "./HomePage.css"


export const HomePage = () => {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1) 

  const apiEnv = import.meta.env.VITE_OPENDB_KEY
  const API_URL_TMDB = `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US`

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${API_URL_TMDB}&page=${currentPage}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setMovies(data.results)
        setTotalPages(data.total_pages)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  
    fetchMovies()
  }, [currentPage, API_URL_TMDB])

  const handleNextPage = () => {
    setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : prevPage))
  }

  const handlePrevPage = () => {
    setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage))
  }

  return (
    <div>
      <div className="film-collection">
        {movies.map(movie => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  )
}
