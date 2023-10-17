import { useEffect, useState } from "react";
import style from "./movielist.modules.css"

const api_key = "624685d1a2da244d659c85520d6ee611";
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;



export const MovieList = () => {
    const [allmovies, setAllmovies] = useState([])

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setAllmovies(data);
                console.log(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);



    return (
        <div>
            <h1>Movie List</h1>
            <div className={style.movieList}>
                {allmovies.map((movie) => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};






