// Import the Triangle component from the "react-loader-spinner" library.
import { Triangle } from "react-loader-spinner";
export const Loadingspinner = () => {
  return (
    <div className="loading-wrapper">
      <Triangle width={200} color="#fff" aria-label="Loading triangle" />
    </div>
  );
};
