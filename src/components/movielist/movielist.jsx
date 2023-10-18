import { useEffect, useState } from "react"
import style from "./movielist.modules.css"

// API KEY passed into the API URL
const api_key = "624685d1a2da244d659c85520d6ee611";
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

// Function to export the component
export const MovieList = () => {
    const [allmovies, setAllmovies] = useState([]);

    // Function to fetch the API - MovieList
    useEffect(() => {
        const fetchMoviesList = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Network Response Error");
                }
                const json = await response.json()
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
        <div>
            <h1>Movie List</h1>
            <div className={style.movieList}>
                {allmovies.map((movie) => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>Release Date: {movie.release_date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}