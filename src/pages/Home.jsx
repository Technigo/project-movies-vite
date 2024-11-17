import styled from "styled-components";
import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { MovieList } from "../components/MovieList";
import { BASE_URL, API_KEY } from "../utils/apiConfig";
import { MOVIE_ENDPOINTS } from "../utils/endpoints";
import cinemaHeader from "../assets/theater.png";

// Styled components for dropdown
const DropdownWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: white;
`;

const StyledSelect = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  color: #333;
  cursor: pointer;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &:hover {
    background-color: #e6e6e6;
  }
`;

const StyledOption = styled.option`
  font-size: 1rem;
  color: #333;
`;

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // State for dropdown with default endpoint set to popular
  const [selectedEndpoint, setSelectedEndpoint] = useState("popular");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}${MOVIE_ENDPOINTS[selectedEndpoint]}?api_key=${API_KEY}&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [selectedEndpoint]); // Refetch movies when endpoint changes

  const handleEndpointChange = (e) => {
    setSelectedEndpoint(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header
        title="Showtime Selector"
        subtitle="Discover Movies"
        bgImage={cinemaHeader}
      />
      {/* Dropdown for selecting an endpoint */}
      <DropdownWrapper>
        <StyledLabel htmlFor="endpoint-select">Select Category:</StyledLabel>
        <StyledSelect
          id="endpoint-select"
          value={selectedEndpoint}
          onChange={handleEndpointChange}
        >
          <StyledOption value="popular">Popular</StyledOption>
          <StyledOption value="topRated">Top Rated</StyledOption>
          <StyledOption value="nowPlaying">Now Playing</StyledOption>
          <StyledOption value="upcoming">Upcoming</StyledOption>
        </StyledSelect>
      </DropdownWrapper>
      <MovieList movies={movies} />
    </>
  );
};
