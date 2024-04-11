import { useParams, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Reviews } from '../components/Reviews'
import '../stylesheets/movieDetails.css'
const API_KEY = '29adee7b64b906cf77014bb38ac8dd58'

export const MediaDetails = ({ type }) => {
  const { id } = useParams()
  const [details, setDetails] = useState(null)
  const [reviews, setReviews] = useState([])

  const isSeries = type === 'series'
  // fetch inside useEffect , set response to useState()
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${
      isSeries ? 'tv' : 'movie'
    }/${id}?api_key=${API_KEY}&language=en-US`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
      })
      .catch((error) => console.log(error))
  }, [id, isSeries])
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${
      isSeries ? 'tv' : 'movie'
    }/${id}/reviews?api_key=${API_KEY}&language=en-US`
    fetch(url)
      .then((res) => res.json())
      .then((review) => setReviews(review.results))
  }, [id, isSeries])
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
              alt={details.title || details.name}
            />
            <div className="details">
              <h2>
                <span className="title">{details.title}</span>
                <span className="rating">
                  ⭐{details.vote_average.toFixed(1)}
                </span>
                {isSeries && (
                  <NavLink to={`/tv/${id}/seasons`}>
                    <h5 className="seasonsCount">
                      {details.seasons.length} Seasons →
                    </h5>
                  </NavLink>
                )}
              </h2>
              <p>{details.overview}</p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews⭐</h2>
            {reviews.length > 0 ? (
              reviews.map((item) => (
                <Reviews
                  key={item.id}
                  author={item.author}
                  content={item.content}
                  created_at={item.created_at}
                />
              ))
            ) : (
              <h2>No reviews yet!</h2>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
