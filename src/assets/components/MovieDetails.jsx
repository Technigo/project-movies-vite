import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "./BackButton";

export const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const { id } = useParams(); // Get 'id' from URL params
  const apiEnv = "b4648009c1cb0a7e8f565388d787eb75";
  // const apiEnv = import.meta.env.VITE_OPENDB_KEY; try to hide api key
  const API = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiEnv}&language=en-US&page=1`

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovieDetail(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovieDetails();
  }, [API, id]);

  if (!movieDetail) {
    return <div>Loading...</div>;
  }

  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    overview,
    vote_average,
    vote_count,
  } = movieDetail;

  return (
    <div
      className="movie-details"
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original/${backdrop_path})`,
      }}
    >
      <BackButton />
      <div className="info-container">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
          />
        </div>
        <div className="details-container">
          <span> <h2>
            {title}</h2> <h3 className="score">⭐ {vote_average.toFixed(1)}
            </h3><p className="number-of-votes">Total votes:{vote_count}</p>
         </span>
          <p className="released">Released: {release_date.split("-").reverse().join("/")}</p>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};
