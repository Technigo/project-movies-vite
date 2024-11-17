// This component displays detailed information about a particular movie
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BASE_URL, API_KEY } from "../utils/apiConfig";
import { MovieDetails } from "../components/MovieDetails";
import backArrow from "../assets/back-arrow.svg";

// Styled components for the container and link
const DetailsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  color: white;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 0;
  }

  @media (min-width: 360px) {
    height: 100vh;
  }
`;

const BackLink = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    margin-right: 0.5rem;
    width: 24px;
    height: 24px;
  }
`;

const ContentWrapper = styled.div`
  z-index: 1;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 767) {
    flex-direction: row;
  }
`;

export const DetailPage = () => {
  // Gets the dynamic ID parameter from the URL
  const { id } = useParams();

  // State to store fetched movie data
  const [movie, setMovie] = useState(null);

  // State to track loading status
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  // useEffect hook to fetch movie data when the component mounts or id changes
  useEffect(() => {
    // Function to fetch movie data
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const backgroundImage = movie
    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    : "";

  return (
    <DetailsContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
      <BackLink to="/">
        <img src={backArrow} alt="Back arrow" />
        Back to Home
      </BackLink>
      <ContentWrapper>{movie && <MovieDetails movie={movie} />}</ContentWrapper>
    </DetailsContainer>
  );
};
