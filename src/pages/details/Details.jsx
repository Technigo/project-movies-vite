import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BackButton } from "../../components/backButton/BackButton.jsx";
import { DetailImage } from "../../components/detailImage/DetailImage.jsx";
import { RatingTag } from "../../components/ratingTag/RatingTag.jsx";
import { HeadingH3 } from "../../components/typography/headingH3/HeadingH3.jsx";
import { Paragraph } from "../../components/typography/paragraph/Paragraph.jsx";
import { PageNotFound } from "../../pages/404-error/PageNotFound.jsx";

import "./details.css";

const API_KEY = import.meta.env.VITE_MOVIEDB_KEY;
const URL_START = "https://api.themoviedb.org/3/movie/";

export const Details = () => {
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [movieFound, setMovieFound] = useState(true);
  // Get the "id" parameter from the URL using the "useParams" hook
  const { id } = useParams();

  const movieDetails = `${URL_START}${id}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    // Define a function to fetch movie details
    const fetchMovie = async () => {
      try {
        // Send a request to the movie details API using the "id" and API key
        const response = await fetch(movieDetails);
        // Check if the response status is OK, otherwise throw an error
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the response JSON data and set it to the "detail" state
        const data = await response.json();
        console.log(data);
        setDetail(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setIsLoading(false);
        setMovieFound(false);
      }
    };

    // Call the fetchMovie function when the component mounts or when "id" changes
    // The "id" parameter is included as a dependency in the array to trigger a re-fetch, useEffect will be called when "id" changes.
    fetchMovie();
  }, [movieDetails]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (!movieFound) {
    return <PageNotFound />;
  } else {
    const backgroundImage = `https://image.tmdb.org/t/p/w1280${detail.backdrop_path}`;
    return (
      <article className="detail-page">
        <BackButton text={"Movies"} />
        {/* Div that contains the background image, url and gradient is dynamically added here */}
        <div
          className="background"
          style={{
            backgroundImage: `linear-gradient(to bottom, #ffffff00, #000000), url(${backgroundImage})`,
          }}
        >
          <div className="detail-info-wrapper">
            <div className="detail-image-wrapper">
              <DetailImage
                url={`https://image.tmdb.org/t/p/w780/${detail.poster_path}`}
                altText={`Poster image of ${detail.title}`}
              />
            </div>
            <div className="detail-text-wrapper">
              <HeadingH3 className="detail-heading" text={detail.title} />
              <RatingTag rate={detail.vote_average} />
              <Paragraph className="detail-paragraph" text={detail.overview} />
            </div>
          </div>
        </div>
      </article>
    );
  }
};
