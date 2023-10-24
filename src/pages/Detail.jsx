import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { HomeButton } from "./HomeButton";
import "./detail.css";

export const Detail = () => {
  // State hook to store movie data
  const [movie, setMovie] = useState();

  // Get the 'id' parameter from the route
  const { id } = useParams();

  const apiEnv = import.meta.env.VITE_OPENDB_KEY;

  // Fetch movie data from an external API when the 'id' parameter changes
  useEffect(() => {
    // Fetch movie data from an external API using the 'id' parameter
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiEnv}&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        // Update the 'movie' state with the fetched data
        setMovie(json);
      });
  }, [id]);


  // Render the component
  return (
    <article className="detail-section">

      {/* Link back to the home page */}
      <Link to="/" className="back-button">
        <HomeButton /> Back to movies
      </Link>
      
      {movie && (
        <div
          className="backdrop"
          style={{
            // Set the background image using 'movie' data
            backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.84) 0%, rgba(255, 255, 255, 0.84) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
          }}
        >
          <div className="detail-wrapper">
            <img
              className="detail-poster"
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="detail-text-wrapper">
              <div className="title-rating-wrapper">
                <h1 className="detail-title">{movie.title} </h1>
                <div className="rating-box">
                  <h2 className="rating">
                    {Math.round(movie.vote_average * 10) / 10}
                  </h2>
                </div>
              </div>
              <p className="detail-overview">{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

