import { Link } from "react-router-dom"
import "./FilmCard.css"


export const FilmCard = ({poster, title, overview, id}) => {
  return (
    <div className="film-card">
        <div className="film-card-text-wrap">
          <h2 className="title">{title}</h2>
          <p className="overview">{overview}</p>
          <Link to={`/film-page/${id}`}>
          <div className="arrows">
            <Link className="link-film-card" to={`/film-page/${id}`}></Link>
            <Link className="link-film-card" to={`/film-page/${id}`}></Link>
            <Link className="link-film-card" to={`/film-page/${id}`}></Link>
          </div>
          </Link>
        </div>
        <img className="film-img" src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
    </div>
  )
}
