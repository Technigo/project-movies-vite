
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export const MainPage = () => {

const [data, setData] = useState(null);
const apiKey = 'aea11e511c691453635b1da985972186';

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => alert("Error fetching data:" + error));
}, [])

if (!data) return <h2>Loading..</h2>
 
return (
<div>
    <h1 className="h1-main">Popular movies in the US</h1>
    <ul>
     {data.results.map(movie => (
                <li key={movie.id}>
                    <Link to={`/details/${movie.id}`}>
                        {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}
 
                        />
                        }
                    <div className="movie-info">
                        <h3>{movie.title}</h3>
                        <p>Released: {movie.release_date}</p>
                    </div>
                </Link>
                </li>
            ))}
        </ul>

    </div>
);
};