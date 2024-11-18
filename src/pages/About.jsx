/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { PageTitle, Text } from "../ui/Typography";

// Styling for the page title
const StyledPageTitle = styled(PageTitle)`
  padding: 40px 0px 10px;
`;

const AboutSection = styled.section`
  max-width: 600px;
  padding: 0 20px;
`;

// Add margin-bottom for Text and BoldText to ensure gap between paragraphs
const TextWithSpacing = styled(Text)`
  margin-bottom: 20px; /* Adjust as needed for spacing */
`;

const BoldText = styled(Text)`
  font-weight: 500;
  color: red;
  margin-bottom: 20px; /* Add margin to this as well */
`;

export const About = () => {
  return (
    <div>
      <AboutSection>
        <StyledPageTitle>About MovieZone</StyledPageTitle>
        <TextWithSpacing>
          Welcome to MovieZone, your ultimate destination for everything movies! Whether you're a casual viewer or a true cinephile, MovieZone offers a curated collection of the latest and greatest films. We provide real-time information on current blockbusters, upcoming releases, and classic favorites — ensuring you're always in the know about the movies that matter.
        </TextWithSpacing>
        <TextWithSpacing>
          Explore our Now Playing section to find out what’s showing in theaters in Sweden today, or dive into the Upcoming Movies list to plan your next cinema trip. With MovieZone, you can discover new movies, track release dates, and keep up with the films that are making waves across the globe.
        </TextWithSpacing>
        <TextWithSpacing>
          Our goal is to create a space where movie lovers can come together, share their passion, and get inspired. We hope to bring you closer to the films you love, and help you discover new favorites along the way. Stay tuned for exciting features, movie reviews, and more — only here at MovieZone!
        </TextWithSpacing>
        <BoldText>
          This page was created as part of a student project for the Technigo Bootcamp, November 2024, created by Anna Hansen.
        </BoldText>
      </AboutSection>
    </div>
  );
};

