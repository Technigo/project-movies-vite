import { useParams, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../stylesheets/movieDetails.css'
import { FormatDate } from '../utils/FormatDate'
const API_KEY = '29adee7b64b906cf77014bb38ac8dd58'

export const SeriesDetails = () => {
  const { series_id } = useParams()
  const [details, setDetails] = useState(null)
  const [reviews, setReviews] = useState([])
  // fetch inside useEffect , set response to useState()
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${series_id}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
      })
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${series_id}/reviews?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((review) => setReviews(review.results))
  }, [series_id])

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
              <h2>
                <span className="title">{details.name}</span>
                <span className="rating">
                  ⭐{details.vote_average.toFixed(1)}
                </span>

                <NavLink to={`/tv/${series_id}/seasons`}>
                  <h5 className="seasonsCount">
                    {details.seasons.length} Seasons →
                  </h5>
                </NavLink>
              </h2>
              <p>{details.overview}</p>
            </div>
          </div>
          <div className="Reviews">
            <h2>Reviews</h2>
            {reviews.map((item) => {
              return (
                <div className="reviewsWrapper" key={item.id}>
                  <h5>{item.author} </h5>
                  <p>{item.content}</p>
                  <span>{FormatDate(item.created_at)}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
