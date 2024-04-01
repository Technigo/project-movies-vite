import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const API_KEY = '29adee7b64b906cf77014bb38ac8dd58'

export const MoviesDetails = () => {
  const navigate = useNavigate()
  const { movie_id } = useParams()
  const [details, setDetails] = useState(null)
  // fetch inside useEffect , set response to useState()
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
      })
      .catch((error) => console.log(error))
  }, [movie_id])
  const handleBack = () => {
    navigate('/') // Navigate to the home page
  }

  return (
    <>
      {details && (
        <div className="posterContainer" key={details.id}>
          <button onClick={handleBack}>Back</button>
          <div className="info-container">
            <img
              src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
              alt={details.title}
            />
            <div className="details">
              <h1>
                <span className="title">{details.title}</span>
                <span className="rating">
                  ⭐{details.vote_average.toFixed(1)}
                </span>
              </h1>
              <p>{details.overview}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
