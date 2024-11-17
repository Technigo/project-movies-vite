// Page for the movie details
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MovieDetails } from "../components/MovieDetails";
import ArrowIcon from "../assets/ArrowIcon.svg";

import "./MovieInfo.css";


export const MovieInfo = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);
	const [error, setError] = useState(null);
	const apiKey = import.meta.env.VITE_OPENDB_KEY;

	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`

				);
				console.log("API Key:", apiKey);


				if (!response.ok) {
					throw new Error("Failed to fetch movie details");
				}

				const data = await response.json();
				console.log("Fetched Movie Details:", data);
				setMovie(data);
			} catch (error) {
				console.error("Error fetching movie details:", error);
				setError("Failed to load movie details.");
			}
		};

		fetchMovieDetails();
	}, [id, apiKey]);

	if (error) return <div>{error}</div>;
	if (!movie) return <div>Loading...</div>;

	return (
		<div>
			{/* Back Button */}
			<Link to="/" className="back-button">
				<img src={ArrowIcon} alt="Back" className="arrow-icon" />
				<span>Movies</span>
			</Link>

			<MovieDetails movie={movie} />
		</div>
	);
};
