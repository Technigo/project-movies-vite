import "./MovieCard.css"
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoStar } from "react-icons/io5";
import { IoIosArrowDropleft } from "react-icons/io";


export const MovieCard = () => {
  const params = useParams();
  const navigate = useNavigate();

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const movieDetailsURL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US&page=1`;
  const imageSecureBaseURL = `https://image.tmdb.org/t/p/`;
  
  const [movieDetails, setMovieDetails] = useState({});

  
  const fetchData = async () => {
    try {
      const res = await fetch(movieDetailsURL);

      if (!res.ok) {
        throw new Error(`404 Page not found`);
      }

      const data = await res.json();
      setMovieDetails(data);
      console.log(data);

    } catch (error) {
      if (error.message === "404 Page not found") {
        navigate("/notfound");
      }
    }
  };
  
  useEffect(() => {
    fetchData()
  }, [navigate, movieDetailsURL]);  
  
  return (
    <section className="movie-card" style={{backgroundImage: `url(${imageSecureBaseURL}w1280${movieDetails.backdrop_path})`,}}>
      <div className="arrow-box" onClick={() => navigate(-1)}>
        <IoIosArrowDropleft className="arrow-icon" />
        <p>Back To Home</p>
      </div>

      <div className="movie-content-box">
        <img src={`${imageSecureBaseURL}w500${movieDetails.poster_path}`} alt={`A movie poster of ${movieDetails.title}`} />
        <div className="movie-info-box">
          <div>
            <h1>{movieDetails.title}</h1>
            <p>{movieDetails.genres && movieDetails.genres.map((genre) => genre.name).join("|")}</p>
          </div>

          <div className="rating-time-box">
            <div className="rating-box">
              <IoStar className="star-icon" />
              <p>{parseFloat(movieDetails.vote_average).toFixed(1)}</p>
            </div>
            <p>{movieDetails.runtime} min</p>
          </div>

          <p>{movieDetails.overview}</p>
          <p>Released {movieDetails.release_date}</p>
        </div>
      </div>      
    </section>
  );
};
