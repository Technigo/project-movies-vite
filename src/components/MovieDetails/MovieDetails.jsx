import "./MovieDetails.css";
import { BackButton } from "../BackButton/BackButton";
import { IoIosStar } from "react-icons/io";

export const MovieDetails = ({ movieDetails }) => {
  console.log("Movie Details showing", movieDetails);

  // Destructure specific properties from the movieDetails-object
  const { title, overview, vote_average, backdrop_path, poster_path } =
    movieDetails;

  // Define the background image for the movieinfo-page.
  const imageBackground = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
  };

  return (
    <article className="movie-details-card">
      {/* Render the Back component for navigation */}
      <BackButton />
      <div className="background-image" style={imageBackground}>
        <div className="movie-details-summary">
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            alt={title}
          />
          <div className="movie-details">
            <h1>
              <span className="movie-title">{title}</span>
              <span className="movie-rating">
                {/* Import star from react icons-library */}
                <IoIosStar />
                {vote_average}
              </span>
            </h1>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

//You need to construct a URL using the secure_base_url + size + path from the API response.

//https://image.tmdb.org/t/p/w300/`${poster_path}`

/*
Inne på ett kort är det följande: 
div class=background, w1280:
För summary-div:en är det image size 342 https://image.tmdb.org/t/p/w1280${movie.backdrop_path}, för summary-bilden: w342*/
