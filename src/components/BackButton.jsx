import { Link } from "react-router-dom";
import backIcon from "../assets/back-icon.svg"; // Path to your SVG file
import styled from "styled-components";

export const BackButtonWithText = ({ text }) => {
  return (
    <StyledLink to="/">
      <BackButton src={backIcon} alt="Back to movies list" />
      <BackText>{text}</BackText>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  /* color: inherit; */
  color: white;
  padding: 20px;
`;

const BackButton = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

const BackText = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;