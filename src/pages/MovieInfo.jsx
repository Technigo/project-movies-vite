/* eslint-disable react/prop-types */
// MovieInfo.jsx - This component displays detailed information about a specific movie.
// It fetches movie data from an external API based on the movie ID provided in the URL.
// The component includes a loading spinner and a dynamic back link to the now playing movies page or upcoming movies.

import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { SubPageTitle, Text } from "../ui/Typography";
import arrow from "/arrow.svg";

const MovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: Arial, sans-serif;
`;

const BackdropContainer = styled.div`
  width: 100%;
  position: relative;
  height: 1000px; 
  overflow: hidden;
  z-index: -1; /* Ensure it's behind content */
  background-color: #000;

  .movie-backdrop {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BackdropImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.35;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 80px;
  left: 40px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;

  img {
    margin-right: 5px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: #ccc;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-top: -600px; /* Overlap content with backdrop */
  gap: 5px;
  position: relative; /* Keeps the content over the backdrop */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: -900px;
    padding: 0 20px;
  }
`;

const PosterContainer = styled.div`
  flex-shrink: 0;
  position: relative;

  .movie-poster {
    width: 300px;
    border: solid white; 
    position: relative; /* Keeps it positioned properly within its container */
    z-index: 2; /* Ensures poster is above backdrop */

    @media (min-width: 769px) {
      width: 300px;
      margin-left: 20px;
      margin-top: -250px;
    }

    @media (max-width: 768px) {
      width: 250px;
    }
  }
`;

const DetailsContainer = styled.div`
  flex-grow: 1;
  z-index: 2;
  max-width: 600px;
  padding: 20px;
  color: #fff;

  @media (max-width: 768px) {
    text-align: left;
  }

  @media (min-width: 769px) {
      margin-top: -40px;
    }
`;


const RatingContainer = styled.div`
  display: inline-block;
  align-items: center;
  background-color: white;
  padding: 0 5px;
  width: fit-content;
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0px;

  span.star {
    color: gold;
    margin-right: 8px;
    font-size: 24px; 
  }

  span.rating {
    color: black;
  }
`;

export const MovieInfo = () => {
  const { id } = useParams();
  const location = useLocation();
  const from = location.state?.from || "/"; // Default to home if no state, If someone navigates directly to /movie/:id without using the Link in MovieGrid, the state won't be set. The from fallback ensures a default redirection path.
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiEnv = import.meta.env.VITE_TMDB_KEY;
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiEnv}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <MovieInfoWrapper>
      <BackdropContainer>
        <BackdropImage
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
          className="movie-backdrop"
        />
      </BackdropContainer>
      {/* Dynamic BackButton */}
      <BackButton to={from === "now-playing" ? "/" : "/upcoming"}>
        <img src={arrow} alt={`Go back to ${from === "now-playing" ? "Now Playing" : "Upcoming"}`} />
        <SubPageTitle>Go Back</SubPageTitle>
      </BackButton>
      <ContentContainer>
        <PosterContainer>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
        </PosterContainer>
        <DetailsContainer>
          <SubPageTitle>{movie.title}</SubPageTitle>
          <RatingContainer>
            <span className="star">★</span>
            <span className="rating">{movie.vote_average.toFixed(1)}</span>
          </RatingContainer>
          <Text>{movie.overview}</Text>
          <p>
            <Text>Release Date:</Text> {movie.release_date}
          </p>
        </DetailsContainer>
      </ContentContainer>
    </MovieInfoWrapper>
  );
};



