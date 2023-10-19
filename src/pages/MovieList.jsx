import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import { Oval } from "react-loader-spinner"
export const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    // const [loading, setLoading] = useState(false)
    const API_KEY = "d702e384b1621c01acd5bc0e04a75981"


    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`)
            .then(response => response.json())
            .then(data => {
                const results = data.results
                console.log(results)
                setMovieList(results)
            })
            .catch(err => console.error(err));
    }, [])

    return (

        <div>
            {/* <Oval
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
            /> */}
            <div>
                {movieList.map((movie, index) => {
                    return (
                        <Link to={`/movie/${movie.id}`} key={index}>
                            <img src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="" />
                            <p>{movie.id}</p>
                        </Link>

                    )
                })}
            </div>
        </div>
    )
}


// /3/movie/popular