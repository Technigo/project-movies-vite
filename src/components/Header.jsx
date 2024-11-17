import styled from "styled-components";
import PropTypes from "prop-types";
import bgImage from "../assets/theater.png";

// Styled components for the header
const HeaderContainer = styled.header`
  position: relative;
  height: 30vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;

  @media (max-width: 360px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Header = ({ title, subtitle }) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </HeaderContent>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  bgImage: PropTypes.string.isRequired,
};
