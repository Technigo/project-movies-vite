// Home.jsx - This component serves as the main landing page of the application.

import styled from "styled-components";
import { NowPlaying } from "./NowPlaying";
import { Title, PageTitle } from "../ui/Typography";

const CenteredWrapper = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;     
    text-align: center;      
  `;

const StyledTitle = styled(Title)`
  padding: 30px 0; 
  
  
  /* Media query for mobile */
  @media (max-width: 480px) {
    font-size: 1.8rem; 
   }
`

const NowPlayingTitle = styled(PageTitle)`
padding-left: 20px; 

@media (max-width: 480px) {
    font-size: 1.4rem; 
   }
`;

export const Home = () => {
  return (
    <div>
      <CenteredWrapper>
        <StyledTitle>Welcome to MovieZone</StyledTitle>
      </CenteredWrapper>
      <NowPlayingTitle>Now Playing</NowPlayingTitle>
      <NowPlaying />
    </div>
  );
};


