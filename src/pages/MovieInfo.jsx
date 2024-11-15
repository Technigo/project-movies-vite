// MovieInfo.jsx 
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import backIcon from '/assets/back-icon.svg';
import { MovieDetails } from "../components/MovieDetails";

const MovieInfoContainer = styled.div`
 height: 100vh;
 width: 100%;
 background-color: black;
 overflow: hidden;
`

const BackdropImage = styled.div`
 height: 100vh;
 width: 100%;
 background-image: ${props => `linear-gradient(rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%), 
   url(https://image.tmdb.org/t/p/w1280${props.backdrop})`};
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 overflow: hidden;
`

const BackText = styled.p`
 margin: 0;
 color: white;
 font-size: 18px;
 transition: transform 0.3s ease;
`

const StyledLink = styled(Link)`
 display: flex;
 align-items: center;
 text-decoration: none;
 color: white;
 gap: 8px;
 padding: 16px 0 0 40px;

 &:hover {
   ${BackText} {
     transform: translateX(5px);
   }
 }
`

const BackButton = styled.img`
 cursor: pointer;
 width: 24px;
 height: 24px;
`

export const MovieInfo = () => {
 const [movie, setMovie] = useState(null);
 const [error, setError] = useState(null);
 const { id } = useParams();
 const apiEnv = import.meta.env.VITE_OPENDB_KEY;

 useEffect(() => {
   // Fetch individual movie details using the movie ID
   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiEnv}&language=en-US`)
     .then((res) => {
       if (!res.ok) {
         throw new Error("Failed to load movie details. Please try again later.");
       }
       return res.json();
     })
     .then((res) => {
       setMovie(res);
     })
     .catch((error) => {
       setError(error.message);
     });
 }, [id, apiEnv]);

 if (error) return <div>Error: {error}</div>;
 if (!movie) return <div>Loading...</div>;

 return (
   <MovieInfoContainer>
     <BackdropImage backdrop={movie.backdrop_path}>
       <StyledLink to="/">
         <BackButton src={backIcon} alt="Back to movies list" />
         <BackText>Movies</BackText>
       </StyledLink>
       <MovieDetails 
         poster_path={movie.poster_path}
         title={movie.title}
         rating={movie.vote_average}
         overview={movie.overview}
       />
     </BackdropImage>
   </MovieInfoContainer>
 );
};