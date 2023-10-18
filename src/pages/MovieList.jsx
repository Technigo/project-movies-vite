import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Oval } from "react-loader-spinner"
export const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    // const [loading, setLoading] = useState(false)
    const API_KEY = "d702e384b1621c01acd5bc0e04a75981"


    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMovieList(data)
            })
            .catch(err => console.error(err));
    })

    return (

        <div>
            <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />

            {movieList.map((movie, index) => {
                <Link to={`/movies/${movie.id}`} key={index}>

                </Link>
            })}

        </div>
    )
}

// /3/movie/popular