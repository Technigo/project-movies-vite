// https://api.themoviedb.org/3/tv/popular

/* eslint-disable no-unreachable */
import { useState, useEffect } from "react";
import { Card } from "../components/Card";

import "./MovieList.css";

export const SeriesList = () => {
  const [loading, setLoading] = useState(false);
  const [series, setSeries] = useState([]);
  const apiEnv = import.meta.env.VITE_OPENDB_KEY;
  const API_LANG = "en-US";

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${apiEnv}&language=${API_LANG}page=1`
        );
        if (!response.ok) {
          throw new Error("Couldn't fetch data!");
        }
        const data = await response.json();
        setSeries(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSeries();
    console.log(fetchSeries);
  }, [apiEnv]);

  return (
    <div>
      {loading ? (
        <p> loading...</p>
      ) : (
        <section className="cardWrapper">
          {series.map((serie) => {
            return <Card key={serie.id} serie={serie} />;
          })}
        </section>
      )}
    </div>
  );
};
