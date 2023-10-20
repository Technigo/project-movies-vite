import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./singlemovie.css";
import { BackIcon } from "../Components/BackIcon";
import { Link } from 'react-router-dom';

const API_KEY = "833874c10582aaa2144a7cb70148fbd3";

export const SingleMovie = () => {
    const [movie, setMovie] = useState(null); // Initialize state with null
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then((res) => res.json())
            .then((json) => {
                setMovie(json);
                console.log("data is", json);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, [id]);

    return (
        <div className="single-movie">
            <Link to="/" className="backLink" aria-label="button back to home page">
                <BackIcon /> Movies
            </Link>

            {movie ? (
                <>
                    <div className="back-drop">
                        <div className="background-image">
                            <img
                                src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                                alt={movie.title}
                            />
                        </div>
                    </div>
                    <div className="movie-info">
                        <div className="movie-poster-container">
                            <img
                                src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </div>
                        <div className="movie-info-text">
                            <div className="movie-info-heading">
                                <h1>
                                    <span className="title" style={{ display: 'inline-block', textShadow: '1px 1px 1px rgb(77, 77, 77)' }}>{movie.title}</span>
                                    <span className="rating-number" style={{ backgroundColor: '#F2C94C', padding: '4px 9px', marginLeft: '10px', borderRadius: '5px' }}>
                                        {Math.round(movie.vote_average * 10) / 10}
                                    </span>
                                </h1>
                            </div>
                            <div className="movie-info-subtext">
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )
            }
        </div >
    );
};

// backgrundsbild + bild
//back - button (gör en link - path )   <Link to={`/movies/${movieId}`} aria-label={`View details for ${movieTitle}`}> 

//singlemovie card??

//bilder - ta största storleken 

// {
//     "images": {
//       "base_url": "http://image.tmdb.org/t/p/",
//       "secure_base_url": "https://image.tmdb.org/t/p/",
//       "backdrop_sizes": ["w300", "w780", "w1280", "original"],
//       "logo_sizes": ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
//       "poster_sizes": ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
//       "profile_sizes": ["w45", "w185", "h632", "original"],
//       "still_sizes": ["w92", "w185", "w300", "original"]
//     }
//   }

// https://image.tmdb.org/t/p/w1280${movie.backdrop_path}




{/* <img
src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
alt={movie.title}
/> */}







