import { useEffect, useState } from "react";
import { BrowserRouter, useParams, useLocation} from "react-router-dom";
import { MovieRoutes } from "./routes/MovieRoutes";


export const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [API_END, setAPI_END] = useState("popular");
  const API_KEY = "5ebb37047349cdb54acf91b06e7b7839";
  const API_URL = `https://api.themoviedb.org/3/movie/${API_END}?api_key=${API_KEY}&language=en-US&page=1`;

  //const check = useLocation()

  console.log("App API_END: ", API_END)
  // if (genre) {
  //   setAPI_END(genre);
  // } else {
  //   setAPI_END("popular");
  // }

  useEffect(() => {
    fetch(API_URL)
      .then((result) => result.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [API_URL]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <BrowserRouter>
        <main>
          <MovieRoutes data={data} setAPI_END={setAPI_END} />
        </main>
      </BrowserRouter>
    </>
  );
};
