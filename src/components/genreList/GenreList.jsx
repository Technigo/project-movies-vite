import "./GenreList.css"
import { Link, NavLink } from "react-router-dom"

export const GenreList = ({ genreArray, n }) => {
  return (
    <ul className="genre-list">
      {genreArray.map(genre => {
        return (
          <li
            key={genre.id}
            className="genre">
            {n ? (
              <NavLink to={`/genre/${genre.id}`}>{genre.name}</NavLink>
            ) : (
              <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}
