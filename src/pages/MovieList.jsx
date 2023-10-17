import "./movielist.css"
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import { Oval } from 'react-loader-spinner';
import { MovieListCard } from "../Components/MovieListCard";



export const MovieList = () => {

    const [imageConfig, setImageConfig] = useState(null);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);


    const api_key = "7d78ddbe7ada309152c07dd3e85ec306";

    useEffect(() => {
        const fetchConfiguration = async () => {
         
          try {
            const response = await fetch(
              `https://api.themoviedb.org/3/configuration?api_key=${api_key}`
            );
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const json = await response.json();
            setImageConfig(json);
            console.log(json);
          } catch (error) {
            console.error("Error fetching configuration:", error);
          }
        };
    
        fetchConfiguration();
      }, []);
    


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const json = await response.json();
                setList(json.results);
                console.log(json.results);

            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);



    return (
        <>
            <section className="movie-list-page">

                <div className="movie-list">
                    {list.map((movie) => (
                        <div key={uuidv4()} className="movie-list-card">
                            <MovieListCard
                                movieTitle={movie.title}
                                releaseDate={movie.release_date}
                                movieId={movie.id}
                            />
                        </div>
                    ))}
                </div>
                {loading && <Oval />}
            </section>
        </>
    )
}
