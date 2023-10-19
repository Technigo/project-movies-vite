import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MovieListCard.css";

// This is a functional component named MovieListCard. It takes in some properties related to a movie.
export const MovieListCard = ({ movieTitle, releaseDate, movieId, moviePoster }) => {

    // Initialize a state variable called isHovered with an initial value of false.
    // This will keep track of whether the mouse is hovering over the component.
    const [isHovered, setIsHovered] = useState(false);

    // This function is called when the mouse enters the component. It sets isHovered to true.
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // This function is called when the mouse leaves the component. It sets isHovered to false.
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // Function to handle touch start event (for mobile)
    const handleTouchStart = () => {
        setIsHovered(true);
    };
    // Function to handle touch end event (for mobile)
    const handleTouchEnd = () => {
        setIsHovered(false);
    };


    // The component renders a Link, which is like a clickable link that navigates to a specific URL.
    /* Hover Effect and State Changes:
    The isHovered state is initially set to false using useState(false).
    When the mouse enters the article (.movie-list-card), onMouseEnter event is triggered, calling handleMouseEnter function.
    handleMouseEnter sets isHovered to true.
    This state change triggers a re-render of the component.
    Elements inside the article that use the visible CSS class will now apply their styles because isHovered is true.
    Conversely, when the mouse leaves the article, onMouseLeave event triggers handleMouseLeave function.
    handleMouseLeave sets isHovered to false using setIsHovered(false).
    This state change triggers another re-render of the component.
    Elements inside the article that use the hidden CSS class will now apply their styles because isHovered is false.
    Placing the hover event handlers (onMouseEnter and onMouseLeave) on the article (.movie-list-card) ensures that the hover effect is triggered when the mouse is over any part of the article.
    */
    return (
        <Link to={`/movies/${movieId}`} ariaLabel={`View details for ${movieTitle}`}>
            <article
                className={`movie-list-card `}
                onMouseEnter={handleMouseEnter}  // When the mouse enters, call handleMouseEnter function
                onMouseLeave={handleMouseLeave}  // When the mouse leaves, call handleMouseLeave function
                onTouchStart={handleTouchStart}  // onTouchStart is an event handler that triggers when a user touches an element on a touch-enabled device (like a smartphone or tablet).
                onTouchEnd={handleTouchEnd}  // onTouchEnd is an event handler that triggers when a touch ends (i.e., when the user removes their finger after touching an element).
            >
                <img
                    src={`https://image.tmdb.org/t/p/w780/${moviePoster}`}
                    alt={movieTitle}
                />
                <div className="info-container">
                    {/* Display the movie title. If isHovered is true, it's visible; otherwise, it's hidden. */}
                    <h1 className={`title ${isHovered ? 'visible' : 'hidden'}`}>
                        {movieTitle}
                    </h1>
                    {/* Display the movie release year. If isHovered is true, it's visible; otherwise, it's hidden. */}
                    <p className={`release-year ${isHovered ? 'visible' : 'hidden'}`}>
                        Released {releaseDate}
                    </p>
                </div>
            </article>
        </Link>
    );
};
