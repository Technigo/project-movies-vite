// src/components/Detail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/tmdbApi';

const Detail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getMovieDetails = async () => {
            const fetchedMovie = await fetchMovieDetails(id);
            if (fetchedMovie) {
                setMovie(fetchedMovie);
                setLoading(false);
            } else {
                setError(true);
                setLoading(false);
            }
        };
        getMovieDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Movie Not Found</div>;

    return (
        <div>
            <h1>{movie.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                alt={movie.title}
            />
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
};

export default Detail;
