// Home.jsx - This component serves as the main landing page of the application.

import { NowPlaying } from "./NowPlaying";



export const Home = () => {
  return (
    <div>
      <NowPlaying /> {/* This displays the list of movies currently playing */}
    </div>
  );
};



