import { CTAButton } from "../CTAButton/CTAButton";
import { MovieInfo } from "../MovieInfo";
import { useEffect } from "react";
import "./MovieHero.css";

const imageUrl = `https://image.tmdb.org/t/p/`;
const imageBig = "w1280";
// const imageSmall = "w780";
const btnTarget = "movieDetail";
  

export const MovieHero = ({movie}) => {
  const backgroundImage = imageUrl + imageBig + movie.backdrop_path;

  let backgroundStyle = { backgroundImage: `url(${backgroundImage})`};

  return <section className="hero-background" style={backgroundStyle}>
    <MovieInfo title={movie.title} date={movie.release_date}/>
    <CTAButton btnTarget={btnTarget} movie={movie}/>
  </section>;
};


// export const MovieHero = ({ movie }) => {
//   const backgroundImage = imageUrl + imageSmall + movie.backdrop_path;

//   const backgroundStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//   };

//   return (
//     <section className="hero-background" style={backgroundStyle}>
//       <MovieInfo title={movie.title} date={movie.release_date} />
//       <CTAButton />
//     </section>
//   );
// };
