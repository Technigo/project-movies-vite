import { useParams } from "react-router-dom"
import "./Genres.css"
import { Listing } from "../listing/Listing"

export const Genres = () => {
  const params = useParams()
  // console.log("params", params)
  return (
    <>
      <article>
        <h1>Genre</h1>
        <p>{params.genreId}</p>
      </article>
      <Listing genreId={params.genreId} />
    </>
  )
}
