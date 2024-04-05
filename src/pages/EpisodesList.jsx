const API_KEY = '29adee7b64b906cf77014bb38ac8dd58'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FormatDate } from '../utils/FormatDate'
import '../stylesheets/movieList.css'

export const EpisodesList = () => {
  const { series_id } = useParams()
  const { season_number } = useParams()
  const [episodes, SetEpisodes] = useState([])
  const [episodeImg, setEpisodeImg] = useState([])
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${series_id}/season/${season_number}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        SetEpisodes(data.episodes)
      })
  })
  // I had to fetch again sam API since the JSON file dosn't contain images for episodes
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${series_id}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setEpisodeImg(data)
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <>
      <main>
        {/* display desired data for each movie */}
        {episodes.map((episode) => {
          return (
            <div className="cardsWrapper" key={episode.id}>
              <Link>
                <img
                  src={`https://image.tmdb.org/t/p/w342${episodeImg.poster_path}`}
                  alt={episode.name}
                />
                <div className="info">
                  <h2>Episode {episode.episode_number}</h2>
                  <p>Released on: {FormatDate(episode.air_date)}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </main>
    </>
  )
}
