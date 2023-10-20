import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner"
import { useParams, Link } from "react-router-dom";
import { MovieDetails } from "../components/MovieDetails";
import "../styling/showMeMovie.css"

export const ShowMeMovie = () => {

    // Dynamic value passed from route to here is :id
    const { id } = useParams()
    console.log("The id:", id)

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiEnv = import.meta.env.VITE_OPENDB_KEY;
    //To be stored later secretly in a dot environment- .env


    // Do not erase: another (more readable) way of writing fetch() in useEffect()

    // useEffect(() => {
    //     fetch(
    //         `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    //     )

    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setMovie(data);
    //             setLoading(false) //When data loading succeeded
    //         })
    //         .catch((error) => console.error("Error fetching single movie: ", error));
    // }, [id]);

    useEffect(() => {


        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiEnv}&language=en-US`

        const fetchMovieInfo = async () => {

            try {
                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }

                const data = await response.json()
                console.log(data);
                setMovie(data)
                setLoading(false) //When data loading succeeded
                // // Scroll to the top of the page when data is loaded
                // window.scrollTo({ top: 0, behavior: "smooth" });
            } catch (error) {
                console.error("Error fetching data on selected movie:", error);
            }

        }
        fetchMovieInfo();
    }, [id, apiEnv]); // Fires the function only when movie:id is requested



    return (
        <>
            {loading && (
                <Oval
                    height={80}
                    width={80}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />

            )
            }
            {!loading && movie && <Link className="back-to-movies-btn" to="/">

                <div className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                        <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="rgb(245,245,245)" fillRule="evenodd">
                        </path>
                    </svg>
                </div>
                <p>Movies</p>
            </Link>}
            {!loading && movie && <MovieDetails movie={movie} />}


        </>
    )
}
