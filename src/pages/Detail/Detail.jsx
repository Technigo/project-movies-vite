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

// import React, { useEffect, useState } from "react";
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

//   const [selectedMovie, setSelectedMovie] = useState();
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
//     <React.Fragment>
//     <div className={styles.detail}>
//       {!isLoading ? (
//         selectedMovie ? (
//           <div>
//             <h1>{selectedMovie.title}</h1>

//             <img className="detail-poster"
//               src={`https://image.tmdb.org/t/p/w780${posterPath}`}
//               alt={selectedMovie.title}
//             />
//             <p>{selectedMovie.overview}</p>
//             <p>Release Date: {selectedMovie.release_date}</p>
//           </div>
//         ) : (
//           <p>No movie details available</p>
//         )
//       ) : (
//         <p>Loading</p>
//       )}
//     </div>
//     </React.Fragment>
//   );
// }

// export default Detail;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";
import { LoadingFullPage } from "../../components/LoaingFullPage";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ScrollToTop } from "../../components/ScrollToTop";
import useSWR from "swr";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_KEY, // eslint-disable-line
  },
};

const fetcher = async (path) => {
  console.log(path);
  const data = await fetch(`https://api.themoviedb.org/3/movie/${path}`, options).then((response) =>
    response.json()
  );

  return data;
};

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const posterPath = new URLSearchParams(location.search).get("poster_path");
  const selectedMovieId = new URLSearchParams(location.search).get("movie_id");

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [triggerMovie, setTriggerMovie] = useState({ trigger: false, id: null });
  const [startVideo, setStartVideo] = useState({ start: false, url: "" });

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${selectedMovieId}?language=en-US`,
          options
        );
        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          setSelectedMovie(data);
        } else if (response.status === 401) {
          setError("Unauthorized: Please check your API key and permissions.");
        } else {
          setError(`Error: ${response.status} - ${response.statusText}`);
        }
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching data.");
        setIsLoading(false);
      }
    }

    if (selectedMovieId) {
      fetchMovieDetails();
    }
  }, [selectedMovieId]);

  const { data, isImageLoading } = useSWR(
    triggerMovie.trigger ? `${triggerMovie.id}/videos?language=en-US` : null,
    fetcher
  );

  useEffect(() => {
    if (!isImageLoading) setTriggerMovie(false);
    if (data) {
      const youtube = data.results.map((obj) => Object.values(obj).includes("YouTube"));
      youtube &&
        setStartVideo({
          start: true,
          url: ` https://www.youtube.com/embed/${data.results[0].key}`,
        });
    }
  }, [isImageLoading, data]);

  return (
    <React.Fragment>
      <ScrollToTop />
      <Navbar />
      {!isLoading ? (
        !error ? (
          selectedMovie ? (
            <section className={styles.detail_wrapper}>
              <div className={styles.detail}>
                <div
                  onMouseEnter={() => setTriggerMovie({ trigger: true, id: selectedMovie.id })}
                  className={styles.detail_img}
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})`,
                    display: !startVideo.start ? "flex" : "none",
                  }}
                >
                  <div className={styles.deco_box}></div>
                  <div className={styles.deco_box}></div>
                </div>
                {startVideo.start && (
                  <div className={styles.video_box}>
                    <iframe
                      className={styles.video}
                      id="player"
                      src={`${startVideo.url}?autoplay=1&mute=1&loop=1`}
                    ></iframe>
                  </div>
                )}
              </div>
              <div className={styles.main_wrapper}>
                <a onClick={() => navigate(-1)}>
                  <p className={styles.button}> &#x3c; BACK</p>
                </a>

                <div className={styles.top_detail_box}>
                  <h1>{selectedMovie.title}</h1>
                  <p>{selectedMovie.tagline}</p>
                </div>
                <div className={styles.details_box}>
                  <div className={styles.image_box}>
                    <img
                      className={styles.poster_img}
                      src={`https://image.tmdb.org/t/p/w780${posterPath}`}
                      alt={selectedMovie.title}
                    />
                    <p>Release Date: {selectedMovie.release_date}</p>
                    <div className={styles.genre_box}>
                      {selectedMovie.genres.length > 0 &&
                        selectedMovie.genres.map((genre) => (
                          <span key={genre.id}>{genre.name}</span>
                        ))}
                    </div>
                  </div>
                  <div className={styles.text_box}>
                    <p>{selectedMovie.overview}</p>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <p>No movie details available</p>
          )
        ) : (
          <p>Error: {error}</p>
        )
      ) : (
        <LoadingFullPage />
      )}

      <Footer />
    </React.Fragment>
  );
}

export default Detail;
