import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieCard.css";

export const MovieCard = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();

  const apiKey = "76898be6bb8657c4eadeb40367146dec";
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US&page=1`;

  const imageBaseUrl = "http://image.tmdb.org/t/p/";

  const fetchMovieDetails = () => {
    fetch(movieDetailsUrl)
      .then((response) => response.json())
      .then((movieData) => setMovieDetails(movieData))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <section
      className="background"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`,
      }}>
      <div className="movie-content-box">
        <img src={`${imageBaseUrl}w342${movieDetails.poster_path}`} alt={`a movie poster of ${movieDetails.title}`} />
        <div className="movie-info-box">
          <div>
            <h1>{movieDetails.title}</h1>
            <p>{movieDetails.genres && movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
          <div className="star-time-box">
            <p>⭐️ {movieDetails.vote_average}</p>
            <p>{movieDetails.runtime} min</p>
          </div>
          <p>{movieDetails.overview}</p>
          <p>Released {movieDetails.release_date}</p>
        </div>
      </div>
    </section>
  );
};

{
  /* <div class="background" style="background-image: linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(&quot;https://image.tmdb.org/t/p/w1280/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg&quot;);"><div class="summary"><img src="https://image.tmdb.org/t/p/w342/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg" alt="Kung Fu Panda 4"><div class="details"><h1><span class="title">Kung Fu Panda 4</span> <span class="rating">6.8</span></h1><p>Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.</p></div></div></div> */
}
