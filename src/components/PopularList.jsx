import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export const PopularList = () => {
  const [data, setData] = useState([])
  const api_key = "693b375f74896f94616e9c8c846f1014"

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setData(data.results))
      .catch(error => console.error("Error fetching data", error))
  }, [])

  return (
    <div className="movie-list">
      {data.map((movie) => (
        <div key={movie.id} className="movie-item">
          <Link to={`/movie/${movie.id}`}>
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}