import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "../components/movielist.css"


const MovieList = () => {
	const [movieList, setMovieList] = useState([]);
	const [listChoice, setListChoice] = useState("movie/upcoming");

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/${listChoice}?api_key=45808b94c818eebf69530d0b48e42b20&language=en-US&page=1`)
			.then((response) => response.json())
			.then((data) => {
				const results = data.results;
				console.log(results);
				setMovieList(results);
			})
			.catch((error) => console.error('Error fetching popular movies:', error))
	}, [listChoice]);

	return (
		<div className="movie-list-container">
			<section className="home-page">
				{movieList.map((movie, index) => (
					<Link key={index} to={`/movies/${movie.id}`}>
						<div className="movie-card">
							<img
								src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
								alt="movie-image"
								className="movie-poster"
							/>
							<h1>{movie.title}</h1>
							<div className="description">
								<p>Release {movie.release_date}</p>
							</div>
						</div>
					</Link>
				))}
			</section>
		</div>
	);
};

export default MovieList;