const API_KEY = '29adee7b64b906cf77014bb38ac8dd58'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export const MovieList = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    // fetch api using useEffect() and update the list with useState then rander with link
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        // get the array and update list state
        setList(data.results)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      {/* display desired data for each movie */}
      {list.map((movie) => {
        return (
          <div className="cardsWrapper" key={movie.id}>
            {/* this is like an <a> tag that it's linked to the precised path */}
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="info">
                <h1>{movie.title}</h1>
                <p>Released on: {movie.release_date}</p>
              </div>
            </Link>
          </div>
        )
      })}
    </>
  )
}
