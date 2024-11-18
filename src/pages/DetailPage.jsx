// This component displays detailed information about a particular movie
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, API_KEY } from "../utils/apiConfig";
import { MovieDetails } from "../components/MovieDetails";
import { BackLink } from "../components/BackLink";
import { Navigate } from "react-router-dom";

// Styled components for the container and link
const DetailsContainer = styled.div`
  position: relative;
  display: flex;
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
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  @media (min-width: 375px) {
    min-height: 100vh;
  }
`;

const ContentWrapper = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row; /* Switch to row layout for larger screens */
    justify-content: flex-start;
    align-items: flex-end;
    align-self: flex-end;
    height: 50%;
    gap: 1.5rem;
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
          if (response.status === 404) {
            setError("404");
          } else {
            throw new Error("Failed to fetch movie details");
          }
        } else {
          const data = await response.json();
          setMovie(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error === "404") return <Navigate to="/not-found" replace />;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const backgroundImage = movie
    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    : "";

  return (
    <DetailsContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
      <BackLink label="Back to Home" />
      <ContentWrapper>{movie && <MovieDetails movie={movie} />}</ContentWrapper>
    </DetailsContainer>
  );
};
