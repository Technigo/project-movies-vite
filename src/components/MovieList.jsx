import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "../components/movielist.css"


const MovieList = () => {
	const [movieList, setMovieList] = useState([]);
	const [listChoice, setListChoice] = useState("movie/upcoming");

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/${listChoice}?api_key=45808b94c818eebf69530d0b48e42b20`)
			.then((response) => response.json())
			.then((data) => {
				const results = data.results;
				console.log(results);
				setMovieList(results);
			})
			.catch((error) => console.error('Error fetching popular movies:', error))
	}, [listChoice]);


	return (
		<div className="movie-list">
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

			<div className="movie-container">
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