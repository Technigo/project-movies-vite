import "./FilmCard.css"

export const FilmCard = ({poster, title, overview}) => {
  return (
    <div className="film-card">
      <div className="film-card-text-wrap">
        <h2 className="title">{title}</h2>
        <p className="overview">{overview}</p>
      </div>
      <img className="film-img" src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
    </div>
  )
}
