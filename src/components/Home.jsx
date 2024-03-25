import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { imageConfig } from "/src/imageConfig"
import "./home.css"

function Home() {
  const [popularMovies, setPopularMovies] = useState([])
  const [hoveredMovieId, setHoveredMovieId] = useState(null)
  const [movieTrailers, setMovieTrailers] = useState({})
  const [showTrailer, setShowTrailer] = useState(false)

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=3024a5593cf4b18923c14bf43d0932db&language=en-US&page=1"
        )
        const data = await response.json()
        setPopularMovies(data.results)
      } catch (error) {
        console.error("Error fetching popular movies:", error)
      }
    }

    fetchPopularMovies()
  }, [])

  useEffect(() => {
    if (hoveredMovieId) {
      const fetchMovieTrailers = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${hoveredMovieId}/videos?api_key=3024a5593cf4b18923c14bf43d0932db&language=en-US`
          )
          const data = await response.json()
          const trailers = data.results.filter((video) =>
            video.name.toLowerCase().includes("official trailer")
          )
          const firstTrailer = trailers.length > 0 ? trailers[0] : null
          setMovieTrailers((prevTrailers) => ({
            ...prevTrailers,
            [hoveredMovieId]: firstTrailer,
          }))
        } catch (error) {
          console.error("Error fetching movie trailers:", error)
        }
      }

      fetchMovieTrailers()
    }
  }, [hoveredMovieId])

  const posterSize = imageConfig.poster_sizes[4]

  return (
    <>
      <div>
        <div className="popular-movies-container">
          {popularMovies.map((movie) => (
            <div
              key={movie.id}
              className="movie-link"
              onMouseEnter={() => setHoveredMovieId(movie.id)}
              onMouseLeave={() => {
                setHoveredMovieId(null)
                setShowTrailer(false) 
              }}
            >
              <Link to={`/movies/${movie.id}`}>
                <img
                  className="movie-poster"
                  src={`${imageConfig.secure_base_url}${posterSize}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              {hoveredMovieId === movie.id && (
                <div className="movie-options">
                  <button onClick={() => setShowTrailer(true)}>Trailer</button>
                  <Link to={`/movies/${movie.id}`}>Info</Link>
                </div>
              )}
              {showTrailer &&
                hoveredMovieId === movie.id &&
                movieTrailers[movie.id] && (
                  <div className="movie-trailer-container">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${
                        movieTrailers[movie.id].key
                      }?autoplay=1`}
                      title={movieTrailers[movie.id].name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
