import { useNavigate, useParams } from "react-router-dom";
import "./singlemovie.css";
import { useEffect, useState } from "react";

export default function SingleMovie() {
  const { id } = useParams();
  console.log(id);
  // Use the `id` to make API call and fetch details of the single movie
  // Store movie details in state and render them
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //Make API call to fetch movie details using "id"
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=45808b94c818eebf69530d0b48e42b20`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Set mmovie details in state
        setMovie(data);
      })
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  const backButton = () => {
    navigate("/");
  };

  return (
    <div
      className="background"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%),url(http://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
      }}
    >
      <button className="back-button" type="button" onClick={backButton}>
        <img
          width="32"
          height="32"
          src="/back-arrow.png"
          alt="backwards-arrow"
        />
        <span className="back-text">Movies</span>
      </button>

      <div className="summary">
        <img
          className="movie-poster"
          src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
          alt={`Poster of ${movie.title}`}
        />
        <div className="details">
          <div className="rating">
            <h1>{movie.title}</h1>
            <p className="average">
              ⭐️{Math.round(movie.vote_average * 10) / 10}
              {/* this expression calculates and rounds the average vote rating of a movie to one decimal. movie.vote_average: This part accesses the vote_average property of the movie object.  */}
            </p>
          </div>
          <div className="movie-description">
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
This route expects a movie ID in the URL and is responsible for showing more details about a movie after you click on it. It uses `useParams` from `react - router - dom` to get the `id` from the URL and then passes that into an API call (within `useEffect`) to themoviedb.org to fetch details about a single movie, then puts the response into state using `useState` and finally renders it onto the page. */
