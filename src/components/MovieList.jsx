import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import "./MovieList.css"

export const MovieList = () => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [selectedEndpoint, setSelectedEndpoint] = useState("top_rated")
  const [page, setPage] = useState(1)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const fetchMovies = () => {
      setLoading(true)
      const apiEnv = import.meta.env.VITE_OPENDB_KEY
      fetchMoviesFromEndpoint(selectedEndpoint, page, apiEnv)
    }

    fetchMovies()
  }, [selectedEndpoint, page])

  const fetchMoviesFromEndpoint = (endpoint, pageNumber, apiKey) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${apiKey}&language=en-US&page=${pageNumber}`
    )
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
        if (pageNumber === 1) {
          setMovies(json.results)
        } else {
          setMovies((prevMovies) => [...prevMovies, ...json.results])
        }
      })
      .catch((error) => console.error("Error fetching movies:", error))
      .finally(() => {
        setLoading(false)
      })
  }

  const handleEndpointChange = (event) => {
    setSelectedEndpoint(event.target.value)
    setPage(1)
  }

  const handleLoadMore = () => {
    setScrollPosition(window.scrollY) // added this to prevent scrolling to top when loading more movies
    setPage((prevPage) => prevPage + 1)
  }

  useEffect(() => {
    console.log("Page re-rendered")
    window.scrollTo(0, scrollPosition)
  }, [loading])

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div className="top-section">
        <h1 className="category-name">
          {selectedEndpoint.toUpperCase().replace("_", " ")}
        </h1>
        <select
          value={selectedEndpoint}
          onChange={handleEndpointChange}
          className="dropdown">
          <option value="top_rated">Top Rated</option>
          <option value="popular">Popular</option>
          <option value="now_playing">Now Playing</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>
      <div className="movie-list">
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
      <div className="button-container">
        <button type="button" className="more-button" onClick={handleLoadMore}>
          <p className="more-text">More</p> <IoIosArrowDown />
        </button>
      </div>
    </div>
  )
}
