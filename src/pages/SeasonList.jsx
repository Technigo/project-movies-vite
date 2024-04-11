const API_KEY = '29adee7b64b906cf77014bb38ac8dd58'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { formatDate } from '../utils/formatDate'

import '../stylesheets/movieList.css'

export const SeasonList = () => {
  const { id } = useParams()
  const [seasons, setSeasons] = useState([])
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setSeasons(data.seasons)
      })
  }, [])
  return (
    <>
      <main>
        {/* display desired data for each movie */}
        {seasons.map((season) => {
          return (
            <div className="cardsWrapper" key={season.id}>
              {/* this is like an <a> tag that it's linked to the precised path */}
              <Link to={`/tv/${id}/season/${season.season_number}`}>
                <img
                  src={
                    season.poster_path
                      ? `https://image.tmdb.org/t/p/w342${season.poster_path}`
                      : `/notfound.jpg`
                  }
                  alt={season.name || 'No image available'}
                />

                <div className="info">
                  <h2>{season.name}</h2>
                  <p>Released on: {formatDate(season.air_date)}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </main>
    </>
  )
}
