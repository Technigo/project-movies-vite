// Home.jsx - This component serves as the main landing page of the application.

import { NowPlaying } from "./NowPlaying";


export const Home = () => {
  return (
    <div>
      <h1>Now Playing</h1>
      <NowPlaying /> {/* This displays the list of movies currently playing */}
    </div>
  );
};



