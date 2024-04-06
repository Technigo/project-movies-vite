import { useParams } from "react-router-dom"
import "./Genres.css"
import { Listing } from "../listing/Listing"
import genreJson from "../../data/genre-descriptions.json"

export const Genres = () => {
  const { genreId } = useParams()
  const genre = genreJson.genres.find(
    genre => genre.id == genreId || genre.id == 0
  )

  return (
    <>
      <article>
        <h1 className="title">{genre.name}</h1>
        <p className="desc">{genre.description}</p>
      </article>
      <Listing
        genreId={genreId}
        genre={genre.name}
      />
    </>
  )
}
