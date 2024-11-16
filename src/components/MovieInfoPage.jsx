// MovieInfoPage.jsx

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./MovieInfoPage.css";

export const MovieInfoPage = ({
  background,
  poster,
  title,
  rating,
  overview
}) => {
  return (
    <>
      <article
        className="background"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="background-style">
          <Link to="/" className="back-link">
            <FontAwesomeIcon icon={faCircleArrowLeft} className="back-icon" />
            Movies
          </Link>
          <div className="movie-container">
            <img src={poster} alt={title} />
            <div className="movie-info">
              <h1><span className="title">{title}</span><span className="rating"><FontAwesomeIcon icon={faStar} className="star-icon" />{rating.toFixed(1)}</span></h1>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};