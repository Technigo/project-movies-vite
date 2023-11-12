import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./MovieInfo.css"

export const MovieInfo = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    const API_Key = 'b9d9222d037c3b04f41cfe59a1e05d89';
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_Key}&language=en-US`;

    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    const data = await response.json();
    // console.log(JSON.stringify(data, null, 2));
    setMovieInfo(data);
    } catch (error) {
      console.log("error", error);
    }
    finally {
      setLoading(false);
    }
  };

  //handle first fetch and execution of the dropdown menu,when state is changed
  useEffect(() => {
    fetchMovieData();
  },[movieId]);

  if(loading || Object.keys(movieInfo).length === 0) {
    return <div className="movie-info-container">Loading movie info...</div>
  }

  const {
    title,
    poster_path,
    genres,
    release_date,
    overview,
    homepage,
    vote_average,
    vote_count,
    production_companies,
  } = movieInfo;

  return (
    <div className="movie-info-container">
      <div>
        <h1>{title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${title} Poster`} />
      </div>

      <div>
        <div className="overview-section">
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>

        <div className="details-section">
          <h2>Details</h2>
          <p>
            <strong>Genres:</strong> {genres.map((genre) => genre.name).join(', ')}
          </p>
          <p>
            <strong>Release Date:</strong> {release_date}
          </p>
          <p>
            <strong>Vote Average:</strong> {vote_average} ({vote_count} votes)
          </p>
          <p>
            <strong>Homepage: </strong>
            <a href={homepage}>{homepage}</a>
          </p>
        </div>

        <div className="production-companies-section">
          <h2>Production Companies</h2>
            {production_companies.map((company) => (
                  company.logo_path && (
                    <Link className="company-link" to={`/company/${company.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                        alt={`${company.name} Logo`}
                      />
                  </Link>
                )
            ))}
        </div>
      </div>
    </div>
  )
}
