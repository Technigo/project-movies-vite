import { useEffect, useState } from "react"


export const MovieDetails = () => {

const [movieDetail, setMovieDetail] = useState([]);

    useEffect(() => {
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=b4648009c1cb0a7e8f565388d787eb75&language=en-US`
        )
          .then((res) => res.json())
          .then((data) => setMovieDetail(data))
          .catch((error) => alert("Error fetching data:" + error));
  }, [id]);


}