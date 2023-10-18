import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MovieListCard.css";  // Create a CSS file for styles

export const MovieListCard = ({ movieTitle, releaseDate, movieId, moviePoster }) => {

    // initializes a state variable isHovered with an initial value of false. This state will track whether the component is being hovered over.
    const [isHovered, setIsHovered] = useState(false);

    // This function sets isHovered to true when the mouse enters an element.
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    //This function sets isHovered to false when the mouse leaves an element.
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Link to={`/movies/${movieId}`}>
            <article
                className={`movie-list-card `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={`https://image.tmdb.org/t/p/w780/${moviePoster}`}
                    alt={movieTitle}
                />
                <div className="info-container">
                    <h1 className={`title ${isHovered ? 'visible' : 'hidden'}`}>
                        {movieTitle}
                    </h1>
                    <p className={`release-year ${isHovered ? 'visible' : 'hidden'}`}>
                        Released {releaseDate}
                    </p>
                </div>
            </article>
        </Link>
    );
};
