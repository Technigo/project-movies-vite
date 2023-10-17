import "./movielist.css"
import { useState, useEffect } from "react";



export const MovieList = () => {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const api_key = "7d78ddbe7ada309152c07dd3e85ec306";
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
                        <div key={movie.id} className="movie-list-card">
                            <h1>{movie.title}</h1>
                            <h2>{movie.release_date}</h2>
                        </div>
                    ))}
                </div>


                {loading && <p>Loading...</p>}
            </section>
        </>
    )
}
