import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const { id } = useParams(); // Get 'id' from URL params

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=b4648009c1cb0a7e8f565388d787eb75&language=en-US`
        );
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
  }, [id]);

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
  } = movieDetail;

  return (
    <div
      className="movie-details"
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original/${backdrop_path})`,
      }}
    >
      <div className="info-container">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
          />
        </div>
        <div className="details-container">
          <h2>
            {title} ⭐ {vote_average.toFixed(1)}
          </h2>
          <p>Released: {release_date}</p>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};
