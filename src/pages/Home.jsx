import { useState, useEffect } from "react"
import { MovieInList } from "../components/MovieInList"

import "./Home.css"

export const Home = () => {
    const [ movieList, setMovieList ] = useState()

    const apiKey = import.meta.env.VITE_OPENDB_KEY
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`

    const fetchFromAPI = () => {

        fetch(url)
        .then(response => response.json())
        .then(data => {setMovieList(data.results)})
        .catch((error) => console.log(error))

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(fetchFromAPI,[])

    return(
        <div className="the-app">
            {movieList ? 
                movieList.map(movie => (
                    <MovieInList 
                        key={movie.id} 
                        id={movie.id}
                        title = {movie.title}
                        poster = {movie.poster_path}
                        release = {movie.release_date}
                    />
                )) 
                : <p>Loading...</p>}
        </div>

    )
}