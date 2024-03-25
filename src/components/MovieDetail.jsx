import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Navigation from "./Navigation"
import { imageConfig } from "/src/imageConfig"
import "./movieDetail.css"

function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [posterSize, setPosterSize] = useState(imageConfig.poster_sizes[1])

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=3024a5593cf4b18923c14bf43d0932db&language=en-US`
        )
        const data = await response.json()
        setMovie(data)
      } catch (error) {
        console.error("Error fetching movie details:", error)
      }
    }

    fetchMovieDetails()

    const handleWindowResize = () => {
      if (window.innerWidth > 820) {
        setPosterSize(imageConfig.poster_sizes[3])
      } else {
        setPosterSize(imageConfig.poster_sizes[1])
      }
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [id])

  if (!movie) {
    return <div>Loading...</div>
  }

  const backdropUrl = `${imageConfig.secure_base_url}w1280${movie.backdrop_path}`

  const roundedRating = movie.vote_average.toFixed(1)

  return (
    <>
      <div
        className="movie-detail"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 10%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 90%, rgba(0,0,0,0.8) 100%), url(${backdropUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <Navigation />
        <div className="movie-detail-content">
          <img
            src={`${imageConfig.secure_base_url}${posterSize}${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="title-rating-container">
            <h2
              style={{
                textShadow: " 1px 1px #4d4d4d",
                fontSize: "1.5em",
                margin: "0",
              }}
            >
              {movie.title}
            </h2>
            <p className="rating"> {roundedRating} ⭐</p>
          </div>
          <p className="info">{movie.overview}</p>
        </div>
      </div>
    </>
  )
}

export default MovieDetail
