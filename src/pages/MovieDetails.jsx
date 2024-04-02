/* eslint-disable no-undef */
//second page
//background, description, poster, back arrow
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Poster } from "../components/Poster";
import { Description } from "../components/Description";
import { Background } from "../components/Background";
import { BackArrow } from "../components/BackArrow";

import "./movieDetails.css";

export const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { movie_id } = useParams();

  const API_KEY = "f34e76ca0c4c61e8906dd3e22b0fe2af";
  const API_LANG = "en-US";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=${API_LANG}`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error("Error fetching details:", error));
  }, [movie_id]);

  if (!details) return <p>Loading...</p>;

  return (
    <div>
      <BackArrow />
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
      <Background backdrop_path={details.backdrop_path} title={details.title} />
    </div>
  );
};
