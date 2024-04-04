import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./MovieList.css"

export const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [selectedEndpoint, setSelectedEndpoint] = useState("top_rated")
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

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
    setPage((prevPage) => prevPage + 1)
  }

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div className="top-section">
        <h1>{selectedEndpoint.toUpperCase().replace("_", " ")}</h1>
        <select
          value={selectedEndpoint}
          onChange={handleEndpointChange}
          className="dropdown">
          <option value="top_rated">Top Rated</option>
          <option value="popular">Popular</option>
          <option value="now_playing">In theaters</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>
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
      <div className="button-container">
        <button className="more-button" onClick={handleLoadMore}>
          More
        </button>
      </div>
    </div>
  )
}
