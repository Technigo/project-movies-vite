import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styling/displaymovie.css";

export const DisplayMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = import.meta.env.VITE_MY_API_KEY;
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    setLoading(true);
    fetch(`${baseURL}/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        if (!response.ok) throw new Error("Movie not found");
        return response.json();
      })
      .then((data) => {
        setMovie(data);
        setError(false);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const backButton = () => {
    navigate("/");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: Movie not found.</p>;
  }

  return (
    <div
      className="MovieContainer"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 100%),url(http://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
      }}
    >
      <button className="back-button" type="button" onClick={backButton}>
        <img
          width="32"
          height="32"
          src="https://cdn.glitch.global/b7fc725b-f734-44d3-a7ec-11457f9b7762/icons8-backwards-32.png?v=1697536318888"
          alt="Go back"
        />
        <span className="back-text">Back</span>
      </button>

      <div className="textContainer">
        <img
          className="MoviePoster"
          src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
          alt={`Poster of ${movie.title}`}
          onError={(e) => (e.target.src = "https://via.placeholder.com/342x500?text=No+Image")}
        />
        <div className="infoContainer">
          <div className="titleRatingContainer">
            <h1>{movie.title}</h1>
            <p className="average">⭐️{Math.round(movie.vote_average * 10) / 10}</p>
          </div>
          <div className="movieDescription">
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
