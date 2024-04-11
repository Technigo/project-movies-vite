const API_KEY = '29adee7b64b906cf77014bb38ac8dd58'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { formatDate } from '../utils/formatDate'
import { Hero } from '../components/Hero'
import '../stylesheets/movieList.css'
let linkUrl = ''
export const MovieList = () => {
  const [list, setList] = useState([])
  const location = useLocation()
  useEffect(() => {
    let apiUrl = ''
    // fetch api using useEffect() and update the list with useState then rander with link, I added a conditional to fecth from different APIs checking the location-path
    if (location.pathname === '/') {
      apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      linkUrl = `/movie/`
    } else if (location.pathname === '/movie/top-rated') {
      apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      linkUrl = `/movie/`
    } else if (location.pathname === '/tv/popular') {
      apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
      linkUrl = `/tv/`
    }
    if (apiUrl !== '') {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          // get the array and update list state
          setList(data.results)
        })
        .catch((error) => console.log(error))
    }
  }, [location.pathname])

  return (
    <>
      <Hero />
      <main>
        {/* display desired data for each movie */}
        {list.map((movie) => {
          return (
            <div className="cardsWrapper" key={movie.id}>
              {/* this is like an <a> tag that it's linked to the precised path */}
              <Link to={`${linkUrl}${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="info">
                  {/* series have a slighty different keys in the JSON file used || operator */}
                  <h2>{movie.title || movie.name}</h2>
                  <p>
                    Released on:{' '}
                    {formatDate(movie.release_date || movie.first_air_date)}
                  </p>
                </div>
              </Link>
            </div>
          )
        })}
      </main>
    </>
  )
}
