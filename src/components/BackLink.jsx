import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import backArrow from "../assets/back-arrow.svg";

const StyledBackLink = styled(Link)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 2;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    margin-right: 0.5rem;
    width: 24px;
    height: 24px;
  }
`;

export const BackLink = ({ label }) => (
  <StyledBackLink to="/">
    <img src={backArrow} alt="Back arrow" />
    {label}
  </StyledBackLink>
);

// Prop validation
BackLink.propTypes = {
  label: PropTypes.string.isRequired,
};
