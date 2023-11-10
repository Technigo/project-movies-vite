import { Link } from "react-router-dom";
import "./moviesList.css";

export const MoviesList = (movies) => {
    const vApiKey = "3bb019d4b7aeaf767a2f2d36e7c42067";
    const imgBaseUrl = "https://image.tmdb.org/t/p/";
    const posterSize = "w185";
    const moviesListData = movies.data;
    const title = "Popular movie releases";
    console.log(moviesListData);

    return(
        <div className="movie-list-main-container">
            <h1>{title}</h1>
            <div className="movie-list-container">
                {moviesListData.map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <Link className="movie-link" to={`/movie/${movie.title.toLowerCase().replace(/ /g, "-")}`}>
                            <img src={`${imgBaseUrl}${posterSize}${movie.poster_path}`} alt={movie.title}/>
                            <div className="movie-list-card-texts">
                                <p className="movie-title">{movie.title}</p>
                                <p className="movie-release-date">Released {movie.release_date}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
