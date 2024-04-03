import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Access_Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWIxM2M3MzY1ZTNlNTRmY2JjNWQ1NzE1MTE3NjdmOSIsInN1YiI6IjY1NTkzNzIyYjU0MDAyMTRkM2NhZTQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUP5w6KFCmMshYAaFwy15nfUVAcySBTGUGuOYxWo1M0";

const Base_URL = "https://api.themoviedb.org/3/movie/";

const PopularList = () => {
  const [movies, setMovies] = useState(null);
  // const [endpoint, setEndpoint] = useState("upcoming");
  const { type = "popular", pageNum = 1 } = useParams();
  // const [page, listType] = useOutletContext();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${Access_Token}`,
      },
    };
    fetch(`${Base_URL}${type}?language=en-US&page=${pageNum}`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setMovies(response.results);
      })
      .catch(err => console.error(err));
  }, [type, pageNum]);

  return (
    <div>
      {movies &&
        movies.map(movie => (
          <div key={movie.id}>
            {/* <Link to="/"> */}
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={`A poster of ${movie.title}`}
            ></img>
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
            {/* </Link> */}
          </div>
        ))}
    </div>
  );
};

export default PopularList;