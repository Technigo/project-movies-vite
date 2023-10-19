import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./singlemovie.css";
import { BackIcon } from "../Components/BackIcon";
import { Link } from 'react-router-dom';


const API_KEY = "833874c10582aaa2144a7cb70148fbd3";
// const URL_START = "https://api.themoviedb.org/3/movie/";

export const SingleMovie = () => {
    const [movie, setMovie] = useState(null); // Initialize state with null
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then((res) => res.json()) // Remove extra parentheses here
            .then((json) => {
                setMovie(json);
                console.log("data is", json);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, [id]);

    // You should return something here; for example, you can display the movie details in JSX.
    // Replace this return statement with your actual JSX structure for displaying movie details.
    return (
        <div className="single-movie">
            <Link to="/" className="backLink" ariaLabel="button back to home page">
                <BackIcon /> Movies
            </Link>

            {movie ? (
                <>

                    <div className="back-drop">
                        <img
                            src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                            alt={movie.title} />
                    </div>
                    <div className="movie-info">
                        <img
                            src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                            alt={movie.title} />
                        <h1>

                            <span className="title">{movie.title}</span>
                            <div className="rating-box">
                                <span className="rating-number"> {Math.round(movie.vote_average * 10) / 10}</span>
                            </div>
                            <p>{movie.overview}</p>
                        </h1>

                    </div></>
            ) : (
                <p>Loading...</p>
            )}
        </div>
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







