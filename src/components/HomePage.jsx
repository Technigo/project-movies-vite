import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Movies Galore</h1>
      <Link to="/movies">Go to Movies</Link> 
    </div>
  );
};
