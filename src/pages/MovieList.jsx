// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { Oval } from "react-loader-spinner"
// export const MovieList = () => {
//     const [movieList, setMovieList] = useState([])

//     const API_KEY = 


//     useEffect(() => {

//         fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`)
//             .then(response => response.json())
//             .then(data => {
//                 const results = data.results
//                 console.log(results)
//                 setMovieList(results)
//             })
//             .catch(err => console.error(err));
//     }, [])

//     return (


//                 {movieList.map((movie, index) => {
//                     return (
//                         <Link to={`/movie/${movie.id}`} key={index}>
//                             <img src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="" />
//                             <p>{movie.id}</p>
//                         </Link>

//                     )
//                 })}
//             </div>
//         </div>
//     )
// }


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner"
import '../styling/movieList.css';
export const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(false)
    const apiEnv = import.meta.env.VITE_OPENDB_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=`)
            .then(response => response.json())
            .then(data => {
                const results = data.results;
                setMovieList(results);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [apiEnv]);
    return (
        <div>
            <div>
                {loading && (<Oval
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
                )
                }
            </div>
            {!loading && (
                <div>
                    {movieList.map((movie, index) => {
                        return (
                            <Link to={`/movie/${movie.id}`} key={index} className="movie-item">
                                <div className="movie-image-container">
                                    <img
                                        src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                                        alt=""
                                        className="movie-image"
                                    />
                                    <div className="movie-title-overlay">
                                        <div className="movie-title">{movie.title}</div>
                                        <div className="movie-release-date">Release {movie.release_date}</div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )
            }
        </div>
    );
};