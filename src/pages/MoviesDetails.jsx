import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Reviews } from '../components/Reviews'
import '../stylesheets/movieDetails.css'
const API_KEY = '29adee7b64b906cf77014bb38ac8dd58'

export const MoviesDetails = () => {
  const { movie_id } = useParams()
  const [details, setDetails] = useState(null)
  const [reviews, setReviews] = useState([])
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
  }, [])
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((review) => setReviews(review.results))
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
              <h2>
                <span className="title">{details.title}</span>
                <span className="rating">
                  ⭐{details.vote_average.toFixed(1)}
                </span>
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
