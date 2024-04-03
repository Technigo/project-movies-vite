// import { useState, useEffect } from "react";

// export const FetchMachine = ( endpoint ) => {
// const [loading, setLoading] = useState(true);
// const [data, setData] = useState();
// const [API_END, setAPI_END] = useState(endpoint);
// const API_KEY = "5ebb37047349cdb54acf91b06e7b7839";
// const API_URL = `https://api.themoviedb.org/3/movie/${API_END}?api_key=${API_KEY}&language=en-US&page=1`;

// useEffect(() => {
//   fetch(API_URL)
//     .then((result) => result.json())
//     .then((json) => {
//       setData(json);
//       setLoading(false);
//     })
//     .catch((error) => {
//       console.error(error);
//       setLoading(false);
//     });
// }, []);

// if (loading) {
//   return <p>Loading...</p>;
// }

//     return (
//       {data}
//   );
// };
