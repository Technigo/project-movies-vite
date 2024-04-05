import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/movielist.css";

const MovieList = () => {
	const [movieList, setMovieList] = useState([]);
	const [listChoice, setListChoice] = useState("movie/upcoming");
	const [showOptions, setShowOptions] = useState(false);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/${listChoice}?api_key=45808b94c818eebf69530d0b48e42b20`
		)
			.then((response) => response.json())
			.then((data) => {
				const results = data.results;
				console.log(results);
				setMovieList(results);
			})
			.catch((error) => console.error("Error fetching popular movies:", error));
	}, [listChoice]);

	const handleHamburgerMenu = () => {
		// Toggle the visibility of the options
		setShowOptions((prevShowOptions) => !prevShowOptions);
	};

	return (
		<div className="movie-page">
			<div className="menu">
				<button
					className="hamburger-menu"
					onClick={handleHamburgerMenu}
				>
					{/* Hamburger menu icon */}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
						<path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
					</svg>
				</button>

				{showOptions && (
					<div className="options-container">
						<button
							className={`option-button ${listChoice === "movie/popular" ? "active" : ""}`}
							onClick={() => setListChoice("movie/popular")}
						>
							Popular Movies
						</button>
						<button
							className={`option-button ${listChoice === "movie/top_rated" ? "active" : ""}`}
							onClick={() => setListChoice("movie/top_rated")}
						>
							Top Rated Movies
						</button>
						<button
							className={`option-button ${listChoice === "movie/upcoming" ? "active" : ""}`}
							onClick={() => setListChoice("movie/upcoming")}
						>
							Upcoming Movies
						</button>
					</div>
				)}
			</div>

			<div className="movie-list">
				{movieList.map((movie, index) => (
					<Link key={index} to={`/movies/${movie.id}`}>
						<div className="movie-card">
							<div className="image-container">
								<img
									src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
									alt="movie-image"
									className="movie-cover"
								/>
								<div className="overlay">
									<div className="description">
										<h1>{movie.title}</h1>
										<p>Release {movie.release_date}</p>
									</div>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default MovieList;
