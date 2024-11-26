/* eslint-disable */

/** 
 * This component shows a list of movie titles. 
 * 
 * It gets an array of movie objects as a prop from the ApiFetcherToken and/or ApiFetcherKey, and goes through each movie (using map), and displays its original title in a list.
 * 
 * Each item in the list has a unique key based on the movie's ID.
 * 
 * */

import Image from "../components/Image";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <ul className="movie-container">
      {movies
        .filter((movie) => movie.backdrop_path) // Only show movies that has an image
        .map((movie) => (
        <li className="movie-card" key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <div className="movie-art-container">
              <Image
                className="movie-art"
                path={movie.backdrop_path}
                size="w780"
                alt={`Cover for ${movie.title}`}
              />
              <div className="movie-text-container">
                <h2 className="movie-title">{movie.original_title}</h2>
                <p className="movie-release-date">{`Release date: ${movie.release_date}`}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
