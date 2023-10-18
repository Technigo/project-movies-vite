import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./singlemovie.css";

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
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, [id]);

    // You should return something here; for example, you can display the movie details in JSX.
    // Replace this return statement with your actual JSX structure for displaying movie details.
    return (
        <div>
            {movie ? (
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    {/* Add more movie details here */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};







