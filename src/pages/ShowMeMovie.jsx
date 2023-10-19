import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner"
import { useParams, Link } from "react-router-dom";
import { MovieDetails } from "../components/MovieDetails";

export const ShowMeMovie = () => {

    // Dynamic value passed from route to here is :id
    const { id } = useParams()
    console.log("The id:", id)

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    //To be stored later secretly in a dot environment- .env
    const API_KEY = "d702e384b1621c01acd5bc0e04a75981"

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


        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`

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
    }, [id]); // Fires the function only when movie:id is requested



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
            {!loading && movie && <Link to="/">Movies</Link>}
            {!loading && movie && <MovieDetails movie={movie} />}


        </>
    )
}
