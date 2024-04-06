// import { useEffect, useState } from "react";
// import { Background } from "../components/Background";
// import { Poster } from "../components/Poster";
// // import { Description } from "../components/Description";

// const apiEnv = import.meta.env.VITE_OPENDB_KEY;
// const API_LANG = "en-US";

// export const Hero = () => {
//   const [upcoming, setUpcoming] = useState({}); //initialise with an empty object

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiEnv}&language=${API_LANG}page=1`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setUpcoming(data.results[0]); //store only the first movie in upcoming state
//         console.log(data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <section className="heroContainer">
//       <h1>Soon in your favourite cinema</h1>
//       <Background
//         backdrop_path={upcoming.backdrop_path}
//         title={upcoming.title}
//       />

//       <div className="heroSummary">
//         <Poster poster_path={upcoming.poster_path} />
//         <h2>{upcoming.title}</h2>
//         <p>{upcoming.overview}</p>
//       </div>
//     </section>
//   );
// };
