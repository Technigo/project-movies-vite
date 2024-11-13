import { Link } from "react-router-dom"

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  return (
    <Link to={`/movie/${id}`}>
      <article>
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title}
        />
        <div>
          <p>Released {release_date}</p>
        </div>
      </article>
    </Link>
  )
}