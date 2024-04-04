import { Header } from "../components/Header";
import "./NotFound.css"

export const NotFound = () => {
  return (
    <div>
      <Header />
      <div className=" not-found">
        <p>Woops lost in the movie universe!</p>
        <p>We didn&apos;t find anything...</p>
        <p>Please select one of the above menu items to get back.</p>
      </div>
    </div>
  );
};
