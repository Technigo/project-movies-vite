import { useEffect, useState } from "react"
import { useMovieContext } from "../components/MovieContext"
import { useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"
import "./likedMoviesPage.css"

const LikedMoviesPage = () => {
  const { likedMovies, userName, popularMovies } = useMovieContext()
  const navigate = useNavigate()

  const [localLikedMovies, setLocalLikedMovies] = useState(likedMovies)

  useEffect(() => {
    localStorage.setItem("likedMovies", JSON.stringify(likedMovies))

    const savedLikedMovies = JSON.parse(localStorage.getItem("likedMovies"))

    setLocalLikedMovies(savedLikedMovies)

    if (!userName) {
      navigate("/login")
    }
  }, [userName, likedMovies, navigate])

  console.log(localLikedMovies)

  const likedMovieTitles = Object.entries(localLikedMovies)
    .filter(([movieId, isLiked]) => isLiked)
    .map(([movieId, _]) => {
      if (popularMovies && popularMovies.length > 0) {
        const movie = popularMovies.find(
          (movie) => movie.id.toString() === movieId
        )
        return movie ? movie.title : null
      }
      return null
    })
    .filter((title) => title !== null)

  console.log(likedMovieTitles)

  return (
    <>
      <Navigation />
      <div className="liked-container">
        <h2>Your Liked Movies:</h2>
        <ul>
          {likedMovieTitles.map((title, index) => (
            <li style={{ color: "white" }} key={index}>
              {title}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default LikedMoviesPage
