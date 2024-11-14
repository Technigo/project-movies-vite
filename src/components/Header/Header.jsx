import styled from 'styled-components';
import { Navbar } from "./Navbar"
import { Title } from "../../ui/Typography"


const HeaderFlex = styled.section`
    display: flex; 
    flex-direction: column;
    justify-content: left; 
    align-items: left;  
    gap: 16px;   
    overflow-x: hidden;

`

const HeaderContent = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: left; 
    align-items: left;  
    width: 18.75rem;
`

export const Header = () => {
  return (
    <header>
      <Navbar />
      <HeaderFlex>
        {/* <HeaderImg src={witch} alt="Witch Image" className="witch" /> */}
        <HeaderContent>
          <Title>Welcome to MovieZone</Title>
        </HeaderContent>
      </HeaderFlex>
    </header>
  );
};
