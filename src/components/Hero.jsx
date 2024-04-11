import '../stylesheets/hero.css'
import { useEffect, useState } from 'react'
import { formatDate } from '../utils/formatDate'
const API_KEY = '29adee7b64b906cf77014bb38ac8dd58'
// https://api.themoviedb.org/3/movie/upcoming
export const Hero = () => {
  const [comingsoon, setComingSoon] = useState([])
  const [randomMovie, setRandomMovie] = useState(null)

  const pickRandomMovie = (movies) => {
    if (movies.length === 0) return
    const randomIndex = Math.floor(Math.random() * movies.length)
    setRandomMovie(movies[randomIndex])
  }
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setComingSoon(data.results)
        pickRandomMovie(data.results)
      })
      .catch((error) => console.log(error))
  }, [])
  useEffect(() => {
    // pick different movie every 30 sec
    const interval = setInterval(() => {
      pickRandomMovie(comingsoon)
    }, 30000)
    // clear interval on unmount
    return () => clearInterval(interval)
  }, [comingsoon])
  return (
    <>
      {randomMovie && (
        <header
          style={{
            backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.363)70%,
              rgba(0, 0, 0, 0.363)100%
            ),url("https://image.tmdb.org/t/p/w1280${randomMovie.backdrop_path}") `,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <img className="logoImg" src="../log-noback.png" alt="logo" />

          <div className="summary">
            <div className="comingSoonWrapper">
              <h2>Coming soon</h2>
              <img src="/coming-soon.png" className="comingSoonIcon" />
            </div>

            <h1>{randomMovie.title}</h1>
            <span> First Release {formatDate(randomMovie.release_date)}</span>
            <p>{randomMovie.overview}</p>
            <span>⭐{randomMovie.vote_average.toFixed(1)}</span>
          </div>
        </header>
      )}
    </>
  )
}
