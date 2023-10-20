import { Link } from 'react-router-dom';  //wrapping the entire movie card in a Link component so we'll be able to navigate to the movie details page when the movie poster is clicked
import { useState } from "react";
import styles from "./MovieCard.module.css";


// function MovieCard({ movie }) {
//   const [onMouse, setOnMouse] = useState(false);
//   const { id, title, release_date, poster_path: poster, backdrop_path: posters } = movie;
//   console.log(movie);
//   return (
//     <Link to={`/movie/${id}?poster_path=${posters}&movie_id=${id}`} style={{ textDecoration: 'none' }}>

//     {/*<Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
//     // <Link to={`/movie/${id}?poster_path=${poster}`} style={{ textDecoration: 'none' }}>
//   {/* MovieCard component to include a link to the detail page with the poster_path as a URL parameter */}
//     <div
//       className={styles.card_wrapper}
//       onMouseEnter={() => setOnMouse(true)}
//       onMouseLeave={() => setOnMouse(false)}
//     >
//       <img
//         src={`https://image.tmdb.org/t/p/w780${poster}`}
//         style={{ filter: onMouse ? "brightness(20%)" : "" }}
//       />
//       <div className={styles.inner_card}>
//         <div className={styles.text_box} style={{ display: onMouse ? "block" : "none" }}>
//           <h3>{title}</h3>
//           <p>Released : {release_date}</p>
//         </div>
//       </div>
//     </div>

{/* import { Link } from "react-router-dom";
import { ReadMoreBtn } from "../ReadMoreBtn";

function MovieCard({ movie }) { 
      const [onMouse, setOnMouse] = useState(false);
      const { title, release_date, poster_path: poster, id } = movie;
      return (
      <Link to={`/movies/${id}`}>
        <div
            className={styles.card_wrapper}
            onMouseEnter={() => setOnMouse(true)}
            onMouseLeave={() => setOnMouse(false)}
            >
        <img
        src={`https://image.tmdb.org/t/p/w780${poster}`}
        style={{ filter: onMouse ? "brightness(60%)" : "" }}
        loading="lazy"
        />
        <div className={styles.inner_card}
        <div className={styles.text_box} style={{ display: onMouse ? "block" : "none" }}>
        <h3>{title}</h3>
        <p>Released : {release_date}</p>
        <div className={styles.button_box}>
        <ReadMoreBtn />
        </div>
      </div>
        </div>
      </div> */}

    // </Link>

    function MovieCard({ movie }) {
      const [onMouse, setOnMouse] = useState(false);
      const { id, title, release_date, poster_path: poster, backdrop_path: posters } = movie;
    
      return (
        <Link to={`/movie/${id}?backdrop_path=${posters}&movie_id=${id}`} style={{ textDecoration: 'none' }}>
          <div
            className={styles.card_wrapper}
            onMouseEnter={() => setOnMouse(true)}
            onMouseLeave={() => setOnMouse(false)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w780${poster}`}
              style={{ filter: onMouse ? "brightness(20%)" : "" }}
            />
            <div className={styles.inner_card}>
              <div className={styles.text_box} style={{ display: onMouse ? "block" : "none" }}>
                <h3>{title}</h3>
                <p>Released: {release_date}</p>
              </div>
            </div>
          </div>
        </Link>
      );
    }
    
export default MovieCard;
