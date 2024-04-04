import { useEffect, useState } from "react";
import { MovieRoutes } from "./routes/MovieRoutes";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [API_END, setAPI_END] = useState("popular");
  const API_KEY = import.meta.env.VITE_MOVIEDB_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${API_END}?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    setLoading(true);
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



  return (
    <>
      <main>
        <MovieRoutes
          data={data}
          setAPI_END={setAPI_END}
          loading={loading}
          setLoading={setLoading}
        />
      </main>
    </>
  );
};

