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

    // Render movie details //
    return (
        <div>
            {movieDetails && (
                <div>
                    {movieDetails.map((movie) => (
                        <div key={movie.id}>
                            <img className={style.backgroundImage}
                                src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} />
                            <div className={style.iconAndButton}>
                                <img className={style.arrow}
                                    src="./images/back-arrow-3095.svg" alt="Arrow" />
                                <NavLink to={`/`} className={style.backButton}>All Movies</NavLink>
                            </div>
                            <div className={style.movieSummary}>
                                <img className={style.movieImage}
                                    src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
                                <div className={style.movieInfo}>
                                    <h2>{movie.title}</h2>
                                    <div className={style.starAndVote}>
                                        <img src="./images/star.svg" alt="Star" />
                                        <p className={style.vote}>{movie.vote_average.toFixed(1)}</p>
                                    </div>
                                    <p className={style.Overview}>Overview: {movie.overview}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
            }
        </div >
    )
}
