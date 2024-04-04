import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Backbutton } from "../components/Backbutton";
import { Loading } from "./Loading";
import PropTypes from "prop-types";
import "./MovieDetails.css";
import { NotFound } from "./NotFound";

export const MovieDetails = () => {
  const { id } = useParams();
  const [detailsData, setDetailsData] = useState();
  const API_KEY = import.meta.env.VITE_MOVIEDB_KEY;
  const API_DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(API_DETAILS_URL)
      .then((result) => result.json())
      .then((json) => {
        setDetailsData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [API_DETAILS_URL]);

  if (!detailsData || detailsData === undefined) {
    return <Loading />;
  }

  if (detailsData.success === false) {
    return <NotFound />;
  }

  return (
    <div
      className="movie-details"
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1280_and_h720_multi_faces/${detailsData.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Backbutton />
      <img
        className="details-img"
        src={`https://image.tmdb.org/t/p/w342/${detailsData.poster_path}`}
        alt={detailsData.title}
      ></img>
      <div className="details">
        <div className="title-box">
          <div>
            <h2 className="details-title">{detailsData.title}</h2>
            <h3 className="details-org-title">{detailsData.original_title}</h3>
          </div>
          <p className="details-rating">
            <span className="rating-star">⭐</span>
            {Math.round(detailsData.vote_average * 10) / 10}
          </p>
        </div>
        <p className="details-synopsis">{detailsData.overview}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  data: PropTypes.object,
};
