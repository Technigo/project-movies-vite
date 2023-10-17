// import { useEffect, useState } from "react";
// import styles from "./Detail.module.css";

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzEwNDBiNT03yXIf4z6QEk8z4",
//   },
// };

// function Detail() {
//   const [movie, setMovie] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function fetchMovieDetails() {
//       try {
//         const response = await fetch(
//           "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
//           options
//         );
//         const data = await response.json();
//         setMovie(data.results[0]); //
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchMovieDetails();
//   }, []);

//   return (
//     <div className={styles.detail}>
//       {!isLoading ? (
//         movie ? (
//           <div>
//             <h1>{movie.title}</h1>
//             <img
//               src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
//               alt={movie.title}
//             />
//             <p>{movie.overview}</p>
//             {/* Render other movie details here */}
//           </div>
//         ) : (
//           <p>No movie details available</p>
//         )
//       ) : (
//         <p>Loading</p>
//       )}
//     </div>
//   );
// }

// export default Detail;


// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
// import styles from "./Detail.module.css";

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzEwNDBiNT03yXIf4z6QEk8z4",
//   },
// };

// function Detail() {
//   const location = useLocation();
//   const posterPath = new URLSearchParams(location.search).get("poster_path");

//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function fetchMovieDetails() {
//       try {
//         const response = await fetch(
//           "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
//           options
//         );
//         const data = await response.json();
//         setMovies(data.results);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchMovieDetails();
//   }, []);

//   return (
//     <div className={styles.detail}>
//       {!isLoading ? (
//         movies.length > 0 ? (
//           <div>
//             <h1>{movies[0].title}</h1>
//             <img
//               src={`https://image.tmdb.org/t/p/w780${posterPath}`}
//               alt={movies[0].title}
//             />
//             <p>{movies[0].overview}</p>
//             {/* Render other movie details here */}
//           </div>
//         ) : (
//           <p>No movie details available</p>
//         )
//       ) : (
//         <p>Loading</p>
//       )}
//     </div>
//   );
// }

// export default Detail;

// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import styles from "./Detail.module.css";

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzEwNDBiNT03yXIf4z6QEk8z4",
//   },
// };

// function Detail() {
//   const location = useLocation();
//   const posterPath = new URLSearchParams(location.search).get("poster_path");
//   const selectedMovieId = new URLSearchParams(location.search).get("movie_id");

//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function fetchMovieDetails() {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/movie/${selectedMovieId}?language=en-US`,
//           options
//         );
//         const data = await response.json();
//         setSelectedMovie(data);
//         setIsLoading(false);
//       } catch (err) {
//         console.error(err);
//         setIsLoading(false);
//       }
//     }

//     if (selectedMovieId) {
//       fetchMovieDetails();
//     }
//   }, [selectedMovieId]);

//   return (
//     <div className={styles.detail}>
//       {!isLoading ? (
//         selectedMovie ? (
//           <div>
//             <h1>{selectedMovie.title}</h1>
//             <img
//               src={`https://image.tmdb.org/t/p/w780${posterPath}`}
//               alt={selectedMovie.title}
//             />
//             <p>{selectedMovie.overview}</p>
//             {/* Render other movie details here */}
//           </div>
//         ) : (
//           <p>No movie details available</p>
//         )
//       ) : (
//         <p>Loading</p>
//       )}
//     </div>
//   );
// }

// export default Detail;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Detail.module.css";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzEwNDBiNT03yXIf4z6QEk8z4",
  },
};

function Detail() {
  const location = useLocation();
  const posterPath = new URLSearchParams(location.search).get("poster_path");
  const selectedMovieId = new URLSearchParams(location.search).get("movie_id");

  const [selectedMovie, setSelectedMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${selectedMovieId}?language=en-US`,
          options
        );
        const data = await response.json();
        setSelectedMovie(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }

    if (selectedMovieId) {
      fetchMovieDetails();
    }
  }, [selectedMovieId]);

  return (
    <React.Fragment>
    <div className={styles.detail}>
      {!isLoading ? (
        selectedMovie ? (
          <div>
            <h1>{selectedMovie.title}</h1>
            
            <img className="detail-poster"
              src={`https://image.tmdb.org/t/p/w780${posterPath}`}
              alt={selectedMovie.title}
            />
            <p>{selectedMovie.overview}</p>
            <p>Release Date: {selectedMovie.release_date}</p>
          </div>
        ) : (
          <p>No movie details available</p>
        )
      ) : (
        <p>Loading</p>
      )}
    </div>
    </React.Fragment>
  );
}

export default Detail;






