import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../stylesheets/movieDetails.css'
const API_KEY = '29adee7b64b906cf77014bb38ac8dd58'

export const MoviesDetails = () => {
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

  return (
    <section>
      {details && (
        <div
          className="posterContainer"
          key={details.id}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url("https://image.tmdb.org/t/p/w1280${details.backdrop_path}")`,
          }}
        >
          <div className="info-container">
            <img
              src={`https://image.tmdb.org/t/p/w1280${details.poster_path}`}
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
    </section>
  )
}
