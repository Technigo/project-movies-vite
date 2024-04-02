import { useEffect, useState } from "react"
import { Movie } from "../components/Movie"
import { Link } from "react-router-dom";

export const MovieGrid = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [API_END, setAPI_END] = useState("popular")
    const API_KEY = "5ebb37047349cdb54acf91b06e7b7839"
    const API_URL = `https://api.themoviedb.org/3/movie/${API_END}?api_key=${API_KEY}&language=en-US&page=1`

    useEffect(() => {
      fetch(API_URL)
      .then ((result) => result.json())
      .then ((json) => {
        setData(json)
        setLoading(false)
      })
      .catch ((error) => {
        console.error(error)
        setLoading(false)
      }) 
    }, [])

    if (loading) {
      return <p>Loading...</p>
    }

    console.log(data)

  return (
    <div>
      {data.results.map((movie, index) => (
        <div key={index}>
          <Link
                  to={{ pathname: `/movie/${movie.title.toLowerCase().replace(/ /g, "-")}`, state: movie}}
          >
                  <Movie />
          </Link>
        </div>
      ))}
    </div>
  );
}