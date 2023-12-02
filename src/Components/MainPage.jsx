import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const [data, setData] = useState(null);
  const apiKey = "5aa9e114ca267782609e2442ce42e81c";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
    // .catch((error) => alert("Error fetching data:" + error)); This doesn't seem to be working, look into later
  }, []);

  if (!data) return <h2>Loading..</h2>;

  return (
    <div>
      {/* <h1 className="h1-main">Movies headline blabla for the mobile version? And do hidden otherwise?</h1> */}
      {/* why did I put a ul here? It works but go back later */}
      <ul>
        {data.results.map((movie) => (
          <li key={movie.id}>
            <Link to={`/details/${movie.id}`}>
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
