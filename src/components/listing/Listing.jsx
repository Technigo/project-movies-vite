import { useEffect, useState } from "react"
import "./Listing.css"
import { MovieCard } from "../movieCards/MovieCard"

export const Listing = () => {
  const [results, setResults] = useState()
  const API_KEY = "581a97ea9ebd9cf581e85b49251999f8"
  const API_LANG = "en-US"

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${API_LANG}&page=1`
        )
        if (!response.ok) {
          throw Error("Something wrong with the fetch")
        }
        const data = await response.json()
        setResults(data.results)
      } catch (error) {
        console.error("Error", error)
      }
    }

    fetchMovie()
  }, [])

  return (
    <section>
      {results && results.map(movie => {
        console.log(movie)
        return <MovieCard key={movie.id} data={movie} />
      })}
    </section>
  )
}
