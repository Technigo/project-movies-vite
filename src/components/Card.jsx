/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Poster } from "../components/Poster";
import "../pages/MovieList.css";
import { useState } from "react";

export const Card = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const hanldeMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Link to={`/movie/${movie.id}`}>
      <div
        onMouseOver={handleMouseOver}
        onMouseLeave={hanldeMouseLeave}
        className="card"
      >
        <Poster
          poster_path={movie.poster_path}
          title={movie.title}
          imageClass={"mainImage"}
        />

        {isHovered && (
          <div className="info">
            <h1>{movie.title}</h1>
            <p>Released: {movie.release_date}</p>
          </div>
        )}
      </div>
    </Link>
  );
};
