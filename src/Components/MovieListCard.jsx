import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MovieListCard.css";  // Create a CSS file for styles

export const MovieListCard = ({ movieTitle, releaseDate, movieId, moviePoster }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link to={`/movies/${movieId}`}>
            <article
                className={`movie-list-card ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
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
