import { useEffect, useState } from "react"
import style from "./moviedetails.modules.css"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"

export const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState([])
    const { id } = useParams()

    // API KEY passed into the API URL
    const api_key = "624685d1a2da244d659c85520d6ee611"
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`

    console.log("Movie ID from params:", id)
    // Function to fetch the API - MovieDetails
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error("Network Response Error")
                }
                const json = await response.json()
                setMovieDetails([json])
                console.log(json.results)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchMovieDetails()
    }, [id])

    if (!movieDetails) {
        return <div className={style.loading}>Loading...</div>;
    }

    return (
        <div>
            <div>
                <NavLink to={`/`}><h2>Movie List</h2></NavLink>
            </div>
            <h1>Movie Details</h1>
            {movieDetails && (
                <div>

                    <div>
                        {movieDetails.map((movie) => (
                            <div key={movie.id}>
                                <img className={style.backgroundImage}
                                    src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} />
                                <div className={style.movieSummary}>
                                    <img className={style.movieImage}
                                        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
                                    <h2>{movie.title}</h2>
                                    <div className={style.movieInfo}>
                                        <p>Release Date: {movie.release_date}</p>
                                        <p>Overview: {movie.overview}</p>
                                        <p>Popularity: {movie.popularity}</p>
                                        <p>Vote Average: {movie.vote_average}</p>
                                        <p>Vote Count: {movie.vote_count}</p>
                                        <p>Original Language: {movie.original_language}</p>
                                        <p>Original Title: {movie.original_title}</p>
                                        <p>Genre: {movie.genre_ids}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
            }
        </div >
    )
}
