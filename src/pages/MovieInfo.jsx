/* eslint-disable react/prop-types */
// MovieInfo.jsx - This component displays detailed information about a specific movie.
// It fetches movie data from an external API based on the movie ID provided in the URL.
// The component includes a loading spinner and a back link to the main movies page.


import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { SubPageTitle, Text } from "../ui/Typography";


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
  height: 500px; /* Adjust the height as needed */
  overflow: hidden;
  z-index: -1; /* Ensure it's behind content */

  .movie-backdrop {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.35; 
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 20px;
  max-width: 1200px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: left;
  }
`;

const PosterContainer = styled.div`
  flex-shrink: 0;
  

  .movie-poster {
    width: 300px;
    border-radius: 10px;
    position: absolute; /* Position over the backdrop */
    top: 50%; /* Adjust based on where you want it to appear */
    left: 40px; /* Position from the left */
    z-index: 2; /* Ensure it's above the backdrop */

    @media (max-width: 768px) {
      width: 250px; 
      top: 30%; 
  
  }
}
`;

const DetailsContainer = styled.div`
  flex-grow: 1;
  z-index: 2; /* Ensure the details are above the backdrop */
  max-width: 600px; /* Control the max width of the details */
`;


export const MovieInfo = () => {
  const { id } = useParams(); // Captures the movie ID from the URL
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
  }, [id]); // Runs when the movie ID changes

  if (loading) {
    return <div>Loading...</div>; // Show a spinner or loading text
  }

  if (!movie) {
    return <div>Movie not found</div>; // Error handling if the movie doesn't exist
  }

  return (
    <MovieInfoWrapper>
      <BackdropContainer>
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
          className="movie-backdrop"
        />
      </BackdropContainer>
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
          <Text>{movie.overview}</Text>
          <p>
            <Text>Release Date:</Text> {movie.release_date}
          </p>
          <p>
            <Text>Rating:</Text> {movie.vote_average} / 10
          </p>
          <Link to="/">Back to Home</Link>
        </DetailsContainer>
      </ContentContainer>
    </MovieInfoWrapper>
  );
};









