/* eslint-disable no-undef */

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Poster } from "../components/Poster";
import { Description } from "../components/Description";
import { Background } from "../components/Background";
import { BackArrow } from "../components/BackArrow";
import { NotFound } from "./NotFound";

import "./MovieDetails.css";

export const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const { movie_id } = useParams();
  const apiEnv = import.meta.env.VITE_OPENDB_KEY;
  const API_LANG = "en-US";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiEnv}&language=${API_LANG}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Movie details not found");
        }
      })
      .then((data) => setDetails(data))
      .catch((error) => {
        console.error("Error fetching details:", error);
        setNotFound(true); // Set notFound state to true
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie_id]);

  // If details are not found, return notFound page
  if (notFound) {
    return <NotFound />;
  }

  // If details are not loaded yet, show loading message
  if (!details || Object.keys(details).length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <section className="detailContainer">
      <Background backdrop_path={details.backdrop_path} title={details.title} />

      <BackArrow />
      <div className="summary">
        <Poster
          poster_path={details.poster_path}
          title={details.title}
          imageClass={"detailImage"}
        />

        <Description
          movieName={details.title}
          vote={details.vote_average}
          overview={details.overview}
        />
      </div>
    </section>
  );
};
