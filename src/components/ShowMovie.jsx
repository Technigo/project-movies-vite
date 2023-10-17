import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styling/showmovie.css"

export const ShowMovie = () => {
    const { id } = useParams();
    console.log(id)
    const [movie, setMovie] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const apiKey = "86aa5020ba0683214eaaed8f53bcbb6f";

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the data to the console
                setMovie(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    const backButton = () => {
        navigate("/");
    };

    return (

        <>

            <div className="MovieContainer"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 100%),url(http://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
                }}
            >

                <button className="back-button" type="button" onClick={backButton}>
                    <img width="32" height="32" src="https://cdn.glitch.global/b7fc725b-f734-44d3-a7ec-11457f9b7762/icons8-backwards-32.png?v=1697536318888" alt="external-backwards-arrows-kmg-design-glyph-kmg-design-1" />
                    <span className="back-text">Back</span>
                </button>

                <div className="textContainer">
                    <img
                        className="MoviePoster"
                        src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                        alt={`Poster of ${movie.title}`}
                    />
                    <div className="infoContainer">
                        <div className="titleRatingContainer">
                            <h1>{movie.title}</h1>
                            <p className="average">
                                ⭐️{Math.round(movie.vote_average * 10) / 10}
                            </p>
                        </div>
                        <div className="movieDescription">
                            <p>{movie.overview}</p>
                        </div>

                    </div>
                </div>
            </div>

        </>


    );

}