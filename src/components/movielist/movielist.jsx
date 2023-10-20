import { useEffect, useState } from "react"
import style from "./movielist.module.css"
import { NavLink } from "react-router-dom"

// API KEY passed into the API URL
const api_key = "624685d1a2da244d659c85520d6ee611";
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

// Function to export the component
export const MovieList = () => {
    const [allmovies, setAllmovies] = useState([]);
    // error 2 useState []

    // Function to fetch the API - MovieList
    useEffect(() => {
        const fetchMoviesList = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Network Response Error")
                }
                const json = await response.json()
                //    error3 only json --> json.results
                setAllmovies(json.results)
                console.log(json.results)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchMoviesList()
    }, [])

    // Render the API data to be displayed on the page
    return (
        <div className={style.listHeader}>
            <h1>Movie List</h1>

            <div className={style.listContainer}>

                <div className={style.movieList}>
                    {allmovies.map((movie) => (
                        <div key={movie.id}>
                            <NavLink to={`/movie/${movie.id}`}>
                                <div className={style.movieItem}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
                                    <div className={style.movieInfo}>
                                        <h2>{movie.title}</h2>

                                        {/* <p>Release Date: {movie.release_date}</p> */}

                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}