const API_KEY = '29adee7b64b906cf77014bb38ac8dd58'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FormatDate } from '../utils/FormatDate'
import '../stylesheets/movieList.css'

export const SeasonList = () => {
  const { series_id } = useParams()
  const [seasons, SetSeasons] = useState([])
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${series_id}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        SetSeasons(data.seasons)
      })
  })
  return (
    <>
      <main>
        {/* display desired data for each movie */}
        {seasons.map((season) => {
          return (
            <div className="cardsWrapper" key={season.id}>
              {/* this is like an <a> tag that it's linked to the precised path */}
              <Link to={`/tv/${series_id}/season/${season.season_number}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w342${season.poster_path}`}
                  alt={season.name}
                />
                <div className="info">
                  <h2>{season.name}</h2>
                  <p>Released on: {FormatDate(season.air_date)}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </main>
    </>
  )
}
