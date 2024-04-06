import { createContext, useState, useContext } from "react"
import PropTypes from "prop-types"

const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
  const [likedMovies, setLikedMovies] = useState({})
  const [userName, setUserName] = useState("")
  const [popularMovies, setPopularMovies] = useState([])

  const handleLike = (movieId) => {
    setLikedMovies((prevMovies) => ({
      ...prevMovies,
      [movieId]: !prevMovies[movieId],
    }))
  }

  return (
    <MovieContext.Provider
      value={{
        likedMovies,
        userName,
        setUserName,
        handleLike,
        popularMovies,
        setPopularMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

MovieProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
export const useMovieContext = () => useContext(MovieContext)
