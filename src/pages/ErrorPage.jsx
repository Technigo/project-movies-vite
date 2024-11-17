import styled from "styled-components";
import errorImage from "../assets/error-image.png";
import { BackLink } from "../components/BackLink";

const ErrorContainer = styled.div`
  height: 100vh;
  background-image: url(${errorImage});
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.8);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 1rem;
`;

const ErrorTitle = styled.h1`
  font-size: 2.5rem;
  padding: 5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

export const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ContentWrapper>
        <ErrorTitle>Oops! Page Not Found</ErrorTitle>
        <BackLink label="Back to Home" />
      </ContentWrapper>
    </ErrorContainer>
  );
};
