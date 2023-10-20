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
                    height={100}
                    width={100}
                    color="#4fa94d"
                    wrapperStyle={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10%"
                    }}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#4fa94d"
                    strokeWidth={5}
                    strokeWidthSecondary={3}
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