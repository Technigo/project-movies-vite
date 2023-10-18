//API key: 8310ae58e125eac683c38e74d6f6a3aa
//API start: https://api.themoviedb.org/3/movie/
// DETAILS PAGE: https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BackButton } from "../../components/backButton/BackButton.jsx";
import { DetailImage } from "../../components/detailImage/DetailImage.jsx";
import { RatingTag } from "../../components/ratingTag/RatingTag.jsx";
import { HeadingH3 } from "../../components/typography/headingH3/HeadingH3.jsx";
import { Paragraph } from "../../components/typography/paragraph/Paragraph.jsx";
import { BackGroundImage } from "../../components/backGroundImage/BackGroundImage.jsx";

const API_KEY = "8310ae58e125eac683c38e74d6f6a3aa";
const URL_START = "https://api.themoviedb.org/3/movie/";

export const Details = () => {
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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
      }
    };

    // Call the fetchMovie function when the component mounts or when "id" changes
    // The "id" parameter is included as a dependency in the array to trigger a re-fetch, useEffect will be called when "id" changes.
    fetchMovie();
  }, [id]);

  if (!isLoading) {
    // If the data has been loaded, render movie details
    return (
      <article className="detail-page">
        <BackGroundImage
          src={`https://image.tmdb.org/t/p/w1280${detail.backdrop_path}`}
        />
        <BackButton />
        <DetailImage
          url={`https://image.tmdb.org/t/p/w780/${detail.poster_path}`}
          altText={`Poster image of ${detail.title}`}
        />
        <HeadingH3 text={detail.title} />
        <RatingTag rate={detail.vote_average} />
        <Paragraph text={detail.overview} />
      </article>
    );
  } else {
    // If data is still loading, show a loading message
    return <p>Loading...</p>;
  }
};
