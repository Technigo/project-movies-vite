/*This route expects a movie ID in the URL 
and is responsible for showing more details 
about a movie after you click on it. 

It uses useParams from react-router-dom 
to get the id from the URL and then passes 
that into an API call (within useEffect) to 
themoviedb.org to fetch details about a 
single movie, then puts the response into state 
using useState and finally renders it onto the page.

rating: vote_average
name: title
description: overview
posterimg: poster_path
backdrop: backdrop_path
*/

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { IoIosArrowDropleftCircle } from "react-icons/io"
import { IoStar } from "react-icons/io5"
import "./MovieDetails.css"

const API_KEY = "2bd2e4cabf6e3176951e947b95e23dd9"

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState()

  const params = useParams()
  const movieId = params.slug
  const movieURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`

  useEffect(() => {
    const fetchMovieDetails = () => {
      fetch(movieURL)
        .then((response) => {
          if (!response.ok) {
            if (response.status === 404) {
              throw new Error("Movie not found")
            } else {
              throw new Error("Failed fetching movie")
            }
          }
          return response.json()
        })
        .then((json) => {
          setMovieDetails(json)
        })
        .catch((error) => console.error("Error fetching movies:", error))
    }

    fetchMovieDetails()
  }, [movieURL])

  if (!movieDetails) {
    return <div>Loading...</div>
  }

  /*rating: vote_average
name: title
description: overview
posterimg: poster_path
backdrop: backdrop_path
*/

  return (
    <div className="detail-page">
      <Link to={"/"}>
        <div className="back-arrow">
          <IoIosArrowDropleftCircle className="back-icon" />
          Back to all movies
        </div>
      </Link>
      <div
        className="background"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0) 70%, rgba(0,0,0) 100%), url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="details-container">
          <div className="poster-container">
            <img
              className="detail-poster"
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={`Movie poster for ${movieDetails.title}`}
            />
          </div>
          <div className="text-container">
            <h1 className="title-and-rating">
              <span className="title">{movieDetails.title}</span>
              <span className="rating">
                <IoStar className="rating-icon" />
                {movieDetails.vote_average.toFixed(1)}
              </span>
            </h1>
            <p className="summary">{movieDetails.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
