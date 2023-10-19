import { useEffect, useState } from "react"
import style from "./moviedetails.module.css"
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
            <div className={style.backgroundContainer}>
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
                                    <div className={style.movieInfo}>
                                        <h2>{movie.title}</h2>
                                        <p className={style.vote}>Vote Average: {movie.vote_average}</p>
                                        <p className={style.Overview}>Overview: {movie.overview}</p>
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
