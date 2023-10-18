import { useEffect ,useState } from "react"
import { Link } from "react-router-dom";
import './home.css';

export const Home = () => {
  const [data, setData] = useState(null);
  const apiKey = '0c1859339f764c871c4c8225088979ea';

  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
  .then(res => res.json())
  .then(data => setData(data))
  .catch(error => alert("Error fetching data:", error));
  }, [])

  if (!data) return <h4>Loading...</h4>
  
  
  return (
    <div>
    <ul>
      {data.results.map(movie => (
        <li key={movie.id}>
          <Link to={`/movie-details/${movie.id}`}>
          {movie.poster_path && (
            <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            />
          )}
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
