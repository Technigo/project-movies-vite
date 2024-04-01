import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const API_KEY = '29adee7b64b906cf77014bb38ac8dd58'
export const TopRatedMovies = () => {
  const [topRated, setTopRated] = useState([])
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setTopRated(data.results)
        console.log(data)
      })
  }, [])

  return (
    <>
      {/* display desired data for each movie */}
      {topRated.map((movie) => {
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

// fetch("
// https://api.themoviedb.org/3/movie/top_rated?api_key=29adee7b64b906cf77014bb38ac8dd58&language=en-US&page=1")
// to fetch top rated
