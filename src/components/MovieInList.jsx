/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./MovieInList.css"

export const MovieInList = ({ title, poster, release, id }) => {
    
    const imageBaseUrl = "https://image.tmdb.org/t/p/"
    const imageSize = "w780"
    const imageUrl = imageBaseUrl + imageSize + poster
    
    return <div className="a-movie">
        <Link className="the-link" to={`/info/${id}`}>
            <img className="poster" src={imageUrl} alt={`Poster for ${title}`} />
            <div className="movie-text-container">
                <h4 className="movie-list-title">{title}</h4>
                <h6 className="movie-list-release">{`Release: ${release}`}</h6>
            </div>
        </Link>
    </div>
}