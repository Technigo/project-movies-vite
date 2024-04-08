import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetails } from "../components/MovieDetails";
import { NotFoundPage } from "./NotFoundPage";
import { FailedFetch } from "./FailedFetch";
import { Loader } from "../components/Loader";

// const Loader = () => {
//   return <div>Loading...</div>;
// };

export const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [fetchError, setFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const apiEnv = import.meta.env.VITE_OPENDB_KEY;
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiEnv}&language=en-US`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id) return;

      try {
        const response = await fetch(movieDetailsUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setFetchError(true);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    fetchMovieDetails();
  }, [id, movieDetailsUrl]);

  if (fetchError) {
    return <FailedFetch />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {movieDetails ? (
        <div className="movie-details-page">
          {console.log("Imdb-id:", movieDetails.imdb_id)}
          <MovieDetails
            rating={movieDetails.vote_average}
            title={movieDetails.title}
            overview={movieDetails.overview}
            backdrop={movieDetails.backdrop_path}
            release_date={movieDetails.release_date}
            tagline={movieDetails.tagline}
            poster_path={movieDetails.poster_path}
            genres={movieDetails.genres}
            imdb={movieDetails.imdb_id}
          />
        </div>
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
};

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { MovieDetails } from "../components/MovieDetails";
// import { NotFoundPage } from "./NotFoundPage";
// import { FailedFetch } from "./FailedFetch";

// // Loader component
// const Loader = () => {
//   return <div>Loading...</div>;
// };

// export const MovieDetailsPage = () => {
//   const { id } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [fetchError, setFetchError] = useState(false);
//   const [isLoading, setIsLoading] = useState(true); // State to track loading state
//   const apiEnv = import.meta.env.VITE_OPENDB_KEY;
//   const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiEnv}&language=en-US`;

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       if (!id) return;

//       try {
//         const response = await fetch(movieDetailsUrl);
//         if (!response.ok) {
//           throw new Error("Failed to fetch movie details");
//         }
//         const data = await response.json();
//         setMovieDetails(data);
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//         setFetchError(true);
//       } finally {
//         setIsLoading(false); // Set loading state to false after fetch completes
//       }
//     };

//     fetchMovieDetails();
//   }, [id, movieDetailsUrl]);

//   if (fetchError) {
//     return <FailedFetch />;
//   }

//   // Render loader if data is still loading
//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <div>
//       {movieDetails ? (
//         <div className="movie-details-page">
//           {console.log("Imdb-id:", movieDetails.imdb_id)}
//           <MovieDetails
//             rating={movieDetails.vote_average}
//             title={movieDetails.title}
//             overview={movieDetails.overview}
//             backdrop={movieDetails.backdrop_path}
//             release_date={movieDetails.release_date}
//             tagline={movieDetails.tagline}
//             poster_path={movieDetails.poster_path}
//             genres={movieDetails.genres}
//             imdb={movieDetails.imdb_id}
//           />
//         </div>
//       ) : (
//         <NotFoundPage />
//       )}
//     </div>
//   );
// };
