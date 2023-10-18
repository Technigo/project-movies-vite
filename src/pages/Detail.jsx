import "./Detail.css";
import { DetailComp } from "../components/detail/DetailComp";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const Detail = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const api_key = "7c19dcf9d97858f9497be69f656c349b"; // Change later to pass as a promt instead.
  const detailApi = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`;

  // Function to fetch movie details from the API.
  const fetchDetails = async () => {
    try {
      const response = await fetch(detailApi);
      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }
      const data = await response.json();
      console.log("Movie details", data);
      // setMovie(data.results);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  // useEffect hook to run fetchDetails.
  useEffect(() => {
    fetchDetails();
  }, [id]);

  return (
    <div>
      <DetailComp />
    </div>
  );
};
