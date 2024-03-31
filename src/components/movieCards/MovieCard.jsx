import "./MovieCard.css"
import {Link} from "react-router-dom"


export const MovieCard = ({data}) => {
  const POSTER_URL = "https://image.tmdb.org/t/p/w342"
  return (
    <div>
      <Link to={`/movies/${data.id}`}>
      <img src={`${POSTER_URL}${data.poster_path}`} alt={data.title} />
      </Link>
      <div className="movie-title"> 
      MovieCard {data.title} Release date {data.release_date}
      </div>

      </div>
  )
}
